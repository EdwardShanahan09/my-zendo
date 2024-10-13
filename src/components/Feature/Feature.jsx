const Feature = ({ image, title, text }) => {
  return (
    <div className="">
      <img src={image} alt={title} className="w-12 h-12 mb-4" />

      <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>

      <p className="text-sm md:text-base text-gray-600">{text}</p>
    </div>
  );
};

export default Feature;
