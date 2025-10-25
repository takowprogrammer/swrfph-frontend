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

    const resetInactivityTimer = useCallback(() => {
        if (inactivityTimeoutRef.current) {
            clearTimeout(inactivityTimeoutRef.current);
        }
        if (user) { // Only set timeout if user is logged in
            inactivityTimeoutRef.current = setTimeout(() => {
                console.log("Inactivity timeout reached, logging out...");
                logout();
            }, 3600000); // 1 hour
        }
    }, [user, logout]);

    useEffect(() => {
        const handleActivity = () => {
            resetInactivityTimer();
        };

        if (typeof window !== 'undefined' && user) {
            window.addEventListener("mousemove", handleActivity);
            window.addEventListener("keydown", handleActivity);
            window.addEventListener("scroll", handleActivity);
            resetInactivityTimer(); // Initialize timer on login/page load
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
            // Check if we're in the browser
            if (typeof window === 'undefined') {
                setLoading(false);
                return;
            }

            const token = localStorage.getItem('access_token');
            console.log('Auth init - token exists:', !!token);
            if (token) {
                try {
                    console.log('Fetching user profile...');
                    const userData = await apiService.getProfile();
                    console.log('User profile received:', userData);
                    setUser(userData);
                    localStorage.setItem('user_role', userData.role);
                } catch (error) {
                    console.error('Auth initialization failed:', error);
                    clearAuthTokens();
                }
            }
            setLoading(false);
        };

        initAuth();
    }, []);

    const login = async (email: string, password: string) => {
        try {
            console.log('AuthContext - Starting login for:', email)
            const response = await apiService.login({ email, password });
            console.log('AuthContext - Login response received')

            if (typeof window !== 'undefined') {
                localStorage.setItem('access_token', response.access_token);
                localStorage.setItem('refresh_token', response.refresh_token);
                console.log('AuthContext - Tokens stored in localStorage')
            }

            const userData = await apiService.getProfile();
            console.log('AuthContext - User data received:', userData)
            setUser(userData);

            if (typeof window !== 'undefined') {
                localStorage.setItem('user_role', userData.role);
                console.log('AuthContext - User role stored:', userData.role)
            }
        } catch (error) {
            console.error('AuthContext - Login error:', error)
            throw new Error('Login failed. Please check your credentials.');
        }
    };

    const clearAuthTokens = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user_role');
        }
    };

    const logout = async () => {
        try {
            // No backend call for logout, simply clear tokens and state
            clearAuthTokens();
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setUser(null);
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
