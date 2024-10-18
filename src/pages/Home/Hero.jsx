import HeroImage from "../../assets/images/hero.svg";
import Button from "../../components/Button/Button";

const Hero = () => {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-headings mb-4 md:mb-6">
          Bring Clarity to Your Day.
        </h1>

        <p className="text-sm md:text-base max-w-xs md:max-w-md lg:max-w-lg mb-4 md:mb-6">
          My Zendo helps you organize your tasks with mindfulness and ease.
          Focus on what matters most, and let us help you create balance in your
          life.
        </p>

        <Button text="Begin Your Journey" />
      </div>
      <div>
        <img
          className="w-full max-w-[200px] md:max-w-[250px] lg:max-w-[400px] mx-auto"
          src={HeroImage}
          alt="Mediating by desk"
        />
      </div>
    </>
  );
};

export default Hero;
