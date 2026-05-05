import React, { useState } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useSiteData } from '../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, InfoCircle, Envelope, Telephone, GeoAlt, Instagram, Twitter, Facebook, Trash, Link45deg, Type } from 'react-bootstrap-icons';

const FooterEditor = () => {
    const { siteData, saveToCloud } = useSiteData();

    // Local state for forms
    const [footerData, setFooterData] = useState(siteData.footer || {});
    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

    // Ensure state updates if siteData loads later
    React.useEffect(() => {
        if (siteData?.footer) {
            setFooterData(siteData.footer);
        }
    }, [siteData]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const handleFooterChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFooterData(prev => ({
                ...prev,
                [parent]: { ...prev[parent], [child]: value }
            }));
        } else {
            setFooterData(prev => ({ ...prev, [name]: value }));
        }
    };

    // Array logic for Core Services and Company Links
    const handleLinkArrayChange = (category, index, key, value) => {
        const newLinks = [...(footerData[category]?.links || [])];
        newLinks[index] = { ...newLinks[index], [key]: value };
        setFooterData(prev => ({
            ...prev,
            [category]: { ...prev[category], links: newLinks }
        }));
    };

    const addLink = (category) => {
        const newLinks = [...(footerData[category]?.links || []), { label: '', path: '' }];
        setFooterData(prev => ({
            ...prev,
            [category]: { ...prev[category], links: newLinks }
        }));
    };

    const removeLink = (category, index) => {
        const newLinks = footerData[category].links.filter((_, i) => i !== index);
         setFooterData(prev => ({
            ...prev,
            [category]: { ...prev[category], links: newLinks }
        }));
    };

    // Array logic for Bottom Links
    const handleBottomLinkChange = (index, key, value) => {
        const newLinks = [...(footerData.bottomLinks || [])];
        newLinks[index] = { ...newLinks[index], [key]: value };
        setFooterData(prev => ({ ...prev, bottomLinks: newLinks }));
    };

    const addBottomLink = () => {
        const newLinks = [...(footerData.bottomLinks || []), { label: '', path: '' }];
        setFooterData(prev => ({ ...prev, bottomLinks: newLinks }));
    };

    const removeBottomLink = (index) => {
        const newLinks = (footerData.bottomLinks || []).filter((_, i) => i !== index);
        setFooterData(prev => ({ ...prev, bottomLinks: newLinks }));
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            // Prepare the full data object for Firestore
            const updatedData = {
                ...siteData,
                footer: footerData
            };

            await saveToCloud(updatedData);
            triggerToast('Footer updated successfully!');
        } catch (error) {
            console.error(error);
            triggerToast('Failed to update footer.', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const resetChanges = () => {
        setFooterData(siteData.footer || {});
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
            className="footer-editor"
        >
            {/* Custom Toast Notification */}
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
                    <h2 className="text-white fw-bold mb-1">Footer Manager</h2>
                    <p className="text-white-50">This information updates both the main and internal page footers.</p>
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
                        <Save size={18} /> {isSaving ? 'Updating...' : 'Publish Changes'}
                    </Button>
                </div>
            </div>

            <Row>
                <Col lg={7}>
                    <div style={sectionStyle}>
                        <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                            <InfoCircle className="text-primary" /> Footer Company Info
                        </h4>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-white-50 small">FOOTER DESCRIPTION</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                name="description"
                                value={footerData.description || ''}
                                onChange={handleFooterChange}
                                style={inputStyle}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-white-50 small">OFFICE ADDRESS</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                name="address"
                                value={footerData.address || ''}
                                onChange={handleFooterChange}
                                style={inputStyle}
                            />
                        </Form.Group>
                    </div>

                    <div style={sectionStyle}>
                        <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                            <GeoAlt className="text-primary" /> Footer Direct Contact
                        </h4>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-white-50 small"><Envelope className="me-1"/> EMAIL</Form.Label>
                                    <Form.Control
                                        name="email"
                                        value={footerData.email || ''}
                                        onChange={handleFooterChange}
                                        style={inputStyle}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="text-white-50 small"><Telephone className="me-1"/> PHONE</Form.Label>
                                    <Form.Control
                                        name="phone"
                                        value={footerData.phone || ''}
                                        onChange={handleFooterChange}
                                        style={inputStyle}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col lg={5}>
                    <div style={sectionStyle}>
                        <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                            <Instagram className="text-primary" /> Social Links
                        </h4>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-white-50 small">INSTAGRAM URL</Form.Label>
                            <Form.Control
                                name="socials.instagram"
                                value={footerData.socials?.instagram || ''}
                                onChange={handleFooterChange}
                                style={inputStyle}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-white-50 small">TWITTER / X URL</Form.Label>
                            <Form.Control
                                name="socials.twitter"
                                value={footerData.socials?.twitter || ''}
                                onChange={handleFooterChange}
                                style={inputStyle}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-white-50 small">FACEBOOK URL</Form.Label>
                            <Form.Control
                                name="socials.facebook"
                                value={footerData.socials?.facebook || ''}
                                onChange={handleFooterChange}
                                style={inputStyle}
                            />
                        </Form.Group>
                    </div>

                    <div style={sectionStyle}>
                        <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                            <Type className="text-primary" /> Copyright & Bottom Bar
                        </h4>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-white-50 small">COPYRIGHT TEXT</Form.Label>
                            <Form.Control
                                name="copyrightText"
                                value={footerData.copyrightText || ''}
                                onChange={handleFooterChange}
                                style={inputStyle}
                            />
                        </Form.Group>
                        <h5 className="text-white-50 mt-4 mb-3" style={{fontSize: '14px'}}>Bottom Links (e.g. Sitemap, Privacy)</h5>
                        {(footerData.bottomLinks || []).map((link, idx) => (
                            <Row key={idx} className="mb-2 align-items-center">
                                <Col xs={5}>
                                    <Form.Control placeholder="Label" value={link.label} onChange={(e) => handleBottomLinkChange(idx, 'label', e.target.value)} style={inputStyle} />
                                </Col>
                                <Col xs={5}>
                                    <Form.Control placeholder="Path (e.g., /faq)" value={link.path} onChange={(e) => handleBottomLinkChange(idx, 'path', e.target.value)} style={inputStyle} />
                                </Col>
                                <Col xs={2}>
                                    <Button variant="outline-danger" size="sm" onClick={() => removeBottomLink(idx)}>
                                        <Trash />
                                    </Button>
                                </Col>
                            </Row>
                        ))}
                        <Button variant="outline-primary" size="sm" onClick={addBottomLink} className="mt-2 w-100">+ Add Bottom Link</Button>
                    </div>

                </Col>
            </Row>

            {/* Link List Editors Row */}
            <Row>
                <Col lg={6}>
                    <div style={sectionStyle}>
                        <h4 className="text-white mb-4 d-flex justify-content-between align-items-center">
                            <span><Link45deg className="text-primary me-2" /> Core Services List</span>
                        </h4>
                        <Form.Group className="mb-4">
                            <Form.Label className="text-white-50 small">COLUMN HEADING</Form.Label>
                            <Form.Control name="coreServices.heading" value={footerData.coreServices?.heading || ''} onChange={handleFooterChange} style={inputStyle} />
                        </Form.Group>
                        {(footerData.coreServices?.links || []).map((link, idx) => (
                            <Row key={idx} className="mb-2 align-items-center">
                                <Col xs={5}>
                                    <Form.Control placeholder="Label" value={link.label} onChange={(e) => handleLinkArrayChange('coreServices', idx, 'label', e.target.value)} style={inputStyle} />
                                </Col>
                                <Col xs={5}>
                                    <Form.Control placeholder="Path" value={link.path} onChange={(e) => handleLinkArrayChange('coreServices', idx, 'path', e.target.value)} style={inputStyle} />
                                </Col>
                                <Col xs={2}>
                                    <Button variant="outline-danger" size="sm" onClick={() => removeLink('coreServices', idx)}><Trash /></Button>
                                </Col>
                            </Row>
                        ))}
                        <Button variant="outline-primary" size="sm" onClick={() => addLink('coreServices')} className="mt-3 w-100">+ Add Core Service Link</Button>
                    </div>
                </Col>
                <Col lg={6}>
                    <div style={sectionStyle}>
                        <h4 className="text-white mb-4 d-flex justify-content-between align-items-center">
                            <span><Link45deg className="text-primary me-2" /> Company List</span>
                        </h4>
                        <Form.Group className="mb-4">
                            <Form.Label className="text-white-50 small">COLUMN HEADING</Form.Label>
                            <Form.Control name="company.heading" value={footerData.company?.heading || ''} onChange={handleFooterChange} style={inputStyle} />
                        </Form.Group>
                        {(footerData.company?.links || []).map((link, idx) => (
                            <Row key={idx} className="mb-2 align-items-center">
                                <Col xs={5}>
                                    <Form.Control placeholder="Label" value={link.label} onChange={(e) => handleLinkArrayChange('company', idx, 'label', e.target.value)} style={inputStyle} />
                                </Col>
                                <Col xs={5}>
                                    <Form.Control placeholder="Path" value={link.path} onChange={(e) => handleLinkArrayChange('company', idx, 'path', e.target.value)} style={inputStyle} />
                                </Col>
                                <Col xs={2}>
                                    <Button variant="outline-danger" size="sm" onClick={() => removeLink('company', idx)}><Trash /></Button>
                                </Col>
                            </Row>
                        ))}
                        <Button variant="outline-primary" size="sm" onClick={() => addLink('company')} className="mt-3 w-100">+ Add Company Link</Button>
                    </div>
                </Col>
            </Row>

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

export default FooterEditor;
