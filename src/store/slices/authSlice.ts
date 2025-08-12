import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { authService } from "../../services/authService";
import { LoginCredentials, AuthResponse } from "../../types/auth";

interface AuthState {
  isAuthenticated: boolean;
  user: AuthResponse["user"] | null;
  accessToken: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  accessToken: localStorage.getItem("accessToken"),
  loading: false,
  error: null,
};

// Async thunk for login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const response: AuthResponse = await authService.login(credentials);

      // Store token and user data in localStorage
      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("user", JSON.stringify(response.user));

      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    initializeAuth: (state) => {
      const storedAccessToken = localStorage.getItem("accessToken");
      const storedUser = localStorage.getItem("user");

      if (storedAccessToken) {
        state.accessToken = storedAccessToken;
        state.isAuthenticated = true;
        if (storedUser) {
          try {
            state.user = JSON.parse(storedUser);
          } catch {
            state.user = null;
          }
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.loading = false;
          state.isAuthenticated = true;
          state.accessToken = action.payload.accessToken;
          state.user = action.payload.user;
          state.error = null;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, clearError, initializeAuth } = authSlice.actions;
export default authSlice.reducer;
