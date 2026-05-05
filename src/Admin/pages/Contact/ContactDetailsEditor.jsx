import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSiteData } from '../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, InfoCircle, GeoAlt, Envelope } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';

const ContactDetailsEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId') || 'contact_details_1';

    // Local state for forms with extra safety check
    const [contactData, setContactData] = useState(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            return siteData.sectionData[instanceId].content;
        }
        return siteData?.contact?.page || {};
    });
    
    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

    useEffect(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setContactData(siteData.sectionData[instanceId].content);
        } else if (!instanceId && siteData?.contact?.page) {
            setContactData(siteData.contact.page);
        }
    }, [siteData, instanceId]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactData(prev => ({ ...prev, [name]: value }));
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            if (instanceId) {
                updateSectionData(instanceId, contactData);
                const updatedData = {
                    ...siteData,
                    sectionData: {
                        ...siteData.sectionData,
                        [instanceId]: {
                            ...siteData.sectionData[instanceId],
                            content: contactData
                        }
                    }
                };
                await saveToCloud(updatedData);
            } else {
                const updatedData = {
                    ...siteData,
                    contact: {
                        ...siteData.contact,
                        page: contactData
                    }
                };
                await saveToCloud(updatedData);
            }
            triggerToast('Contact details updated successfully!');
        } catch (error) {
            console.error(error);
            triggerToast('Failed to update details.', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const resetChanges = () => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setContactData(siteData.sectionData[instanceId].content);
        } else {
            setContactData(siteData?.contact?.page || {});
        }
        triggerToast('Changes reset.', 'info');
    };

    const sectionStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '15px',
        padding: '25px',
        marginBottom: '30px'
    };

    const inputStyle = {
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#fff',
        borderRadius: '10px'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <AnimatePresence>
                {showToast.show && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, x: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8, y: -20 }}
                        style={{
                            position: 'fixed', top: '20px', right: '20px', zIndex: 9999,
                            padding: '16px 24px', borderRadius: '16px',
                            background: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(12px)',
                            border: `1px solid ${showToast.type === 'error' ? '#ef4444' : '#6669F1'}`,
                            boxShadow: `0 10px 40px -10px rgba(0,0,0,0.5)`,
                            display: 'flex', alignItems: 'center', gap: '12px', color: '#fff', fontWeight: '600'
                        }}
                    >
                        <div style={{
                            width: '24px', height: '24px', borderRadius: '50%',
                            background: showToast.type === 'error' ? '#ef4444' : '#6669F1',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            {showToast.type === 'error' ? '!' : '✓'}
                        </div>
                        {showToast.message}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="text-white fw-bold mb-1">Contact Page Info</h2>
                    <p className="text-white-50">Manage branch addresses, labels, and contact descriptions.</p>
                </div>
                <div className="d-flex gap-3">
                    <Button variant="outline-light" onClick={resetChanges} className="d-flex align-items-center gap-2">
                        <ArrowClockwise size={18} /> Reset
                    </Button>
                    <Button
                        disabled={isSaving}
                        onClick={saveChanges}
                        className="d-flex align-items-center gap-2"
                        style={{ background: '#6669F1', border: 'none' }}
                    >
                        <Save size={18} /> {isSaving ? 'Updating...' : 'Publish'}
                    </Button>
                </div>
            </div>

            <div style={sectionStyle}>
                <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                    <InfoCircle className="text-primary" /> Header Content
                </h4>
                <Form.Group className="mb-3">
                    <Form.Label className="text-white-50 small">PAGE MAIN TITLE</Form.Label>
                    <Form.Control
                        name="title"
                        value={contactData.title || ''}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="text-white-50 small">DESCRIPTION / SUBTITLE</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="subtitle"
                        value={contactData.subtitle || ''}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                </Form.Group>
            </div>

            <div style={sectionStyle}>
                <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                    <GeoAlt className="text-primary" /> Region 1 Details
                </h4>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-white-50 small">LABEL (e.g. Pakistan)</Form.Label>
                            <Form.Control
                                name="pk_label"
                                value={contactData.pk_label || ''}
                                onChange={handleChange}
                                style={inputStyle}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-white-50 small">ADDRESS</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="pk_address"
                                value={contactData.pk_address || ''}
                                onChange={handleChange}
                                style={inputStyle}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3 pt-md-4">
                            <Form.Label className="text-white-50 small">PHONE NUMBER</Form.Label>
                            <Form.Control
                                name="pk_phone"
                                value={contactData.pk_phone || ''}
                                onChange={handleChange}
                                style={inputStyle}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </div>

            <div style={sectionStyle}>
                <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                    <GeoAlt className="text-primary" /> Region 2 Details
                </h4>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-white-50 small">LABEL (e.g. USA)</Form.Label>
                            <Form.Control
                                name="usa_label"
                                value={contactData.usa_label || ''}
                                onChange={handleChange}
                                style={inputStyle}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-white-50 small">ADDRESS</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="usa_address"
                                value={contactData.usa_address || ''}
                                onChange={handleChange}
                                style={inputStyle}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3 pt-md-4">
                            <Form.Label className="text-white-50 small">PHONE NUMBER</Form.Label>
                            <Form.Control
                                name="usa_phone"
                                value={contactData.usa_phone || ''}
                                onChange={handleChange}
                                style={inputStyle}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </div>

            <div style={sectionStyle}>
                <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                    <Envelope className="text-primary" /> Contact Page Emails
                </h4>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-white-50 small">PRIMARY EMAIL</Form.Label>
                            <Form.Control
                                name="email1"
                                value={contactData.email1 || ''}
                                onChange={handleChange}
                                style={inputStyle}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-white-50 small">SUPPORT EMAIL</Form.Label>
                            <Form.Control
                                name="email2"
                                value={contactData.email2 || ''}
                                onChange={handleChange}
                                style={inputStyle}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </div>

            <style>{`
                textarea:focus, input:focus { 
                    background: rgba(255,255,255,0.08) !important;
                    border-color: #6669F1 !important;
                    box-shadow: none !important;
                    color: #fff !important;
                }
            `}</style>
        </motion.div>
    );
};

export default ContactDetailsEditor;
