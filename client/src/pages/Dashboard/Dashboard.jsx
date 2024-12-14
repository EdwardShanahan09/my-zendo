import SideNavbar from "./SideNavbar";
import MobileNavbar from "./MobileNavbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="lg:grid lg:grid-cols-[100px_1fr] lg:h-screen">
      <div className=" lg:hidden fixed bottom-0 w-full">
        <MobileNavbar />
      </div>
      <div className="hidden lg:block">
        <SideNavbar />
      </div>
      <div className="bg-black h-100">Content</div>
    </div>
  );
};

export default Dashboard;
