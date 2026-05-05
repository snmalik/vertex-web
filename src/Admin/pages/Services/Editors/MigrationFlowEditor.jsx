import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, InputGroup, Accordion } from 'react-bootstrap';
import { useSiteData } from '../../../../context/SiteContext';
import { resolveIcon } from '../../../../utils/iconResolver';
import IconPicker from '../../../components/IconPicker';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, PlusLg as Plus, Trash, Search, ArrowRightCircle } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';
import * as BsIcons from 'react-icons/bs';

const MigrationFlowEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId');

    const [content, setContent] = useState(() => {
        return siteData?.sectionData?.[instanceId]?.content || { heading: '', title: '', challenges: [], steps: [] };
    });

    const [pickerState, setPickerState] = useState({ show: false, index: '', current: '' });
    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

    useEffect(() => {
        if (siteData?.sectionData?.[instanceId]) {
            const rawContent = siteData.sectionData[instanceId].content;
            // Normalize: Ensure both keys exist or use the one that does
            const normalizedContent = {
                ...rawContent,
                challenges: rawContent.challenges || rawContent.steps || [],
                heading: rawContent.heading || rawContent.title || ""
            };
            setContent(normalizedContent);
        }
    }, [siteData, instanceId]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const updateItemField = (index, field, value) => {
        const items = [...(content.challenges || [])];
        items[index] = { ...items[index], [field]: value };
        
        setContent(prev => ({ 
            ...prev, 
            challenges: items,
            steps: items // Always keep in sync
        }));
    };

    const addItem = () => {
        const currentItems = [...(content.challenges || [])];
        const nextNum = currentItems.length + 1;
        const formattedNum = String(nextNum).padStart(2, '0');
        
        const newItems = [...currentItems, { step: formattedNum, icon: 'BsRocket', title: 'New Phase', desc: '' }];

        setContent(prev => ({
            ...prev,
            challenges: newItems,
            steps: newItems
        }));
    };

    const removeItem = (index) => {
        // 1. Filter out the item
        const filteredItems = content.challenges.filter((_, i) => i !== index);
        
        // 2. Re-index all remaining items so the numbers stay sequential
        const reindexedItems = filteredItems.map((item, idx) => ({
            ...item,
            step: String(idx + 1).padStart(2, '0')
        }));

        setContent(prev => ({ 
            ...prev, 
            challenges: reindexedItems,
            steps: reindexedItems 
        }));
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            // Prepare final data structure for the specific component needs
            const finalContent = {
                ...content,
                // Ensure 'title' is synced for DevOpsFlow component
                title: content.heading || content.title,
                // Ensure 'steps' is synced for DevOpsFlow component
                steps: content.challenges
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
                    <h2 className="text-white fw-bold mb-1">Migration Flow Editor</h2>
                    <p className="text-white-50">Blueprint: <code className="text-primary">{instanceId}</code></p>
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
                        <Save size={18} /> {isSaving ? 'Saving...' : 'Update Roadmap'}
                    </Button>
                </div>
            </div>

            <div style={sectionStyle}>
                <Form.Group className="mb-5">
                    <Form.Label style={labelStyle}>Roadmap Hero Heading</Form.Label>
                    <Form.Control
                        type="text"
                        value={content.heading || ""}
                        onChange={(e) => setContent(prev => ({ ...prev, heading: e.target.value }))}
                        style={{ ...inputStyle, fontSize: '1.4rem', fontWeight: '800', borderLeft: '4px solid #6669F1' }}
                    />
                </Form.Group>

                <div className="d-flex align-items-center gap-3 mb-4">
                    <ArrowRightCircle size={24} className="text-primary" />
                    <h5 className="mb-0 fw-bold text-white">Project Lifecycle Phases</h5>
                </div>

                <Accordion flush className="custom-dark-accordion">
                    {(content.challenges || []).map((item, idx) => (
                        <Accordion.Item eventKey={idx.toString()} key={idx} className="mb-3">
                            <Accordion.Header>
                                <span className="step-number">{item.step || String(idx + 1).padStart(2, '0')}</span>
                                <span className="step-title">{item.title || "Untitled Phase"}</span>
                            </Accordion.Header>
                            <Accordion.Body style={{ background: 'rgba(0,0,0,0.2)', padding: '30px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                <Row className="g-4">
                                    <Col md={4}>
                                        <div className="p-3 rounded-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
                                            <Form.Group className="mb-3">
                                                <Form.Label style={labelStyle}>Step Counter (ID)</Form.Label>
                                                <Form.Control style={inputStyle} value={item.step || ""} onChange={(e) => updateItemField(idx, 'step', e.target.value)} />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label style={labelStyle}>Phase Icon</Form.Label>
                                                <InputGroup>
                                                    <InputGroup.Text style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#6669f1' }}>
                                                        {resolveIcon(item.icon) || <BsIcons.BsQuestionCircle />}
                                                    </InputGroup.Text>
                                                    <Button
                                                        variant="outline-primary"
                                                        style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                                                        onClick={() => openPicker(idx, item.icon)}
                                                    >
                                                        <Search size={16} />
                                                    </Button>
                                                </InputGroup>
                                            </Form.Group>
                                        </div>
                                    </Col>
                                    <Col md={8}>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={labelStyle}>Phase Name</Form.Label>
                                            <Form.Control style={inputStyle} value={item.title || ""} onChange={(e) => updateItemField(idx, 'title', e.target.value)} />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label style={labelStyle}>Technical Breakdown</Form.Label>
                                            <Form.Control as="textarea" rows={4} style={inputStyle} value={item.desc || ""} onChange={(e) => updateItemField(idx, 'desc', e.target.value)} />
                                        </Form.Group>
                                        <div className="text-end mt-4">
                                            <Button variant="outline-danger" className="border-0" onClick={() => removeItem(idx)}>
                                                <Trash size={18} className="me-2" /> Delete Phase
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <Button
                    onClick={addItem}
                    className="w-100 py-3 rounded-4 mt-2"
                    style={{ background: 'rgba(102, 105, 241, 0.1)', border: '1px dashed #6669F1', color: '#6669F1' }}
                >
                    <Plus size={20} className="me-2" /> Inject New Strategic Phase
                </Button>
            </div>

            <style>{`
                .custom-dark-accordion .accordion-item {
                    background: rgba(255, 255, 255, 0.02) !important;
                    border: 1px solid rgba(255, 255, 255, 0.05) !important;
                    border-radius: 15px !important;
                    overflow: hidden;
                }
                .custom-dark-accordion .accordion-header button {
                    background: transparent !important;
                    color: #fff !important;
                    padding: 20px 25px !important;
                    font-weight: 700 !important;
                    box-shadow: none !important;
                }
                .custom-dark-accordion .accordion-header button::after { filter: invert(1) brightness(2); }
                .step-number {
                    background: linear-gradient(135deg, #6669f1, #a855f7);
                    width: 32px; height: 32px; border-radius: 8px;
                    display: flex; align-items: center; justify-content: center;
                    font-size: 0.8rem; margin-right: 15px;
                }
                .step-title { font-size: 1rem; letter-spacing: 0.5px; }
            `}</style>
        </motion.div>
    );
};

export default MigrationFlowEditor;
