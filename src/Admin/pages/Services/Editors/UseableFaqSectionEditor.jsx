import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Accordion } from 'react-bootstrap';
import { useSiteData } from '../../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, PlusLg as Plus, Trash, QuestionCircleFill } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';

const UseableFaqSectionEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId');

    const [content, setContent] = useState(() => {
        return siteData?.sectionData?.[instanceId]?.content || { faqTitle: '', faqs: [] };
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

    const updateItemField = (index, field, value) => {
        const newItems = [...(content.faqs || [])];
        newItems[index] = { ...newItems[index], [field]: value };
        setContent(prev => ({ ...prev, faqs: newItems }));
    };

    const addItem = () => {
        setContent(prev => ({
            ...prev,
            faqs: [...(prev.faqs || []), { question: 'New Question', answer: '' }]
        }));
    };

    const removeItem = (index) => {
        const newItems = content.faqs.filter((_, i) => i !== index);
        setContent(prev => ({ ...prev, faqs: newItems }));
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
            triggerToast('FAQs updated successfully!');
        } catch (error) {
            console.error(error);
            triggerToast('Failed to save FAQs.', 'error');
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
                    <h2 className="text-white fw-bold mb-1">FAQ Section Editor</h2>
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
                        <Save size={18} /> {isSaving ? 'Saving...' : 'Update FAQs'}
                    </Button>
                </div>
            </div>

            <div style={sectionStyle}>
                <Form.Group className="mb-5">
                    <Form.Label style={labelStyle}>FAQ Resource Title</Form.Label>
                    <Form.Control
                        type="text"
                        value={content.faqTitle || ""}
                        onChange={(e) => setContent(prev => ({ ...prev, faqTitle: e.target.value }))}
                        style={{ ...inputStyle, fontSize: '1.4rem', fontWeight: '700' }}
                    />
                </Form.Group>

                <Accordion flush className="custom-dark-accordion">
                    {(content.faqs || []).map((faq, idx) => (
                        <Accordion.Item eventKey={idx.toString()} key={idx} className="mb-3">
                            <Accordion.Header>
                                <QuestionCircleFill size={18} className="me-3" style={{ color: '#6669F1' }} />
                                <span className="step-title">{faq.question || "New Inquiry Entry"}</span>
                            </Accordion.Header>
                            <Accordion.Body style={{ background: 'rgba(0,0,0,0.2)', padding: '30px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                <Form.Group className="mb-4">
                                    <Form.Label style={labelStyle}>Question Content</Form.Label>
                                    <Form.Control
                                        style={{ ...inputStyle, fontWeight: '700' }}
                                        value={faq.question || ""}
                                        onChange={(e) => updateItemField(idx, 'question', e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label style={labelStyle}>Verified Answer</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        style={inputStyle}
                                        value={faq.answer || ""}
                                        onChange={(e) => updateItemField(idx, 'answer', e.target.value)}
                                    />
                                </Form.Group>
                                <div className="text-end mt-4">
                                    <Button variant="outline-danger" className="border-0" onClick={() => removeItem(idx)}>
                                        <Trash size={18} className="me-2" /> Purge FAQ
                                    </Button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <Button
                    onClick={addItem}
                    className="w-100 py-3 rounded-4 mt-2"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px dashed rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}
                >
                    <Plus size={20} className="me-2" /> Add FAQ Entry
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
                .step-title { font-size: 1rem; letter-spacing: 0.5px; }
            `}</style>
        </motion.div>
    );
};

export default UseableFaqSectionEditor;
