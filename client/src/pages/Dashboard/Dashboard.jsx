import SideNavbar from "./SideNavbar";
import MobileNavbar from "./MobileNavbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="lg:grid lg:grid-cols-[150px_1fr] lg:h-screen">
      <div className=" lg:hidden fixed bottom-0 w-full">
        <MobileNavbar />
      </div>
      <div className="hidden lg:block">
        <SideNavbar />
      </div>
      <div className="h-100 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
