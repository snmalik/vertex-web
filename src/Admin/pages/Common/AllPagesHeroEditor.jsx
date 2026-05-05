import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Badge } from 'react-bootstrap';
import { useSiteData } from '../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, Type, ListUl, Plus, Trash } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';

const AllPagesHeroEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId');

    const [heroData, setHeroData] = useState({
        title: '',
        pathnames: []
    });

    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });
    const [newPathname, setNewPathname] = useState('');

    useEffect(() => {
        if (siteData?.sectionData?.[instanceId]) {
            setHeroData(siteData.sectionData[instanceId].content || { title: '', pathnames: [] });
        }
    }, [siteData, instanceId]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const handleTitleChange = (e) => {
        setHeroData(prev => ({ ...prev, title: e.target.value }));
    };

    const addPathname = () => {
        if (newPathname.trim()) {
            setHeroData(prev => ({
                ...prev,
                pathnames: [...(prev.pathnames || []), newPathname.trim()]
            }));
            setNewPathname('');
        }
    };

    const removePathname = (index) => {
        setHeroData(prev => ({
            ...prev,
            pathnames: prev.pathnames.filter((_, i) => i !== index)
        }));
    };

    const saveChanges = async () => {
        if (!instanceId) return;
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
            triggerToast('Page Hero updated successfully!');
        } catch (error) {
            console.error(error);
            triggerToast('Failed to save Page Hero.', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const resetChanges = () => {
        if (siteData?.sectionData?.[instanceId]) {
            setHeroData(siteData.sectionData[instanceId].content || { title: '', pathnames: [] });
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
                            background: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(12px)',
                            border: `1px solid ${showToast.type === 'error' ? '#ef4444' : '#6669F1'}`,
                            display: 'flex', alignItems: 'center', gap: '12px', color: '#fff', fontWeight: '600'
                        }}
                    >
                        {showToast.message}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="d-flex justify-content-between align-items-center mb-4" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div>
                    <h2 className="text-white fw-bold mb-1">Dynamic Page Hero</h2>
                    <p className="text-white-50">Manage Hero title and breadcrumbs for: {instanceId}</p>
                </div>
                <div className="d-flex gap-3">
                    <Button variant="outline-light" onClick={resetChanges}>
                        <ArrowClockwise size={18} /> Reset
                    </Button>
                    <Button
                        disabled={isSaving}
                        onClick={saveChanges}
                        style={{ background: '#6669F1', border: 'none' }}
                    >
                        <Save size={18} /> {isSaving ? 'Saving...' : 'Publish Changes'}
                    </Button>
                </div>
            </div>

            <div style={sectionStyle}>
                <Form>
                    <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                        <Type className="text-primary" /> Title Configuration
                    </h4>
                    <Form.Group className="mb-4">
                        <Form.Label className="text-white-50 small">HERO TITLE</Form.Label>
                        <Form.Control
                            value={heroData.title || ''}
                            onChange={handleTitleChange}
                            placeholder="e.g. About Us"
                            style={inputStyle}
                        />
                        <Form.Text className="text-white-50 opacity-50">
                            Leave empty to use the auto-generated title based on the page URL.
                        </Form.Text>
                    </Form.Group>

                    <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                        <ListUl className="text-primary" /> Breadcrumb Pathnames
                    </h4>
                    <Form.Group className="mb-4">
                        <Form.Label className="text-white-50 small">CUSTOM PATHNAMES (OPTIONAL)</Form.Label>
                        <div className="d-flex gap-2 mb-3">
                            <Form.Control
                                value={newPathname}
                                onChange={(e) => setNewPathname(e.target.value)}
                                placeholder="Add a step (e.g. Company)"
                                style={inputStyle}
                                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addPathname())}
                            />
                            <Button variant="primary" onClick={addPathname} style={{ borderRadius: '10px' }}>
                                <Plus size={24} />
                            </Button>
                        </div>

                        <div className="d-flex flex-wrap gap-2 p-3 rounded" style={{ background: 'rgba(0,0,0,0.2)', minHeight: '60px' }}>
                            {(!heroData.pathnames || heroData.pathnames.length === 0) ? (
                                <span className="text-white-50 opacity-50 small">No custom pathnames. Using auto-generated breadcrumbs.</span>
                            ) : (
                                heroData.pathnames.map((path, index) => (
                                    <Badge 
                                        key={index} 
                                        bg="none" 
                                        className="d-flex align-items-center gap-2 py-2 px-3" 
                                        style={{ background: 'rgba(102, 105, 241, 0.2)', border: '1px solid rgba(102, 105, 241, 0.3)', borderRadius: '8px' }}
                                    >
                                        <span className="text-white">{path}</span>
                                        <Trash 
                                            size={14} 
                                            className="text-danger cursor-pointer" 
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => removePathname(index)}
                                        />
                                    </Badge>
                                ))
                            )}
                        </div>
                        <Form.Text className="text-white-50 opacity-50 d-block mt-2">
                            Add custom labels for the breadcrumb navigation. "Home" is always included at the start.
                        </Form.Text>
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
            `}</style>
        </motion.div>
    );
};

export default AllPagesHeroEditor;
