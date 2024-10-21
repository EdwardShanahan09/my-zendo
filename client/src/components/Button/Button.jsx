const Button = ({ text }) => {
  return (
    <button
      className={`w-full text-secondary bg-primary text-sm md:text-base py-2 px-4 md:py-4 md:px-6 hover:bg-accent rounded`}
    >
      {text}
    </button>
  );
};

export default Button;
