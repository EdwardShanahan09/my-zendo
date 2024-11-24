import { useState, useContext } from "react";
import Input from "../../../components/Input/Input";
import Logo from "../../../assets/icons/logo.svg";
import { UserContext } from "../../../context/User/UserContext";

const Signup = () => {
  const { login } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password != formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password need to be more than 8 charectors long!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess(true);
        setError(null);
        login(data);

        console.log(data);
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (error) {
      setError("Unable to sign up. Please try again later!");
      console.log(error);
    }
  };
  return (
    <div className="max-w-md mx-auto">
      <div className="mb-6">
        <img
          className="w-[30px] md:w-[40px] mb-6"
          src={Logo}
          alt="Created by archer7 from the Noun Project"
        />

        <h2>Join My Zendo</h2>

        <p className="">
          Create an account to start organizing your tasks with mindfulness and
          ease. Sign up below to begin your journey towards a more balanced day.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <Input
          label="Username"
          type="text"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
        />
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
        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full text-secondary bg-primary text-sm md:text-base py-2 px-4 md:py-4 md:px-6 hover:bg-accent rounded"
        >
          Sign Up
        </button>
      </form>
      {error ? <p>{error}</p> : ""}

      {success ? "Yeee" : ""}
    </div>
  );
};

export default Signup;
