import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useSiteData } from '../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, ArrowClockwise, CardImage, PlusCircle, Trash, Person, Tag, Image as ImageIcon } from 'react-bootstrap-icons';
import CloudinaryUploadWidget from '../../components/CloudinaryUploadWidget';
import { useLocation } from 'react-router-dom';

const HomePortfolioEditor = () => {
    const { siteData, updateSectionData, saveToCloud } = useSiteData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const instanceId = queryParams.get('instanceId') || 'home_portfolio_1';

    const [portfolioData, setPortfolioData] = useState(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            return siteData.sectionData[instanceId].content;
        }
        return {
            subtitle: "Portfolio",
            title: "See How We Bring Ideas to Life",
            projects: [],
            categories: ["Cloud", "Web Design", "DevOps", "Database", "CyberSecurity"],
            ...(siteData?.home?.portfolio || {})
        };
    });

    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });
    const [newCategory, setNewCategory] = useState('');

    useEffect(() => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setPortfolioData(siteData.sectionData[instanceId].content);
        } else if (!instanceId && siteData?.home?.portfolio) {
            setPortfolioData(prev => ({
                ...prev,
                ...siteData.home.portfolio,
                categories: siteData.home.portfolio.categories || prev.categories || []
            }));
        }
    }, [siteData, instanceId]);

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const handleMetaChange = (e) => {
        setPortfolioData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const addCategory = () => {
        const currentCats = portfolioData.categories || [];
        if (newCategory && !currentCats.includes(newCategory)) {
            setPortfolioData(prev => ({
                ...prev,
                categories: [...(prev.categories || []), newCategory]
            }));
            setNewCategory('');
            triggerToast('Category added.');
        } else if (currentCats.includes(newCategory)) {
            triggerToast('Category already exists.', 'error');
        }
    };

    const removeCategory = (cat) => {
        setPortfolioData(prev => ({
            ...prev,
            categories: (prev.categories || []).filter(c => c !== cat)
        }));
        triggerToast('Category removed.');
    };

    const addProject = () => {
        const nextId = portfolioData.projects.length > 0
            ? Math.max(...portfolioData.projects.map(p => p.id)) + 1
            : 1;
        setPortfolioData(prev => ({
            ...prev,
            projects: [...(prev.projects || []), { id: nextId, category: portfolioData.categories[0] || "General", title: "New Project", subtitle: "Project Details", img: "" }]
        }));
    };

    const removeProject = (id) => {
        const newProjects = portfolioData.projects.filter(p => p.id !== id);
        setPortfolioData(prev => ({ ...prev, projects: newProjects }));
    };

    const updateProject = (id, field, value) => {
        const newProjects = portfolioData.projects.map(p =>
            p.id === id ? { ...p, [field]: value } : p
        );
        setPortfolioData(prev => ({ ...prev, projects: newProjects }));
    };

    const saveChanges = async () => {
        setIsSaving(true);
        try {
            if (instanceId) {
                updateSectionData(instanceId, portfolioData);
                
                const updatedData = {
                    ...siteData,
                    sectionData: {
                        ...siteData.sectionData,
                        [instanceId]: {
                            ...siteData.sectionData[instanceId],
                            content: portfolioData
                        }
                    }
                };
                await saveToCloud(updatedData);
            } else {
                const updatedData = {
                    ...siteData,
                    home: {
                        ...siteData.home,
                        portfolio: portfolioData
                    }
                };
                await saveToCloud(updatedData);
            }

            triggerToast('Portfolio updated successfully!');
        } catch (error) {
            console.error(error);
            triggerToast('Failed to save Portfolio.', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const resetChanges = () => {
        if (instanceId && siteData?.sectionData?.[instanceId]) {
            setPortfolioData(siteData.sectionData[instanceId].content);
        } else {
            setPortfolioData({
                subtitle: "Portfolio",
                title: "See How We Bring Ideas to Life",
                projects: [],
                categories: ["Cloud", "Web Design", "DevOps", "Database", "CyberSecurity"],
                ...(siteData?.home?.portfolio || {})
            });
        }
        triggerToast('Changes reset.', 'info');
    };

    const sectionStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '15px',
        padding: '25px',
        maxWidth: '1000px',
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

            <div className="d-flex justify-content-between align-items-center mb-4" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div>
                    <h2 className="text-white fw-bold mb-1">Portfolio Editor</h2>
                    <p className="text-white-50">
                        {instanceId ? `Editing instance: ${instanceId}` : "Showcase your best projects."}
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

            <div style={sectionStyle} className="mb-4">
                <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                    <Tag className="text-primary" /> Category Management
                </h4>
                <div className="d-flex gap-2 mb-3">
                    <Form.Control
                        placeholder="Add new category..."
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        style={inputStyle}
                    />
                    <Button variant="primary" onClick={addCategory} style={{ background: '#6669F1', border: 'none' }}>
                        Add
                    </Button>
                </div>
                <div className="d-flex flex-wrap gap-2">
                    {(portfolioData.categories || []).map(cat => (
                        <div key={cat} className="d-flex align-items-center gap-2 px-3 py-1 rounded-pill" style={{ background: 'rgba(102, 105, 241, 0.1)', border: '1px solid rgba(102, 105, 241, 0.3)', color: '#fff' }}>
                            {cat}
                            <Trash size={14} className="text-danger cursor-pointer" onClick={() => removeCategory(cat)} />
                        </div>
                    ))}
                </div>
            </div>

            <div style={sectionStyle}>
                <h4 className="text-white mb-4 d-flex align-items-center gap-2">
                    <CardImage className="text-primary" /> Section Config
                </h4>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-white-50 small">SUBTITLE (e.g. Portfolio)</Form.Label>
                            <Form.Control
                                name="subtitle"
                                value={portfolioData.subtitle}
                                onChange={handleMetaChange}
                                style={inputStyle}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-white-50 small">MAIN TITLE</Form.Label>
                            <Form.Control
                                name="title"
                                value={portfolioData.title}
                                onChange={handleMetaChange}
                                style={inputStyle}
                                placeholder="e.g. See How We Bring Ideas to Life"
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <div className="d-flex justify-content-between align-items-center mb-4 mt-2">
                    <Form.Label className="text-white-50 small mb-0 font-weight-bold">PROJECT LIST</Form.Label>
                    <Button
                        variant="link"
                        size="sm"
                        className="text-primary p-0 text-decoration-none"
                        onClick={addProject}
                    >
                        <PlusCircle className="me-1" /> Add Project
                    </Button>
                </div>

                <Row>
                    {(portfolioData.projects || []).map((project) => (
                        <Col md={6} lg={4} key={project.id} className="mb-4">
                            <Card className="border-0 h-100" style={{ background: 'rgba(0,0,0,0.2)' }}>
                                <Card.Body className="position-relative p-3">
                                    <Button
                                        variant="link"
                                        className="position-absolute text-danger p-0"
                                        style={{ top: '10px', right: '10px', zIndex: 10 }}
                                        onClick={() => removeProject(project.id)}
                                    >
                                        <Trash size={16} />
                                    </Button>

                                    <div className="mb-3">
                                        <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '12px', background: '#000', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                                            {project.img ? (
                                                <img src={project.img} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            ) : (
                                                <div className="w-100 h-100 d-flex align-items-center justify-content-center text-white-50"><ImageIcon size={30} /></div>
                                            )}
                                        </div>
                                        <div className="mt-2 text-center">
                                            <CloudinaryUploadWidget
                                                label="Upload Image"
                                                onUploadSuccess={(url) => updateProject(project.id, 'img', url)}
                                            />
                                        </div>
                                    </div>

                                    <Form.Group className="mb-2">
                                        <Form.Label className="text-white-50 extra-small fw-bold">CATEGORY</Form.Label>
                                        <Form.Select
                                            size="sm"
                                            value={project.category}
                                            onChange={(e) => updateProject(project.id, 'category', e.target.value)}
                                            style={inputStyle}
                                        >
                                            <option value="">Select Category</option>
                                            {(portfolioData.categories || []).map(cat => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-2">
                                        <Form.Label className="text-white-50 extra-small fw-bold">TITLE</Form.Label>
                                        <Form.Control
                                            size="sm"
                                            value={project.title}
                                            onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                                            style={inputStyle}
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="text-white-50 extra-small fw-bold">SUBTITLE</Form.Label>
                                        <Form.Control
                                            size="sm"
                                            value={project.subtitle}
                                            onChange={(e) => updateProject(project.id, 'subtitle', e.target.value)}
                                            style={inputStyle}
                                        />
                                    </Form.Group>
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

export default HomePortfolioEditor;
