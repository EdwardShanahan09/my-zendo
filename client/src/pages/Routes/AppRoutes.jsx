import AuthLayout from "../../layouts/AuthLayout";
import MainLayout from "../../layouts/MainLayout";
import Login from "../Auth/Login/Login";
import Signup from "../Auth/Signup/SignUp";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Home/Home";
import ProtectedRoute from "../Routes/ProtectedRoute";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
