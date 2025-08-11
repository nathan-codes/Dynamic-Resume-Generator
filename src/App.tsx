import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { initializeAuth } from "./store/slices/authSlice";
import LoginPage from "./pages/LoginPage";
import ResumePage from "./pages/ResumePage";
import ProtectedRoute from "./components/ProtectedRoute";

const AppContent = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Initialize auth state from localStorage on app load
    dispatch(initializeAuth());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: isAuthenticated ? (
        <Navigate to="/resume" replace />
      ) : (
        <LoginPage />
      ),
    },
    {
      path: "/resume",
      element: (
        <ProtectedRoute>
          <ResumePage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/",
      element: isAuthenticated ? (
        <Navigate to="/resume" replace />
      ) : (
        <Navigate to="/login" replace />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

const App = () => {
  return <AppContent />;
};

export default App;
