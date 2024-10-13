const Section = ({ children, classes }) => {
  return (
    <section
      className={`px-4 md:px-6 lg:px-16 mb-12 md:mb-14 lg:mb-16 ${classes}`}
    >
      {children}
    </section>
  );
};

export default Section;
