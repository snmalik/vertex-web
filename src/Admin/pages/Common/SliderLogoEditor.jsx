import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useSiteData } from '../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, PlusCircle, Trash, Image as ImageIcon, Briefcase } from 'react-bootstrap-icons';
import CloudinaryUploadWidget from '../../components/CloudinaryUploadWidget';
import { useLocation } from 'react-router-dom';

const SliderLogoEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId') || 'common_slider_logos_1';

    // Default state: empty array if undefined
    const [sliderData, setSliderData] = useState(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            return siteData.sectionData[instanceId].content?.logos || [];
        }
        return siteData?.common?.sliderLogos || [];
    });

    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

    useEffect(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setSliderData(siteData.sectionData[instanceId].content?.logos || []);
        } else if (!instanceId && siteData?.common?.sliderLogos) {
            setSliderData(siteData.common.sliderLogos);
        }
    }, [siteData, instanceId]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const addLogo = () => {
        const nextId = sliderData.length > 0 
            ? Math.max(...sliderData.map(l => l.id || 0)) + 1 
            : 1;
            
        setSliderData(prev => [
            ...prev,
            { id: nextId, name: "Partner Logo", url: "" }
        ]);
    };

    const removeLogo = (index) => {
        const newData = [...sliderData];
        newData.splice(index, 1);
        setSliderData(newData);
    };

    const updateLogo = (index, field, value) => {
        const newData = [...sliderData];
        newData[index] = { ...newData[index], [field]: value };
        setSliderData(newData);
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            if (instanceId) {
                const sectionContent = { logos: sliderData };
                updateSectionData(instanceId, sectionContent);
                
                const updatedData = {
                    ...siteData,
                    sectionData: {
                        ...siteData.sectionData,
                        [instanceId]: {
                            ...siteData.sectionData[instanceId],
                            content: sectionContent
                        }
                    }
                };
                await saveToCloud(updatedData);
            } else {
                const updatedData = {
                    ...siteData,
                    common: {
                        ...siteData.common,
                        sliderLogos: sliderData
                    }
                };
                await saveToCloud(updatedData);
            }

            triggerToast('Partner Logos updated successfully!');
        } catch (error) {
            console.error(error);
            triggerToast('Failed to save Partner Logos.', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const resetChanges = () => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setSliderData(siteData.sectionData[instanceId].content?.logos || []);
        } else {
            setSliderData(siteData?.common?.sliderLogos || []);
        }
        triggerToast('Changes reset.', 'info');
    };

    const sectionStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '15px',
        padding: '25px',
        margin: '0 auto',
        maxWidth: '1000px'
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

            <div className="d-flex justify-content-between align-items-center mb-4" style={{maxWidth: '1000px', margin: '0 auto'}}>
                <div>
                    <h2 className="text-white fw-bold mb-1">Partner Logos</h2>
                    <p className="text-white-50">
                        {instanceId ? `Editing instance: ${instanceId}` : "Manage the partner logo slider."}
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
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="text-white mb-0 d-flex align-items-center gap-2">
                        <Briefcase className="text-primary" /> Active Partner Logos
                    </h4>
                    <Button
                        variant="link"
                        size="sm"
                        className="text-primary p-0 text-decoration-none"
                        onClick={addLogo}
                    >
                        <PlusCircle className="me-1" /> Add New Logo
                    </Button>
                </div>

                {sliderData.length === 0 ? (
                    <div className="text-center p-5 rounded" style={{background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.1)'}}>
                        <ImageIcon size={40} className="text-white-50 mb-3" />
                        <h6 className="text-white">No logos uploaded yet</h6>
                        <p className="text-white-50 small mb-4">Add your custom logos below.</p>
                        <Button variant="outline-primary" onClick={addLogo}>Add First Logo</Button>
                    </div>
                ) : (
                    <Row className="g-4">
                        {sliderData.map((logo, index) => (
                            <Col md={6} lg={4} key={index}>
                                <Card className="border-0 h-100" style={{ background: 'rgba(0,0,0,0.2)' }}>
                                    <Card.Body className="d-flex flex-column">
                                        <div className="d-flex justify-content-between mb-3 align-items-center">
                                            <span className="badge" style={{background: 'rgba(102, 105, 241, 0.2)', color: '#6669F1'}}>Logo #{index + 1}</span>
                                            <Button variant="link" className="text-danger p-0 d-flex align-items-center" onClick={() => removeLogo(index)}>
                                                <Trash size={16} />
                                            </Button>
                                        </div>

                                        <div className="mb-3 flex-grow-1 text-center bg-dark rounded d-flex flex-column justify-content-center" style={{minHeight: '120px', border: '1px solid rgba(255,255,255,0.05)'}}>
                                            {logo.url ? (
                                                <img 
                                                    src={logo.url} 
                                                    alt={logo.name} 
                                                    style={{ maxWidth: '80%', maxHeight: '80px', objectFit: 'contain' }} 
                                                    className="mx-auto"
                                                />
                                            ) : (
                                                <div className="text-white-50">
                                                    <ImageIcon size={30} className="mb-2 d-block mx-auto" />
                                                    <small>No Image Uploaded</small>
                                                </div>
                                            )}
                                        </div>

                                        <div className="mb-3 text-center">
                                            <CloudinaryUploadWidget 
                                                label={logo.url ? "Change Logo" : "Upload Logo"}
                                                onUploadSuccess={(url) => updateLogo(index, 'url', url)}
                                            />
                                        </div>

                                        <Form.Group>
                                            <Form.Label className="text-white-50 extra-small fw-bold">PARTNER / COMPANY NAME</Form.Label>
                                            <Form.Control
                                                size="sm"
                                                value={logo.name || ""}
                                                onChange={(e) => updateLogo(index, 'name', e.target.value)}
                                                style={inputStyle}
                                                placeholder="e.g. AWS, Microsoft"
                                            />
                                            <Form.Text className="text-white-50" style={{fontSize: '0.65rem'}}>Used for SEO.</Form.Text>
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </div>

            <style>{`
                input:focus { 
                    background: rgba(255,255,255,0.08) !important;
                    border-color: #6669F1 !important;
                    box-shadow: none !important;
                    color: #fff !important;
                }
                .extra-small { font-size: 0.65rem; }
            `}</style>
        </motion.div>
    );
};

export default SliderLogoEditor;
