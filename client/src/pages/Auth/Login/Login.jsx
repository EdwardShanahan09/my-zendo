import { useState } from "react";

import Input from "../../../components/Input/Input";
import Logo from "../../../assets/icons/logo.svg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login submission
  };

  return (
    <div className="max-w-md mx-auto">
      <div>
        <img
          className="w-[30px] md:w-[40px] mb-6"
          src={Logo}
          alt="Created by archer7 from the Noun Project"
        />
        <h2 className="text-xl md:text-2xl font-bold mb-4">Welcome Back!</h2>
        <p className="mb-6 text-sm md:text-base">
          Please enter your credentials to log in and continue using My Zendo.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full text-secondary bg-primary text-sm md:text-base py-2 px-4 md:py-4 md:px-6 hover:bg-accent rounded"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
