import Logo from "../../assets/icons/logo.svg";
import IconProfile from "../../assets/icons/icon-profile.svg";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className="px-6 py-4 flex justify-between items-center">
      <img
        width={30}
        src={Logo}
        alt="Created by archer7 from the Noun Project"
      />

      <img
        className="md:hidden"
        width={30}
        src={IconProfile}
        alt="Created by NAPISAH from Noun Project"
      />

      <div className="hidden md:block">
        <Button varient="outline" size="small" className="mr-4" text="Login" />
        <Button varient="solid" size="small" text="Sign Up" />
      </div>
    </nav>
  );
};

export default Navbar;
