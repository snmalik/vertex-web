import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSiteData } from '../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, Type, Whatsapp, ChatLeftText, Telephone } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';

const HomeCTAEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId') || 'home_cta_1';

    // Local state for ctaData with safety check
    const [ctaData, setCtaData] = useState(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            return siteData.sectionData[instanceId].content;
        }
        return siteData?.home?.contactCTA || {};
    });

    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

    // Internal state for splitting the number
    const [selectedCode, setSelectedCode] = useState('92');
    const [phoneNumber, setPhoneNumber] = useState('');

    const parseNumber = (data) => {
        const fullNum = data?.whatsappNumber || '';
        if (fullNum.startsWith('92')) {
            setSelectedCode('92');
            setPhoneNumber(fullNum.substring(2));
        } else if (fullNum.length > 2) {
            if (fullNum.length > 10) {
                setSelectedCode(fullNum.substring(0, 3));
                setPhoneNumber(fullNum.substring(3));
            } else {
                setSelectedCode('92');
                setPhoneNumber(fullNum);
            }
        } else {
            setSelectedCode('92');
            setPhoneNumber(fullNum);
        }
    };

    // Sync state if siteData changes (e.g. initial load)
    useEffect(() => {
        let currentData = {};
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            currentData = siteData.sectionData[instanceId].content;
        } else {
            currentData = siteData?.home?.contactCTA || {};
        }
        
        setCtaData(currentData);
        parseNumber(currentData);
    }, [siteData, instanceId]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const handleCTAChange = (e) => {
        const { name, value } = e.target;
        setCtaData(prev => ({ ...prev, [name]: value }));
    };

    // Special handlers for the split phone number
    const handleCodeChange = (e) => {
        const newCode = e.target.value.replace(/\D/g, ""); // Only digits
        setSelectedCode(newCode);
        setCtaData(prev => ({ ...prev, whatsappNumber: newCode + phoneNumber }));
    };

    const handlePhoneBodyChange = (e) => {
        const rawBody = e.target.value.replace(/\D/g, ""); // Only digits
        setPhoneNumber(rawBody);
        setCtaData(prev => ({ ...prev, whatsappNumber: selectedCode + rawBody }));
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            if (instanceId) {
                updateSectionData(instanceId, ctaData);
                
                const updatedData = {
                    ...siteData,
                    sectionData: {
                        ...siteData.sectionData,
                        [instanceId]: {
                            ...siteData.sectionData[instanceId],
                            content: ctaData
                        }
                    }
                };
                await saveToCloud(updatedData);
            } else {
                const updatedData = {
                    ...siteData,
                    home: {
                        ...siteData.home,
                        contactCTA: ctaData
                    }
                };
                await saveToCloud(updatedData);
            }
            
            triggerToast('WhatsApp CTA Section updated successfully!');
        } catch (error) {
            console.error(error);
            triggerToast('Failed to save CTA Section.', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const resetChanges = () => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setCtaData(siteData.sectionData[instanceId].content);
            parseNumber(siteData.sectionData[instanceId].content);
        } else {
            setCtaData(siteData?.home?.contactCTA || {});
            parseNumber(siteData?.home?.contactCTA || {});
        }
        triggerToast('Changes reset.', 'info');
    };

    const sectionStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '15px',
        padding: '25px',
        marginBottom: '30px'
    };

    const inputStyle = {
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#fff',
        borderRadius: '10px'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
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
                            boxShadow: `0 10px 40px -10px rgba(0,0,0,0.5)`,
                            display: 'flex', alignItems: 'center', gap: '12px', color: '#fff', fontWeight: '600'
                        }}
                    >
                        <div style={{
                            width: '24px', height: '24px', borderRadius: '50%',
                            background: showToast.type === 'error' ? '#ef4444' : '#6669F1',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            {showToast.type === 'error' ? '!' : '✓'}
                        </div>
                        {showToast.message}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="text-white fw-bold mb-1">WhatsApp CTA Manager</h2>
                    <p className="text-white-50">
                        {instanceId ? `Editing instance: ${instanceId}` : "Customize the final call-to-action section."}
                    </p>
                </div>
                <div className="d-flex gap-3">
                    <Button variant="outline-light" onClick={resetChanges} className="d-flex align-items-center gap-2">
                        <ArrowClockwise size={18} /> Reset
                    </Button>
                    <Button
                        disabled={isSaving}
                        onClick={saveChanges}
                        className="d-flex align-items-center gap-2"
                        style={{ background: '#6669F1', border: 'none' }}
                    >
                        <Save size={18} /> {isSaving ? 'Saving...' : 'Save Changes'}
                    </Button>
                </div>
            </div>

            <Row className="justify-content-center">
                <Col lg={12}>
                    {/* Content Section */}
                    <div style={sectionStyle}>
                        <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                            <Type className="text-primary" /> Text Content
                        </h4>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-white-50 small">MAIN HEADING</Form.Label>
                                <Form.Control
                                    name="title"
                                    value={ctaData.title || ''}
                                    onChange={handleCTAChange}
                                    placeholder="Enter CTA heading..."
                                    style={inputStyle}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-white-50 small">DESCRIPTION</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="description"
                                    value={ctaData.description || ''}
                                    onChange={handleCTAChange}
                                    placeholder="Enter brief description..."
                                    style={inputStyle}
                                />
                            </Form.Group>
                        </Form>
                    </div>

                    {/* WhatsApp Configuration */}
                    <div style={sectionStyle}>
                        <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                            <Whatsapp className="text-success" /> WhatsApp Settings
                        </h4>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-white-50 small d-flex align-items-center gap-2">
                                        <Telephone size={14} /> WHATSAPP NUMBER
                                    </Form.Label>
                                    <div className="d-flex align-items-center gap-2">
                                        <div style={{ width: '80px' }}>
                                            <Form.Control
                                                style={inputStyle}
                                                value={selectedCode}
                                                onChange={handleCodeChange}
                                                maxLength={4}
                                                placeholder="Code"
                                            />
                                        </div>
                                        <div className="text-white-50">-</div>
                                        <Form.Control
                                            value={phoneNumber}
                                            onChange={handlePhoneBodyChange}
                                            placeholder="Phone Number (e.g. 3001234567)"
                                            style={inputStyle}
                                        />
                                    </div>
                                    <Form.Text className="text-white-50 mt-2 d-block small">
                                        <span className="text-primary fw-bold">Current Live Link: </span>
                                        wa.me/{ctaData.whatsappNumber || '(Empty)'}
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-white-50 small d-flex align-items-center gap-2">
                                        <ChatLeftText size={14} /> PRE-FILLED MESSAGE
                                    </Form.Label>
                                    <Form.Control
                                        name="whatsappMessage"
                                        value={ctaData.whatsappMessage || ''}
                                        onChange={handleCTAChange}
                                        placeholder="Enter default chat message..."
                                        style={inputStyle}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-white-50 small">WHATSAPP BUTTON LABEL</Form.Label>
                                    <Form.Control
                                        name="whatsappButtonText"
                                        value={ctaData.whatsappButtonText || ''}
                                        onChange={handleCTAChange}
                                        placeholder="Chat on WhatsApp"
                                        style={inputStyle}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-white-50 small">SECONDARY BUTTON LABEL</Form.Label>
                                    <Form.Control
                                        name="contactButtonText"
                                        value={ctaData.contactButtonText || ''}
                                        onChange={handleCTAChange}
                                        placeholder="Get in Touch"
                                        style={inputStyle}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>

            <style>{`
                input:focus, textarea:focus { 
                    background: rgba(255,255,255,0.08) !important;
                    border-color: #6669F1 !important;
                    box-shadow: none !important;
                    color: #fff !important;
                }
            `}</style>
        </motion.div>
    );
};

export default HomeCTAEditor;
