import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useSiteData } from '../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, PlusCircle, Trash, QuestionCircle, Pen, Image as ImageIcon, LayoutTextWindow } from 'react-bootstrap-icons';
import CloudinaryUploadWidget from '../../components/CloudinaryUploadWidget';
import { useLocation } from 'react-router-dom';

const HomeFAQEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId') || 'home_faq_1';

    const [faqData, setFaqData] = useState(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            return siteData.sectionData[instanceId].content;
        }
        return {
            badge: "F.A.Q",
            title: "Got Questions? We've Got Answers!",
            subtitle: "",
            images: [{ url: "" }, { url: "" }, { url: "" }, { url: "" }],
            questions: [],
            ...(siteData?.home?.faq || {})
        };
    });

    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

    useEffect(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setFaqData(siteData.sectionData[instanceId].content);
        } else if (!instanceId && siteData?.home?.faq) {
            setFaqData(prev => ({
                ...prev,
                ...siteData.home.faq
            }));
        }
    }, [siteData, instanceId]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const handleMetaChange = (e) => {
        setFaqData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const addQuestion = () => {
        const nextId = faqData.questions.length > 0
            ? Math.max(...faqData.questions.map(q => q.id)) + 1
            : 1;
        setFaqData(prev => ({
            ...prev,
            questions: [...(prev.questions || []), { id: nextId, question: "New Question?", answer: "Answer here..." }]
        }));
    };

    const removeQuestion = (id) => {
        setFaqData(prev => ({ ...prev, questions: prev.questions.filter(q => q.id !== id) }));
    };

    const updateQuestion = (id, field, value) => {
        setFaqData(prev => ({
            ...prev,
            questions: prev.questions.map(q => q.id === id ? { ...q, [field]: value } : q)
        }));
    };

    const updateImage = (index, url) => {
        const newImages = [...faqData.images];
        newImages[index] = { url };
        setFaqData(prev => ({ ...prev, images: newImages }));
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            if (instanceId) {
                updateSectionData(instanceId, faqData);
                
                const updatedData = {
                    ...siteData,
                    sectionData: {
                        ...siteData.sectionData,
                        [instanceId]: {
                            ...siteData.sectionData[instanceId],
                            content: faqData
                        }
                    }
                };
                await saveToCloud(updatedData);
            } else {
                const updatedData = {
                    ...siteData,
                    home: {
                        ...siteData.home,
                        faq: faqData
                    }
                };
                await saveToCloud(updatedData);
            }

            triggerToast('FAQ section updated successfully!');
        } catch (error) {
            console.error(error);
            triggerToast('Failed to save FAQ content.', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const resetChanges = () => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setFaqData(siteData.sectionData[instanceId].content);
        } else {
            setFaqData({
                badge: "F.A.Q",
                title: "Got Questions? We've Got Answers!",
                subtitle: "",
                images: [{ url: "" }, { url: "" }, { url: "" }, { url: "" }],
                questions: [],
                ...(siteData?.home?.faq || {})
            });
        }
        triggerToast('Changes reset.', 'info');
    };

    const sectionStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '15px',
        padding: '25px',
        maxWidth: '1000px',
        margin: '0 auto'
    };

    const inputStyle = {
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#fff',
        borderRadius: '10px'
    };

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
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
                            color: '#fff', fontWeight: '600'
                        }}
                    >
                        {showToast.message}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="d-flex justify-content-between align-items-center mb-4" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div>
                    <h2 className="text-white fw-bold mb-1">FAQ Editor</h2>
                    <p className="text-white-50">
                        {instanceId ? `Editing instance: ${instanceId}` : "Manage the Home page specific FAQ content."}
                    </p>
                </div>
                <div className="d-flex gap-3">
                    <Button variant="outline-light" onClick={resetChanges} className="d-flex align-items-center gap-2">
                        <ArrowClockwise size={18} /> Reset
                    </Button>
                    <Button disabled={isSaving} onClick={saveChanges} className="d-flex align-items-center gap-2" style={{ background: '#6669F1', border: 'none' }}>
                        <Save size={18} /> {isSaving ? 'Saving...' : 'Publish'}
                    </Button>
                </div>
            </div>

            <div style={sectionStyle} className="mb-4">
                <h4 className="text-white mb-4 d-flex align-items-center gap-2"><LayoutTextWindow className="text-primary" /> Header Config</h4>
                <Row>
                    <Col md={4}><Form.Group className="mb-3"><Form.Label className="text-white-50 small fw-bold">BADGE</Form.Label><Form.Control name="badge" value={faqData.badge} onChange={handleMetaChange} style={inputStyle} /></Form.Group></Col>
                    <Col md={8}><Form.Group className="mb-3"><Form.Label className="text-white-50 small fw-bold">MAIN TITLE</Form.Label><Form.Control name="title" value={faqData.title} onChange={handleMetaChange} style={inputStyle} /></Form.Group></Col>
                    <Col md={12}><Form.Group className="mb-3"><Form.Label className="text-white-50 small fw-bold">SUBTITLE</Form.Label><Form.Control as="textarea" rows={2} name="subtitle" value={faqData.subtitle} onChange={handleMetaChange} style={inputStyle} /></Form.Group></Col>
                </Row>
            </div>

            <div style={sectionStyle} className="mb-4">
                <h4 className="text-white mb-4 d-flex align-items-center gap-2"><ImageIcon className="text-primary" /> Circular Image Grid</h4>
                <Row>
                    {[0, 1, 2, 3].map((idx) => (
                        <Col key={idx} xs={6} md={3}>
                            <div className="text-center mb-3">
                                <div style={{ width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto', overflow: 'hidden', border: '2px solid #6669F1', background: '#000' }}>
                                    {faqData.images?.[idx]?.url ? <img src={faqData.images[idx].url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <div className="h-100 d-flex align-items-center justify-content-center text-white-50 small">Img {idx + 1}</div>}
                                </div>
                                <div className="mt-2 scale-75">
                                    <CloudinaryUploadWidget label="Change" onUploadSuccess={(url) => updateImage(idx, url)} />
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>

            <div style={sectionStyle}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="text-white mb-0 d-flex align-items-center gap-2"><QuestionCircle className="text-primary" /> FAQ Items</h4>
                    <Button variant="link" className="text-primary p-0 text-decoration-none" onClick={addQuestion}><PlusCircle className="me-1" /> Add Question</Button>
                </div>
                {(faqData.questions || []).map((q) => (
                    <Card key={q.id} className="border-0 mb-3" style={{ background: 'rgba(0,0,0,0.2)' }}>
                        <Card.Body>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-primary-50 fw-bold">Q#{q.id}</span>
                                <Button variant="link" className="text-danger p-0" onClick={() => removeQuestion(q.id)}><Trash size={16} /></Button>
                            </div>
                            <Form.Control size="sm" className="mb-2" value={q.question} onChange={(e) => updateQuestion(q.id, 'question', e.target.value)} style={inputStyle} placeholder="Question?" />
                            <Form.Control as="textarea" rows={2} size="sm" value={q.answer} onChange={(e) => updateQuestion(q.id, 'answer', e.target.value)} style={inputStyle} placeholder="Answer..." />
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <style>{` .scale-75 { transform: scale(0.75); } textarea:focus, input:focus { background: rgba(255,255,255,0.08) !important; border-color: #6669F1 !important; box-shadow: none !important; color: #fff !important; } `}</style>
        </motion.div>
    );
};

export default HomeFAQEditor;
