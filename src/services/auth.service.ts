import axios from 'axios';
import { API_BASE_URL } from '@/constants';

export interface User {
  id: string;
  name: string;
  email: string;
  photoURL?: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const authService = {
  async register(data: { name: string; email: string; password: string }) {
    const response = await api.post<AuthResponse>('/auth/register', data);
    if (response.data.data.token) {
      localStorage.setItem('token', response.data.data.token);
    }
    return response.data.data;
  },

  async login(data: { email: string; password: string }) {
    const response = await api.post<AuthResponse>('/auth/login', data);
    if (response.data.data.token) {
      localStorage.setItem('token', response.data.data.token);
    }
    return response.data.data;
  },

  async logout() {
    localStorage.removeItem('token');
    await api.post('/auth/logout');
  },

  async getCurrentUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const response = await api.get<{ success: boolean; data: User }>('/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data;
  },

  getToken() {
    return localStorage.getItem('token');
  },

  setToken(token: string) {
    localStorage.setItem('token', token);
  },

  removeToken() {
    localStorage.removeItem('token');
  },
};
