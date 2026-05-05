import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useSiteData } from "../../../context/SiteContext";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUp, Person } from "react-bootstrap-icons";
import "./TeamSection.css";

export default function TeamSection({ subtitle, title, description, members }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const allMembers = members || [];
    const visibleMembers = isExpanded ? allMembers : allMembers.slice(0, 4);

    if (allMembers.length === 0) return null;

    return (
        <section className="team-section">
            <div className="team-container container">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="team-header"
                >
                    <h5>{subtitle || "How We Work"}</h5>
                    <h2>{title || "Meet Our Team"}</h2>
                    <p>{description || "Our leadership team combines deep expertise in Cloud, DevOps, CyberSecurity and Enterprise Development to deliver scalable digital transformation solutions."}</p>
                </motion.div>

                <div className="team-grid">
                    <AnimatePresence mode="popLayout">
                        {visibleMembers.map((member, index) => {
                            return (
                                <motion.div
                                    key={member.name + index}
                                    className="team-card"
                                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    transition={{ duration: 0.5, delay: isExpanded ? 0 : index * 0.1 }}
                                    layout
                                >
                                    {member.image ? (
                                        <img src={member.image} alt={member.name} />
                                    ) : (
                                        <div className="w-100 h-100 bg-dark d-flex align-items-center justify-content-center text-white-50">
                                            <Person size={40} />
                                        </div>
                                    )}

                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <h4>{member.name}</h4>
                                            <span>{member.role}</span>

                                            <div className="social">
                                                {member.socials?.fb && <a href={member.socials.fb} target="_blank" rel="noreferrer"><FaFacebookF /></a>}
                                                {member.socials?.tw && <a href={member.socials.tw} target="_blank" rel="noreferrer"><FaTwitter /></a>}
                                                {member.socials?.inst && <a href={member.socials.inst} target="_blank" rel="noreferrer"><FaInstagram /></a>}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {allMembers.length > 4 && (
                    <div className="text-center mt-5">
                        <button
                            className="view-btn d-flex align-items-center gap-2 mx-auto"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? (
                                <>Show Less <ArrowUp size={20} /></>
                            ) : (
                                <>View More <ArrowRight size={20} /></>
                            )}
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}



