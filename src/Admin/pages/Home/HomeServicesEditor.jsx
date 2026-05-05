import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useSiteData } from '../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, ListCheck, PlusCircle, Trash } from 'react-bootstrap-icons';
import CloudinaryUploadWidget from '../../components/CloudinaryUploadWidget';
import { useLocation } from 'react-router-dom';

const HomeServicesEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId') || 'home_services_1';

    const [servicesData, setServicesData] = useState(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            return siteData.sectionData[instanceId].content;
        }
        return siteData?.home?.serviceSection || { subtitle: "", title: "", description: "", services: [] };
    });

    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

    useEffect(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setServicesData(siteData.sectionData[instanceId].content);
        } else if (!instanceId && siteData?.home?.serviceSection) {
            setServicesData(siteData.home.serviceSection);
        }
    }, [siteData, instanceId]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const handleMetaChange = (e) => {
        setServicesData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const addService = () => {
        setServicesData(prev => ({
            ...prev,
            services: [...(prev.services || []), { title: "", text: "", img: "" }]
        }));
    };

    const removeService = (index) => {
        const newServices = servicesData.services.filter((_, i) => i !== index);
        setServicesData(prev => ({ ...prev, services: newServices }));
    };

    const updateService = (index, field, value) => {
        const newServices = [...servicesData.services];
        newServices[index] = { ...newServices[index], [field]: value };
        setServicesData(prev => ({ ...prev, services: newServices }));
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            if (instanceId) {
                updateSectionData(instanceId, servicesData);
                
                const updatedData = {
                    ...siteData,
                    sectionData: {
                        ...siteData.sectionData,
                        [instanceId]: {
                            ...siteData.sectionData[instanceId],
                            content: servicesData
                        }
                    }
                };
                await saveToCloud(updatedData);
            } else {
                const updatedData = {
                    ...siteData,
                    home: {
                        ...siteData.home,
                        serviceSection: servicesData
                    }
                };
                await saveToCloud(updatedData);
            }

            triggerToast('Services Overview updated successfully!');
        } catch (error) {
            console.error(error);
            triggerToast('Failed to save Services.', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const resetChanges = () => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setServicesData(siteData.sectionData[instanceId].content);
        } else {
            setServicesData(siteData?.home?.serviceSection || { subtitle: "", title: "", description: "", services: [] });
        }
        triggerToast('Changes reset.', 'info');
    };

    const sectionStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '15px',
        padding: '25px',
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
                    <h2 className="text-white fw-bold mb-1">Services Overview</h2>
                    <p className="text-white-50">
                        {instanceId ? `Editing instance: ${instanceId}` : "Manage the core services displayed on your home page grid."}
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
                    <ListCheck className="text-primary" /> Global Section Text
                </h4>
                <Form.Group className="mb-3">
                    <Form.Label className="text-white-50 small">SECTION SUBTITLE (e.g. Our Expertise)</Form.Label>
                    <Form.Control
                        name="subtitle"
                        value={servicesData.subtitle}
                        onChange={handleMetaChange}
                        style={inputStyle}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="text-white-50 small">MAIN TITLE</Form.Label>
                    <Form.Control
                        name="title"
                        value={servicesData.title}
                        onChange={handleMetaChange}
                        style={inputStyle}
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label className="text-white-50 small">DESCRIPTION</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="description"
                        value={servicesData.description}
                        onChange={handleMetaChange}
                        style={inputStyle}
                    />
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <Form.Label className="text-white-50 small mb-0 font-weight-bold">SERVICE CARDS</Form.Label>
                    <Button
                        variant="link"
                        size="sm"
                        className="text-primary p-0 text-decoration-none"
                        onClick={addService}
                    >
                        <PlusCircle className="me-1" /> Add Service
                    </Button>
                </div>

                {(servicesData.services || []).map((service, index) => (
                    <Card key={index} className="mb-3 border-0" style={{ background: 'rgba(0,0,0,0.2)' }}>
                        <Card.Body className="position-relative p-3">
                            <Button
                                variant="link"
                                className="position-absolute text-danger p-0"
                                style={{ top: '10px', right: '10px', zIndex: 10 }}
                                onClick={() => removeService(index)}
                            >
                                <Trash size={16} />
                            </Button>
                            <Form.Group className="mb-2">
                                <Form.Label className="text-white-50 extra-small fw-bold">TITLE</Form.Label>
                                <Form.Control
                                    size="sm"
                                    value={service.title}
                                    onChange={(e) => updateService(index, 'title', e.target.value)}
                                    style={inputStyle}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-white-50 extra-small fw-bold">DESCRIPTION</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    size="sm"
                                    value={service.text}
                                    onChange={(e) => updateService(index, 'text', e.target.value)}
                                    style={inputStyle}
                                />
                            </Form.Group>
                            <div className="d-flex align-items-center gap-3">
                                {service.img && <img src={service.img} alt="Icon" className="img-thumbnail" style={{ height: '40px', background: '#000' }} />}
                                <CloudinaryUploadWidget
                                    label={service.img ? "Change Icon" : "Upload Icon"}
                                    onUploadSuccess={(url) => updateService(index, 'img', url)}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>

            <style>{`
                textarea:focus, input:focus { 
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

export default HomeServicesEditor;
