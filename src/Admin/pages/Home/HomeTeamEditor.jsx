import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useSiteData } from '../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, People, PlusCircle, Trash, Facebook, Twitter, Instagram, Image as ImageIcon } from 'react-bootstrap-icons';
import CloudinaryUploadWidget from '../../components/CloudinaryUploadWidget';
import { useLocation } from 'react-router-dom';

const HomeTeamEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId') || 'home_team_1';

    const [teamData, setTeamData] = useState(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            return siteData.sectionData[instanceId].content;
        }
        return siteData?.home?.team || { subtitle: "", title: "", description: "", members: [] };
    });

    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

    useEffect(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setTeamData(siteData.sectionData[instanceId].content);
        } else if (!instanceId && siteData?.home?.team) {
            setTeamData(siteData.home.team);
        }
    }, [siteData, instanceId]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const handleMetaChange = (e) => {
        setTeamData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const addMember = () => {
        setTeamData(prev => ({
            ...prev,
            members: [...(prev.members || []), { name: "", role: "", image: "", socials: { fb: "#", tw: "#", inst: "#" } }]
        }));
    };

    const removeMember = (index) => {
        const newMembers = teamData.members.filter((_, i) => i !== index);
        setTeamData(prev => ({ ...prev, members: newMembers }));
    };

    const updateMember = (index, field, value) => {
        const newMembers = [...teamData.members];
        if (field.includes('.')) {
            const [parent, child] = field.split('.');
            newMembers[index] = {
                ...newMembers[index],
                [parent]: { ...newMembers[index][parent], [child]: value }
            };
        } else {
            newMembers[index] = { ...newMembers[index], [field]: value };
        }
        setTeamData(prev => ({ ...prev, members: newMembers }));
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            if (instanceId) {
                updateSectionData(instanceId, teamData);
                
                const updatedData = {
                    ...siteData,
                    sectionData: {
                        ...siteData.sectionData,
                        [instanceId]: {
                            ...siteData.sectionData[instanceId],
                            content: teamData
                        }
                    }
                };
                await saveToCloud(updatedData);
            } else {
                const updatedData = {
                    ...siteData,
                    home: {
                        ...siteData.home,
                        team: teamData
                    }
                };
                await saveToCloud(updatedData);
            }

            triggerToast('Team Section updated successfully!');
        } catch (error) {
            console.error(error);
            triggerToast('Failed to save Team Section.', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const resetChanges = () => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setTeamData(siteData.sectionData[instanceId].content);
        } else {
            setTeamData(siteData?.home?.team || { subtitle: "", title: "", description: "", members: [] });
        }
        triggerToast('Changes reset.', 'info');
    };

    const sectionStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '15px',
        padding: '25px',
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
                    <h2 className="text-white fw-bold mb-1">Team Section</h2>
                    <p className="text-white-50">
                        {instanceId ? `Editing instance: ${instanceId}` : "Manage your leadership team and expert profiles."}
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
                        <Save size={18} /> {isSaving ? 'Saving...' : 'Publish'}
                    </Button>
                </div>
            </div>

            <div style={sectionStyle}>
                <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                    <People className="text-primary" /> Section Info
                </h4>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-white-50 small">SUBTITLE (e.g. How We Work)</Form.Label>
                            <Form.Control
                                name="subtitle"
                                value={teamData.subtitle}
                                onChange={handleMetaChange}
                                style={inputStyle}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-white-50 small">TITLE</Form.Label>
                            <Form.Control
                                name="title"
                                value={teamData.title}
                                onChange={handleMetaChange}
                                style={inputStyle}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-4">
                    <Form.Label className="text-white-50 small">DESCRIPTION</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="description"
                        value={teamData.description}
                        onChange={handleMetaChange}
                        style={inputStyle}
                    />
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <Form.Label className="text-white-50 small mb-0 font-weight-bold">TEAM MEMBERS</Form.Label>
                    <Button
                        variant="link"
                        size="sm"
                        className="text-primary p-0 text-decoration-none"
                        onClick={addMember}
                    >
                        <PlusCircle className="me-1" /> Add Member
                    </Button>
                </div>

                <Row>
                    {(teamData.members || []).map((member, index) => (
                        <Col md={6} key={index} className="mb-4">
                            <Card className="border-0 h-100" style={{ background: 'rgba(0,0,0,0.2)' }}>
                                <Card.Body className="position-relative p-3">
                                    <Button
                                        variant="link"
                                        className="position-absolute text-danger p-0"
                                        style={{ top: '10px', right: '10px', zIndex: 10 }}
                                        onClick={() => removeMember(index)}
                                    >
                                        <Trash size={16} />
                                    </Button>

                                    <div className="mb-3">
                                        <Form.Label className="text-white-50 extra-small fw-bold mb-2">PHOTO</Form.Label>
                                        <div className="d-flex align-items-center gap-3">
                                            <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: '#000', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                                {member.image ? <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <div className="w-100 h-100 d-flex align-items-center justify-content-center text-white-50"><ImageIcon /></div>}
                                            </div>
                                            <CloudinaryUploadWidget
                                                label="Upload"
                                                onUploadSuccess={(url) => updateMember(index, 'image', url)}
                                            />
                                        </div>
                                    </div>

                                    <Form.Group className="mb-2">
                                        <Form.Label className="text-white-50 extra-small fw-bold">FULL NAME</Form.Label>
                                        <Form.Control
                                            size="sm"
                                            value={member.name}
                                            onChange={(e) => updateMember(index, 'name', e.target.value)}
                                            style={inputStyle}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label className="text-white-50 extra-small fw-bold">ROLE</Form.Label>
                                        <Form.Control
                                            size="sm"
                                            value={member.role}
                                            onChange={(e) => updateMember(index, 'role', e.target.value)}
                                            style={inputStyle}
                                        />
                                    </Form.Group>

                                    <div className="p-2 rounded" style={{ background: 'rgba(255,255,255,0.03)' }}>
                                        <div className="text-white-50 extra-small fw-bold mb-2">SOCIAL LINKS</div>
                                        <div className="d-flex gap-2">
                                            <div className="flex-grow-1 position-relative">
                                                <Facebook size={12} className="position-absolute text-white-50" style={{ top: '10px', left: '8px' }} />
                                                <Form.Control size="sm" value={member.socials?.fb} onChange={(e) => updateMember(index, 'socials.fb', e.target.value)} style={{ ...inputStyle, paddingLeft: '28px', fontSize: '0.7rem' }} placeholder="Facebook URL" />
                                            </div>
                                            <div className="flex-grow-1 position-relative">
                                                <Twitter size={12} className="position-absolute text-white-50" style={{ top: '10px', left: '8px' }} />
                                                <Form.Control size="sm" value={member.socials?.tw} onChange={(e) => updateMember(index, 'socials.tw', e.target.value)} style={{ ...inputStyle, paddingLeft: '28px', fontSize: '0.7rem' }} placeholder="Twitter URL" />
                                            </div>
                                            <div className="flex-grow-1 position-relative">
                                                <Instagram size={12} className="position-absolute text-white-50" style={{ top: '10px', left: '8px' }} />
                                                <Form.Control size="sm" value={member.socials?.inst} onChange={(e) => updateMember(index, 'socials.inst', e.target.value)} style={{ ...inputStyle, paddingLeft: '28px', fontSize: '0.7rem' }} placeholder="Instagram URL" />
                                            </div>
                                        </div>
                                    </div>
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
                    box-shadow: none !important;
                    color: #fff !important;
                }
                .extra-small { font-size: 0.65rem; }
            `}</style>
        </motion.div>
    );
};

export default HomeTeamEditor;
