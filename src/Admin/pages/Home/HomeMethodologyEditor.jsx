import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useSiteData } from '../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, ListTask, PlusCircle, Trash, List } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';

const HomeMethodologyEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId') || 'home_methodology_1';

    const [methodData, setMethodData] = useState(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            return siteData.sectionData[instanceId].content;
        }
        return siteData?.home?.methodology || { subtitle: "", title: "", steps: [] };
    });

    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

    useEffect(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setMethodData(siteData.sectionData[instanceId].content);
        } else if (!instanceId && siteData?.home?.methodology) {
            setMethodData(siteData.home.methodology);
        }
    }, [siteData, instanceId]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const handleMetaChange = (e) => {
        setMethodData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const addStep = () => {
        setMethodData(prev => ({
            ...prev,
            steps: [...(prev.steps || []), { title: "", text: "" }]
        }));
    };

    const removeStep = (index) => {
        const newSteps = methodData.steps.filter((_, i) => i !== index);
        setMethodData(prev => ({ ...prev, steps: newSteps }));
    };

    const updateStep = (index, field, value) => {
        const newSteps = [...methodData.steps];
        newSteps[index] = { ...newSteps[index], [field]: value };
        setMethodData(prev => ({ ...prev, steps: newSteps }));
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            if (instanceId) {
                updateSectionData(instanceId, methodData);
                
                const updatedData = {
                    ...siteData,
                    sectionData: {
                        ...siteData.sectionData,
                        [instanceId]: {
                            ...siteData.sectionData[instanceId],
                            content: methodData
                        }
                    }
                };
                await saveToCloud(updatedData);
            } else {
                const updatedData = {
                    ...siteData,
                    home: {
                        ...siteData.home,
                        methodology: methodData
                    }
                };
                await saveToCloud(updatedData);
            }

            triggerToast('Methodology updated successfully!');
        } catch (error) {
            console.error(error);
            triggerToast('Failed to save Methodology.', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const resetChanges = () => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setMethodData(siteData.sectionData[instanceId].content);
        } else {
            setMethodData(siteData?.home?.methodology || { subtitle: "", title: "", steps: [] });
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
                    <h2 className="text-white fw-bold mb-1">Methodology Section</h2>
                    <p className="text-white-50">
                        {instanceId ? `Editing instance: ${instanceId}` : "Manage the execution steps."}
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
                    <ListTask className="text-primary" /> Execution Context
                </h4>
                <Form.Group className="mb-3">
                    <Form.Label className="text-white-50 small">SECTION SUBTITLE (e.g. Execution Framework)</Form.Label>
                    <Form.Control
                        name="subtitle"
                        value={methodData.subtitle}
                        onChange={handleMetaChange}
                        style={inputStyle}
                    />
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label className="text-white-50 small">MAIN TITLE</Form.Label>
                    <Form.Control
                        name="title"
                        value={methodData.title}
                        onChange={handleMetaChange}
                        style={inputStyle}
                        placeholder="e.g. How We Deliver Results"
                    />
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <Form.Label className="text-white-50 small mb-0 font-weight-bold">DELIVERY STEPS</Form.Label>
                    <Button
                        variant="link"
                        size="sm"
                        className="text-primary p-0 text-decoration-none"
                        onClick={addStep}
                    >
                        <PlusCircle className="me-1" /> Add Phase
                    </Button>
                </div>

                {(methodData.steps || []).map((step, index) => (
                    <Card key={index} className="mb-3 border-0" style={{ background: 'rgba(0,0,0,0.2)' }}>
                        <Card.Body className="position-relative p-3">
                            <Button
                                variant="link"
                                className="position-absolute text-danger p-0"
                                style={{ top: '10px', right: '10px', zIndex: 10 }}
                                onClick={() => removeStep(index)}
                                title="Remove Step"
                            >
                                <Trash size={16} />
                            </Button>
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                                    {index + 1}
                                </div>
                                <div className="text-white-50 small fw-bold">PHASE {index + 1}</div>
                            </div>
                            <Form.Group className="mb-2">
                                <Form.Label className="text-white-50 extra-small fw-bold">STEP TITLE</Form.Label>
                                <Form.Control
                                    size="sm"
                                    value={step.title}
                                    onChange={(e) => updateStep(index, 'title', e.target.value)}
                                    style={inputStyle}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="text-white-50 extra-small fw-bold">DESCRIPTION</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    size="sm"
                                    value={step.text}
                                    onChange={(e) => updateStep(index, 'text', e.target.value)}
                                    style={inputStyle}
                                />
                            </Form.Group>
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

export default HomeMethodologyEditor;
