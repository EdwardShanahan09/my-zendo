import Input from "../../components/Input/Input";
import { useState } from "react";

const SettingsModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Settings updated!", formData);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-md shadow-lg w-11/12 max-w-[400px] relative sm:w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold mb-4">Settings</h2>
        <form onSubmit={handleSubmit}>
          <Input
            label="Change Email"
            type="email"
            name="email"
            placeholder="Enter new email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            label="Change Password"
            type="password"
            name="password"
            placeholder="Enter new password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition"
          >
            Save Changes
          </button>
        </form>
        <button
          className="absolute top-2 right-2 text-2xl font-bold hover:text-gray-300 transition"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;
