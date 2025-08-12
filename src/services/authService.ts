import { AuthResponse } from "../types/auth";
import { LoginCredentials } from "../types/auth";
import api from "./api";

// Auth API functions
export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>("/auth/login", credentials);
    return response.data;
  },
};
