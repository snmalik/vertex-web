import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import { useSiteData } from '../../../../context/SiteContext';
import { resolveIcon } from '../../../../utils/iconResolver';
import IconPicker from '../../../components/IconPicker';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, PlusLg as Plus, Trash, Search, ListUl } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';

const ReuseCardEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId');

    const [content, setContent] = useState(() => {
        return siteData?.sectionData?.[instanceId]?.content || { heading: '', items: [] };
    });

    const [pickerState, setPickerState] = useState({ show: false, index: '', current: '' });
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

    const handleHeadingChange = (e) => {
        setContent(prev => ({ ...prev, heading: e.target.value }));
    };

    const updateItemField = (index, field, value) => {
        const newItems = [...(content.items || [])];
        newItems[index] = { ...newItems[index], [field]: value };
        setContent(prev => ({ ...prev, items: newItems }));
    };

    const addItem = () => {
        setContent(prev => ({
            ...prev,
            items: [...(prev.items || []), { icon: 'BsGear', title: 'New Service', desc: '' }]
        }));
    };

    const removeItem = (index) => {
        const newItems = content.items.filter((_, i) => i !== index);
        setContent(prev => ({ ...prev, items: newItems }));
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            // Update local context first
            updateSectionData(instanceId, content);

            // Construct full data object to avoid race conditions with state
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
            triggerToast('Section updated successfully!');
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
                    <h2 className="text-white fw-bold mb-1">Reuse Card Editor</h2>
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
                <Form.Group className="mb-5">
                    <Form.Label style={labelStyle}>Section Heading</Form.Label>
                    <Form.Control
                        type="text"
                        value={content.heading || ""}
                        onChange={handleHeadingChange}
                        style={{ ...inputStyle, fontSize: '1.2rem', fontWeight: '700' }}
                    />
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="mb-0 fw-bold text-white"><ListUl className="me-2" /> Service Items</h5>
                    <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={addItem}
                        className="rounded-pill px-3"
                        style={{ color: '#6669F1', borderColor: 'rgba(102, 105, 241, 0.3)' }}
                    >
                        <Plus size={18} /> Add New Item
                    </Button>
                </div>

                <Row className="g-4">
                    {(content.items || []).map((item, idx) => (
                        <Col md={6} key={idx}>
                            <div style={itemCardStyle}>
                                <div className="d-flex justify-content-between mb-3">
                                    <div className="badge" style={{ background: 'rgba(102, 105, 241, 0.1)', color: '#6669F1' }}>Item #{idx + 1}</div>
                                    <Button
                                        variant="link"
                                        className="text-danger p-0 d-flex align-items-center"
                                        onClick={() => removeItem(idx)}
                                    >
                                        <Trash size={16} />
                                    </Button>
                                </div>
                                <Row className="g-3">
                                    <Col md={4}>
                                        <Form.Label style={labelStyle}>Icon</Form.Label>
                                        <InputGroup className="flex-nowrap">
                                            <InputGroup.Text
                                                style={{
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    color: '#6669f1',
                                                    fontSize: '1.2rem'
                                                }}
                                            >
                                                {resolveIcon(item.icon) || <BsIcons.BsQuestionCircle />}
                                            </InputGroup.Text>
                                            <Button
                                                variant="outline-secondary"
                                                style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}
                                                onClick={() => openPicker(idx, item.icon)}
                                            >
                                                <Search size={14} className="text-white" />
                                            </Button>
                                        </InputGroup>
                                        <small className="text-muted d-block mt-2" style={{ fontSize: '10px' }}>{item.icon}</small>
                                    </Col>
                                    <Col md={8}>
                                        <Form.Label style={labelStyle}>Title</Form.Label>
                                        <Form.Control
                                            style={inputStyle}
                                            value={item.title || ""}
                                            onChange={(e) => updateItemField(idx, 'title', e.target.value)}
                                        />
                                    </Col>
                                    <Col md={12}>
                                        <Form.Label style={labelStyle}>Description</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            style={inputStyle}
                                            value={item.desc || ""}
                                            onChange={(e) => updateItemField(idx, 'desc', e.target.value)}
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

export default ReuseCardEditor;
