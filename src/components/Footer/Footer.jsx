import Logo from "../../assets/icons/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-secondary px-4 md:px-6 lg:px-16 py-6 text-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
        <div className="flex flex-col items-start text-sm">
          <img
            className="w-[30px] md:w-[40px] mb-4"
            src={Logo}
            alt="Created by archer7 from the Noun Project"
          />
        </div>

        <div className="md:text-right">
          <ul className="inline-flex space-x-4">
            <li>
              <a className="text-dark hover:text-primary text-sm" href="#">
                Login
              </a>
            </li>
            <li>
              <a className="text-dark hover:text-primary text-sm" href="#">
                Sign Up
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className=" mb-2">
            Designed and developed by:{" "}
            <a className="hover:text-primary" href="#">
              Edward Shanahan
            </a>
          </p>
          <p>&copy; My Zendo 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
