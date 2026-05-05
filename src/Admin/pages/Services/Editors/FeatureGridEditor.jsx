import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import { useSiteData } from '../../../../context/SiteContext';
import { resolveIcon } from '../../../../utils/iconResolver';
import IconPicker from '../../../components/IconPicker';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, PlusLg as Plus, Trash, Search, LightningChargeFill as Lightning } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';

const FeatureGridEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId');

    const [content, setContent] = useState(() => {
        return siteData?.sectionData?.[instanceId]?.content || { heading: '', subheading: '', features: [] };
    });

    const [pickerState, setPickerState] = useState({ show: false, index: '', current: '' });
    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

    useEffect(() => {
        if (siteData?.sectionData?.[instanceId]) {
            const rawContent = siteData.sectionData[instanceId].content;
            setContent({
                ...rawContent,
                // Ensure heading is populated regardless of which key is used
                heading: rawContent.heading || rawContent.mainTitle || ""
            });
        }
    }, [siteData, instanceId]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const updateItemField = (index, field, value) => {
        const newItems = [...(content.features || [])];
        newItems[index] = { ...newItems[index], [field]: value };
        setContent(prev => ({ ...prev, features: newItems }));
    };

    const addItem = () => {
        setContent(prev => ({
            ...prev,
            features: [...(prev.features || []), { icon: 'BsZap', title: 'New Strength', desc: '', link: '#' }]
        }));
    };

    const removeItem = (index) => {
        const newItems = content.features.filter((_, i) => i !== index);
        setContent(prev => ({ ...prev, features: newItems }));
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            // Prepare final data with both keys for maximum compatibility
            const finalContent = {
                ...content,
                mainTitle: content.heading, // For FeatureSection
                heading: content.heading     // For FeatureGrid
            };

            updateSectionData(instanceId, finalContent);

            const updatedData = {
                ...siteData,
                sectionData: {
                    ...siteData.sectionData,
                    [instanceId]: {
                        ...siteData.sectionData[instanceId],
                        content: finalContent
                    }
                }
            };

            await saveToCloud(updatedData);
            triggerToast('Features updated successfully!');
        } catch (error) {
            console.error(error);
            triggerToast('Failed to save changes.', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const openPicker = (index, current) => {
        setPickerState({ show: true, index, current });
    };

    const handleIconSelect = (iconName) => {
        updateItemField(pickerState.index, 'icon', iconName);
        setPickerState({ ...pickerState, show: false });
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
        transition: 'all 0.3s ease'
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
            <IconPicker
                show={pickerState.show}
                onHide={() => setPickerState({ ...pickerState, show: false })}
                onSelect={handleIconSelect}
                currentIcon={pickerState.current}
            />

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
                    <h2 className="text-white fw-bold mb-1">Feature Grid Editor</h2>
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
                        <Save size={18} /> {isSaving ? 'Saving...' : 'Publish'}
                    </Button>
                </div>
            </div>

            <div style={sectionStyle}>
                <Row className="g-4 mb-5">
                    <Col md={6}>
                        <Form.Label style={labelStyle}>Primary Heading</Form.Label>
                        <Form.Control
                            style={inputStyle}
                            value={content.heading || ""}
                            onChange={(e) => setContent(prev => ({ ...prev, heading: e.target.value }))}
                        />
                    </Col>
                    <Col md={6}>
                        <Form.Label style={labelStyle}>Subheading / Context</Form.Label>
                        <Form.Control
                            style={inputStyle}
                            value={content.subheading || ""}
                            onChange={(e) => setContent(prev => ({ ...prev, subheading: e.target.value }))}
                        />
                    </Col>
                </Row>

                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="mb-0 fw-bold text-white"><Lightning className="me-2 text-warning" /> Core Strengths</h5>
                    <Button
                        variant="outline-warning"
                        size="sm"
                        onClick={addItem}
                        className="rounded-pill px-3"
                        style={{ borderColor: 'rgba(251, 191, 36, 0.3)', color: '#fbbf24' }}
                    >
                        <Plus size={18} /> Add Feature
                    </Button>
                </div>

                <Row className="g-4">
                    {(content.features || []).map((item, idx) => (
                        <Col md={6} key={idx}>
                            <div style={itemCardStyle}>
                                <div className="d-flex justify-content-between mb-3">
                                    <Lightning size={18} style={{ color: '#fbbf24' }} />
                                    <Button variant="link" className="text-danger p-0" onClick={() => removeItem(idx)}>
                                        <Trash size={16} />
                                    </Button>
                                </div>
                                <Row className="g-3">
                                    <Col md={6}>
                                        <Form.Label style={labelStyle}>Icon</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fbbf24' }}>
                                                {resolveIcon(item.icon) || <BsIcons.BsQuestionCircle />}
                                            </InputGroup.Text>
                                            <Button
                                                variant="outline-warning"
                                                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                                                onClick={() => openPicker(idx, item.icon)}
                                            >
                                                <Search size={16} />
                                            </Button>
                                        </InputGroup>
                                        <small className="text-muted d-block mt-1" style={{ fontSize: '10px' }}>{item.icon}</small>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label style={labelStyle}>Internal Link</Form.Label>
                                        <Form.Control style={inputStyle} value={item.link || ""} onChange={(e) => updateItemField(idx, 'link', e.target.value)} />
                                    </Col>
                                    <Col md={12}>
                                        <Form.Label style={labelStyle}>Feature Title</Form.Label>
                                        <Form.Control style={inputStyle} value={item.title || ""} onChange={(e) => updateItemField(idx, 'title', e.target.value)} />
                                    </Col>
                                    <Col md={12}>
                                        <Form.Label style={labelStyle}>Feature Description</Form.Label>
                                        <Form.Control as="textarea" rows={2} style={inputStyle} value={item.desc || ""} onChange={(e) => updateItemField(idx, 'desc', e.target.value)} />
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
                    border-color: #fbbf24 !important;
                    box-shadow: 0 0 0 4px rgba(251, 191, 36, 0.1) !important;
                    color: #fff !important;
                }
            `}</style>
        </motion.div>
    );
};

export default FeatureGridEditor;
