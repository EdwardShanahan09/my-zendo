const Button = ({ text, varient = "solid", size = "medium", className }) => {
  const baseStyle = "rounded focus:outline-none focus:ring";
  let varientStyle;
  let sizeStyle;

  switch (varient) {
    case "solid":
      varientStyle =
        "border border-primary bg-primary text-secondary hover:bg-accent hover:border-accent";
      break;
    case "outline":
      varientStyle =
        "border border-primary text-dark hover:bg-primary hover:text-secondary";
      break;
    default:
      varientStyle = "bg-primary text-secondary hover:bg-accent";
  }

  switch (size) {
    case "small":
      sizeStyle = "text-sm py-2 px-4";
      break;
    case "medium":
      sizeStyle = "text-md py-4 px-8";
      break;
    default:
      sizeStyle = "text-md py-4 px-8";
  }

  return (
    <button
      className={`${baseStyle} ${varientStyle} ${sizeStyle} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
