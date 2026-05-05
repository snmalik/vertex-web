import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSiteData } from '../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, Type, Image as ImageIcon } from 'react-bootstrap-icons';
import CloudinaryUploadWidget from '../../components/CloudinaryUploadWidget';
import { useLocation } from 'react-router-dom';

const HomeHeroEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId') || 'home_hero_1'; // Default for the shortcut

    // Local state for heroData
    const [heroData, setHeroData] = useState(() => {
        if (siteData?.sectionData?.[instanceId]) {
            return siteData.sectionData[instanceId].content;
        }
        return siteData?.home?.hero || {};
    });

    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

    // Sync state if siteData changes
    useEffect(() => {
        if (siteData?.sectionData?.[instanceId]) {
            setHeroData(siteData.sectionData[instanceId].content);
        }
    }, [siteData, instanceId]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const handleHeroChange = (e) => {
        const { name, value } = e.target;
        setHeroData(prev => ({ ...prev, [name]: value }));
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            updateSectionData(instanceId, heroData);
            const updatedData = {
                ...siteData,
                sectionData: {
                    ...siteData.sectionData,
                    [instanceId]: {
                        ...siteData.sectionData[instanceId],
                        content: heroData
                    }
                }
            };
            await saveToCloud(updatedData);
            triggerToast('Hero Section updated successfully!');
        } catch (error) {
            console.error(error);
            triggerToast('Failed to save Hero Section.', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const resetChanges = () => {
        if (siteData?.sectionData?.[instanceId]) {
            setHeroData(siteData.sectionData[instanceId].content);
        }
        triggerToast('Changes reset.', 'info');
    };

    const sectionStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '15px',
        padding: '25px',
        marginBottom: '30px',
        maxWidth: '900px',
        margin: '0 auto'
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

            <div className="d-flex justify-content-between align-items-center mb-4" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div>
                    <h2 className="text-white fw-bold mb-1">Hero Section</h2>
                    <p className="text-white-50">Manage Hero content for instance: {instanceId}</p>
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
                        <Save size={18} /> {isSaving ? 'Saving...' : 'Publish Changes'}
                    </Button>
                </div>
            </div>

            <div style={sectionStyle}>
                <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                    <Type className="text-primary" /> Hero Text Content
                </h4>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-white-50 small">TOP TAGLINE</Form.Label>
                        <Form.Control
                            name="topText"
                            value={heroData.topText || ''}
                            onChange={handleHeroChange}
                            style={inputStyle}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-white-50 small">MAIN TITLE (HTML ALLOWED)</Form.Label>
                        <Form.Control
                            name="title"
                            value={heroData.title || ''}
                            onChange={handleHeroChange}
                            style={inputStyle}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-white-50 small">DESCRIPTION</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            value={heroData.description || ''}
                            onChange={handleHeroChange}
                            style={inputStyle}
                        />
                    </Form.Group>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-white-50 small">PRIMARY BUTTON</Form.Label>
                                <Form.Control
                                    name="primaryBtn"
                                    value={heroData.primaryBtn || ''}
                                    onChange={handleHeroChange}
                                    style={inputStyle}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-white-50 small">SECONDARY BUTTON</Form.Label>
                                <Form.Control
                                    name="secondaryBtn"
                                    value={heroData.secondaryBtn || ''}
                                    onChange={handleHeroChange}
                                    style={inputStyle}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-white-50 small">TRUST LINE (TEXT BENEATH BUTTONS)</Form.Label>
                        <Form.Control
                            name="trustLine"
                            value={heroData.trustLine || ''}
                            onChange={handleHeroChange}
                            style={inputStyle}
                            placeholder="e.g. ✔ 15+ Years Experience | ✔ Global Support"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4 p-3 rounded" style={{ background: 'rgba(0,0,0,0.2)' }}>
                        <Form.Label className="text-white-50 small d-flex align-items-center gap-2 mb-3">
                            <ImageIcon /> DYNAMIC IMAGES (CLOUDINARY)
                        </Form.Label>
                        <Row>
                            <Col md={6}>
                                <div className="mb-3">
                                    <div className="text-white-50 extra-small mb-1">HERO IMAGE 1 (LEFT)</div>
                                    {heroData.heroImgUrl1 && <img src={heroData.heroImgUrl1} alt="Hero 1" className="img-thumbnail mb-2" style={{ maxHeight: '60px', background: '#000' }} />}
                                    <CloudinaryUploadWidget
                                        label={heroData.heroImgUrl1 ? "Change Left Image" : "Upload Left Image"}
                                        onUploadSuccess={(url) => setHeroData(prev => ({ ...prev, heroImgUrl1: url }))}
                                    />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="mb-3">
                                    <div className="text-white-50 extra-small mb-1">HERO IMAGE 2 (RIGHT)</div>
                                    {heroData.heroImgUrl2 && <img src={heroData.heroImgUrl2} alt="Hero 2" className="img-thumbnail mb-2" style={{ maxHeight: '60px', background: '#000' }} />}
                                    <CloudinaryUploadWidget
                                        label={heroData.heroImgUrl2 ? "Change Right Image" : "Upload Right Image"}
                                        onUploadSuccess={(url) => setHeroData(prev => ({ ...prev, heroImgUrl2: url }))}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </div>

            <style>{`
                textarea:focus, input:focus { 
                    background: rgba(255,255,255,0.08) !important;
                    border-color: #6669F1 !important;
                    box-shadow: none !important;
                    color: #fff !important;
                }
                .extra-small { font-size: 0.65rem; }
            `}</style>
        </motion.div>
    );
};

export default HomeHeroEditor;
