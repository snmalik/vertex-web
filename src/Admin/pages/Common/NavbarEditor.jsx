import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Row, Col, ListGroup, InputGroup } from 'react-bootstrap';
import { useSiteData } from '../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, PlusCircle, Trash, Link45deg, Box, Grid, List as ListIcon, Type, Image as ImageIcon } from 'react-bootstrap-icons';
import CloudinaryUploadWidget from '../../components/CloudinaryUploadWidget';

const NavbarEditor = () => {
  const { siteData, updateTopLevelSection, saveToCloud } = useSiteData();
  const [navbar, setNavbar] = useState(siteData?.navbar || { menuItems: [], servicesData: {} });
  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

  useEffect(() => {
    if (siteData?.navbar) {
       setNavbar(siteData.navbar);
    }
  }, [siteData]);

  const triggerToast = (message, type = 'success') => {
    setShowToast({ show: true, message, type });
    setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
  };

  const updateNavbarField = (field, value) => {
    setNavbar(prev => ({ ...prev, [field]: value }));
  };

  // --- Menu Items Logic ---
  const addMenuItem = () => {
    const updated = [...(navbar.menuItems || []), { name: "New Link", path: "/" }];
    updateNavbarField('menuItems', updated);
  };

  const removeMenuItem = (index) => {
    const updated = navbar.menuItems.filter((_, i) => i !== index);
    updateNavbarField('menuItems', updated);
  };

  const updateMenuItem = (index, field, value) => {
    const updated = navbar.menuItems.map((item, i) => i === index ? { ...item, [field]: value } : item);
    updateNavbarField('menuItems', updated);
  };

  // --- Services Mega-Menu Logic ---
  const addCategory = () => {
    const categoryName = prompt("Enter category name (e.g. Cybersecurity):");
    if (categoryName) {
      const updated = { ...navbar.servicesData, [categoryName]: [] };
      updateNavbarField('servicesData', updated);
    }
  };

  const removeCategory = (catName) => {
    if (window.confirm(`Delete category "${catName}" and all its links?`)) {
      const updated = { ...navbar.servicesData };
      delete updated[catName];
      updateNavbarField('servicesData', updated);
    }
  };

  const addServiceLink = (catName) => {
    const updated = { ...navbar.servicesData };
    updated[catName] = [...(updated[catName] || []), "New Service"];
    updateNavbarField('servicesData', updated);
  };

  const updateServiceLink = (catName, index, value) => {
    const updated = { ...navbar.servicesData };
    const links = [...updated[catName]];
    links[index] = value;
    updated[catName] = links;
    updateNavbarField('servicesData', updated);
  };

  const removeServiceLink = (catName, index) => {
    const updated = { ...navbar.servicesData };
    updated[catName] = updated[catName].filter((_, i) => i !== index);
    updateNavbarField('servicesData', updated);
  };

  const saveChanges = async () => {
    setIsSaving(true);
    try {
      updateTopLevelSection('navbar', navbar);
      const updatedData = { ...siteData, navbar };
      await saveToCloud(updatedData);
      triggerToast('Navbar changes published!');
    } catch (error) {
       console.error(error);
       triggerToast('Failed to save navbar.', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const resetChanges = () => {
    setNavbar(siteData?.navbar || { menuItems: [], servicesData: {} });
    triggerToast('Changes reset.', 'info');
  };

  const cardStyle = {
    background: 'rgba(15, 23, 42, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    marginBottom: '2rem'
  };

  const inputStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#fff',
    borderRadius: '10px'
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      {/* Toast Alert */}
      <AnimatePresence>
        {showToast.show && (
          <motion.div
            initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: '20px', right: '20px', zIndex: 9999,
              padding: '16px 24px', borderRadius: '12px', background: 'rgba(15, 23, 42, 0.9)',
              border: `1px solid ${showToast.type === 'error' ? '#ef4444' : '#6669F1'}`,
              color: '#fff', fontWeight: '600', backdropFilter: 'blur(8px)'
            }}
          >
            {showToast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="d-flex justify-content-between align-items-center mb-4" style={{maxWidth: '1200px', margin: '0 auto'}}>
        <div>
          <h2 className="text-white fw-bold mb-1">Navbar Manager</h2>
          <p className="text-white-50">Control navigation, mega-menus, and branding.</p>
        </div>
        <div className="d-flex gap-3">
          <Button variant="outline-light" onClick={resetChanges} className="d-flex align-items-center gap-2">
            <ArrowClockwise /> Reset
          </Button>
          <Button disabled={isSaving} onClick={saveChanges} className="d-flex align-items-center gap-2" style={{ background: '#6669F1', border: 'none' }}>
            <Save /> {isSaving ? 'Saving...' : 'Publish Header'}
          </Button>
        </div>
      </div>

      <div className="mx-auto" style={{maxWidth: '1200px'}}>
        {/* Brand & CTA */}
        <Card style={cardStyle}>
          <Card.Header className="bg-transparent border-secondary text-white fw-bold py-3 d-flex align-items-center gap-2">
            <ImageIcon size={20} /> Branding & Call to Action
          </Card.Header>
          <Card.Body className="p-4">
            <Row>
              <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Label className="text-white-50 small">SITE LOGO</Form.Label>
                  <div className="d-flex align-items-center gap-3">
                    <div style={{ height: '50px', padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
                       {navbar.logoUrl ? <img src={navbar.logoUrl} alt="Logo" style={{height:'100%'}}/> : <span className="text-white-50 small">Default Logo</span>}
                    </div>
                    <CloudinaryUploadWidget label="Upload New Logo" onUploadSuccess={(url) => updateNavbarField('logoUrl', url)} />
                  </div>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-4">
                  <Form.Label className="text-white-50 small">CTA BUTTON TEXT</Form.Label>
                  <Form.Control value={navbar.ctaText} onChange={(e) => updateNavbarField('ctaText', e.target.value)} style={inputStyle} />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-4">
                  <Form.Label className="text-white-50 small">CTA LINK</Form.Label>
                  <Form.Control value={navbar.ctaLink} onChange={(e) => updateNavbarField('ctaLink', e.target.value)} style={inputStyle} />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Top-Level Menu Items */}
        <Card style={cardStyle}>
           <Card.Header className="bg-transparent border-secondary text-white fw-bold py-3 d-flex justify-content-between align-items-center">
             <div className="d-flex align-items-center gap-2"><ListIcon size={20} /> Main Navigation Links</div>
             <Button variant="outline-primary" size="sm" onClick={addMenuItem} className="d-flex align-items-center gap-2">
               <PlusCircle /> Add Link
             </Button>
           </Card.Header>
           <Card.Body className="p-4">
             <ListGroup variant="flush">
               {(navbar.menuItems || []).map((item, index) => (
                 <ListGroup.Item key={index} className="bg-transparent border-secondary px-0 py-3">
                   <Row className="align-items-center">
                     <Col md={5}>
                        <InputGroup>
                          <InputGroup.Text className="bg-dark border-secondary text-white-50"><Type/></InputGroup.Text>
                          <Form.Control value={item.name} onChange={(e) => updateMenuItem(index, 'name', e.target.value)} style={inputStyle} placeholder="Display Name"/>
                        </InputGroup>
                     </Col>
                     <Col md={5}>
                        <InputGroup>
                          <InputGroup.Text className="bg-dark border-secondary text-white-50"><Link45deg/></InputGroup.Text>
                          <Form.Control value={item.path} onChange={(e) => updateMenuItem(index, 'path', e.target.value)} style={inputStyle} placeholder="URL Path"/>
                        </InputGroup>
                     </Col>
                     <Col md={2} className="text-end">
                       <Button variant="link" className="text-danger" onClick={() => removeMenuItem(index)}><Trash size={20}/></Button>
                     </Col>
                   </Row>
                 </ListGroup.Item>
               ))}
             </ListGroup>
           </Card.Body>
        </Card>

        {/* Services Mega-Menu Manager */}
        <h4 className="text-white fw-bold mb-4 d-flex align-items-center gap-2 mt-5">
          <Grid size={24} className="text-primary"/> Services Mega-Menu Categories
        </h4>
        
        <Row>
          {Object.entries(navbar.servicesData || {}).map(([catName, links]) => (
            <Col lg={6} key={catName} className="mb-4">
              <Card style={{...cardStyle, height: '100%', marginBottom: 0}}>
                <Card.Header className="bg-transparent border-secondary d-flex justify-content-between align-items-center py-3">
                  <span className="text-white fw-bold">{catName}</span>
                  <Button variant="link" className="text-danger p-0" onClick={() => removeCategory(catName)}><Trash size={18}/></Button>
                </Card.Header>
                <Card.Body className="p-3">
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    {links.map((link, idx) => (
                      <InputGroup key={idx} className="mb-2" style={{maxWidth: '300px'}}>
                        <Form.Control size="sm" value={link} onChange={(e) => updateServiceLink(catName, idx, e.target.value)} style={inputStyle} />
                        <Button variant="outline-danger" size="sm" onClick={() => removeServiceLink(catName, idx)}><Trash/></Button>
                      </InputGroup>
                    ))}
                  </div>
                  <Button variant="outline-primary" size="sm" onClick={() => addServiceLink(catName)} className="d-flex align-items-center gap-1">
                    <PlusCircle size={14}/> Add Service
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Col lg={6} className="mb-4">
             <div onClick={addCategory} style={{
               border: '2px dashed rgba(255,255,255,0.1)', height: '100%', minHeight: '150px',
               borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
               cursor: 'pointer', color: 'rgba(255,255,255,0.3)', transition: '0.3s'
             }} onMouseEnter={e => e.target.style.borderColor = '#6669F1'} onMouseLeave={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}>
                <div className="text-center">
                  <PlusCircle size={30} className="mb-2" />
                  <div>New Category</div>
                </div>
             </div>
          </Col>
        </Row>
      </div>
      <style>{` .form-control:focus { background: rgba(255,255,255,0.08) !important; border-color: #6669F1 !important; box-shadow: none !important; color: #fff !important; } `}</style>
    </motion.div>
  );
};

export default NavbarEditor;
