import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.svg";
import IconProfile from "../../assets/icons/icon-profile.svg";

const Navbar = () => {
  return (
    <nav className="px-4 md:px-6 lg:px-16 py-4 flex justify-between items-center mb-4">
      <img
        className="w-[30px] md:w-[40px]"
        src={Logo}
        alt="Created by archer7 from the Noun Project"
      />
      <Link to="auth/signup">
        <img
          className="md:hidden w-[25px]"
          src={IconProfile}
          alt="Created by NAPISAH from Noun Project"
        />
      </Link>
      <ul className="hidden md:flex ">
        <li className="mr-4">
          <Link className="text-dark hover:text-primary" to="auth/login">
            Login
          </Link>
        </li>
        <li className="mr-4">
          <Link className="text-dark hover:text-primary" to="auth/signup">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
