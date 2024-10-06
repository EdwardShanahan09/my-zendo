import { useState, useEffect } from "react";
import Avatar1 from "../../assets/icons/testimonial-1.svg";
import Avatar2 from "../../assets/icons/testimonial-2.svg";
import Testimonial from "../../components/Testimonial/Testimonial";

const testimonialList = [
  {
    image: Avatar1,
    text: "My Zendo has changed my life. I start every morning with a calm mind and clear focus. Highly recommend it to anyone looking for peace in their day.",
    name: "Emily R",
    occupation: "Busy Professional",
  },
  {
    image: Avatar2,
    text: "Using My Zendo has made a world of difference in how I manage my day. The simple interface helps me stay organized and stress-free. I feel more in control of my tasks than ever before.",
    name: "James T",
    occupation: "Entrepreneur",
  },
  {
    image: Avatar1,
    text: "My Zendo is the perfect tool for anyone who wants to focus on what truly matters. It has helped me bring order to the chaos of my workday. I can’t imagine starting my day without it!",
    name: "Sarah L",
    occupation: "Freelancer",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialList.length);
        setFade(true);
      }, 500);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setFade(false);
    setTimeout(() => {
      setActiveIndex(index);
      setFade(true);
    }, 500);
  };

  return (
    <section className="text-center py-10 bg-gray-50">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-headings mb-4 md:mb-6">
        Experiences of Clarity
      </h2>

      <div
        className={`transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <Testimonial
            image={testimonialList[activeIndex].image}
            text={testimonialList[activeIndex].text}
            name={testimonialList[activeIndex].name}
            occupation={testimonialList[activeIndex].occupation}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-center space-x-2">
        {testimonialList.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              activeIndex === index ? "bg-primary" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
