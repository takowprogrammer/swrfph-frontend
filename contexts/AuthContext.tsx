'use client'

import { createContext, useContext, useEffect, useState, ReactNode, useRef, useCallback } from 'react';
import { apiService, User } from '@/lib/api';

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    loading: boolean;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Utility to clear tokens from localStorage
    const clearAuthTokens = useCallback(() => {
        if (typeof window !== 'undefined') {
            console.log('AuthContext - Clearing tokens...');
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user_role');
        }
    }, []);

    // Logout function
    const logout = useCallback(async () => {
        console.log('AuthContext - Initiating logout...');
        try {
            clearAuthTokens();
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setUser(null);
            console.log('AuthContext - User set to null after logout.');
        }
    }, [clearAuthTokens]);

    // Reset inactivity timer
    const resetInactivityTimer = useCallback(() => {
        if (inactivityTimeoutRef.current) {
            clearTimeout(inactivityTimeoutRef.current);
        }
        if (user) {
            inactivityTimeoutRef.current = setTimeout(() => {
                console.log("AuthContext - Inactivity timeout reached, logging out...");
                logout();
            }, 3600000);
        }
    }, [user, logout]);

    // Effect to set up/clean up activity listeners
    useEffect(() => {
        const handleActivity = () => {
            resetInactivityTimer();
        };

        if (typeof window !== 'undefined' && user) {
            window.addEventListener("mousemove", handleActivity);
            window.addEventListener("keydown", handleActivity);
            window.addEventListener("scroll", handleActivity);
            resetInactivityTimer();
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener("mousemove", handleActivity);
                window.removeEventListener("keydown", handleActivity);
                window.removeEventListener("scroll", handleActivity);
            }
            if (inactivityTimeoutRef.current) {
                clearTimeout(inactivityTimeoutRef.current);
            }
        };
    }, [user, resetInactivityTimer]);

    useEffect(() => {
        const initAuth = async () => {
            console.log('AuthContext - Starting initialization...');
            if (typeof window === 'undefined') {
                setLoading(false);
                console.log('AuthContext - Skipping initialization on server.');
                return;
            }

            const token = localStorage.getItem('access_token');
            console.log('AuthContext - Token exists:', !!token);
            if (token) {
                try {
                    console.log('AuthContext - Fetching user profile...');
                    const userData = await apiService.getProfile();
                    console.log('AuthContext - User profile received:', userData);
                    setUser(userData);
                    localStorage.setItem('user_role', userData.role);
                } catch (error) {
                    console.error('AuthContext - Auth initialization failed:', error);
                    clearAuthTokens();
                }
            }
            setLoading(false);
            console.log('AuthContext - Initialization complete, loading set to false.');
        };

        initAuth();
    }, [clearAuthTokens]);

    const login = async (email: string, password: string) => {
        console.log('AuthContext - Initiating login for:', email);
        try {
            const response = await apiService.login({ email, password });
            console.log('AuthContext - Login response received', response);

            if (typeof window !== 'undefined') {
                localStorage.setItem('access_token', response.access_token);
                localStorage.setItem('refresh_token', response.refresh_token);
                console.log('AuthContext - Tokens stored in localStorage');
            }

            console.log('AuthContext - Fetching user profile after login...');
            const userData = await apiService.getProfile();
            console.log('AuthContext - User data received after login:', userData);
            setUser(userData);

            if (typeof window !== 'undefined') {
                localStorage.setItem('user_role', userData.role);
                console.log('AuthContext - User role stored:', userData.role);
            }
        } catch (error) {
            console.error('AuthContext - Login error:', error);
            throw new Error('Login failed. Please check your credentials.');
        }
    };

    const value = {
        user,
        login,
        logout,
        loading,
        isAuthenticated: !!user,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
