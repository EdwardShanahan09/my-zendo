import AuthImage from "../assets/images/auth.svg";
import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Image Section */}
      <div className="hidden md:block">
        <img
          className="w-full h-full object-cover"
          src={AuthImage}
          alt="Man in zen mode"
        />
      </div>

      {/* Text and Form Section */}
      <div className="flex items-center justify-center p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
