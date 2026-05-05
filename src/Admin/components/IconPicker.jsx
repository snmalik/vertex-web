import React, { useState, useMemo, useEffect } from 'react';
import { Modal, Form, Row, Col, Button, InputGroup, Nav } from 'react-bootstrap';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa6';
import * as HiIcons from 'react-icons/hi2';
import * as RiIcons from 'react-icons/ri';
import { Search, XCircle } from 'react-bootstrap-icons';
import { motion, AnimatePresence } from 'framer-motion';

const IconPicker = ({ show, onHide, onSelect, currentIcon }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeLib, setActiveLib] = useState('bs');

    const libraries = {
        bs: { name: 'Bootstrap', icons: BsIcons, prefix: 'Bs' },
        fa: { name: 'FontAwesome', icons: FaIcons, prefix: 'Fa' },
        hi: { name: 'Heroicons', icons: HiIcons, prefix: 'Hi' },
        ri: { name: 'Remix Icons', icons: RiIcons, prefix: 'Ri' }
    };

    // Auto-switch to the current icon's library when opening
    useEffect(() => {
        if (show && currentIcon) {
            const prefix = currentIcon.substring(0, 2);
            const libKey = Object.keys(libraries).find(key => libraries[key].prefix === prefix);
            if (libKey) setActiveLib(libKey);
        }
    }, [show, currentIcon]);

    // Filter icons based on search and active library
    const filteredIcons = useMemo(() => {
        const lib = libraries[activeLib];
        const allNames = Object.keys(lib.icons);

        if (!searchTerm) {
            // Priority list for common icons if current library matches
            const common = ['BsGear', 'BsCloud', 'BsShieldCheck', 'BsLightning', 'BsDatabase', 'FaShieldAlt', 'FaBuilding', 'FaTruck', 'FaGamepad', 'HiMiniSquare3Stack3D', 'RiDashboardLine'];

            const results = allNames.filter(name => common.includes(name) || name === currentIcon);
            const remaining = allNames.filter(name => !common.includes(name) && name !== currentIcon);

            return [...results, ...remaining].slice(0, 600); // Increased limit
        }

        return allNames
            .filter(name => name.toLowerCase().includes(searchTerm.toLowerCase()))
            .slice(0, 1200); // Increased limit for thorough search
    }, [searchTerm, activeLib, currentIcon]);

    const handleSelect = (iconName) => {
        onSelect(iconName);
        onHide();
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
            contentClassName="bg-dark text-white border-0 shadow-lg"
            style={{ backdropFilter: 'blur(10px)' }}
        >
            <Modal.Header closeButton closeVariant="white" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <Modal.Title className="fw-bold">
                    Visual <span style={{ color: '#6669F1' }}>Icon Picker</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0" style={{ maxHeight: '80vh', display: 'flex', flexDirection: 'column' }}>

                {/* Library Selector */}
                <div className="px-4 pt-4 pb-2" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <Nav variant="pills" className="gap-2 mb-3">
                        {Object.entries(libraries).map(([key, lib]) => (
                            <Nav.Item key={key}>
                                <Nav.Link
                                    active={activeLib === key}
                                    onClick={() => { setActiveLib(key); setSearchTerm(''); }}
                                    style={{
                                        cursor: 'pointer',
                                        background: activeLib === key ? '#6669F1' : 'rgba(255,255,255,0.05)',
                                        color: '#fff',
                                        borderRadius: '10px',
                                        fontSize: '0.9rem',
                                        padding: '8px 16px',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}
                                >
                                    {lib.name}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>

                    <InputGroup className="bg-transparent border-0 mb-3">
                        <InputGroup.Text className="bg-transparent border-0 text-muted shadow-none">
                            <Search size={20} />
                        </InputGroup.Text>
                        <Form.Control
                            placeholder={`Search through ${Object.keys(libraries[activeLib].icons).length} ${libraries[activeLib].name} icons...`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: '#fff',
                                borderRadius: '12px',
                                padding: '12px'
                            }}
                        />
                        {searchTerm && (
                            <Button
                                variant="link"
                                className="text-muted"
                                onClick={() => setSearchTerm('')}
                                style={{ marginLeft: '-45px', zIndex: 10 }}
                            >
                                <XCircle size={18} />
                            </Button>
                        )}
                    </InputGroup>
                </div>

                <div className="icon-grid p-4" style={{
                    overflowY: 'auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(95px, 1fr))',
                    gap: '12px',
                    flex: 1
                }}>
                    <AnimatePresence mode="popLayout">
                        {filteredIcons.map((name) => {
                            const IconComponent = libraries[activeLib].icons[name];
                            if (!IconComponent) return null;

                            return (
                                <motion.div
                                    key={name}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    whileHover={{ y: -5, background: 'rgba(102, 105, 241, 0.15)', borderColor: 'rgba(102, 105, 241, 0.4)' }}
                                    onClick={() => handleSelect(name)}
                                    style={{
                                        cursor: 'pointer',
                                        padding: '12px',
                                        background: name === currentIcon ? 'rgba(102, 105, 241, 0.25)' : 'rgba(255,255,255,0.02)',
                                        border: `1px solid ${name === currentIcon ? '#6669F1' : 'rgba(255,255,255,0.05)'}`,
                                        borderRadius: '12px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.2s ease',
                                        textAlign: 'center',
                                        minHeight: '95px'
                                    }}
                                >
                                    <IconComponent size={26} style={{ color: name === currentIcon ? '#6669F1' : 'rgba(255,255,255,0.6)', marginBottom: '8px' }} />
                                    <span style={{ fontSize: '9px', opacity: 0.5, wordBreak: 'break-all', lineHeight: '10px' }}>
                                        {name.replace(libraries[activeLib].prefix, '')}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {filteredIcons.length === 0 && (
                    <div className="text-center py-5 text-muted">
                        No icons matched your search criteria in this library.
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer className="bg-dark p-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                        Showing up to {filteredIcons.length} results from {libraries[activeLib].name}
                    </small>
                    <Button variant="outline-light" onClick={onHide} className="rounded-pill px-4">Close</Button>
                </div>
            </Modal.Footer>

            <style>{`
                .modal-header .btn-close { filter: invert(1) brightness(2); }
                .icon-grid::-webkit-scrollbar { width: 6px; }
                .icon-grid::-webkit-scrollbar-track { background: transparent; }
                .icon-grid::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
                .nav-pills .nav-link.active { background-color: #6669F1 !important; }
            `}</style>
        </Modal>
    );
};

export default IconPicker;
