import IconProfile from "../../assets/icons/icon-nav-profile.svg";
import IconToday from "../../assets/icons/icon-today.svg";
import IconAll from "../../assets/icons/icon-all.svg";
import IconCategory from "../../assets/icons/icon-category.svg";
import IconLogout from "../../assets/icons/icon-logout.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/User/UserContext";

const SideNavbar = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  return (
    <nav className="bg-primary h-screen flex items-center justify-between flex-col p-4">
      <div>
        <Link to="profile">
          <img
            className="w-8"
            src={IconProfile}
            alt="Created by NAPISAH from Noun Project"
          />
        </Link>
      </div>

      <ul>
        <li className="mb-4">
          <Link className="flex" to="today-todos">
            <img
              className="w-4 mr-2"
              src={IconToday}
              alt="Created by Maya Nurhayati from Noun Project"
            />

            <span className="text-white text-sm">Today's Todos</span>
          </Link>
        </li>

        <li className="mb-4">
          <Link className="flex" to="today-todos">
            <img
              className="w-4 mr-2"
              src={IconAll}
              alt="Created by AzizGdt from Noun Project"
            />

            <span className="text-white text-sm">All Todos</span>
          </Link>
        </li>

        <li className="mb-4">
          <Link className="flex" to="today-todos">
            <img
              className="w-4 mr-2"
              src={IconCategory}
              alt="Created by Fajri Akhmad from Noun Project"
            />

            <span className="text-white text-sm">Categories</span>
          </Link>
        </li>
      </ul>

      <div>
        <img
          className="w-6 md:w-8"
          src={IconLogout}
          alt="Created by Lingailė Žiūkaitė from Noun Project"
          onClick={handleLogout}
        />
      </div>
    </nav>
  );
};

export default SideNavbar;
