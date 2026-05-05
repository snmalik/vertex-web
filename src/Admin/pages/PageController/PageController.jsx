import React, { useState, useEffect, useMemo } from 'react';
import { Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import { Eye, EyeSlash, Save, ArrowLeft, ArrowRight, List as ListIcon, Trash, PlusCircle, Search } from 'react-bootstrap-icons';
import { useSiteData } from '../../../context/SiteContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { List as DragIcon } from 'react-bootstrap-icons';

// Import Editors
import HomeHeroEditor from '../Home/HomeHeroEditor';
import HomeStatsEditor from '../Home/HomeStatsEditor';
import HomeTrustBarEditor from '../Home/HomeTrustBarEditor';
import HomeServicesEditor from '../Home/HomeServicesEditor';
import HomeMethodologyEditor from '../Home/HomeMethodologyEditor';
import HomeTeamEditor from '../Home/HomeTeamEditor';
import HomeIndustryEditor from '../Home/HomeIndustryEditor';
import HomePortfolioEditor from '../Home/HomePortfolioEditor';
import HomeFAQEditor from '../Home/HomeFAQEditor';
import HomeBlogEditor from '../Home/HomeBlogEditor';
import HomeCTAEditor from '../Home/HomeCTAEditor';
import AboutUsEditor from '../Common/AboutUsEditor';
import GetInTouchEditor from '../Common/GetInTouchEditor';
import TestimonialEditor from '../Common/TestimonialEditor';
import SliderLogoEditor from '../Common/SliderLogoEditor';
import ContactDetailsEditor from '../Contact/ContactDetailsEditor';
import ContactMapEditor from '../Contact/ContactMapEditor';
import AllPagesHeroEditor from '../Common/AllPagesHeroEditor';

// Service Editors
import UniversalGridEditor from '../Services/Editors/UniversalGridEditor';
import MigrationFlowEditor from '../Services/Editors/MigrationFlowEditor';
import UseableFaqSectionEditor from '../Services/Editors/UseableFaqSectionEditor';
import ServiceHeroEditor from '../Services/Editors/ServiceHeroEditor';
import TimeLineEditor from '../Services/Editors/TimeLineEditor';
import InnovationEditor from '../Services/Editors/InnovationEditor';
import IoTArchitectureEditor from '../Services/Editors/IoTArchitectureEditor';
import MigrationBentoEditor from '../Services/Editors/MigrationBentoEditor';
import MigrationComparisonEditor from '../Services/Editors/MigrationComparisonEditor';

const PageController = () => {
    const { pageKey = 'home', sectionId } = useParams();
    const navigate = useNavigate();
    const { siteData, saveToCloud } = useSiteData();
    const [sections, setSections] = useState([]);
    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', type: 'success' });
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [sectionToDelete, setSectionToDelete] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const pendingNewSectionsRef = React.useRef({});

    // Component Registry
    const editorRegistry = {
        Hero: HomeHeroEditor,
        Stats: HomeStatsEditor,
        TrustBar: HomeTrustBarEditor,
        Services: HomeServicesEditor,
        Methodology: HomeMethodologyEditor,
        Team: HomeTeamEditor,
        Industry: HomeIndustryEditor,
        Portfolio: HomePortfolioEditor,
        FAQ: HomeFAQEditor,
        Blog: HomeBlogEditor,
        CTA: HomeCTAEditor,
        About: AboutUsEditor,
        ContactSection: GetInTouchEditor,
        Testimonials: TestimonialEditor,
        Slider: SliderLogoEditor,
        ContactHeader: ContactDetailsEditor,
        Map: ContactMapEditor,
        ReuseCard: UniversalGridEditor,
        ChallengeGrid: UniversalGridEditor,
        FeatureGrid: UniversalGridEditor,
        MigrationFlow: MigrationFlowEditor,
        UseableFaqSection: UseableFaqSectionEditor,
        ServiceHero: ServiceHeroEditor,
        DevOpsFlow: MigrationFlowEditor,
        FeatureSection: UniversalGridEditor,
        SreTechMarquee: UniversalGridEditor,
        TimeLine: TimeLineEditor,
        Innovation: InnovationEditor,
        IoTArchitecture: IoTArchitectureEditor,
        MigrationBento: MigrationBentoEditor,
        MigrationComparison: MigrationComparisonEditor,
        AllPagesHero: AllPagesHeroEditor
    };

    const getSectionMetadata = (instanceId) => {
        // Service Section Detection (Highest Priority)
        if (instanceId.includes('devops')) return { name: 'DevOps Lifecycle', type: 'DevOpsFlow' };
        if (instanceId.includes('hero') && (instanceId.includes('managed') || instanceId.includes('cloud'))) return { name: 'Service Hero Section', type: 'ServiceHero' };
        if (instanceId.includes('reuse')) return { name: 'Core Service Cards', type: 'ReuseCard' };
        if (instanceId.includes('marquee')) return { name: 'Tech Stack Marquee', type: 'SreTechMarquee' };
        if (instanceId.includes('challenge')) return { name: 'Technical Challenges', type: 'ChallengeGrid' };
        if (instanceId.includes('feature')) return { name: 'Core Strengths Grid', type: 'FeatureSection' };
        if (instanceId.includes('flow')) return { name: 'Migration Roadmap', type: 'MigrationFlow' };
        if (instanceId.includes('timeline')) return { name: 'Process Timeline', type: 'TimeLine' };
        if (instanceId.includes('innovation')) return { name: 'Tech Showcase Slider', type: 'Innovation' };
        if (instanceId.includes('architecture')) return { name: 'Technical Diagram', type: 'IoTArchitecture' };
        if (instanceId.includes('bento')) return { name: 'Bento Grid Highlights', type: 'MigrationBento' };
        if (instanceId.includes('comparison')) return { name: 'Comparison Table', type: 'MigrationComparison' };
        if (instanceId.includes('faq')) {
            // If it's on a core page (home, about, etc), use the simple FAQ
            const isCorePageFaq = instanceId.includes('home') || instanceId.includes('about') || instanceId.includes('blog');
            if (isCorePageFaq) return { name: 'FAQ Accordion', type: 'FAQ' };
            // Otherwise, it's a dynamic Service Page FAQ
            return { name: 'Service FAQ Section', type: 'UseableFaqSection' };
        }

        // Core Page Detection
        if (instanceId.includes('allpageshero') || (instanceId.includes('header') && !instanceId.includes('contact_details'))) return { name: 'Breadcrumb Hero', type: 'AllPagesHero' };
        if (instanceId.includes('hero')) return { name: 'Hero / Banner', type: 'Hero' };
        if (instanceId.includes('testimonials')) return { name: 'Testimonials', type: 'Testimonials' };
        if (instanceId.includes('contact_details')) return { name: 'Contact Details & info', type: 'ContactHeader' };
        if (instanceId.includes('contact_map')) return { name: 'Google Map Location', type: 'Map' };
        if (instanceId.includes('home_contact') || instanceId.includes('about_page_contact') || instanceId.includes('blog_contact')) return { name: 'Get in Touch Form', type: 'ContactSection' };
        if (instanceId.includes('contact_contact_1') || instanceId.includes('contact_form') || instanceId.includes('ccon_contact') || instanceId.includes('cmng_contact')) return { name: 'Get in Touch Form', type: 'ContactSection' };
        if (instanceId.includes('slider')) return { name: 'Partner Logos', type: 'Slider' };
        if (instanceId.includes('about')) return { name: 'About Section', type: 'About' };
        if (instanceId.includes('stats')) return { name: 'Statistics', type: 'Stats' };
        if (instanceId.includes('trustbar')) return { name: 'Trust Bar', type: 'TrustBar' };
        if (instanceId.includes('services')) return { name: 'Services Grid', type: 'Services' };
        if (instanceId.includes('methodology')) return { name: 'Methodology / Steps', type: 'Methodology' };
        if (instanceId.includes('team')) return { name: 'Team Members', type: 'Team' };
        if (instanceId.includes('portfolio')) return { name: 'Project Portfolio', type: 'Portfolio' };
        if (instanceId.includes('industry')) return { name: 'Industry Icons', type: 'Industry' };
        if (instanceId.includes('blog')) return { name: 'Blog Posts Feed', type: 'Blog' };
        if (instanceId.includes('cta')) return { name: 'Call to Action', type: 'CTA' };
        // Note: 'header' keyword is already handled above (line 113) → AllPagesHero
        if (instanceId.includes('map')) return { name: 'Google Map', type: 'Map' };

        return { name: instanceId.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '), type: null };
    };

    // Human-readable display names for each section type
    const EXCLUDED_SECTION_TYPES = ['BlogHeader', 'PageHeader'];
    const sectionTypeLabels = {
        Hero: 'Hero / Banner', About: 'About Section', Stats: 'Statistics',
        TrustBar: 'Trust Bar', Services: 'Services Grid', Methodology: 'Methodology Steps',
        Testimonials: 'Testimonials', Team: 'Team Members', Portfolio: 'Project Portfolio',
        Industry: 'Industry Icons', FAQ: 'FAQ Accordion', Blog: 'Blog Posts Feed',
        CTA: 'Call to Action', ContactSection: 'Get in Touch Form', Slider: 'Partner Logos Slider',
        ContactHeader: 'Contact Info Cards', Map: 'Google Map', ServiceHero: 'Service Hero',
        ReuseCard: 'Service Cards Grid', ChallengeGrid: 'Challenges Grid',
        FeatureGrid: 'Features Grid', FeatureSection: 'Feature Section',
        MigrationFlow: 'Migration / Process Flow', DevOpsFlow: 'DevOps Lifecycle Flow',
        UseableFaqSection: 'Service FAQ Section', SreTechMarquee: 'Tech Stack Marquee',
        TimeLine: 'Process Timeline', Innovation: 'Innovation Showcase',
        IoTArchitecture: 'Architecture Diagram', MigrationBento: 'Bento Grid Highlights',
        MigrationComparison: 'Comparison Table',
        AllPagesHero: 'Breadcrumb Hero'
    };

    // Initialize list from siteData
    useEffect(() => {
        // Detect if it's a core page or a service page
        const pageData = siteData?.[pageKey] || siteData?.servicePages?.[pageKey];

        if (pageData?.sections) {
            const currentOrder = [...new Set(pageData.sections)];
            const hiddenSections = pageData.hiddenSections || [];

            const displayList = currentOrder.map((id, index) => {
                // Try to get the ACTUAL type from sectionData first (accurate)
                const sectionEntry = siteData?.sectionData?.[id];
                let name, type;
                if (sectionEntry?.type && sectionTypeLabels[sectionEntry.type]) {
                    type = sectionEntry.type;
                    name = sectionTypeLabels[sectionEntry.type];
                } else {
                    // Fallback to keyword-based detection for legacy sections
                    const meta = getSectionMetadata(id);
                    name = meta.name;
                    type = meta.type;
                }
                return {
                    id,
                    order: index + 1,
                    isVisible: !hiddenSections.includes(id),
                    name,
                    type
                };
            });

            setSections(displayList);
        }
    }, [siteData, pageKey]);

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(sections);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        const updatedItems = items.map((item, index) => ({
            ...item,
            order: index + 1
        }));

        setSections(updatedItems);
    };
    const removeSection = (id) => {
        setSectionToDelete(id);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        if (sectionToDelete) {
            setSections(prev => {
                const updated = prev.filter(s => s.id !== sectionToDelete);
                return updated.map((item, idx) => ({ ...item, order: idx + 1 }));
            });
            setShowDeleteModal(false);
            setSectionToDelete(null);
            triggerToast('Section removed from layout. Remember to save changes.');
        }
    };
    const toggleVisibility = (id) => {
        setSections(prev => prev.map(s =>
            s.id === id ? { ...s, isVisible: !s.isVisible } : s
        ));
    };

    // --- Add Section Helpers ---
    const typeSlugMap = {
        Hero: 'hero', About: 'about', Stats: 'stats', TrustBar: 'trustbar',
        Services: 'services', Methodology: 'methodology', Testimonials: 'testimonials',
        Team: 'team', Portfolio: 'portfolio', Industry: 'industry',
        FAQ: 'faq', Blog: 'blog', CTA: 'cta', ContactSection: 'contact',
        Slider: 'slider', ContactHeader: 'header', Map: 'map',
        ServiceHero: 'hero', ReuseCard: 'reuse', ChallengeGrid: 'challenge',
        FeatureGrid: 'feature', FeatureSection: 'feat_section', MigrationFlow: 'flow',
        DevOpsFlow: 'devops', UseableFaqSection: 'sfaq', SreTechMarquee: 'marquee',
        TimeLine: 'timeline', Innovation: 'innovation', IoTArchitecture: 'architecture',
        MigrationBento: 'bento', MigrationComparison: 'comparison'
    };

    const generateUniqueId = (type) => {
        const prefix = pageKey.replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_');
        const slug = typeSlugMap[type] || type.toLowerCase();
        const allIds = [...Object.keys(siteData?.sectionData || {}), ...sections.map(s => s.id)];
        let counter = 1;
        let newId = `${prefix}_${slug}_${counter}`;
        while (allIds.includes(newId)) { counter++; newId = `${prefix}_${slug}_${counter}`; }
        return newId;
    };


    // One entry per unique type — stores the first instanceId found as the clone source
    const availableSectionTypes = useMemo(() => {
        if (!siteData?.sectionData) return [];
        const seen = {};
        Object.entries(siteData.sectionData).forEach(([instanceId, data]) => {
            if (!data?.type || seen[data.type] || EXCLUDED_SECTION_TYPES.includes(data.type)) return;
            seen[data.type] = instanceId;
        });
        return Object.entries(seen)
            .map(([type, instanceId]) => ({ type, instanceId, label: sectionTypeLabels[type] || type }))
            .sort((a, b) => a.label.localeCompare(b.label));
    }, [siteData]);

    const filteredSectionTypes = useMemo(() => {
        if (!searchTerm.trim()) return availableSectionTypes;
        const term = searchTerm.toLowerCase();
        return availableSectionTypes.filter(s =>
            s.label.toLowerCase().includes(term) || s.type.toLowerCase().includes(term)
        );
    }, [availableSectionTypes, searchTerm]);

    const addSection = (sourceInstanceId) => {
        const source = siteData.sectionData[sourceInstanceId];
        if (!source) return;
        const newId = generateUniqueId(source.type);
        pendingNewSectionsRef.current[newId] = {
            type: source.type,
            content: JSON.parse(JSON.stringify(source.content))
        };
        // Use the KNOWN type directly — don't rely on keyword-based getSectionMetadata
        // which can produce wrong names (e.g. "Blog Posts Feed") when the pageKey
        // prefix matches a keyword before the actual section type keyword.
        const displayName = sectionTypeLabels[source.type] || source.type;
        setSections(prev => [...prev, {
            id: newId,
            order: prev.length + 1,
            isVisible: true,
            name: displayName,
            type: source.type
        }]);
        setShowAddModal(false);
        setSearchTerm('');
        triggerToast(`"${displayName}" added! Click "Save Page Layout" to persist.`);
    };

    const handleSaveLayout = async () => {
        setIsSaving(true);
        try {
            const newOrder = sections.map(s => s.id);
            const newHidden = sections.filter(s => !s.isVisible).map(s => s.id);

            let updatedData = { ...siteData };

            // 1. Identify sections that were REMOVED
            const originalSections = siteData?.[pageKey]?.sections || siteData?.servicePages?.[pageKey]?.sections || [];
            const removedIds = originalSections.filter(id => !newOrder.includes(id));

            // 2. Delete removed sections from sectionData (Hard Delete)
            if (removedIds.length > 0) {
                const newSectionData = { ...updatedData.sectionData };
                removedIds.forEach(id => {
                    // Safety check: Only delete if it's not used in another page's sections array
                    const isUsedElsewhere = Object.keys(siteData).some(key => {
                        if (key === 'sectionData' || key === 'navbar' || key === 'footer') return false;

                        // Ignore the current page we are editing
                        if (key === pageKey) return false;

                        if (key === 'servicePages') {
                            return Object.entries(siteData.servicePages).some(([slug, p]) => {
                                if (slug === pageKey) return false; // Ignore current service page
                                return p.sections?.includes(id);
                            });
                        }
                        return siteData[key]?.sections?.includes(id);
                    });

                    if (!isUsedElsewhere) {
                        delete newSectionData[id];
                    }
                });
                updatedData.sectionData = newSectionData;
            }

            // 3. Merge pending new section data from Add Section
            if (Object.keys(pendingNewSectionsRef.current).length > 0) {
                updatedData.sectionData = {
                    ...updatedData.sectionData,
                    ...pendingNewSectionsRef.current
                };
            }

            // 4. Update the page layout
            if (siteData?.[pageKey]) {
                // Core Page Save
                updatedData[pageKey] = {
                    ...siteData[pageKey],
                    sections: newOrder,
                    hiddenSections: newHidden
                };
            } else if (siteData?.servicePages?.[pageKey]) {
                // Service Page Save
                updatedData.servicePages = {
                    ...siteData.servicePages,
                    [pageKey]: {
                        ...siteData.servicePages[pageKey],
                        sections: newOrder,
                        hiddenSections: newHidden
                    }
                };
            }

            await saveToCloud(updatedData);
            pendingNewSectionsRef.current = {};
            triggerToast(`${pageKey.split('-').join(' ').toUpperCase()} Page layout updated! Database cleaned.`);
        } catch (error) {
            console.error("Save error: ", error);
            triggerToast('Failed to save layout', 'error');
        } finally {
            setIsSaving(false);
        }
    };

    const triggerToast = (message, type = 'success') => {
        setShowToast({ show: true, message, type });
        setTimeout(() => setShowToast({ show: false, message: '', type: 'success' }), 3000);
    };

    const activeSection = useMemo(() => {
        if (!sectionId) return null;
        return sections.find(s => s.id === sectionId);
    }, [sections, sectionId]);

    const renderEditor = () => {
        if (!activeSection) return null;
        const EditorComponent = editorRegistry[activeSection.type];
        if (!EditorComponent) return <div className="text-white p-5 text-center">No editor available for section type: {activeSection.type || 'Unknown'}</div>;

        return (
            <div className="section-editor-container mt-4">
                <EditorComponent />
            </div>
        );
    };

    const layoutStyle = {
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '16px',
        padding: '24px'
    };

    const inputStyle = {
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#fff',
        width: '60px',
        textAlign: 'center'
    };

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="pb-5">
            <AnimatePresence>
                {showToast.show && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, x: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8, y: -20 }}
                        style={{
                            position: 'fixed', top: '20px', right: '20px', zIndex: 9999,
                            padding: '16px 24px', borderRadius: '16px', background: 'rgba(15, 23, 42, 0.9)',
                            backdropFilter: 'blur(12px)', border: `1px solid ${showToast.type === 'error' ? '#ef4444' : '#6669F1'}`,
                            display: 'flex', alignItems: 'center', gap: '12px', color: '#fff', fontWeight: '600'
                        }}
                    >
                        {showToast.message}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Header Area */}
            <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom border-secondary">
                <div>
                    <h2 className="text-white fw-bold mb-1 text-capitalize">
                        {pageKey} {sectionId ? 'Section Editor' : 'Overview'}
                    </h2>
                    <p className="text-white-50 mb-0">
                        {sectionId
                            ? `Managing "${activeSection?.name || sectionId}" section of the ${pageKey} page.`
                            : `Control the visibility and manual sorting of all sections on the ${pageKey} page.`}
                    </p>
                </div>
                {!sectionId && (
                    <div className="d-flex gap-3">
                        <Button
                            onClick={() => setShowAddModal(true)}
                            style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.4)', color: '#10b981' }}
                            className="d-flex align-items-center gap-2 px-4 py-2 fw-bold shadow-lg"
                        >
                            <PlusCircle /> Add Section
                        </Button>
                        <Button
                            onClick={handleSaveLayout}
                            disabled={isSaving}
                            style={{ background: '#6669F1', border: 'none' }}
                            className="d-flex align-items-center gap-2 px-4 py-2 fw-bold text-white shadow-lg"
                        >
                            <Save /> {isSaving ? 'Saving...' : 'Save Page Layout'}
                        </Button>
                    </div>
                )}
            </div>

            {sectionId ? (
                /* SINGLE SECTION MANAGEMENT VIEW */
                <Row>
                    <Col lg={12}>
                        <div className="d-flex justify-content-end mb-3">
                            <Button
                                variant="outline-secondary"
                                size="sm"
                                onClick={() => navigate(`/admin/page-controller/${pageKey}`)}
                                className="d-flex align-items-center gap-2 px-3"
                            >
                                <ListIcon /> Back to Overview
                            </Button>
                        </div>
                        {renderEditor()}
                    </Col>
                </Row>
            ) : (
                /* PAGE OVERVIEW LIST VIEW */
                <Row className="justify-content-center">
                    <Col md={11} lg={10}>
                        <Card style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                            <Card.Body className="p-0">
                                <DragDropContext onDragEnd={onDragEnd}>
                                    <div className="table-responsive">
                                        <table className="table table-dark table-hover mb-0 align-middle" style={{ background: 'transparent' }}>
                                            <thead style={{ background: 'rgba(255,255,255,0.02)' }}>
                                                <tr>
                                                    <th className="ps-4 py-3 text-white-50 fw-normal small" style={{ width: '60px' }}></th>
                                                    <th className="py-3 text-white-50 fw-normal small" style={{ width: '80px' }}>ORDER</th>
                                                    <th className="py-3 text-white-50 fw-normal small">SECTION NAME</th>
                                                    <th className="py-3 text-white-50 fw-normal small">INSTANCE ID</th>
                                                    <th className="py-3 text-white-50 fw-normal small">STATUS</th>
                                                    <th className="pe-4 py-3 text-end text-white-50 fw-normal small">ACTIONS</th>
                                                </tr>
                                            </thead>
                                            <Droppable droppableId="sections-list">
                                                {(provided) => (
                                                    <tbody {...provided.droppableProps} ref={provided.innerRef}>
                                                        {sections.map((section, index) => (
                                                            <Draggable key={section.id} draggableId={section.id} index={index}>
                                                                {(provided, snapshot) => (
                                                                    <tr
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        style={{
                                                                            ...provided.draggableProps.style,
                                                                            opacity: section.isVisible ? 1 : 0.5,
                                                                            transition: '0.2s',
                                                                            background: snapshot.isDragging ? 'rgba(102, 105, 241, 0.15)' : 'transparent'
                                                                        }}
                                                                    >
                                                                        <td className="ps-4" {...provided.dragHandleProps}>
                                                                            <DragIcon className="text-white-50" size={18} style={{ cursor: 'grab' }} />
                                                                        </td>
                                                                        <td className="text-white-50">#{section.order}</td>
                                                                        <td className="fw-bold text-white">{section.name}</td>
                                                                        <td><code className="text-primary-50 px-2 py-1 rounded" style={{ background: 'rgba(102, 105, 241, 0.1)', fontSize: '0.75rem' }}>{section.id}</code></td>
                                                                        <td>
                                                                            <span className={`badge rounded-pill ${section.isVisible ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}`} style={{ fontSize: '0.65rem' }}>
                                                                                {section.isVisible ? 'ACTIVE' : 'HIDDEN'}
                                                                            </span>
                                                                        </td>
                                                                        <td className="pe-4 text-end">
                                                                            <div className="d-flex justify-content-end gap-2">
                                                                                <Button
                                                                                    variant="link"
                                                                                    className="text-white-50 p-0"
                                                                                    onClick={() => toggleVisibility(section.id)}
                                                                                    title={section.isVisible ? "Hide Section" : "Show Section"}
                                                                                >
                                                                                    {section.isVisible ? <Eye size={18} /> : <EyeSlash size={18} />}
                                                                                </Button>
                                                                                <Button
                                                                                    variant="link"
                                                                                    className="text-danger p-0"
                                                                                    onClick={() => removeSection(section.id)}
                                                                                    title="Remove from page"
                                                                                >
                                                                                    <Trash size={18} />
                                                                                </Button>
                                                                                <Link
                                                                                    to={`/admin/page-controller/${pageKey}/${section.id}?instanceId=${section.id}`}
                                                                                    className="btn btn-sm btn-outline-primary px-3"
                                                                                >
                                                                                    Manage Content
                                                                                </Link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                        {provided.placeholder}
                                                    </tbody>
                                                )}
                                            </Droppable>
                                        </table>
                                    </div>
                                </DragDropContext>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}

            {/* Add Section Modal */}
            <Modal
                show={showAddModal}
                onHide={() => { setShowAddModal(false); setSearchTerm(''); }}
                size="lg"
                centered
                contentClassName="border-0"
            >
                <div style={{ background: '#0f172a', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <Modal.Header className="border-0 pb-0 pt-4 px-4" closeButton closeVariant="white">
                        <div className="w-100">
                            <h4 className="text-white fw-bold mb-1">
                                <PlusCircle className="me-2" style={{ color: '#10b981' }} />
                                Add Section to <span className="text-capitalize">{pageKey.replace(/-/g, ' ')}</span>
                            </h4>
                            <p className="text-white-50 small mb-0">
                                Pick any existing section. Its content will be cloned so you can edit it independently.
                            </p>
                        </div>
                    </Modal.Header>
                    <Modal.Body className="px-4 pt-3 pb-4">
                        {/* Search */}
                        <div className="position-relative mb-4">
                            <Search className="position-absolute text-white-50" style={{ left: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                            <Form.Control
                                type="text"
                                placeholder="Search section types..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', paddingLeft: '42px', borderRadius: '12px', height: '46px' }}
                            />
                        </div>

                        {/* Section Type Grid */}
                        <div style={{ maxHeight: '52vh', overflowY: 'auto', paddingRight: '2px' }}>
                            {filteredSectionTypes.length === 0 ? (
                                <div className="text-center py-5 text-white-50">
                                    <Search size={32} className="mb-3 opacity-50" />
                                    <p className="mb-0">No section types match your search.</p>
                                </div>
                            ) : (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' }}>
                                    {filteredSectionTypes.map(({ type, instanceId, label }) => (
                                        <div
                                            key={type}
                                            onClick={() => addSection(instanceId)}
                                            className="add-section-item d-flex flex-column align-items-start justify-content-between p-3 rounded-3"
                                            style={{
                                                background: 'rgba(255,255,255,0.03)',
                                                border: '1px solid rgba(255,255,255,0.07)',
                                                cursor: 'pointer',
                                                transition: 'all 0.18s ease',
                                                minHeight: '76px'
                                            }}
                                        >
                                            <span className="text-white fw-semibold" style={{ fontSize: '0.88rem', lineHeight: '1.3' }}>{label}</span>
                                            <div className="d-flex align-items-center gap-1 mt-2">
                                                <PlusCircle size={13} style={{ color: '#10b981' }} />
                                                <span style={{ color: '#10b981', fontSize: '0.7rem', fontWeight: 600 }}>Add to page</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </Modal.Body>
                </div>
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal
                show={showDeleteModal}
                onHide={() => setShowDeleteModal(false)}
                centered
                size="md"
                contentClassName="border-0 shadow-lg"
            >
                <div style={{ background: '#1e1e2e', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="p-4 text-center">
                        <div
                            className="d-inline-flex align-items-center justify-content-center mb-3"
                            style={{
                                width: '64px', height: '64px',
                                background: 'rgba(239, 68, 68, 0.1)',
                                borderRadius: '50%',
                                border: '1px solid rgba(239, 68, 68, 0.2)'
                            }}
                        >
                            <Trash size={30} style={{ color: '#ef4444' }} />
                        </div>
                        <h4 className="text-white fw-bold mb-2">Remove Section?</h4>
                        <p className="text-white-50 px-3">
                            Are you sure you want to remove this section from the <span className="text-info fw-bold">{pageKey}</span> page?
                            <br />
                            <small className="mt-2 d-block opacity-75">
                                Note: This will not delete the section's data from the database.
                            </small>
                        </p>
                    </div>
                    <div className="d-flex border-top border-secondary border-opacity-10">
                        <button
                            className="flex-grow-1 p-3 border-0 bg-transparent text-white-50 fw-bold border-end border-secondary border-opacity-10"
                            onClick={() => setShowDeleteModal(false)}
                            style={{ transition: 'background 0.2s' }}
                        >
                            Cancel
                        </button>
                        <button
                            className="flex-grow-1 p-3 border-0 bg-transparent text-danger fw-bold"
                            onClick={confirmDelete}
                            style={{ transition: 'background 0.2s' }}
                        >
                            Yes, Remove it
                        </button>
                    </div>
                </div>
            </Modal>

            <style>{`
                .uppercase { text-transform: uppercase; letter-spacing: 0.05em; }
                .bg-primary-dark { background: rgba(102, 105, 241, 0.05) !important; border: 1px solid rgba(102, 105, 241, 0.15) !important; }
                input[type=number]::-webkit-inner-spin-button, 
                input[type=number]::-webkit-outer-spin-button { opacity: 1; }
                .table-dark { --bs-table-bg: transparent; }
                .table-hover tbody tr:hover { background-color: rgba(255,255,255,0.02) !important; }
                .add-section-item:hover { background: rgba(102,105,241,0.1) !important; border-color: rgba(102,105,241,0.3) !important; }
                .modal-content { background: transparent !important; }
            `}</style>
        </motion.div>
    );
};

export default PageController;

