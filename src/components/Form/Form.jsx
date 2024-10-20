const Form = ({ children, handleSubmit, className }) => {
  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {children}
    </form>
  );
};

export default Form;
