import Logo from "../../assets/icons/logo.svg";
import IconProfile from "../../assets/icons/icon-profile.svg";

const Navbar = () => {
  return (
    <nav className="px-6 py-4 flex justify-between items-center mb-6">
      <img
        className="w-[30px] md:w-[40px]"
        src={Logo}
        alt="Created by archer7 from the Noun Project"
      />

      <img
        className="md:hidden w-[25px]"
        src={IconProfile}
        alt="Created by NAPISAH from Noun Project"
      />

      <ul className="hidden md:flex ">
        <li className="mr-4">
          <a className="text-dark hover:text-primary" href="#">
            Login
          </a>
        </li>
        <a className="text-dark hover:text-primary" href="#">
          Sign Up
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
