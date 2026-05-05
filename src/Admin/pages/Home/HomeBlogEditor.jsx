import React, { useState, useEffect } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { useSiteData } from "../../../context/SiteContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  Save,
  ArrowClockwise,
  PlusCircle,
  Trash,
  Person,
  Tag,
  Image as ImageIcon,
  Calendar,
  Pencil,
  JournalText,
} from "react-bootstrap-icons";
import CloudinaryUploadWidget from "../../components/CloudinaryUploadWidget";
import { useLocation } from "react-router-dom";

const HomeBlogEditor = () => {
  const { siteData, updateSectionData, saveToCloud } = useSiteData();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const instanceId = queryParams.get("instanceId") || "blog_blog_1";

  const [blogData, setBlogData] = useState(() => {
    if (instanceId && siteData?.sectionData?.[instanceId]) {
      return siteData.sectionData[instanceId].content;
    }
    return {
      subtitle: "Latest Blog",
      title: "Latest Blog & Articles",
      posts: [],
      ...(siteData?.home?.blog || {}),
    };
  });

  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  useEffect(() => {
    if (instanceId && siteData?.sectionData?.[instanceId]) {
      setBlogData(siteData.sectionData[instanceId].content);
    } else if (!instanceId && siteData?.home?.blog) {
      setBlogData((prev) => ({
        ...prev,
        ...siteData.home.blog,
      }));
    }
  }, [siteData, instanceId]);

  const triggerToast = (message, type = "success") => {
    setShowToast({ show: true, message, type });
    setTimeout(
      () => setShowToast({ show: false, message: "", type: "success" }),
      3000,
    );
  };

  const handleMetaChange = (e) => {
    setBlogData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addPost = () => {
    const currentPosts = blogData.posts || [];
    const nextId =
      currentPosts.length > 0
        ? Math.max(...currentPosts.map((p) => p.id)) + 1
        : 1;
    const today = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setBlogData((prev) => ({
      ...prev,
      posts: [
        {
          id: nextId,
          date: today,
          author: "Admin",
          title: "New Blog Post",
          description: "Write your excerpt here...",
          image: "",
        },
        ...(prev.posts || []),
      ],
    }));
  };

  const removePost = (id) => {
    const currentPosts = blogData.posts || [];
    const newPosts = currentPosts.filter((p) => p.id !== id);
    setBlogData((prev) => ({ ...prev, posts: newPosts }));
  };

  const updatePost = (id, field, value) => {
    const currentPosts = blogData.posts || [];
    const newPosts = currentPosts.map((p) =>
      p.id === id ? { ...p, [field]: value } : p,
    );
    setBlogData((prev) => ({ ...prev, posts: newPosts }));
  };

  const saveChanges = async () => {
    setIsSaving(true);
    try {
      if (instanceId) {
        updateSectionData(instanceId, blogData);

        const updatedData = {
          ...siteData,
          sectionData: {
            ...siteData.sectionData,
            [instanceId]: {
              ...siteData.sectionData[instanceId],
              content: blogData,
            },
          },
        };
        await saveToCloud(updatedData);
      } else {
        const updatedData = {
          ...siteData,
          home: {
            ...siteData.home,
            blog: blogData,
          },
        };
        await saveToCloud(updatedData);
      }

      triggerToast("Blog content updated successfully!");
    } catch (error) {
      console.error(error);
      triggerToast("Failed to save Blog content.", "error");
    } finally {
      setIsSaving(false);
    }
  };

  const resetChanges = () => {
    if (instanceId && siteData?.sectionData?.[instanceId]) {
      setBlogData(siteData.sectionData[instanceId].content);
    } else {
      setBlogData({
        subtitle: "Latest Blog",
        title: "Latest Blog & Articles",
        posts: [],
        ...(siteData?.home?.blog || {}),
      });
    }
    triggerToast("Changes reset.", "info");
  };

  const sectionStyle = {
    background: "rgba(255, 255, 255, 0.03)",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    borderRadius: "15px",
    padding: "25px",
    maxWidth: "1000px",
    margin: "0 auto",
  };

  const inputStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    color: "#fff",
    borderRadius: "10px",
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
              position: "fixed",
              top: "20px",
              right: "20px",
              zIndex: 9999,
              padding: "16px 24px",
              borderRadius: "16px",
              background: "rgba(15, 23, 42, 0.9)",
              backdropFilter: "blur(12px)",
              border: `1px solid ${showToast.type === "error" ? "#ef4444" : "#6669F1"}`,
              boxShadow: `0 10px 40px -10px rgba(0,0,0,0.5)`,
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "#fff",
              fontWeight: "600",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: showToast.type === "error" ? "#ef4444" : "#6669F1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {showToast.type === "error" ? "!" : "✓"}
            </div>
            {showToast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="d-flex justify-content-between align-items-center mb-4"
        style={{ maxWidth: "1000px", margin: "0 auto" }}
      >
        <div>
          <h2 className="text-white fw-bold mb-1">Blog Management</h2>
          <p className="text-white-50">
            {instanceId
              ? `Editing instance: ${instanceId}`
              : "Manage the Blog content."}
          </p>
        </div>
        <div className="d-flex gap-3">
          <Button
            variant="outline-light"
            onClick={resetChanges}
            className="d-flex align-items-center gap-2"
          >
            <ArrowClockwise size={18} /> Reset
          </Button>
          <Button
            disabled={isSaving}
            onClick={saveChanges}
            className="d-flex align-items-center gap-2"
            style={{ background: "#6669F1", border: "none" }}
          >
            <Save size={18} /> {isSaving ? "Saving..." : "Publish"}
          </Button>
        </div>
      </div>

      <div style={sectionStyle} className="mb-4">
        <h4 className="text-white mb-4 d-flex align-items-center gap-2">
          <Pencil className="text-primary" /> Section & Page Config
        </h4>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="text-white-50 small">
                SUBTITLE (Common to both)
              </Form.Label>
              <Form.Control
                name="subtitle"
                value={blogData.subtitle}
                onChange={handleMetaChange}
                style={inputStyle}
                placeholder="e.g. Latest Blog"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="text-white-50 small">
                MAIN TITLE (Common to both)
              </Form.Label>
              <Form.Control
                name="title"
                value={blogData.title}
                onChange={handleMetaChange}
                style={inputStyle}
                placeholder="e.g. Latest Blog & Articles"
              />
            </Form.Group>
          </Col>
        </Row>
      </div>

      <div style={sectionStyle}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="text-white mb-0 d-flex align-items-center gap-2">
            <JournalText className="text-primary" /> All Blog Posts
          </h4>
          <Button
            variant="link"
            size="sm"
            className="text-primary p-0 text-decoration-none"
            onClick={addPost}
          >
            <PlusCircle className="me-1" /> Create New Post
          </Button>
        </div>

        <div className="posts-container">
          {(blogData.posts || []).map((post) => (
            <Card
              key={post.id}
              className="border-0 mb-4"
              style={{ background: "rgba(0,0,0,0.2)" }}
            >
              <Card.Body>
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="text-white mb-0">Post #{post.id}</h5>
                  <Button
                    variant="link"
                    className="text-danger p-0"
                    onClick={() => removePost(post.id)}
                  >
                    <Trash size={18} />
                  </Button>
                </div>
                <Row>
                  <Col lg={4}>
                    <div className="mb-3">
                      <div
                        style={{
                          width: "100%",
                          aspectRatio: "16/9",
                          borderRadius: "12px",
                          background: "#000",
                          overflow: "hidden",
                          border: "1px solid rgba(255,255,255,0.1)",
                          position: "relative",
                        }}
                      >
                        {post.image ? (
                          <img
                            src={post.image}
                            alt={post.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <div className="w-100 h-100 d-flex align-items-center justify-content-center text-white-50">
                            <ImageIcon size={30} />
                          </div>
                        )}
                      </div>
                      <div className="mt-2 text-center">
                        <CloudinaryUploadWidget
                          label="Upload Thumbnail"
                          onUploadSuccess={(url) =>
                            updatePost(post.id, "image", url)
                          }
                        />
                      </div>
                    </div>
                  </Col>
                  <Col lg={8}>
                    <Row className="mb-2">
                      <Col md={6}>
                        <Form.Group className="mb-2">
                          <Form.Label className="text-white-50 extra-small fw-bold">
                            PUBLISH DATE
                          </Form.Label>
                          <div className="d-flex align-items-center gap-2">
                            <Calendar size={14} className="text-primary" />
                            <Form.Control
                              size="sm"
                              value={post.date}
                              onChange={(e) =>
                                updatePost(post.id, "date", e.target.value)
                              }
                              style={inputStyle}
                            />
                          </div>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-2">
                          <Form.Label className="text-white-50 extra-small fw-bold">
                            AUTHOR
                          </Form.Label>
                          <div className="d-flex align-items-center gap-2">
                            <Person size={14} className="text-primary" />
                            <Form.Control
                              size="sm"
                              value={post.author}
                              onChange={(e) =>
                                updatePost(post.id, "author", e.target.value)
                              }
                              style={inputStyle}
                            />
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-2">
                      <Form.Label className="text-white-50 extra-small fw-bold">
                        BLOG TITLE
                      </Form.Label>
                      <Form.Control
                        size="sm"
                        value={post.title}
                        onChange={(e) =>
                          updatePost(post.id, "title", e.target.value)
                        }
                        style={inputStyle}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label className="text-white-50 extra-small fw-bold">
                        EXCERPT / DESCRIPTION
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        size="sm"
                        value={post.description}
                        onChange={(e) =>
                          updatePost(post.id, "description", e.target.value)
                        }
                        style={inputStyle}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </div>
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

export default HomeBlogEditor;
