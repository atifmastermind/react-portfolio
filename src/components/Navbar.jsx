import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import mainlogo from "../assets/logo-main.webp";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="home">
          <img className="mx-2" width={50} height={33} src={mainlogo} alt="Main logo" />
        </a>
      </div>
      <div className="flex m-8 items-center justify-center gap-4 text-2xl">
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="linkedin">
          <FiLinkedin />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="github">
          <FiGithub />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FiInstagram />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FiTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
