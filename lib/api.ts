const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export interface User {
    id: string;
    email: string;
    role: string;
}

export interface Medicine {
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
    createdAt: string;
    updatedAt: string;
}

export interface AuthResponse {
    access_token: string;
    refresh_token: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface OrderTrendData {
    period: string;
    orders: number;
    revenue: number;
}

export interface TopOrderedMedicine {
    medicineId: string;
    medicineName: string;
    totalQuantity: number;
    totalOrders: number;
    averageQuantity: number;
    lastOrdered: string;
}

export interface SpendingAnalysis {
    category: string;
    totalSpent: number;
    percentage: number;
    orderCount: number;
    averageOrderValue: number;
}

export interface OrderFrequencyMetrics {
    averageOrdersPerWeek: number;
    averageOrdersPerMonth: number;
    totalOrders: number;
    period: string;
    trend: 'increasing' | 'decreasing' | 'stable';
    changePercentage: number;
}

export interface OrderTemplate {
    id: string;
    name: string;
    description?: string;
    userId: string;
    items: OrderTemplateItem[];
    createdAt: string;
    updatedAt: string;
}

export interface OrderTemplateItem {
    id: string;
    medicineId: string;
    medicineName: string;
    quantity: number;
    price: number;
}

export interface CreateOrderTemplateDto {
    name: string;
    description?: string;
    items: {
        medicineId: string;
        quantity: number;
        price: number;
    }[];
}

export interface Notification {
    id: string;
    event: string;
    details: string;
    type: 'ORDER' | 'INVENTORY' | 'SYSTEM' | 'SHIPMENT' | 'PRICE_CHANGE' | 'STOCK_ALERT' | 'PROMOTION';
    isRead: boolean;
    userId?: string;
    createdAt: string;
    updatedAt: string;
    user?: {
        id: string;
        email: string;
        name?: string;
    };
}

export interface NotificationStats {
    total: number;
    unread: number;
    byType: Array<{
        type: string;
        count: number;
    }>;
}

class ApiService {
    private baseURL = API_BASE_URL;

    private async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {
        const token = localStorage.getItem('access_token');

        const config: RequestInit = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...(token && { Authorization: `Bearer ${token}` }),
                ...options.headers,
            },
        };

        const response = await fetch(`${this.baseURL}${endpoint}`, config);

        if (!response.ok) {
            if (response.status === 401) {
                // Token expired, try to refresh
                const refreshed = await this.refreshToken();
                if (refreshed) {
                    // Retry the original request with new token
                    const newToken = localStorage.getItem('access_token');
                    config.headers = {
                        ...config.headers,
                        Authorization: `Bearer ${newToken}`,
                    };
                    const retryResponse = await fetch(`${this.baseURL}${endpoint}`, config);
                    if (!retryResponse.ok) {
                        throw new Error(`API Error: ${retryResponse.status}`);
                    }
                    return retryResponse.json();
                } else {
                    // Refresh failed, redirect to login
                    localStorage.removeItem('access_token');
                    localStorage.removeItem('refresh_token');
                    window.location.href = '/login';
                    throw new Error('Authentication failed');
                }
            }
            // Get detailed error message
            let errorMessage = `API Error: ${response.status}`;
            try {
                const errorData = await response.json();
                errorMessage = errorData.message || errorData.error || errorMessage;
                console.error('API Error Details:', errorData);
            } catch (e) {
                console.error('Could not parse error response');
            }

            throw new Error(errorMessage);
        }

        return response.json();
    }

    private async refreshToken(): Promise<boolean> {
        const refreshToken = localStorage.getItem('refresh_token');
        if (!refreshToken) return false;

        try {
            const response = await fetch(`${this.baseURL}/auth/refresh`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ refreshToken }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('access_token', data.access_token);
                return true;
            }
        } catch (error) {
            console.error('Token refresh failed:', error);
        }

        return false;
    }

    // Auth endpoints
    async login(credentials: LoginCredentials): Promise<AuthResponse> {
        console.log('API Service - Making login request to:', `${this.baseURL}/auth/login`);
        console.log('API Service - Credentials:', credentials);

        try {
            const response = await fetch(`${this.baseURL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });

            console.log('API Service - Response status:', response.status);
            console.log('API Service - Response ok:', response.ok);

            if (!response.ok) {
                const errorText = await response.text();
                console.error('API Service - Error response:', errorText);
                throw new Error(`Login failed: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            console.log('API Service - Login successful, received tokens');
            return data;
        } catch (error) {
            console.error('API Service - Fetch error:', error);
            throw error;
        }
    }

    async logout(): Promise<void> {
        await this.request('/auth/logout', { method: 'POST' });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    }

    async getProfile(): Promise<User> {
        return this.request<User>('/auth/profile');
    }

    // Medicines endpoints
    async getMedicines(params?: {
        page?: number;
        limit?: number;
        search?: string;
        category?: string;
        sortBy?: string;
        sortOrder?: 'asc' | 'desc';
    }) {
        const queryParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    queryParams.append(key, value.toString());
                }
            });
        }

        const queryString = queryParams.toString();
        return this.request(`/medicines${queryString ? `?${queryString}` : ''}`);
    }

    // Public method for getting medicines without authentication
    async getMedicinesPublic(params?: {
        page?: number;
        limit?: number;
        search?: string;
        category?: string;
        sortBy?: string;
        sortOrder?: 'asc' | 'desc';
    }) {
        const queryParams = new URLSearchParams();
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined) {
                    queryParams.append(key, value.toString());
                }
            });
        }

        const queryString = queryParams.toString();
        const response = await fetch(`${this.baseURL}/medicines${queryString ? `?${queryString}` : ''}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            let errorMessage = `API Error: ${response.status}`;
            try {
                const errorData = await response.json();
                errorMessage = errorData.message || errorMessage;
            } catch (e) {
                // If response is not JSON, use the status text
                errorMessage = response.statusText || errorMessage;
            }
            throw new Error(errorMessage);
        }

        return response.json();
    }

    // Orders endpoints
    async createOrder(orderData: { userId: string; items: Array<{ medicineId: string; quantity: number }> }) {
        return this.request('/orders', {
            method: 'POST',
            body: JSON.stringify(orderData),
        });
    }

    async getUserOrders(userId: string) {
        // For providers, use authenticated endpoint; ignore userId param
        const resp = await this.request(`/orders/me?page=1&limit=50`);
        return (resp as any).data ?? resp;
    }

    async getOrderStats() {
        return this.request('/orders/stats');
    }

    // Dashboard endpoints
    async getProviderStats() {
        return this.request('/dashboard/provider');
    }

    async getAdminStats() {
        return this.request('/dashboard/admin');
    }

    async getLowStockMedicines() {
        return this.request('/dashboard/low-stock');
    }

    async getStockDetails(medicineId: string) {
        return this.request(`/dashboard/stock-details/${medicineId}`);
    }

    // Analytics methods
    async getOrderTrends(period: 'week' | 'month' = 'month', months: number = 6): Promise<OrderTrendData[]> {
        return this.request(`/analytics/order-trends?period=${period}&months=${months}`);
    }

    async getTopOrderedMedicines(limit: number = 10, months: number = 6): Promise<TopOrderedMedicine[]> {
        return this.request(`/analytics/top-ordered-medicines?limit=${limit}&months=${months}`);
    }

    async getSpendingAnalysis(months: number = 6): Promise<SpendingAnalysis[]> {
        return this.request(`/analytics/spending-analysis?months=${months}`);
    }

    async getOrderFrequencyMetrics(): Promise<OrderFrequencyMetrics> {
        return this.request('/analytics/order-frequency-metrics');
    }

    async getMedicineAvailabilityAlerts() {
        return this.request('/analytics/medicine-availability-alerts');
    }

    async getPriceChangeNotifications() {
        return this.request('/analytics/price-change-notifications');
    }

    async getNewMedicineAnnouncements(limit: number = 5) {
        return this.request(`/analytics/new-medicine-announcements?limit=${limit}`);
    }

    // Notification methods
    async getNotifications(params?: {
        page?: number;
        limit?: number;
        search?: string;
        type?: string;
        sortBy?: string;
        sortOrder?: 'asc' | 'desc';
    }) {
        const queryParams = new URLSearchParams();
        if (params?.page) queryParams.append('page', params.page.toString());
        if (params?.limit) queryParams.append('limit', params.limit.toString());
        if (params?.search) queryParams.append('search', params.search);
        if (params?.type) queryParams.append('type', params.type);
        if (params?.sortBy) queryParams.append('sortBy', params.sortBy);
        if (params?.sortOrder) queryParams.append('sortOrder', params.sortOrder);

        const queryString = queryParams.toString();
        // Provider should use provider-scoped notifications endpoint
        return this.request(`/notifications${queryString ? `?${queryString}` : ''}`);
    }

    async getNotificationStats() {
        // Stats are role-aware now (admin: global, provider: scoped)
        return this.request('/notifications/stats');
    }

    async getNotification(id: string) {
        return this.request(`/notifications/${id}`);
    }

    async markNotificationAsRead(id: string) {
        return this.request(`/notifications/${id}/read`, {
            method: 'PATCH',
        });
    }

    async markAllNotificationsAsRead() {
        return this.request('/notifications/read-all', {
            method: 'PATCH',
        });
    }

    async deleteNotification(id: string) {
        return this.request(`/notifications/${id}`, {
            method: 'DELETE',
        });
    }

    // Order Templates methods
    async getOrderTemplates(): Promise<OrderTemplate[]> {
        return this.request('/order-templates');
    }

    async getOrderTemplate(templateId: string): Promise<OrderTemplate> {
        return this.request(`/order-templates/${templateId}`);
    }

    async createOrderTemplate(template: CreateOrderTemplateDto): Promise<OrderTemplate> {
        return this.request('/order-templates', {
            method: 'POST',
            body: JSON.stringify(template),
        });
    }

    async updateOrderTemplate(templateId: string, template: Partial<CreateOrderTemplateDto>): Promise<OrderTemplate> {
        return this.request(`/order-templates/${templateId}`, {
            method: 'PUT',
            body: JSON.stringify(template),
        });
    }

    async deleteOrderTemplate(templateId: string): Promise<void> {
        return this.request(`/order-templates/${templateId}`, {
            method: 'DELETE',
        });
    }

    async createOrderFromTemplate(templateId: string) {
        return this.request(`/order-templates/${templateId}/create-order`, {
            method: 'POST',
        });
    }
}

export const apiService = new ApiService();
