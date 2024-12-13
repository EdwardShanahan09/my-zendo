const Input = ({ label, type, placeholder, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm md:text-base font-medium mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
};

export default Input;
