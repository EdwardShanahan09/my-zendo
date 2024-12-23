import { Routes, Route } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import MainLayout from "../../layouts/MainLayout";
import Login from "../Auth/Login/Login";
import Signup from "../Auth/Signup/SignUp";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Home/Home";
import ProtectedRoute from "../Routes/ProtectedRoute";
import PublicRoute from "../Routes/PublicRoute";
import Profile from "../Dashboard/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <MainLayout />
          </PublicRoute>
        }
      >
        <Route index element={<Home />} />
      </Route>

      <Route path="auth" element={<AuthLayout />}>
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
      </Route>

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
