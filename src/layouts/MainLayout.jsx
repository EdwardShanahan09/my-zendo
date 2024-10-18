import { Outlet } from "react-router-dom"; // Import Outlet
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Outlet /> {/* This will render the child routes here */}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
