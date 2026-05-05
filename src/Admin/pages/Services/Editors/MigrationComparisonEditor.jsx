import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Table } from 'react-bootstrap';
import { useSiteData } from '../../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, Plus, Trash, ListUl } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';

const MigrationComparisonEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId');

    const [content, setContent] = useState(() => {
        return siteData?.sectionData?.[instanceId]?.content || { subtitle: '', headers: [], points: [] };
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

    const updateHeader = (index, value) => {
        const newHeaders = [...(content.headers || [])];
        newHeaders[index] = value;
        setContent(prev => ({ ...prev, headers: newHeaders }));
    };

    const updatePoint = (index, field, value) => {
        const newPoints = [...(content.points || [])];
        newPoints[index] = { ...newPoints[index], [field]: value };
        setContent(prev => ({ ...prev, points: newPoints }));
    };

    const addPoint = () => {
        setContent(prev => ({
            ...prev,
            points: [...(prev.points || []), { label: '', old: '', new: '' }]
        }));
    };

    const removePoint = (index) => {
        setContent(prev => ({
            ...prev,
            points: prev.points.filter((_, i) => i !== index)
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
            triggerToast('Comparison table updated successfully!');
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
                    <h2 className="text-white fw-bold mb-1">Comparison Table Editor</h2>
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
                <Form.Group className="mb-4">
                    <Form.Label style={labelStyle}>Subtitle</Form.Label>
                    <Form.Control
                        type="text"
                        value={content.subtitle || ""}
                        onChange={(e) => setContent(prev => ({ ...prev, subtitle: e.target.value }))}
                        style={inputStyle}
                    />
                </Form.Group>

                <h5 className="text-white mb-4"><ListUl className="me-2" /> Table Configuration</h5>
                
                <Row className="mb-4">
                    <Col md={4}>
                        <Form.Label style={labelStyle}>Header 1 (Metric)</Form.Label>
                        <Form.Control
                            style={inputStyle}
                            value={content.headers?.[0] || ""}
                            onChange={(e) => updateHeader(0, e.target.value)}
                        />
                    </Col>
                    <Col md={4}>
                        <Form.Label style={labelStyle}>Header 2 (Old/Legacy)</Form.Label>
                        <Form.Control
                            style={inputStyle}
                            value={content.headers?.[1] || ""}
                            onChange={(e) => updateHeader(1, e.target.value)}
                        />
                    </Col>
                    <Col md={4}>
                        <Form.Label style={labelStyle}>Header 3 (New/Cloud)</Form.Label>
                        <Form.Control
                            style={inputStyle}
                            value={content.headers?.[2] || ""}
                            onChange={(e) => updateHeader(2, e.target.value)}
                        />
                    </Col>
                </Row>

                <div className="table-responsive">
                    <Table variant="dark" className="bg-transparent border-0">
                        <thead>
                            <tr>
                                <th className="border-0 bg-transparent" style={labelStyle}>Label</th>
                                <th className="border-0 bg-transparent" style={labelStyle}>Legacy State</th>
                                <th className="border-0 bg-transparent" style={labelStyle}>Cloud-Native State</th>
                                <th className="border-0 bg-transparent" style={labelStyle}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(content.points || []).map((point, idx) => (
                                <tr key={idx}>
                                    <td className="bg-transparent border-0">
                                        <Form.Control 
                                            style={inputStyle} 
                                            value={point.label || ""} 
                                            onChange={(e) => updatePoint(idx, 'label', e.target.value)}
                                        />
                                    </td>
                                    <td className="bg-transparent border-0">
                                        <Form.Control 
                                            style={inputStyle} 
                                            value={point.old || ""} 
                                            onChange={(e) => updatePoint(idx, 'old', e.target.value)}
                                        />
                                    </td>
                                    <td className="bg-transparent border-0">
                                        <Form.Control 
                                            style={inputStyle} 
                                            value={point.new || ""} 
                                            onChange={(e) => updatePoint(idx, 'new', e.target.value)}
                                        />
                                    </td>
                                    <td className="bg-transparent border-0">
                                        <Button variant="outline-danger" onClick={() => removePoint(idx)} className="rounded-circle">
                                            <Trash size={14} />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>

                <Button variant="outline-primary" onClick={addPoint} className="rounded-pill mt-2">
                    <Plus /> Add Comparison Row
                </Button>
            </div>
        </motion.div>
    );
};

export default MigrationComparisonEditor;
