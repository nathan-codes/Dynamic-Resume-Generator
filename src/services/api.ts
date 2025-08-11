import axios, { AxiosInstance } from 'axios';
import { LoginCredentials, AuthResponse } from '../types/auth';
import { ResumeListResponse, Resume } from '../types/resume';

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: 'https://api.revampinsights.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      // The token already includes "Bearer " prefix
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);



// Auth API functions
export const authAPI = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/login', credentials);
    return response.data;
  },
};

// Resume API functions
export const resumeAPI = {
  getAllResumes: async (page: number = 1, limit: number = 10): Promise<ResumeListResponse> => {
    const response = await api.get<ResumeListResponse>(`/legacy/resume?page=${page}&limit=${limit}`);
    return response.data;
  },
  
  getResumeById: async (id: string): Promise<Resume> => {
    const response = await api.get<Resume>(`/legacy/resume/${id}`);
    return response.data;
  },
};

export default api;
