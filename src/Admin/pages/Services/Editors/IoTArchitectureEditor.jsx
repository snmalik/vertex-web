import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import { useSiteData } from '../../../../context/SiteContext';
import { resolveIcon } from '../../../../utils/iconResolver';
import IconPicker from '../../../components/IconPicker';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, Search } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';
import { BsDiagram3 } from 'react-icons/bs';
import * as BsIcons from 'react-icons/bs';

const IoTArchitectureEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId');

    const [content, setContent] = useState(() => {
        return siteData?.sectionData?.[instanceId]?.content || { 
            title: "The IoT Edge Ecosystem", 
            nodeLeft: { icon: "BsDeviceSsd", label: "Smart Sensors" },
            nodeCenter: { icon: "BsHddNetwork", label: "Edge Gateway", subLabel: "Local Processing" },
            nodeRight: { icon: "BsCloudCheck", label: "Cloud Insights" }
        };
    });

    const [pickerState, setPickerState] = useState({ show: false, nodeKey: '', current: '' });
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

    const handleNodeUpdate = (nodeKey, field, value) => {
        setContent(prev => ({
            ...prev,
            [nodeKey]: {
                ...prev[nodeKey],
                [field]: value
            }
        }));
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
            triggerToast('Architecture diagram updated!');
        } catch (error) {
            console.error(error);
            triggerToast('Failed to save changes.', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const openPicker = (nodeKey, current) => {
        setPickerState({ show: true, nodeKey, current });
    };

    const handleIconSelect = (iconName) => {
        handleNodeUpdate(pickerState.nodeKey, 'icon', iconName);
        setPickerState({ ...pickerState, show: false });
    };

    const sectionStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        padding: '30px',
        marginBottom: '30px'
    };

    const cardStyle = {
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '15px',
        padding: '20px',
        height: '100%'
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
                    <h2 className="text-white fw-bold mb-1">IoT Architecture Editor</h2>
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
                    <Form.Label style={labelStyle}>Main Diagram Heading</Form.Label>
                    <Form.Control
                        type="text"
                        value={content.title || ""}
                        onChange={(e) => setContent(prev => ({ ...prev, title: e.target.value }))}
                        style={{ ...inputStyle, fontSize: '1.2rem', fontWeight: '700' }}
                    />
                </Form.Group>

                <Row className="g-4">
                    {/* Left Node */}
                    <Col md={4}>
                        <div style={cardStyle}>
                            <h5 className="text-white mb-4">Source Node (Left)</h5>
                            <Form.Group className="mb-3">
                                <Form.Label style={labelStyle}>Icon</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#6669f1' }}>
                                        {resolveIcon(content.nodeLeft?.icon) || <BsIcons.BsQuestionCircle />}
                                    </InputGroup.Text>
                                    <Button variant="outline-secondary" onClick={() => openPicker('nodeLeft', content.nodeLeft?.icon)}>
                                        <Search size={14} className="text-white" />
                                    </Button>
                                </InputGroup>
                                <small className="text-muted mt-1 d-block">{content.nodeLeft?.icon}</small>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label style={labelStyle}>Label</Form.Label>
                                <Form.Control
                                    style={inputStyle}
                                    value={content.nodeLeft?.label || ""}
                                    onChange={(e) => handleNodeUpdate('nodeLeft', 'label', e.target.value)}
                                />
                            </Form.Group>
                        </div>
                    </Col>

                    {/* Center Node */}
                    <Col md={4}>
                        <div style={{ ...cardStyle, border: '1px solid rgba(102, 105, 241, 0.3)' }}>
                            <h5 className="text-white mb-4">Gateway Node (Center)</h5>
                            <Form.Group className="mb-3">
                                <Form.Label style={labelStyle}>Icon</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#6669f1' }}>
                                        {resolveIcon(content.nodeCenter?.icon) || <BsIcons.BsQuestionCircle />}
                                    </InputGroup.Text>
                                    <Button variant="outline-secondary" onClick={() => openPicker('nodeCenter', content.nodeCenter?.icon)}>
                                        <Search size={14} className="text-white" />
                                    </Button>
                                </InputGroup>
                                <small className="text-muted mt-1 d-block">{content.nodeCenter?.icon}</small>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label style={labelStyle}>Label</Form.Label>
                                <Form.Control
                                    style={inputStyle}
                                    value={content.nodeCenter?.label || ""}
                                    onChange={(e) => handleNodeUpdate('nodeCenter', 'label', e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label style={labelStyle}>Sub-Label (Local Process)</Form.Label>
                                <Form.Control
                                    style={inputStyle}
                                    value={content.nodeCenter?.subLabel || ""}
                                    onChange={(e) => handleNodeUpdate('nodeCenter', 'subLabel', e.target.value)}
                                />
                            </Form.Group>
                        </div>
                    </Col>

                    {/* Right Node */}
                    <Col md={4}>
                        <div style={cardStyle}>
                            <h5 className="text-white mb-4">Insights Node (Right)</h5>
                            <Form.Group className="mb-3">
                                <Form.Label style={labelStyle}>Icon</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#6669f1' }}>
                                        {resolveIcon(content.nodeRight?.icon) || <BsIcons.BsQuestionCircle />}
                                    </InputGroup.Text>
                                    <Button variant="outline-secondary" onClick={() => openPicker('nodeRight', content.nodeRight?.icon)}>
                                        <Search size={14} className="text-white" />
                                    </Button>
                                </InputGroup>
                                <small className="text-muted mt-1 d-block">{content.nodeRight?.icon}</small>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label style={labelStyle}>Label</Form.Label>
                                <Form.Control
                                    style={inputStyle}
                                    value={content.nodeRight?.label || ""}
                                    onChange={(e) => handleNodeUpdate('nodeRight', 'label', e.target.value)}
                                />
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
            </div>
        </motion.div>
    );
};

export default IoTArchitectureEditor;
