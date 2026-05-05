import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSiteData } from '../../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, PlusLg as Plus, Trash, Stars, Image as ImageIcon } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';
import CloudinaryUploadWidget from '../../../components/CloudinaryUploadWidget';

const InnovationEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId');

    const [content, setContent] = useState(() => {
        return siteData?.sectionData?.[instanceId]?.content || { title: '', description: '', row1: [], row2: [] };
    });

    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

    useEffect(() => {
        if (siteData?.sectionData?.[instanceId]) {
            setContent(siteData.sectionData[instanceId].content);
        }
    }, [siteData, instanceId]);

    // Live Preview
    useEffect(() => {
        if (instanceId && content) {
            updateSectionData(instanceId, content);
        }
    }, [content, instanceId]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const updateLogo = (row, index, field, value) => {
        const newRow = [...(content[row] || [])];
        newRow[index] = { ...newRow[index], [field]: value };
        setContent(prev => ({ ...prev, [row]: newRow }));
    };

    const addLogo = (row) => {
        const newRow = [...(content[row] || [])];
        newRow.push({ name: 'New Brand', url: '' });
        setContent(prev => ({ ...prev, [row]: newRow }));
    };

    const removeLogo = (row, index) => {
        const newRow = content[row].filter((_, i) => i !== index);
        setContent(prev => ({ ...prev, [row]: newRow }));
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            updateSectionData(instanceId, content);
            await saveToCloud();
            triggerToast('Innovation section updated successfully!');
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
        padding: '15px',
        transition: 'all 0.3s ease',
        marginBottom: '15px'
    };

    const inputStyle = {
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#fff',
        borderRadius: '12px',
        padding: '10px'
    };

    const labelStyle = {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '0.8rem',
        fontWeight: '600',
        marginBottom: '5px',
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
                    <h2 className="text-white fw-bold mb-1">Innovation Section Editor</h2>
                    <p className="text-white-50">Managing logos and text for: <code className="text-primary">{instanceId}</code></p>
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
                <Row className="g-4 mb-5">
                    <Col md={12}>
                        <Form.Label style={labelStyle}><Stars className="text-warning me-2" /> Section Title</Form.Label>
                        <Form.Control
                            style={{ ...inputStyle, fontSize: '1.2rem', fontWeight: '700' }}
                            value={content.title || ""}
                            onChange={(e) => setContent(prev => ({ ...prev, title: e.target.value }))}
                        />
                    </Col>
                    <Col md={12}>
                        <Form.Label style={labelStyle}>Description Paragraph</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            style={inputStyle}
                            value={content.description || ""}
                            onChange={(e) => setContent(prev => ({ ...prev, description: e.target.value }))}
                        />
                    </Col>
                </Row>

                <Row>
                    {['row1', 'row2'].map((rowKey) => (
                        <Col lg={6} key={rowKey} className="mb-4">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h6 className="text-white fw-bold mb-0">Logo {rowKey === 'row1' ? 'Row 1' : 'Row 2'}</h6>
                                <Button variant="outline-primary" size="sm" onClick={() => addLogo(rowKey)} className="rounded-pill">
                                    <Plus /> Add Logo
                                </Button>
                            </div>
                            <div style={{ maxHeight: '500px', overflowY: 'auto', paddingRight: '10px' }}>
                                {(content[rowKey] || []).map((logo, idx) => (
                                    <div key={idx} style={itemCardStyle}>
                                        <Row className="g-2 align-items-center">
                                            <Col xs={3} className="text-center">
                                                <div style={{ 
                                                    width: '100%', 
                                                    aspectRatio: '1', 
                                                    background: '#fff', 
                                                    borderRadius: '12px', 
                                                    padding: '8px', 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                                }}>
                                                    {logo.url ? (
                                                        <img src={logo.url} alt="preview" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                                    ) : (
                                                        <ImageIcon size={24} className="text-muted" />
                                                    )}
                                                </div>
                                            </Col>
                                            <Col xs={9}>
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <Form.Control
                                                        placeholder="Brand Name"
                                                        style={{ ...inputStyle, flex: 1, marginRight: '10px' }}
                                                        value={logo.name || ''}
                                                        onChange={(e) => updateLogo(rowKey, idx, 'name', e.target.value)}
                                                    />
                                                    <Button variant="link" className="text-danger p-0" onClick={() => removeLogo(rowKey, idx)}>
                                                        <Trash size={18} />
                                                    </Button>
                                                </div>
                                                <CloudinaryUploadWidget 
                                                    label={logo.url ? "Change Logo" : "Upload Logo"} 
                                                    onUploadSuccess={(url) => updateLogo(rowKey, idx, 'url', url)} 
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>

            <style>{`
                ::-webkit-scrollbar { width: 5px; }
                ::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); }
                ::-webkit-scrollbar-thumb { background: rgba(102, 105, 241, 0.2); borderRadius: 10px; }
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

export default InnovationEditor;
