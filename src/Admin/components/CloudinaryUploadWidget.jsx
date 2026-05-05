import React, { useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { CloudUpload } from 'react-bootstrap-icons';

const CloudinaryUploadWidget = ({ onUploadSuccess, label = "Upload Image" }) => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    // Keep track of the latest callback without triggering re-renders
    const callbackRef = useRef(onUploadSuccess);
    useEffect(() => {
        callbackRef.current = onUploadSuccess;
    }, [onUploadSuccess]);

    useEffect(() => {
        // Only initialize if the script has loaded from index.html
        if (window.cloudinary && !widgetRef.current) {
            cloudinaryRef.current = window.cloudinary;
            widgetRef.current = cloudinaryRef.current.createUploadWidget(
                {
                    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
                    uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
                    multiple: false,
                    resourceType: 'image',
                    clientAllowedFormats: ["png", "jpg", "jpeg", "webp", "gif", "svg"]
                },
                function (error, result) {
                    if (!error && result && result.event === "success") {
                        // Call the latest stored callback
                        if (callbackRef.current) {
                            callbackRef.current(result.info.secure_url);
                        }
                    }
                }
            );
        } else if (!window.cloudinary) {
            console.warn("Cloudinary script not loaded. Check index.html");
        }

        // Cleanup function (optional but good practice)
        return () => {
             // We generally wouldn't destroy the widget here if we want it to persist, 
             // but preventing re-creation is the key.
        };
    }, []);

    const openWidget = (e) => {
        e.preventDefault();
        if (widgetRef.current) {
            widgetRef.current.open();
        }
    };

    return (
        <Button
            variant="outline-light"
            size="sm"
            onClick={openWidget}
            className="d-flex align-items-center gap-2 mb-2 w-100 justify-content-center"
            style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}
        >
            <CloudUpload /> {label}
        </Button>
    );
};

export default CloudinaryUploadWidget;
