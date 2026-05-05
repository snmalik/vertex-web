import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useSiteData } from '../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, PlusCircle, Trash, Person, Tag, Image as ImageIcon, StarFill } from 'react-bootstrap-icons';
import CloudinaryUploadWidget from '../../components/CloudinaryUploadWidget';
import { useLocation, useNavigate } from 'react-router-dom';

const TestimonialEditor = () => {
  const { siteData, updateSectionData, saveToCloud } = useSiteData();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const instanceId = queryParams.get('instanceId');

  const [headers, setHeaders] = useState({
    subTitle: 'Testimonials',
    title: 'What Our Customers Say About Us',
    description: 'Feedback from our clients, discover how we\'ve made a difference for growing businesses.'
  });
  const [reviews, setReviews] = useState([]);

  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });

  // Sync if siteData changes
  useEffect(() => {
    let contentObj = {};
    if (instanceId && siteData?.sectionData?.[instanceId]) {
      contentObj = siteData.sectionData[instanceId].content || {};
    } else if (!instanceId && siteData?.testimonials) {
      contentObj = siteData.testimonials;
    }

    setHeaders({
      subTitle: contentObj.subTitle || 'Testimonials',
      title: contentObj.title || 'What Our Customers Say About Us',
      description: contentObj.description || 'Feedback from our clients, discover how we\'ve made a difference for growing businesses.'
    });
    setReviews(contentObj.reviews || []);
  }, [siteData, instanceId]);

  const triggerToast = (message, type = 'success') => {
    setShowToast({ show: true, message, type });
    setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
  };

  const updateHeader = (field, value) => {
    setHeaders(prev => ({ ...prev, [field]: value }));
  };

  const addReview = () => {
    const newId = reviews.length > 0 ? Math.max(...reviews.map(r => r.id)) + 1 : 1;
    setReviews([
      ...reviews,
      { id: newId, name: "New Client", role: "Position, Company", cardTitle: "Customers Review", reviewText: "Client feedback here...", stars: 5, imageUrl: "" }
    ]);
  };

  const removeReview = (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      setReviews(reviews.filter(r => r.id !== id));
    }
  };

  const updateReview = (id, field, value) => {
    setReviews(reviews.map(r => r.id === id ? { ...r, [field]: value } : r));
  };

  const saveChanges = async () => {
    setIsSaving(true);
    try {
      const contentToSave = { ...headers, reviews };

      if (instanceId) {
        updateSectionData(instanceId, contentToSave);
        
        const updatedData = {
          ...siteData,
          sectionData: {
            ...siteData.sectionData,
            [instanceId]: {
              ...siteData.sectionData?.[instanceId],
              content: contentToSave
            }
          }
        };
        await saveToCloud(updatedData);
      } else {
        // Legacy fallback - shouldn't happen with new architecture
        const updatedData = {
          ...siteData,
          testimonials: contentToSave
        };
        await saveToCloud(updatedData);
      }

      triggerToast('Testimonials section updated successfully!');
    } catch (error) {
      console.error(error);
      triggerToast('Failed to save testimonials section.', 'error');
    } finally {
      setIsSaving(false);
    }
  };

  const resetChanges = () => {
    let contentObj = {};
    if (instanceId && siteData?.sectionData?.[instanceId]) {
      contentObj = siteData.sectionData[instanceId].content || {};
    } else if (!instanceId && siteData?.testimonials) {
      contentObj = siteData.testimonials;
    }

    setHeaders({
      subTitle: contentObj.subTitle || 'Testimonials',
      title: contentObj.title || 'What Our Customers Say About Us',
      description: contentObj.description || 'Feedback from our clients, discover how we\'ve made a difference for growing businesses.'
    });
    setReviews(contentObj.reviews || []);
    triggerToast('Changes reset.', 'info');
  };

  const containerStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '16px',
    padding: '30px',
    maxWidth: '1100px',
    margin: '0 auto'
  };

  const cardStyle = {
    background: 'rgba(15, 23, 42, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    transition: 'all 0.3s ease'
  };

  const inputStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#fff',
    borderRadius: '10px'
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <AnimatePresence>
        {showToast.show && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            style={{
              position: 'fixed', top: '20px', right: '20px', zIndex: 9999,
              padding: '16px 24px', borderRadius: '16px',
              background: 'rgba(15, 23, 42, 0.9)', backdropFilter: 'blur(12px)',
              border: `1px solid ${showToast.type === 'error' ? '#ef4444' : '#6669F1'}`,
              color: '#fff', fontWeight: '600'
            }}
          >
            {showToast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="d-flex justify-content-between align-items-center mb-4" style={{maxWidth: '1100px', margin: '0 auto'}}>
        <div>
          <h2 className="text-white fw-bold mb-1">Testimonials Section</h2>
          <p className="text-white-50">
            {instanceId ? `Editing section: ${instanceId}` : "Manage the client reviews section."}
          </p>
        </div>
        <div className="d-flex gap-3">
          <Button variant="outline-light" onClick={resetChanges} className="d-flex align-items-center gap-2">
            <ArrowClockwise size={18} /> Reset
          </Button>
          <Button disabled={isSaving} onClick={saveChanges} className="d-flex align-items-center gap-2" 
            style={{ background: '#6669F1', border: 'none' }}>
            <Save size={18} /> {isSaving ? 'Saving...' : 'Publish Section'}
          </Button>
        </div>
      </div>

      <div style={containerStyle} className="mb-4">
        <h4 className="text-white mb-4">Section Headers</h4>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="text-white-50 small">SUBTITLE (Tiny text)</Form.Label>
              <Form.Control type="text" value={headers.subTitle} onChange={(e) => updateHeader('subTitle', e.target.value)} style={inputStyle} />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label className="text-white-50 small">TITLE (Supports HTML / &lt;br&gt; / HTML tags)</Form.Label>
              <Form.Control as="textarea" rows={2} value={headers.title} onChange={(e) => updateHeader('title', e.target.value)} style={inputStyle} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="text-white-50 small">DESCRIPTION</Form.Label>
              <Form.Control as="textarea" rows={5} value={headers.description} onChange={(e) => updateHeader('description', e.target.value)} style={inputStyle} />
            </Form.Group>
          </Col>
        </Row>
      </div>

      <div style={containerStyle}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="text-white mb-0">Customer Reviews</h4>
          <Button variant="outline-primary" onClick={addReview} className="d-flex align-items-center gap-2">
            <PlusCircle size={18} /> Add Review
          </Button>
        </div>

        <Row>
          {reviews.map((r) => (
            <Col lg={6} key={r.id} className="mb-4">
              <Card style={cardStyle}>
                <Card.Body className="p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex align-items-center gap-3">
                      <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #6669F1' }}>
                        {r.imageUrl ? <img src={r.imageUrl} style={{width:'100%', height:'100%', objectFit:'cover'}} /> : <div className="w-100 h-100 bg-dark d-flex align-items-center justify-content-center text-white-50 small">Photo</div>}
                      </div>
                      <CloudinaryUploadWidget label="Upload" onUploadSuccess={(url) => updateReview(r.id, 'imageUrl', url)} />
                    </div>
                    <Button variant="link" className="text-danger p-0 h-100" onClick={() => removeReview(r.id)}><Trash size={20} /></Button>
                  </div>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-white-50 small">CLIENT NAME</Form.Label>
                        <Form.Control value={r.name} onChange={(e) => updateReview(r.id, 'name', e.target.value)} style={inputStyle} />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="text-white-50 small">ROLE / COMPANY</Form.Label>
                        <Form.Control value={r.role} onChange={(e) => updateReview(r.id, 'role', e.target.value)} style={inputStyle} />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-white-50 small">CARD HEADING</Form.Label>
                    <Form.Control type="text" placeholder="Customers Review" value={r.cardTitle || ''} onChange={(e) => updateReview(r.id, 'cardTitle', e.target.value)} style={inputStyle} />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-white-50 small">FEEDBACK TEXT</Form.Label>
                    <Form.Control as="textarea" rows={3} value={r.reviewText} onChange={(e) => updateReview(r.id, 'reviewText', e.target.value)} style={inputStyle} />
                  </Form.Group>

                  <div className="d-flex align-items-center gap-3">
                    <Form.Label className="text-white-50 small mb-0">RATING</Form.Label>
                    <div className="d-flex gap-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <StarFill 
                          key={star} 
                          size={20} 
                          className="cursor-pointer"
                          style={{ color: star <= r.stars ? '#6669F1' : 'rgba(255,255,255,0.1)', cursor: 'pointer' }}
                          onClick={() => updateReview(r.id, 'stars', star)}
                        />
                      ))}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <style>{` textarea:focus, input:focus { background: rgba(255,255,255,0.08) !important; border-color: #6669F1 !important; box-shadow: none !important; color: #fff !important; } `}</style>
    </motion.div>
  );
};

export default TestimonialEditor;
