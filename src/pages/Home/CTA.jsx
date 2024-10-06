import Button from "../../components/Button/Button";
import CTAImage from "../../assets/images/cta.svg";

const CTA = () => {
  return (
    <section className="px-4 md:px-6 lg:px-16 md:flex items-center justify-between mb-12">
      <div className="md:order-2">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-headings mb-4 md:mb-6">
          Ready to Create Your Own Zen Space?
        </h2>

        <p className="text-sm md:text-base max-w-xs md:max-w-md lg:max-w-lg mb-4 md:mb-6">
          Sign up for My Zendo today and start your journey towards a calmer,
          more focused you.
        </p>

        <Button text="Join Today" />
      </div>

      <div>
        <img
          className="w-full max-w-[200px] md:max-w-[300px] lg:max-w-[500px] mx-auto md:mx-0"
          src={CTAImage}
          alt="Mediating by desk"
        />
      </div>
    </section>
  );
};

export default CTA;
