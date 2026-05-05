import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSiteData } from '../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, Type, Trash, PlusCircle, Image } from 'react-bootstrap-icons';
import CloudinaryUploadWidget from '../../components/CloudinaryUploadWidget';
import { useLocation } from 'react-router-dom';

const AboutUsEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId');

    // Local state for forms
    const [aboutData, setAboutData] = useState(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            return siteData.sectionData[instanceId].content;
        }
        return siteData?.common?.about || {};
    });

    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

    // Sync if siteData changes
    useEffect(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setAboutData(siteData.sectionData[instanceId].content);
        } else if (!instanceId && siteData?.common?.about) {
            setAboutData(siteData.common.about);
        }
    }, [siteData, instanceId]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const handleAboutChange = (e) => {
        const { name, value } = e.target;
        setAboutData(prev => ({ ...prev, [name]: value }));
    };

    const handleDescriptionChange = (index, value) => {
        const newDescs = [...aboutData.descriptions];
        newDescs[index] = value;
        setAboutData(prev => ({ ...prev, descriptions: newDescs }));
    };

    const addDescription = () => {
        setAboutData(prev => ({
            ...prev,
            descriptions: [...(prev.descriptions || []), ""]
        }));
    };

    const removeDescription = (index) => {
        const newDescs = aboutData.descriptions.filter((_, i) => i !== index);
        setAboutData(prev => ({ ...prev, descriptions: newDescs }));
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            const cleanAboutData = { ...aboutData };
            
            if (instanceId) {
                updateSectionData(instanceId, cleanAboutData);
                
                const updatedData = {
                    ...siteData,
                    sectionData: {
                        ...siteData.sectionData,
                        [instanceId]: {
                            ...siteData.sectionData[instanceId],
                            content: cleanAboutData
                        }
                    }
                };
                await saveToCloud(updatedData);
            } else {
                const updatedData = {
                    ...siteData,
                    common: {
                        ...siteData.common,
                        about: cleanAboutData
                    }
                };
                await saveToCloud(updatedData);
            }

            triggerToast('About Us content saved successfully!');
        } catch (error) {
            console.error(error);
            triggerToast('Failed to save changes. Please try again.', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const resetChanges = () => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setAboutData(siteData.sectionData[instanceId].content);
        } else {
            setAboutData(siteData?.common?.about || {});
        }
        triggerToast('All changes reset to latest saved state.', 'info');
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
            className="home-editor"
        >
            <AnimatePresence>
                {showToast.show && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, x: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8, y: -20 }}
                        className={`admin-toast ${showToast.type}`}
                        style={{
                            position: 'fixed', top: '20px', right: '20px', zIndex: 9999,
                            padding: '16px 24px', borderRadius: '16px',
                            background: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(12px)',
                            border: `1px solid ${showToast.type === 'error' ? '#ef4444' : '#6669F1'}`,
                            display: 'flex', alignItems: 'center', gap: '12px', color: '#fff', fontWeight: '600'
                        }}
                    >
                        <div style={{
                            width: '24px', height: '24px', borderRadius: '50%',
                            background: showToast.type === 'error' ? '#ef4444' : '#6669F1',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px'
                        }}>
                            {showToast.type === 'error' ? '!' : '✓'}
                        </div>
                        {showToast.message}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="d-flex justify-content-between align-items-center mb-4" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div>
                    <h2 className="text-white fw-bold mb-1">About Us Editor</h2>
                    <p className="text-white-50">
                        {instanceId ? `Editing instance: ${instanceId}` : "Manage the shared About snippet."}
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
                    <div style={sectionStyle}>
                        <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                            <Type className="text-primary" /> Content & Images
                        </h4>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-white-50 small">SUB TITLE</Form.Label>
                                <Form.Control
                                    name="subTitle"
                                    value={aboutData.subTitle || ''}
                                    onChange={handleAboutChange}
                                    style={inputStyle}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-white-50 small">MAIN HEADING</Form.Label>
                                <Form.Control
                                    name="title"
                                    value={aboutData.title || ''}
                                    onChange={handleAboutChange}
                                    style={inputStyle}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4 p-3 rounded" style={{ background: 'rgba(0,0,0,0.2)' }}>
                                <Form.Label className="text-white-50 small d-flex align-items-center gap-2 mb-3">
                                    <Image /> DYNAMIC IMAGES (CLOUDINARY)
                                </Form.Label>
                                <Row>
                                    <Col md={6}>
                                        <div className="mb-3">
                                            <div className="text-white-50 extra-small mb-1">MAIN IMAGE (LARGE)</div>
                                            {aboutData.mainImgUrl && <img src={aboutData.mainImgUrl} alt="Main" className="img-thumbnail mb-2" style={{ maxHeight: '60px', background: '#000' }} />}
                                            <CloudinaryUploadWidget
                                                label={aboutData.mainImgUrl ? "Change Main Image" : "Upload Main Image"}
                                                onUploadSuccess={(url) => setAboutData(prev => ({ ...prev, mainImgUrl: url }))}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <div className="text-white-50 extra-small mb-1">SUB IMAGE 1 (TOP)</div>
                                            {aboutData.img1Url && <img src={aboutData.img1Url} alt="Sub 1" className="img-thumbnail mb-2" style={{ maxHeight: '60px', background: '#000' }} />}
                                            <CloudinaryUploadWidget
                                                label={aboutData.img1Url ? "Change Image 1" : "Upload Image 1"}
                                                onUploadSuccess={(url) => setAboutData(prev => ({ ...prev, img1Url: url }))}
                                            />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="mb-3">
                                            <div className="text-white-50 extra-small mb-1">SUB IMAGE 2 (BOTTOM)</div>
                                            {aboutData.img2Url && <img src={aboutData.img2Url} alt="Sub 2" className="img-thumbnail mb-2" style={{ maxHeight: '60px', background: '#000' }} />}
                                            <CloudinaryUploadWidget
                                                label={aboutData.img2Url ? "Change Image 2" : "Upload Image 2"}
                                                onUploadSuccess={(url) => setAboutData(prev => ({ ...prev, img2Url: url }))}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <div className="text-white-50 extra-small mb-1">SUB IMAGE 3 (SMALL)</div>
                                            {aboutData.img3Url && <img src={aboutData.img3Url} alt="Sub 3" className="img-thumbnail mb-2" style={{ maxHeight: '60px', background: '#000' }} />}
                                            <CloudinaryUploadWidget
                                                label={aboutData.img3Url ? "Change Image 3" : "Upload Image 3"}
                                                onUploadSuccess={(url) => setAboutData(prev => ({ ...prev, img3Url: url }))}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="text-white-50 small d-flex justify-content-between align-items-center">
                                    DESCRIPTION BLOCKS
                                    <Button
                                        variant="link"
                                        size="sm"
                                        className="text-primary p-0 text-decoration-none"
                                        onClick={addDescription}
                                    >
                                        <PlusCircle className="me-1" /> Add Paragraph
                                    </Button>
                                </Form.Label>
                                {(aboutData.descriptions || []).map((desc, index) => (
                                    <div key={index} className="position-relative mb-3">
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            value={desc}
                                            onChange={(e) => handleDescriptionChange(index, e.target.value)}
                                            style={{ ...inputStyle, paddingRight: '40px' }}
                                            placeholder={`Paragraph ${index + 1}`}
                                        />
                                        <Button
                                            variant="link"
                                            className="position-absolute text-danger p-0"
                                            style={{ top: '10px', right: '10px' }}
                                            onClick={() => removeDescription(index)}
                                            title="Remove paragraph"
                                        >
                                            <Trash size={16} />
                                        </Button>
                                    </div>
                                ))}
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
            </Row>

            <style>{`
                .extra-small { font-size: 0.65rem; }
                textarea:focus, input:focus { 
                    background: rgba(255,255,255,0.08) !important;
                    border-color: #6669F1 !important;
                    box-shadow: none !important;
                    color: #fff !important;
                }
            `}</style>
        </motion.div>
    );
};

export default AboutUsEditor;
