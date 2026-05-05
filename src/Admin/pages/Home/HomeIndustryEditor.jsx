import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Row, Col, InputGroup } from 'react-bootstrap';
import { useSiteData } from '../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, Grid, PlusCircle, Trash, Search } from 'react-bootstrap-icons';
import { resolveIcon } from '../../../utils/iconResolver';
import IconPicker from '../../components/IconPicker';
import { useLocation } from 'react-router-dom';

const HomeIndustryEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId') || 'home_industry_1';

    const [industryData, setIndustryData] = useState(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            return siteData.sectionData[instanceId].content;
        }
        return siteData?.home?.industryGrid || { title: "", accentTitle: "", industries: [] };
    });

    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

    // Icon Picker State
    const [pickerState, setPickerState] = useState({ show: false, index: null, current: '' });

    useEffect(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setIndustryData(siteData.sectionData[instanceId].content);
        } else if (!instanceId && siteData?.home?.industryGrid) {
            setIndustryData(siteData.home.industryGrid);
        }
    }, [siteData, instanceId]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const handleMetaChange = (e) => {
        setIndustryData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const addIndustry = () => {
        setIndustryData(prev => ({
            ...prev,
            industries: [...(prev.industries || []), { title: "", iconName: "BsBoxSeam" }]
        }));
    };

    const removeIndustry = (index) => {
        const newIndustries = industryData.industries.filter((_, i) => i !== index);
        setIndustryData(prev => ({ ...prev, industries: newIndustries }));
    };

    const updateIndustry = (index, field, value) => {
        const newIndustries = [...industryData.industries];
        newIndustries[index] = { ...newIndustries[index], [field]: value };
        setIndustryData(prev => ({ ...prev, industries: newIndustries }));
    };

    const openPicker = (index, current) => {
        setPickerState({ show: true, index, current });
    };

    const handleIconSelect = (iconName) => {
        if (pickerState.index !== null) {
            updateIndustry(pickerState.index, 'iconName', iconName);
        }
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            if (instanceId) {
                updateSectionData(instanceId, industryData);
                
                const updatedData = {
                    ...siteData,
                    sectionData: {
                        ...siteData.sectionData,
                        [instanceId]: {
                            ...siteData.sectionData[instanceId],
                            content: industryData
                        }
                    }
                };
                await saveToCloud(updatedData);
            } else {
                const updatedData = {
                    ...siteData,
                    home: {
                        ...siteData.home,
                        industryGrid: industryData
                    }
                };
                await saveToCloud(updatedData);
            }

            triggerToast('Industry Grid updated successfully!');
        } catch (error) {
            console.error(error);
            triggerToast('Failed to save Industry Grid.', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const resetChanges = () => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setIndustryData(siteData.sectionData[instanceId].content);
        } else {
            setIndustryData(siteData?.home?.industryGrid || { title: "", accentTitle: "", industries: [] });
        }
        triggerToast('Changes reset.', 'info');
    };

    const inputStyle = {
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#fff',
        borderRadius: '10px'
    };

    const sectionStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '15px',
        padding: '25px',
        maxWidth: '900px',
        margin: '0 auto'
    };

    const labelStyle = {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '0.65rem',
        fontWeight: '800',
        letterSpacing: '0.5px',
        marginBottom: '8px'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
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

            <div className="d-flex justify-content-between align-items-center mb-4" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div>
                    <h2 className="text-white fw-bold mb-1">Industry Transformation</h2>
                    <p className="text-white-50">
                        {instanceId ? `Editing instance: ${instanceId}` : "Manage industry sectors and icons."}
                    </p>
                </div>
                <div className="d-flex gap-3">
                    <Button variant="outline-light" onClick={resetChanges} className="d-flex align-items-center gap-2 rounded-pill px-4 border-opacity-25">
                        <ArrowClockwise size={18} /> Reset
                    </Button>
                    <Button
                        disabled={isSaving}
                        onClick={saveChanges}
                        className="d-flex align-items-center gap-2 rounded-pill px-5 shadow-lg border-0"
                        style={{ background: 'linear-gradient(135deg, #6669F1 0%, #a855f7 100%)', fontWeight: 600 }}
                    >
                        <Save size={18} /> {isSaving ? 'Synchronizing...' : 'Publish'}
                    </Button>
                </div>
            </div>

            <div style={sectionStyle}>
                <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                    <Grid className="text-primary" /> Header Config
                </h4>
                <Row>
                    <Col md={12}>
                        <Form.Group className="mb-3">
                            <Form.Label style={labelStyle}>TITLE BEFORE ACCENT</Form.Label>
                            <Form.Control
                                name="title"
                                value={industryData.title}
                                onChange={handleMetaChange}
                                style={inputStyle}
                                placeholder="e.g. Driving Industry Transformation Through"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className="mb-4">
                            <Form.Label style={labelStyle}>ACCENT TITLE (e.g. Innovative Solutions)</Form.Label>
                            <Form.Control
                                name="accentTitle"
                                value={industryData.accentTitle}
                                onChange={handleMetaChange}
                                style={inputStyle}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <hr style={{ borderTop: '1px solid rgba(255,255,255,0.05)', margin: '30px 0' }} />

                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="text-white mb-0 fw-bold">INDUSTRY CARDS</h5>
                    <Button
                        variant="outline-primary"
                        size="sm"
                        className="rounded-pill px-3 py-1"
                        style={{ color: '#6669F1', borderColor: 'rgba(102, 105, 241, 0.3)' }}
                        onClick={addIndustry}
                    >
                        <PlusCircle size={16} className="me-2" /> Add Sector
                    </Button>
                </div>

                <Row>
                    {industryData.industries.map((item, index) => (
                        <Col md={6} key={index} className="mb-4">
                            <Card className="border-0 shadow-sm" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '20px' }}>
                                <Card.Body className="position-relative p-4">
                                    <Button
                                        variant="link"
                                        className="position-absolute text-danger p-0"
                                        style={{ top: '15px', right: '15px', zIndex: 10, opacity: 0.6 }}
                                        onClick={() => removeIndustry(index)}
                                    >
                                        <Trash size={18} />
                                    </Button>

                                    <Row className="g-3">
                                        <Col md={12}>
                                            <Form.Label style={labelStyle}>VISUAL IDENTITY</Form.Label>
                                            <div className="d-flex align-items-center gap-3">
                                                <div style={{
                                                    width: '64px',
                                                    height: '64px',
                                                    background: 'rgba(102, 105, 241, 0.1)',
                                                    borderRadius: '16px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '2rem',
                                                    color: '#6669F1',
                                                    border: '1px solid rgba(102, 105, 241, 0.2)'
                                                }}>
                                                    {resolveIcon(item.iconName) || <Grid />}
                                                </div>
                                                <div className="flex-grow-1">
                                                    <InputGroup className="flex-nowrap shadow-none">
                                                        <Form.Control
                                                            readOnly
                                                            value={item.iconName}
                                                            style={{ ...inputStyle, borderRight: 'none', background: 'rgba(0,0,0,0.2)' }}
                                                            placeholder="Select icon..."
                                                        />
                                                        <Button
                                                            variant="outline-primary"
                                                            onClick={() => openPicker(index, item.iconName)}
                                                            style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}
                                                        >
                                                            <Search size={16} className="text-white" />
                                                        </Button>
                                                    </InputGroup>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Label style={labelStyle}>INDUSTRY NAME</Form.Label>
                                            <Form.Control
                                                value={item.title}
                                                onChange={(e) => updateIndustry(index, 'title', e.target.value)}
                                                style={inputStyle}
                                                placeholder="e.g. Finance, Healthcare..."
                                            />
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            <style>{`
                textarea:focus, input:focus { 
                    background: rgba(255,255,255,0.08) !important;
                    border-color: #6669F1 !important;
                    box-shadow: 0 0 0 4px rgba(102, 105, 241, 0.1) !important;
                    color: #fff !important;
                }
                .btn-outline-primary:hover {
                    background: rgba(102, 105, 241, 0.1) !important;
                    border-color: #6669F1 !important;
                }
            `}</style>
        </motion.div>
    );
};

export default HomeIndustryEditor;
