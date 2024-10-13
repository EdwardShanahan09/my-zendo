import Section from "../../components/Section/Section";
import Features from "./Features";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import CTA from "./CTA";

const Home = () => {
  return (
    <>
      <Section classes="md:flex items-center justify-between">
        <Hero />
      </Section>
      <Section>
        <Features />
      </Section>
      <Section classes="text-center">
        <Testimonials />
      </Section>
      <Section classes="md:flex items-center justify-between mb-12">
        <CTA />
      </Section>
    </>
  );
};

export default Home;
