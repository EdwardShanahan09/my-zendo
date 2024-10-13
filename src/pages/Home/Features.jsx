import Section from "../../components/Section/Section";
import Feature from "../../components/Feature/Feature";
import Feature1 from "../../assets/images/feature-1.svg";
import Feature2 from "../../assets/images/feature-2.svg";
import Feature3 from "../../assets/images/feature-3.svg";
import Feature4 from "../../assets/images/feature-4.svg";

const featureList = [
  {
    title: "A Clear Path Forward",
    image: Feature1,
    text: "View all your tasks in one place. Organize your workload effortlessly, with a bird's-eye view of everything that needs attention.",
  },
  {
    title: "Focus on Today",
    image: Feature2,
    text: "Zero in on what’s important for today. Keep your mind present and focused, one task at a time, with a clear list of what needs to be done.",
  },
  {
    title: "Organize by Category",
    image: Feature3,
    text: "Sort your tasks into custom categories for easy navigation. Create the perfect balance between work, personal, and everything in between.",
  },
  {
    title: "Celebrate Your Journey",
    image: Feature4,
    text: "Track your progress as you complete tasks. Reflect on your accomplishments and stay mindful of the goals you’re working toward.",
  },
];

const Features = () => {
  return (
    <>
      <div className="mb-10">
        <h2>Find Calm in Your Workflow</h2>
        <p className="md:max-w-md lg:max-w-lg md:mx-auto">
          With My Zendo, organizing your tasks becomes a calming experience.
          Categorize, prioritize, and focus on today’s goals with clarity and
          simplicity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featureList.map((feature, index) => (
          <Feature
            key={index}
            title={feature.title}
            image={feature.image}
            text={feature.text}
          />
        ))}
      </div>
    </>
  );
};

export default Features;
