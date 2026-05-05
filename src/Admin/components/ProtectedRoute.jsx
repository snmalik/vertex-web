import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import Loader from '../../components/common/Loader';

const ProtectedRoute = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <Loader page="Checking Access..." />;
    }

    if (!user) {
        // Not logged in, redirect to login page
        return <Navigate to="/admin/login" replace />;
    }

    // Logged in, render the protected component
    return <Outlet />;
};

export default ProtectedRoute;
