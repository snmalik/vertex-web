import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import { useSiteData } from '../../../../context/SiteContext';
import { resolveIcon } from '../../../../utils/iconResolver';
import IconPicker from '../../../components/IconPicker';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, Search, Plus, Trash, Grid } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';

const MigrationBentoEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId');

    const [content, setContent] = useState(() => {
        return siteData?.sectionData?.[instanceId]?.content || { heading: '', items: [] };
    });

    const [pickerState, setPickerState] = useState({ show: false, index: null, current: '' });
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

    const updateItemField = (index, field, value) => {
        const newItems = [...(content.items || [])];
        newItems[index] = { ...newItems[index], [field]: value };
        setContent(prev => ({ ...prev, items: newItems }));
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
            triggerToast('Bento grid updated successfully!');
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
        marginBottom: '15px'
    };

    const inputStyle = {
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#fff',
        borderRadius: '12px'
    };

    const labelStyle = {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '0.85rem',
        fontWeight: '600',
        marginBottom: '8px',
        display: 'block',
        textTransform: 'uppercase'
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
                        initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed', top: '20px', right: '20px', zIndex: 9999,
                            padding: '16px 24px', borderRadius: '16px',
                            background: 'rgba(15, 23, 42, 0.95)', color: '#fff',
                            border: `1px solid ${showToast.type === 'error' ? '#ef4444' : '#6669F1'}`
                        }}
                    >
                        {showToast.message}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="text-white fw-bold mb-1">Migration Bento Editor</h2>
                    <p className="text-white-50">Instance: <code className="text-primary">{instanceId}</code></p>
                </div>
                <div className="d-flex gap-3">
                    <Button variant="outline-light" onClick={() => window.location.reload()} className="rounded-pill">
                        <ArrowClockwise /> Reset
                    </Button>
                    <Button
                        disabled={isSaving}
                        onClick={saveChanges}
                        className="rounded-pill px-4"
                        style={{ background: '#6669F1', border: 'none' }}
                    >
                        <Save /> {isSaving ? 'Saving...' : 'Save Changes'}
                    </Button>
                </div>
            </div>

            <div style={sectionStyle}>
                <Form.Group className="mb-5">
                    <Form.Label style={labelStyle}>Section Heading</Form.Label>
                    <Form.Control
                        type="text"
                        value={content.heading || ""}
                        onChange={(e) => setContent(prev => ({ ...prev, heading: e.target.value }))}
                        style={{ ...inputStyle, fontSize: '1.2rem', fontWeight: '700' }}
                    />
                </Form.Group>

                <h5 className="text-white mb-4"><Grid className="me-2" /> Bento Items (Max 5 Recommended)</h5>
                
                <Row>
                    {(content.items || []).map((item, idx) => (
                        <Col md={12} key={idx} className="mb-3">
                            <div style={itemCardStyle}>
                                <Row className="g-3">
                                    <Col md={2}>
                                        <Form.Label style={labelStyle}>Size</Form.Label>
                                        <Form.Select 
                                            style={inputStyle}
                                            value={item.size}
                                            onChange={(e) => updateItemField(idx, 'size', e.target.value)}
                                        >
                                            <option value="small">Small</option>
                                            <option value="medium">Medium</option>
                                            <option value="large">Large</option>
                                        </Form.Select>
                                    </Col>
                                    <Col md={2}>
                                        <Form.Label style={labelStyle}>Icon</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Text style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#6669f1' }}>
                                                {resolveIcon(item.icon) || <BsIcons.BsQuestionCircle />}
                                            </InputGroup.Text>
                                            <Button variant="outline-secondary" onClick={() => openPicker(idx, item.icon)}>
                                                <Search size={14} className="text-white" />
                                            </Button>
                                        </InputGroup>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Label style={labelStyle}>Title</Form.Label>
                                        <Form.Control
                                            style={inputStyle}
                                            value={item.title || ""}
                                            onChange={(e) => updateItemField(idx, 'title', e.target.value)}
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <Form.Label style={labelStyle}>Tag (Optional)</Form.Label>
                                        <Form.Control
                                            style={inputStyle}
                                            value={item.tag || ""}
                                            onChange={(e) => updateItemField(idx, 'tag', e.target.value)}
                                            placeholder="e.g. Automation"
                                        />
                                    </Col>
                                    <Col md={12}>
                                        <Form.Label style={labelStyle}>Description</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={2}
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
        </motion.div>
    );
};

export default MigrationBentoEditor;
