import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
    Speedometer2,
    HouseDoor,
    Gear,
    BoxSeam,
    People,
    ChatQuote,
    BoxArrowRight,
    List,
    X,
    LayoutTextWindowReverse,
    Envelope,
    MenuButtonWideFill,
    JournalText,
    Grid1x2,
    ChevronDown,
    ChevronRight,
    Files
} from 'react-bootstrap-icons';
import { logoutAdmin } from '../utils/auth';
import './AdminLayout.css';
import { useSiteData } from "../../context/SiteContext";

const AdminLayout = () => {
    const { siteData } = useSiteData();
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [openMenus, setOpenMenus] = useState({});
    const [sidebarWidth, setSidebarWidth] = useState(280);
    const isResizing = useRef(false);

    const navigate = useNavigate();
    const location = useLocation();

    // Resize Logic
    const startResizing = useCallback((e) => {
        isResizing.current = true;
        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'col-resize';
    }, []);

    const stopResizing = useCallback(() => {
        isResizing.current = false;
        document.body.style.userSelect = 'auto';
        document.body.style.cursor = 'default';
    }, []);

    const resize = useCallback((e) => {
        if (isResizing.current) {
            const newWidth = Math.min(Math.max(e.clientX, 240), 600);
            setSidebarWidth(newWidth);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResizing);
        return () => {
            window.removeEventListener("mousemove", resize);
            window.removeEventListener("mouseup", stopResizing);
        };
    }, [resize, stopResizing]);

    const toggleMenu = (menuName) => {
        setOpenMenus(prev => ({
            ...prev,
            [menuName]: !prev[menuName]
        }));
    };

    const getSectionName = (instanceId) => {
        // Try to get the ACTUAL type from sectionData first (accurate)
        const sectionEntry = siteData?.sectionData?.[instanceId];

        const sectionTypeLabels = {
            Hero: 'Hero / Banner', About: 'About Section', Stats: 'Statistics',
            TrustBar: 'Trust Bar', Services: 'Services Grid', Methodology: 'Methodology Steps',
            Testimonials: 'Testimonials', Team: 'Team Members', Portfolio: 'Project Portfolio',
            Industry: 'Industry Icons', FAQ: 'FAQ Accordion', Blog: 'Blog Posts Feed',
            CTA: 'Call to Action', ContactSection: 'Get in Touch Form', Slider: 'Partner Logos Slider',
            ContactHeader: 'Contact Page Header', Map: 'Google Map', ServiceHero: 'Service Hero',
            ReuseCard: 'Service Cards Grid', ChallengeGrid: 'Challenges Grid',
            FeatureGrid: 'Features Grid', FeatureSection: 'Feature Section',
            MigrationFlow: 'Migration / Process Flow', DevOpsFlow: 'DevOps Lifecycle Flow',
            UseableFaqSection: 'Service FAQ Section', SreTechMarquee: 'Tech Stack Marquee',
            TimeLine: 'Process Timeline', Innovation: 'Innovation Showcase',
            IoTArchitecture: 'Architecture Diagram', MigrationBento: 'Bento Grid Highlights',
            MigrationComparison: 'Comparison Table',
            AllPagesHero: 'Breadcrumb Hero'
        };

        if (sectionEntry?.type && sectionTypeLabels[sectionEntry.type]) {
            return sectionTypeLabels[sectionEntry.type];
        }

        // Fallback to legacy keyword-based detection
        if (instanceId.includes('hero')) return 'Hero Section';
        if (instanceId.includes('testimonials')) return 'Testimonials';
        if (instanceId.includes('contact_details')) return 'Contact Details & info';
        if (instanceId.includes('contact_map')) return 'Google Map Location';
        if (instanceId.includes('home_contact') || instanceId.includes('about_page_contact') || instanceId.includes('blog_contact')) return 'Get in Touch Form';
        if (instanceId.includes('contact_contact_1') || instanceId.includes('contact_form')) return 'Get in Touch Form';
        if (instanceId.includes('slider')) return 'Partner Logos';
        if (instanceId.includes('allpageshero') || (instanceId.includes('header') && !instanceId.includes('contact_details'))) return 'Breadcrumb Hero';
        if (instanceId.includes('about')) return 'About Section';
        if (instanceId.includes('stats')) return 'Statistics';
        if (instanceId.includes('trustbar')) return 'Trust Bar';
        if (instanceId.includes('services')) return 'Services Grid';
        if (instanceId.includes('methodology')) return 'Methodology';
        if (instanceId.includes('team')) return 'Team Members';
        if (instanceId.includes('portfolio')) return 'Project Portfolio';
        if (instanceId.includes('industry')) return 'Industry Icons';
        if (instanceId.includes('faq')) return 'FAQ Accordion';
        if (instanceId.includes('blog')) return 'Blog Posts Feed';
        if (instanceId.includes('cta')) return 'Call to Action';
        if (instanceId.includes('header')) return 'Page Header';
        if (instanceId.includes('map')) return 'Google Map';
        if (instanceId.includes('reuse')) return 'Core Service Cards';
        if (instanceId.includes('challenge')) return 'Technical Challenges';
        if (instanceId.includes('feature')) return 'Core Strengths Grid';
        if (instanceId.includes('flow')) return 'Migration Roadmap';
        if (instanceId.includes('faq')) return 'FAQ Section';
        return instanceId.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    const menuItems = useMemo(() => {
        const pages = [
            { key: 'home', name: 'Home Page', icon: <HouseDoor /> },
            { key: 'about', name: 'About Page', icon: <JournalText /> },
            { key: 'blog', name: 'Blog Page', icon: <Grid1x2 /> },
            { key: 'contact', name: 'Contact Page', icon: <Envelope /> }
        ];

        const dynamicPages = pages.map(p => {
            const sections = siteData?.[p.key]?.sections || [];
            return {
                name: p.name,
                icon: p.icon,
                subItems: [
                    { path: `/admin/page-controller/${p.key}`, name: 'Page Overview', icon: <Files /> },
                    ...([...new Set(sections)]).map(id => ({
                        path: `/admin/page-controller/${p.key}/${id}?instanceId=${id}`,
                        name: getSectionName(id)
                    }))
                ]
            };
        });

        const categoriesData = siteData?.navbar?.servicesData || {};
        const dynamicServicePages = Object.keys(categoriesData).map(category => {
            return {
                name: category,
                subItems: categoriesData[category].map(serviceName => {
                    const slug = serviceName.toLowerCase().replace(/ /g, '-');
                    const sections = siteData?.servicePages?.[slug]?.sections || [];
                    return {
                        name: serviceName,
                        subItems: [
                            { path: `/admin/page-controller/${slug}`, name: 'Page Overview', icon: <Files /> },
                            ...([...new Set(sections)]).map(id => ({
                                path: `/admin/page-controller/${slug}/${id}?instanceId=${id}`,
                                name: getSectionName(id)
                            }))
                        ]
                    };
                })
            };
        });

        return [
            ...dynamicPages,
            {
                name: 'Service Pages',
                icon: <BoxSeam />,
                subItems: dynamicServicePages
            },
            { path: '/admin/navbar', name: 'Navbar', icon: <MenuButtonWideFill /> },
            { path: '/admin/footer-editor', name: 'Footer', icon: <LayoutTextWindowReverse /> }
        ];
    }, [siteData]);


    const handleLogout = async () => {
        try {
            await logoutAdmin();
            navigate('/admin/login');
        } catch (error) {
            console.error("Logout failed:", error);
            alert("Logout failed. Please try again.");
        }
    };

    const isAnyChildActive = (items) => {
        const currentUrl = location.pathname + location.search;
        return items.some(item => {
            if (item.path && currentUrl === item.path) return true;
            if (item.subItems) return isAnyChildActive(item.subItems);
            return false;
        });
    };

    // Auto-open menu when a child is active
    useEffect(() => {
        const findAndOpenActive = (items) => {
            items.forEach(item => {
                if (item.subItems) {
                    if (isAnyChildActive(item.subItems)) {
                        setOpenMenus(prev => ({ ...prev, [item.name]: true }));
                        findAndOpenActive(item.subItems);
                    }
                }
            });
        };
        findAndOpenActive(menuItems);
    }, [location.pathname, location.search, menuItems]);

    const renderMenuItem = (item, level = 0) => {
        const currentUrl = location.pathname + location.search;

        if (item.subItems) {
            const isOpen = openMenus[item.name];
            const activeChild = isAnyChildActive(item.subItems);

            return (
                <div key={item.name} className={`nav-item-group level-${level}`}>
                    <button
                        className={`nav-item sidebar-submenu-toggle ${activeChild ? 'child-active' : ''}`}
                        onClick={() => toggleMenu(item.name)}
                    >
                        {item.icon && <span className="icon">{item.icon}</span>}
                        <span className="name">{item.name}</span>
                        <span className="caret">{isOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}</span>
                    </button>
                    {isOpen && (
                        <div className="nav-subitems">
                            {item.subItems.map(subItem => renderMenuItem(subItem, level + 1))}
                        </div>
                    )}
                </div>
            );
        }

        const isActive = currentUrl === item.path;

        return (
            <NavLink
                key={item.path}
                to={item.path}
                className={`nav-item level-${level} ${isActive ? 'active' : ''}`}
            >
                {item.icon && <span className="icon">{item.icon}</span>}
                <span className="name">{item.name}</span>
            </NavLink>
        );
    };

    return (
        <div className="admin-container">
            <aside
                className={`admin-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}
                style={{
                    width: isSidebarOpen ? `${sidebarWidth}px` : '0px',
                    minWidth: isSidebarOpen ? `${sidebarWidth}px` : '0px',
                    flexBasis: isSidebarOpen ? `${sidebarWidth}px` : '0px'
                }}
            >
                <div className="sidebar-resizer" onMouseDown={startResizing}></div>
                <div className="sidebar-header">
                    <h3 className="brand">
                        Vertex <span>Pro</span>
                    </h3>
                    <button className="toggle-btn mobile-only" onClick={() => setSidebarOpen(false)}>
                        <X size={28} />
                    </button>
                </div>
                <nav className="sidebar-nav">
                    {menuItems.map(renderMenuItem)}
                </nav>
                <div className="sidebar-footer">
                    <button className="logout-btn" onClick={handleLogout}>
                        <BoxArrowRight className="icon" />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>
            <main className="admin-main">
                <header className="admin-topbar">
                    <button className="toggle-btn" onClick={() => setSidebarOpen(!isSidebarOpen)}>
                        <List size={24} />
                    </button>
                    <div className="topbar-right">
                        <div className="user-profile">
                            <span className="user-name">Admin User</span>
                            <div className="avatar">AD</div>
                        </div>
                    </div>
                </header>
                <section className="admin-content">
                    <div className="content-wrapper">
                        <Outlet />
                    </div>
                </section>
            </main>
            {!isSidebarOpen && <div className="mobile-overlay" onClick={() => setSidebarOpen(true)}></div>}
        </div>
    );
};

export default AdminLayout;
