import { UserContext } from "../../context/User/UserContext";
import { useContext } from "react";

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Welcome Back, {user?.username}</h1>
    </div>
  );
};

export default Profile;
