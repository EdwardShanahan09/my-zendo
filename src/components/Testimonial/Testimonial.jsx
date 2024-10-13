const Testimonial = ({ image, text, name, occupation }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 mb-4 rounded-full object-cover"
      />
      <p className="italic mb-4">"{text}"</p>
      <p className="font-semibold">
        - <span>{name}</span>, <span>{occupation}</span>
      </p>
    </div>
  );
};

export default Testimonial;
