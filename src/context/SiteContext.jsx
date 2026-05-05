import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialSiteData } from '../data/siteConfig';
import { db } from '../firebase';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
    const [siteData, setSiteData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!import.meta.env.VITE_FIREBASE_API_KEY) {
            console.warn('Firebase API Key is missing. Running in static mode.');
            setSiteData(initialSiteData);
            setLoading(false);
            return;
        }

        const siteDocRef = doc(db, 'siteContent', 'main');
        let isAutoMigrating = false;

        const unsubscribe = onSnapshot(siteDocRef, async (docSnap) => {
            if (docSnap.exists()) {
                const cloudData = docSnap.data();
                const resolveSections = (localSections = [], cloudSections) => {
                    // Respect explicit cloud layouts, including an intentionally empty array.
                    if (Array.isArray(cloudSections)) return cloudSections;
                    return localSections || [];
                };

                const resolveHiddenSections = (localHidden = [], cloudHidden) => {
                    if (Array.isArray(cloudHidden)) return cloudHidden;
                    return localHidden || [];
                };

                const mergedData = {
                    navbar: {
                        ...initialSiteData.navbar,
                        ...(cloudData.navbar || {}),
                    },
                    footer: {
                        ...initialSiteData.footer,
                        ...(cloudData.footer || {}),
                    },
                    servicePageData: {
                        ...initialSiteData.servicePageData,
                        ...(cloudData.servicePageData || {}),
                    },

                    home: {
                        sections: resolveSections(initialSiteData.home.sections, cloudData.home?.sections),
                        hiddenSections: resolveHiddenSections(initialSiteData.home.hiddenSections, cloudData.home?.hiddenSections),
                    },
                    about: {
                        sections: resolveSections(initialSiteData.about.sections, cloudData.about?.sections),
                        hiddenSections: resolveHiddenSections(initialSiteData.about.hiddenSections, cloudData.about?.hiddenSections),
                    },
                    blog: {
                        sections: resolveSections(initialSiteData.blog.sections, cloudData.blog?.sections),
                        hiddenSections: resolveHiddenSections(initialSiteData.blog.hiddenSections, cloudData.blog?.hiddenSections),
                    },
                    contact: {
                        sections: resolveSections(initialSiteData.contact.sections, cloudData.contact?.sections),
                        hiddenSections: resolveHiddenSections(initialSiteData.contact.hiddenSections, cloudData.contact?.hiddenSections),
                    },
                    servicePages: {
                        ...(initialSiteData.servicePages || {}),
                        ...(cloudData.servicePages || {}),
                        // Merge specific sections arrays for service pages defined in initialSiteData
                        ...Object.keys(initialSiteData.servicePages || {}).reduce((acc, slug) => {
                            acc[slug] = {
                                sections: resolveSections(
                                    initialSiteData.servicePages[slug]?.sections, 
                                    cloudData.servicePages?.[slug]?.sections
                                ),
                                hiddenSections: resolveHiddenSections(
                                    initialSiteData.servicePages[slug]?.hiddenSections,
                                    cloudData.servicePages?.[slug]?.hiddenSections
                                ),
                            };
                            return acc;
                        }, {})
                    },

                    sectionData: {
                        ...initialSiteData.sectionData,
                        ...(cloudData.sectionData || {}),
                    },
                };

                let autoMigrated = false;
                const sd = mergedData.sectionData;

                if (cloudData.home?.hero && !cloudData.sectionData?.home_hero_1) {
                    sd.home_hero_1 = { type: 'Hero', content: cloudData.home.hero };
                    autoMigrated = true;
                }
                if (cloudData.home?.stats && !cloudData.sectionData?.home_stats_1) {
                    sd.home_stats_1 = { type: 'Stats', content: { stats: cloudData.home.stats } };
                    autoMigrated = true;
                }
                if (cloudData.home?.trustBar && !cloudData.sectionData?.home_trustbar_1) {
                    sd.home_trustbar_1 = { type: 'TrustBar', content: cloudData.home.trustBar };
                    autoMigrated = true;
                }
                if (cloudData.home?.serviceSection && !cloudData.sectionData?.home_services_1) {
                    sd.home_services_1 = { type: 'Services', content: cloudData.home.serviceSection };
                    autoMigrated = true;
                }
                if (cloudData.home?.methodology && !cloudData.sectionData?.home_methodology_1) {
                    sd.home_methodology_1 = { type: 'Methodology', content: cloudData.home.methodology };
                    autoMigrated = true;
                }
                if (cloudData.home?.team && !cloudData.sectionData?.home_team_1) {
                    sd.home_team_1 = { type: 'Team', content: cloudData.home.team };
                    autoMigrated = true;
                }
                if (cloudData.home?.portfolio && !cloudData.sectionData?.home_portfolio_1) {
                    sd.home_portfolio_1 = { type: 'Portfolio', content: cloudData.home.portfolio };
                    autoMigrated = true;
                }
                if (cloudData.home?.industryGrid && !cloudData.sectionData?.home_industry_1) {
                    sd.home_industry_1 = { type: 'Industry', content: cloudData.home.industryGrid };
                    autoMigrated = true;
                }
                if (cloudData.home?.faq && !cloudData.sectionData?.home_faq_1) {
                    sd.home_faq_1 = { type: 'FAQ', content: cloudData.home.faq };
                    autoMigrated = true;
                }
                if (cloudData.home?.contactCTA && !cloudData.sectionData?.home_cta_1) {
                    sd.home_cta_1 = { type: 'CTA', content: cloudData.home.contactCTA };
                    autoMigrated = true;
                }
                if (cloudData.common?.about && !cloudData.sectionData?.home_about_1) {
                    sd.home_about_1 = { type: 'About', content: cloudData.common.about };
                    sd.about_page_about_1 = { type: 'About', content: cloudData.common.about };
                    autoMigrated = true;
                }
                if (cloudData.testimonials?.reviews && !cloudData.sectionData?.home_testimonials_1) {
                    sd.home_testimonials_1 = { type: 'Testimonials', content: { reviews: cloudData.testimonials.reviews } };
                    sd.about_page_testimonials_1 = { type: 'Testimonials', content: { reviews: cloudData.testimonials.reviews } };
                    autoMigrated = true;
                }
                if (cloudData.contact?.page && !cloudData.sectionData?.contact_details_1) {
                    sd.contact_details_1 = { type: 'ContactHeader', content: cloudData.contact.page };
                    sd.contact_map_1 = { type: 'Map', content: { mapUrl: cloudData.contact.page.mapUrl } };
                    autoMigrated = true;
                }

                // --- 🗄️ DATABASE SERVICES MIGRATION ---
                const dbAdminSlug = "database-administration-&-optimization";
                const oldAdminData = cloudData.servicePageData?.[dbAdminSlug];
                if (oldAdminData && !cloudData.sectionData?.db_admin_reuse_1) {
                    if (oldAdminData.reuseCard) sd.db_admin_reuse_1 = { type: 'ReuseCard', content: oldAdminData.reuseCard };
                    if (oldAdminData.challengeGrid) sd.db_admin_challenge_1 = { type: 'ChallengeGrid', content: oldAdminData.challengeGrid };
                    if (oldAdminData.featureGrid) sd.db_admin_feature_1 = { type: 'FeatureGrid', content: oldAdminData.featureGrid };
                    if (oldAdminData.faqSection) sd.db_admin_faq_1 = { type: 'UseableFaqSection', content: oldAdminData.faqSection };
                    autoMigrated = true;
                }

                const dbMigSlug = "database-migration-&-modernization";
                const oldMigData = cloudData.servicePageData?.[dbMigSlug];
                if (oldMigData && !cloudData.sectionData?.db_mig_reuse_1) {
                    if (oldMigData.reuseCard) sd.db_mig_reuse_1 = { type: 'ReuseCard', content: oldMigData.reuseCard };
                    if (oldMigData.challengeGrid) sd.db_mig_challenge_1 = { type: 'ChallengeGrid', content: oldMigData.challengeGrid };
                    if (oldMigData.featureGrid) sd.db_mig_feature_1 = { type: 'FeatureGrid', content: oldMigData.featureGrid };
                    if (oldMigData.migrationFlow) sd.db_mig_flow_1 = { type: 'MigrationFlow', content: oldMigData.migrationFlow };
                    if (oldMigData.faqSection) sd.db_mig_faq_1 = { type: 'UseableFaqSection', content: oldMigData.faqSection };
                    autoMigrated = true;
                }

                if (autoMigrated && !isAutoMigrating) {
                    isAutoMigrating = true;
                    try {
                        console.log('System: Syncing legacy data to new schema...');
                        
                        // CLEANUP: Remove migrated keys from mergedData before saving to cloud
                        if (mergedData.servicePageData?.[dbAdminSlug]) {
                            delete mergedData.servicePageData[dbAdminSlug];
                        }
                        if (mergedData.servicePageData?.[dbMigSlug]) {
                            delete mergedData.servicePageData[dbMigSlug];
                        }

                        await setDoc(siteDocRef, mergedData);
                        console.log('System: Schema sync complete.');
                    } catch (e) {
                        console.error('Auto-sync error:', e);
                    } finally {
                        isAutoMigrating = false;
                    }
                }

                setSiteData(mergedData);
            } else {
                console.warn("No cloud data found. Using local defaults.");
                setSiteData(initialSiteData);
            }
            setLoading(false);
        }, (error) => {
            console.error('Firestore sync error:', error);
            setSiteData(initialSiteData);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const saveToCloud = async (newData) => {
        if (!import.meta.env.VITE_FIREBASE_API_KEY) return;
        if (loading) return;

        try {
            const dataToSave = { ...(newData || siteData) };

            delete dataToSave.common;
            delete dataToSave.testimonials;
            delete dataToSave.contactPage;
            if (dataToSave.home) {
                const cleanHome = { ...dataToSave.home };
                ['hero', 'stats', 'trustBar', 'serviceSection', 'methodology', 'team',
                 'portfolio', 'industryGrid', 'faq', 'contactCTA', 'about', 'footer', 'contactSection'].forEach(k => delete cleanHome[k]);
                dataToSave.home = cleanHome;
            }
            if (dataToSave.contact) {
                const cleanContact = { ...dataToSave.contact };
                delete cleanContact.page;
                delete cleanContact.banner;
                dataToSave.contact = cleanContact;
            }

            const siteDocRef = doc(db, 'siteContent', 'main');
            await setDoc(siteDocRef, dataToSave);
            console.log('Data successfully saved to cloud!');
        } catch (error) {
            console.error('Error saving to cloud:', error);
            alert('Failed to save to cloud. Check console for details.');
        }
    };

    const updateSectionData = (instanceId, newContent) => {
        setSiteData(prev => {
            if (!prev) return prev;
            return {
                ...prev,
                sectionData: {
                    ...prev.sectionData,
                    [instanceId]: {
                        ...prev.sectionData?.[instanceId],
                        content: newContent,
                    },
                },
            };
        });
    };

    const updateTopLevelSection = (key, newData) => {
        setSiteData(prev => {
            if (!prev) return prev;
            return {
                ...prev,
                [key]: {
                    ...prev[key],
                    ...newData,
                },
            };
        });
    };

    const updateServicePageSection = (serviceSlug, sectionKey, newData) => {
        setSiteData(prev => {
            if (!prev) return prev;
            return {
                ...prev,
                servicePageData: {
                    ...prev.servicePageData,
                    [serviceSlug]: {
                        ...prev.servicePageData?.[serviceSlug],
                        [sectionKey]: newData,
                    },
                },
            };
        });
    };

    const contextValue = {
        siteData: siteData || initialSiteData,
        loading,
        updateSectionData,
        updateTopLevelSection,
        updateServicePageSection,
        saveToCloud,
    };

    return (
        <SiteContext.Provider value={contextValue}>
            {children}
        </SiteContext.Provider>
    );
};

export const useSiteData = () => {
    const context = useContext(SiteContext);
    if (!context) {
        throw new Error('useSiteData must be used within a SiteProvider');
    }
    return context;
};
