import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useSiteData } from '../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, Image as ImageIcon, PlusCircle, Trash } from 'react-bootstrap-icons';
import CloudinaryUploadWidget from '../../components/CloudinaryUploadWidget';
import { useLocation } from 'react-router-dom';

const HomeTrustBarEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId') || 'home_trustbar_1';

    const [trustData, setTrustData] = useState(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            return siteData.sectionData[instanceId].content;
        }
        return siteData?.home?.trustBar || { tagline: "", partners: [] };
    });

    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

    useEffect(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setTrustData(siteData.sectionData[instanceId].content);
        } else if (!instanceId && siteData?.home?.trustBar) {
            setTrustData(siteData.home.trustBar);
        }
    }, [siteData, instanceId]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const handleTrustMetaChange = (e) => {
        setTrustData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const addPartner = () => {
        setTrustData(prev => ({
            ...prev,
            partners: [...(prev.partners || []), { name: "", url: "" }]
        }));
    };

    const removePartner = (index) => {
        const newPartners = trustData.partners.filter((_, i) => i !== index);
        setTrustData(prev => ({ ...prev, partners: newPartners }));
    };

    const updatePartner = (index, field, value) => {
        const newPartners = [...trustData.partners];
        newPartners[index] = { ...newPartners[index], [field]: value };
        setTrustData(prev => ({ ...prev, partners: newPartners }));
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            if (instanceId) {
                updateSectionData(instanceId, trustData);
                
                const updatedData = {
                    ...siteData,
                    sectionData: {
                        ...siteData.sectionData,
                        [instanceId]: {
                            ...siteData.sectionData[instanceId],
                            content: trustData
                        }
                    }
                };
                await saveToCloud(updatedData);
            } else {
                const updatedData = {
                    ...siteData,
                    home: {
                        ...siteData.home,
                        trustBar: trustData
                    }
                };
                await saveToCloud(updatedData);
            }

            triggerToast('TrustBar Section updated successfully!');
        } catch (error) {
            console.error(error);
            triggerToast('Failed to save TrustBar.', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const resetChanges = () => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setTrustData(siteData.sectionData[instanceId].content);
        } else {
            setTrustData(siteData?.home?.trustBar || { tagline: "", partners: [] });
        }
        triggerToast('Changes reset.', 'info');
    };

    const sectionStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '15px',
        padding: '25px',
        maxWidth: '800px',
        margin: '0 auto'
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

            <div className="d-flex justify-content-between align-items-center mb-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div>
                    <h2 className="text-white fw-bold mb-1">Partner TrustBar</h2>
                    <p className="text-white-50">
                        {instanceId ? `Editing instance: ${instanceId}` : "Manage the scrolling carousel of partner logos."}
                    </p>
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
                        <Save size={18} /> {isSaving ? 'Saving...' : 'Publish'}
                    </Button>
                </div>
            </div>

            <div style={sectionStyle}>
                <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                    <ImageIcon className="text-primary" /> Section Settings
                </h4>
                <Form.Group className="mb-4">
                    <Form.Label className="text-white-50 small">SECTION TAGLINE (e.g. "Global Partners & Certifications")</Form.Label>
                    <Form.Control
                        name="tagline"
                        value={trustData.tagline || ''}
                        onChange={handleTrustMetaChange}
                        style={inputStyle}
                        placeholder="e.g. Trusted by the World's Leading Companies"
                    />
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <Form.Label className="text-white-50 small mb-0">PARTNER LOGOS</Form.Label>
                    <Button
                        variant="link"
                        size="sm"
                        className="text-primary p-0 text-decoration-none"
                        onClick={addPartner}
                    >
                        <PlusCircle className="me-1" /> Add New Partner
                    </Button>
                </div>

                {(trustData.partners || []).map((partner, index) => (
                    <Card key={index} className="mb-3 border-0" style={{ background: 'rgba(0,0,0,0.2)' }}>
                        <Card.Body className="position-relative p-3">
                            <Button
                                variant="link"
                                className="position-absolute text-danger p-0"
                                style={{ top: '10px', right: '10px', zIndex: 10 }}
                                onClick={() => removePartner(index)}
                                title="Remove partner"
                            >
                                <Trash size={16} />
                            </Button>
                            <Row className="align-items-center">
                                <Col md={5}>
                                    <Form.Group>
                                        <Form.Label className="text-white-50 extra-small mb-1 font-weight-bold">COMPANY NAME</Form.Label>
                                        <Form.Control
                                            size="sm"
                                            value={partner.name}
                                            onChange={(e) => updatePartner(index, 'name', e.target.value)}
                                            style={inputStyle}
                                            placeholder="e.g. AWS"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={7}>
                                    <div className="d-flex align-items-center gap-3 mt-md-0 mt-3 pt-md-3">
                                        {partner.url ? (
                                            <img src={partner.url} alt={partner.name} className="img-thumbnail" style={{ height: '40px', background: '#fff', objectFit: 'contain' }} />
                                        ) : (
                                            <div className="text-white-50 extra-small fst-italic">No logo uploaded</div>
                                        )}
                                        <CloudinaryUploadWidget
                                            label={partner.url ? "Replace Logo" : "Upload Logo"}
                                            onUploadSuccess={(url) => updatePartner(index, 'url', url)}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                ))}
            </div>

            <style>{`
                .extra-small { font-size: 0.65rem; }
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

export default HomeTrustBarEditor;
