import Section from "../../components/Section/Section";
import Features from "./Features";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import CTA from "./CTA";

const Home = () => {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section>
        <Features />
      </Section>
      <Section>
        <Testimonials />
      </Section>
      <Section>
        <CTA />
      </Section>
    </>
  );
};

export default Home;
