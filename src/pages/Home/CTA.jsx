import Button from "../../components/Button/Button";
import CTAImage from "../../assets/images/cta.svg";

const CTA = () => {
  return (
    <>
      <div className="mb-10 md:order-2">
        <h2>Ready to Create Your Own Zen Space?</h2>

        <p className="mb-4 md:max-w-md lg:max-w-lg">
          Sign up for My Zendo today and start your journey towards a calmer,
          more focused you.
        </p>

        <Button text="Join Today" />
      </div>

      <div>
        <img
          className="w-full max-w-[200px] md:max-w-[250px] lg:max-w-[400px] mx-auto md:mx-0"
          src={CTAImage}
          alt="Mediating by desk"
        />
      </div>
    </>
  );
};

export default CTA;
