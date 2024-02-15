import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './firebase-config'; // Adjust the import path as needed
import { onAuthStateChanged } from 'firebase/auth';

const PrivateRoute = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);
            setIsLoading(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    if (isLoading)
    {
        return <div>Loading...</div>; // Or any loading indicator you prefer
    }

    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
