import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useSiteData } from '../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, ListCheck } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';

const HomeStatsEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId') || 'home_stats_1';

    // Local state for statsData
    const [statsData, setStatsData] = useState(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            return siteData.sectionData[instanceId].content?.stats || [];
        }
        return siteData?.home?.stats || [];
    });

    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

    // Sync if siteData changes
    useEffect(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setStatsData(siteData.sectionData[instanceId].content?.stats || []);
        } else if (!instanceId && siteData?.home?.stats) {
            setStatsData(siteData.home.stats);
        }
    }, [siteData, instanceId]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const handleStatChange = (index, field, value) => {
        const newStats = [...statsData];
        newStats[index] = { ...newStats[index], [field]: field === 'end' ? parseInt(value) || 0 : value };
        setStatsData(newStats);
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            if (instanceId) {
                updateSectionData(instanceId, { stats: statsData });
                
                const updatedData = {
                    ...siteData,
                    sectionData: {
                        ...siteData.sectionData,
                        [instanceId]: {
                            ...siteData.sectionData[instanceId],
                            content: { stats: statsData }
                        }
                    }
                };
                await saveToCloud(updatedData);
            } else {
                const updatedData = {
                    ...siteData,
                    home: {
                        ...siteData.home,
                        stats: statsData
                    }
                };
                await saveToCloud(updatedData);
            }

            triggerToast('Statistics updated successfully!');
        } catch (error) {
            console.error(error);
            triggerToast('Failed to save Statistics.', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const resetChanges = () => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setStatsData(siteData.sectionData[instanceId].content?.stats || []);
        } else {
            setStatsData(siteData?.home?.stats || []);
        }
        triggerToast('Changes reset.', 'info');
    };

    const sectionStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '15px',
        padding: '25px',
        maxWidth: '600px',
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

            <div className="d-flex justify-content-between align-items-center mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div>
                    <h2 className="text-white fw-bold mb-1">Website Statistics</h2>
                    <p className="text-white-50">
                        {instanceId ? `Editing instance: ${instanceId}` : "Manage the numeric highlights on your landing page."}
                    </p>
                </div>
                <div className="d-flex gap-3">
                    <Button variant="outline-light" onClick={resetChanges} className="d-flex align-items-center gap-3">
                        <ArrowClockwise size={18} /> Reset
                    </Button>
                    <Button
                        disabled={isSaving}
                        onClick={saveChanges}
                        className="d-flex align-items-center gap-2"
                        style={{ background: '#6669F1', border: 'none' }}
                    >
                        <Save size={18} /> {isSaving ? 'Saving...' : 'Publish'}
                    </Button>
                </div>
            </div>

            <div style={sectionStyle}>
                <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                    <ListCheck className="text-primary" /> Key Performance Indicators
                </h4>
                {statsData.map((stat, index) => (
                    <Card key={stat.id} className="mb-3 border-0" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <Card.Body className="p-3">
                            <Form.Group className="mb-2">
                                <Form.Label className="text-white-50 extra-small fw-bold">LABEL (e.g. Projects Completed)</Form.Label>
                                <Form.Control
                                    size="sm"
                                    value={stat.label}
                                    onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                                    style={inputStyle}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="text-white-50 extra-small fw-bold">NUMBER</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="number"
                                    value={stat.end}
                                    onChange={(e) => handleStatChange(index, 'end', e.target.value)}
                                    style={inputStyle}
                                />
                            </Form.Group>
                        </Card.Body>
                    </Card>
                ))}
            </div>

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

export default HomeStatsEditor;
