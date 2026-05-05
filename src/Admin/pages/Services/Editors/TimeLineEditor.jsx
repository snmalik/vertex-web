import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSiteData } from '../../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, PlusLg as Plus, Trash, ClockHistory } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';

const TimeLineEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId');

    const [content, setContent] = useState(() => {
        return siteData?.sectionData?.[instanceId]?.content || { sectionTitle: '', steps: [] };
    });

    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

    useEffect(() => {
        if (siteData?.sectionData?.[instanceId]) {
            setContent(siteData.sectionData[instanceId].content);
        }
    }, [siteData, instanceId]);

    // --- LIVE PREVIEW LOGIC ---
    useEffect(() => {
        if (instanceId && content) {
            updateSectionData(instanceId, content);
        }
    }, [content, instanceId]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const updateStep = (index, field, value) => {
        const steps = [...(content.steps || [])];
        steps[index] = { ...steps[index], [field]: value };
        setContent(prev => ({ ...prev, steps }));
    };

    const addStep = () => {
        const steps = [...(content.steps || [])];
        const nextId = String(steps.length + 1).padStart(2, '0');
        steps.push({ id: nextId, title: 'New Process Step', desc: '' });
        setContent(prev => ({ ...prev, steps }));
    };

    const removeStep = (index) => {
        const steps = content.steps.filter((_, i) => i !== index).map((s, i) => ({
            ...s,
            id: String(i + 1).padStart(2, '0')
        }));
        setContent(prev => ({ ...prev, steps }));
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            updateSectionData(instanceId, content);
            await saveToCloud();
            triggerToast('Timeline updated successfully!');
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

    const itemCardStyle = {
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '15px',
        padding: '20px',
        transition: 'all 0.3s ease',
        height: '100%'
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
                    <h2 className="text-white fw-bold mb-1">Timeline Editor</h2>
                    <p className="text-white-50">Managing process for: <code className="text-primary">{instanceId}</code></p>
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
                        <Save size={18} /> {isSaving ? 'Saving...' : 'Update Live'}
                    </Button>
                </div>
            </div>

            <div style={sectionStyle}>
                <Form.Group className="mb-5">
                    <Form.Label style={labelStyle}>Section Title</Form.Label>
                    <Form.Control
                        type="text"
                        value={content.sectionTitle || ""}
                        onChange={(e) => setContent(prev => ({ ...prev, sectionTitle: e.target.value }))}
                        style={{ ...inputStyle, fontSize: '1.2rem', fontWeight: '700' }}
                    />
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="mb-0 fw-bold text-white"><ClockHistory className="me-2 text-primary" /> Roadmap Steps</h5>
                    <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={addStep}
                        className="rounded-pill px-3"
                        style={{ borderColor: 'rgba(102, 105, 241, 0.3)', color: '#6669F1' }}
                    >
                        <Plus size={18} /> Add Step
                    </Button>
                </div>

                <Row className="g-4">
                    {(content.steps || []).map((step, idx) => (
                        <Col md={6} key={idx}>
                            <div style={itemCardStyle}>
                                <div className="d-flex justify-content-between mb-3">
                                    <span style={{ color: '#6669F1', fontSize: '0.7rem', fontWeight: 800 }}>PHASE #{step.id || idx + 1}</span>
                                    <Button
                                        variant="link"
                                        className="text-danger p-0"
                                        onClick={() => removeStep(idx)}
                                    >
                                        <Trash size={16} />
                                    </Button>
                                </div>
                                <Row className="g-3">
                                    <Col md={3}>
                                        <Form.Label style={labelStyle}>ID</Form.Label>
                                        <Form.Control
                                            style={inputStyle}
                                            value={step.id || ""}
                                            onChange={(e) => updateStep(idx, 'id', e.target.value)}
                                            placeholder="01"
                                        />
                                    </Col>
                                    <Col md={9}>
                                        <Form.Label style={labelStyle}>Step Title</Form.Label>
                                        <Form.Control
                                            style={inputStyle}
                                            value={step.title || ""}
                                            onChange={(e) => updateStep(idx, 'title', e.target.value)}
                                        />
                                    </Col>
                                    <Col md={12}>
                                        <Form.Label style={labelStyle}>Description</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            style={inputStyle}
                                            value={step.desc || ""}
                                            onChange={(e) => updateStep(idx, 'desc', e.target.value)}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    ))}
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

export default TimeLineEditor;
