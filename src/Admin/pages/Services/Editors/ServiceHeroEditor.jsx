import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSiteData } from '../../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, Stars } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';

const ServiceHeroEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId');

    const [content, setContent] = useState(() => {
        return siteData?.sectionData?.[instanceId]?.content || { 
            tag: '', 
            title: '', 
            description: '', 
            buttonText: '' 
        };
    });

    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

    useEffect(() => {
        if (siteData?.sectionData?.[instanceId]) {
            setContent(siteData.sectionData[instanceId].content);
        }
    }, [siteData, instanceId]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const handleChange = (field, value) => {
        setContent(prev => ({ ...prev, [field]: value }));
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            updateSectionData(instanceId, content);

            const updatedData = {
                ...siteData,
                sectionData: {
                    ...siteData.sectionData,
                    [instanceId]: {
                        ...siteData.sectionData[instanceId],
                        content: content
                    }
                }
            };

            await saveToCloud(updatedData);
            triggerToast('Hero Section updated successfully!');
        } catch (error) {
            console.error(error);
            triggerToast('Failed to save changes.', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const sectionStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        padding: '30px',
        marginBottom: '30px'
    };

    const inputStyle = {
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#fff',
        borderRadius: '12px',
        padding: '12px'
    };

    const labelStyle = {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '0.85rem',
        fontWeight: '600',
        marginBottom: '8px',
        display: 'block',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    };

    if (!instanceId) return <div className="text-white p-5 text-center">No Instance ID provided</div>;

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <AnimatePresence>
                {showToast.show && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, x: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8, y: -20 }}
                        style={{
                            position: 'fixed', top: '20px', right: '20px', zIndex: 9999,
                            padding: '16px 24px', borderRadius: '16px',
                            background: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(12px)',
                            border: `1px solid ${showToast.type === 'error' ? '#ef4444' : '#6669F1'}`,
                            boxShadow: `0 10px 40px -10px rgba(0,0,0,0.5)`,
                            display: 'flex', alignItems: 'center', gap: '12px', color: '#fff', fontWeight: '600'
                        }}
                    >
                        {showToast.message}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="text-white fw-bold mb-1">Service Hero Editor</h2>
                    <p className="text-white-50">Instance: <code className="text-primary">{instanceId}</code></p>
                </div>
                <div className="d-flex gap-3">
                    <Button variant="outline-light" onClick={() => window.location.reload()} className="d-flex align-items-center gap-2 rounded-pill">
                        <ArrowClockwise size={18} /> Reset
                    </Button>
                    <Button
                        disabled={isSaving}
                        onClick={saveChanges}
                        className="d-flex align-items-center gap-2 rounded-pill px-4"
                        style={{ background: '#6669F1', border: 'none' }}
                    >
                        <Save size={18} /> {isSaving ? 'Saving...' : 'Save Changes'}
                    </Button>
                </div>
            </div>

            <div style={sectionStyle}>
                <Row className="g-4">
                    <Col md={12}>
                        <Form.Label style={labelStyle}><Stars className="me-2 text-warning" /> Top Tag</Form.Label>
                        <Form.Control
                            style={inputStyle}
                            value={content.tag || ""}
                            onChange={(e) => handleChange('tag', e.target.value)}
                            placeholder="e.g. Expert IT Management"
                        />
                    </Col>
                    <Col md={12}>
                        <Form.Label style={labelStyle}>Main Title (HTML Allowed)</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={2}
                            style={{ ...inputStyle, fontSize: '1.5rem', fontWeight: '800' }}
                            value={content.title || ""}
                            onChange={(e) => handleChange('title', e.target.value)}
                            placeholder="Use <span> for blue text"
                        />
                    </Col>
                    <Col md={12}>
                        <Form.Label style={labelStyle}>Description Paragraph</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            style={inputStyle}
                            value={content.description || ""}
                            onChange={(e) => handleChange('description', e.target.value)}
                        />
                    </Col>
                    <Col md={6}>
                        <Form.Label style={labelStyle}>Button Text</Form.Label>
                        <Form.Control
                            style={inputStyle}
                            value={content.buttonText || ""}
                            onChange={(e) => handleChange('buttonText', e.target.value)}
                        />
                    </Col>
                </Row>
            </div>

            <style>{`
                input:focus, textarea:focus {
                    background: rgba(255, 255, 255, 0.08) !important;
                    border-color: #6669F1 !important;
                    box-shadow: 0 0 0 4px rgba(102, 105, 241, 0.1) !important;
                    color: #fff !important;
                }
            `}</style>
        </motion.div>
    );
};

export default ServiceHeroEditor;
