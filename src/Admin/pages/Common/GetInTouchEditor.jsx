import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSiteData } from '../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, InfoCircle } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';

const GetInTouchEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId');

    // Local state for forms
    const [bannerData, setBannerData] = useState(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            return siteData.sectionData[instanceId].content;
        }
        return siteData?.common?.getInTouch || {};
    });

    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

    // Sync if siteData changes
    useEffect(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setBannerData(siteData.sectionData[instanceId].content);
        } else if (!instanceId && siteData?.common?.getInTouch) {
            setBannerData(siteData.common.getInTouch);
        }
    }, [siteData, instanceId]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const handleBannerChange = (e) => {
        const { name, value } = e.target;
        setBannerData(prev => ({ ...prev, [name]: value }));
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            if (instanceId) {
                updateSectionData(instanceId, bannerData);
                
                const updatedData = {
                    ...siteData,
                    sectionData: {
                        ...siteData.sectionData,
                        [instanceId]: {
                            ...siteData.sectionData[instanceId],
                            content: bannerData
                        }
                    }
                };
                await saveToCloud(updatedData);
            } else {
                const updatedData = {
                    ...siteData,
                    common: {
                        ...siteData.common,
                        getInTouch: bannerData
                    }
                };
                await saveToCloud(updatedData);
            }

            triggerToast('Contact Section updated successfully!');
        } catch (error) {
            console.error(error);
            triggerToast('Failed to update section.', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const resetChanges = () => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setBannerData(siteData.sectionData[instanceId].content);
        } else {
            setBannerData(siteData?.common?.getInTouch || {});
        }
        triggerToast('Changes reset.', 'info');
    };

    const sectionStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '15px',
        padding: '25px',
        marginBottom: '30px',
        maxWidth: '900px',
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
            className="get-in-touch-manager"
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

            <div className="d-flex justify-content-between align-items-center mb-4" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div>
                    <h2 className="text-white fw-bold mb-1">Contact Editor</h2>
                    <p className="text-white-50">
                        {instanceId ? `Editing instance: ${instanceId}` : "Manage the shared contact details."}
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
                        <Save size={18} /> {isSaving ? 'Updating...' : 'Publish Changes'}
                    </Button>
                </div>
            </div>

            <Row className="justify-content-center">
                <Col lg={12}>
                    <div style={sectionStyle}>
                        <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                            <InfoCircle className="text-primary" /> Detail Information
                        </h4>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-white-50 small">SUB-TITLE</Form.Label>
                                    <Form.Control
                                        name="subTitle"
                                        value={bannerData.subTitle || ''}
                                        onChange={handleBannerChange}
                                        style={inputStyle}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-white-50 small">TITLE</Form.Label>
                                    <Form.Control
                                        name="title"
                                        value={bannerData.title || ''}
                                        onChange={handleBannerChange}
                                        style={inputStyle}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-white-50 small">DESCRIPTION</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        name="description"
                                        value={bannerData.description || ''}
                                        onChange={handleBannerChange}
                                        style={inputStyle}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-white-50 small">PHONE 1</Form.Label>
                                    <Form.Control
                                        name="phone1"
                                        value={bannerData.phone1 || ''}
                                        onChange={handleBannerChange}
                                        style={inputStyle}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-white-50 small">PHONE 2</Form.Label>
                                    <Form.Control
                                        name="phone2"
                                        value={bannerData.phone2 || ''}
                                        onChange={handleBannerChange}
                                        style={inputStyle}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-white-50 small">EMAIL 1</Form.Label>
                                    <Form.Control
                                        name="email1"
                                        value={bannerData.email1 || ''}
                                        onChange={handleBannerChange}
                                        style={inputStyle}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-white-50 small">EMAIL 2</Form.Label>
                                    <Form.Control
                                        name="email2"
                                        value={bannerData.email2 || ''}
                                        onChange={handleBannerChange}
                                        style={inputStyle}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>

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

export default GetInTouchEditor;
