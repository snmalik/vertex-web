import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSiteData } from '../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, Map as MapIcon } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';

const ContactMapEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId') || 'contact_map_1';

    const [contactData, setContactData] = useState(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            return siteData.sectionData[instanceId].content;
        }
        return siteData?.contact?.page || {};
    });
    
    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

    useEffect(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setContactData(siteData.sectionData[instanceId].content);
        } else if (!instanceId && siteData?.contact?.page) {
            setContactData(siteData.contact.page);
        }
    }, [siteData, instanceId]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactData(prev => ({ ...prev, [name]: value }));
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            if (instanceId) {
                updateSectionData(instanceId, contactData);
                const updatedData = {
                    ...siteData,
                    sectionData: {
                        ...siteData.sectionData,
                        [instanceId]: {
                            ...siteData.sectionData[instanceId],
                            content: contactData
                        }
                    }
                };
                await saveToCloud(updatedData);
            } else {
                const updatedData = {
                    ...siteData,
                    contact: {
                        ...siteData.contact,
                        page: contactData
                    }
                };
                await saveToCloud(updatedData);
            }
            triggerToast('Google Map settings updated!');
        } catch (error) {
            console.error(error);
            triggerToast('Failed to update map.', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const resetChanges = () => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setContactData(siteData.sectionData[instanceId].content);
        } else {
            setContactData(siteData?.contact?.page || {});
        }
        triggerToast('Changes reset.', 'info');
    };

    const sectionStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '15px',
        padding: '25px',
        maxWidth: '700px',
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

            <div className="d-flex justify-content-between align-items-center mb-4" style={{maxWidth: '700px', margin: '0 auto'}}>
                <div>
                    <h2 className="text-white fw-bold mb-1">Map Settings</h2>
                    <p className="text-white-50">Configure your Google Maps location embed.</p>
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
                        <Save size={18} /> {isSaving ? 'Updating...' : 'Publish'}
                    </Button>
                </div>
            </div>

            <div style={sectionStyle}>
                <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                    <MapIcon className="text-primary" /> Google Map Embed Configuration
                </h4>
                <Form.Group className="mb-3">
                    <Form.Label className="text-white-50 small">EMBED URL (src)</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={8}
                        name="mapUrl"
                        value={contactData.mapUrl || ''}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Paste the 'src' link from a Google Maps embed code"
                    />
                    <Form.Text className="text-white-50 d-block mt-3" style={{fontSize: '0.85rem'}}>
                        <ul className="mb-0 ps-3">
                            <li>Go to <strong>Google Maps</strong></li>
                            <li>Search for your location</li>
                            <li>Click <strong>Share</strong> &gt; <strong>Embed a map</strong></li>
                            <li>Copy the HTML and extract only the URL inside the <strong>src="..."</strong> attribute</li>
                        </ul>
                    </Form.Text>
                </Form.Group>

                {contactData.mapUrl && (
                    <div className="mt-4 rounded overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                        <div className="text-white-50 extra-small p-2 bg-dark">MAP PREVIEW</div>
                        <iframe 
                            src={contactData.mapUrl} 
                            width="100%" 
                            height="250" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy"
                        ></iframe>
                    </div>
                )}
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

export default ContactMapEditor;
