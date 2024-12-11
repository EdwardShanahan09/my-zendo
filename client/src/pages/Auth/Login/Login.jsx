import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input/Input";
import Logo from "../../../assets/icons/logo.svg";
import { UserContext } from "../../../context/User/UserContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message);
        return;
      }

      const data = await response.json();
      login(data);
      navigate("navigate");
    } catch (error) {
      setError("An error occurred while logging in. Please try again.");
      console.log(error);
    }
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

      <form className="mb-4" onSubmit={handleSubmit}>
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

      <p className="text-sm text-right">
        Don’t have an account?{" "}
        <Link
          to="/auth/signup"
          className="text-primary font-semibold hover:text-accent underline transition duration-200"
        >
          Sign Up
        </Link>
      </p>

      {error ? <p className="text-red-500 text-sm mt-2">{error}</p> : ""}
    </div>
  );
};

export default Login;
