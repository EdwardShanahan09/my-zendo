import { UserContext } from "../../context/User/UserContext";
import { useContext, useState } from "react";
import IconSettings from "../../assets/icons/icon-settings.svg";
import SettingsModal from "./SettingsModel";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div>
      <h1 className="text-1xl md:text-3xl lg:text-5xl font-headings">
        Welcome Back, {user?.username}
      </h1>

      <div
        onClick={toggleSettings}
        className="absolute top-4 right-4 cursor-pointer"
      >
        <img
          className="w-6 h-6"
          src={IconSettings}
          alt="Created by YANDI RS from Noun Project"
        />
      </div>

      <SettingsModal isOpen={isSettingsOpen} onClose={toggleSettings} />
    </div>
  );
};

export default Profile;
