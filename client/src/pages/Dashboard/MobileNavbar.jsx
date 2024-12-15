import { useNavigate } from "react-router-dom";
import IconProfile from "../../assets/icons/icon-nav-profile.svg";
import IconToday from "../../assets/icons/icon-today.svg";
import IconAll from "../../assets/icons/icon-all.svg";
import IconCategory from "../../assets/icons/icon-category.svg";
import IconLogout from "../../assets/icons/icon-logout.svg";
import { useContext } from "react";
import { UserContext } from "../../context/User/UserContext";

const MobileNavbar = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  return (
    <nav className="w-full bg-primary p-4 md:p-8">
      <ul className="flex justify-between content-center">
        <img
          className="w-6 md:w-8"
          src={IconToday}
          alt="Created by Maya Nurhayati from Noun Project"
        />
        <img
          className="w-6 md:w-8"
          src={IconAll}
          alt="Created by AzizGdt from Noun Project"
        />
        <img
          className="w-6 md:w-8"
          src={IconCategory}
          alt="Created by Fajri Akhmad from Noun Project"
        />
        <img
          className="w-6 md:w-8"
          src={IconProfile}
          alt="Created by NAPISAH from Noun Project"
        />
        <img
          className="w-6 md:w-8"
          src={IconLogout}
          alt="Created by Lingailė Žiūkaitė from Noun Project"
          onClick={handleLogout}
        />
      </ul>
    </nav>
  );
};

export default MobileNavbar;
