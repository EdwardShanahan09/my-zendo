import HeroImage from "../../images/hero.svg";
import Button from "../../components/Button/Button";

const Hero = () => {
  return (
    <section className="px-6 md:flex items-center justify-between">
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-headings mb-4 md:mb-6">
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
        <img src={HeroImage} alt="Mediating by desk" />
      </div>
    </section>
  );
};

export default Hero;
