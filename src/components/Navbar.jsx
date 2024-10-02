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
        {/* <a className="transition-all duration-300 hover:scale-125 hover:text-cyan-600" href="#" target="_blank" rel="noopener noreferrer" aria-label="linkedin">
          <FiLinkedin />
        </a> */}
        {/* <a className="transition-all duration-300 hover:scale-125" href="#" target="_blank" rel="noopener noreferrer" aria-label="github">
          <FiGithub />
        </a> */}
        {/* <a className="transition-all duration-300 hover:scale-125" href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FiInstagram />
        </a> */}
        {/* <a className="transition-all duration-300 hover:scale-125" href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FiTwitter />
        </a> */}
        <a className="p-2 hover:scale-125 relative rounded-full bg-white transition-all duration-300 transform hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 group" href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FiLinkedin className="text-black transition-colors duration-300 group-hover:text-white" />
        </a>
        <a className="transition-all duration-300 hover:scale-125 relative p-2 rounded-full bg-white group hover:bg-gradient-to-r hover:from-gray-600 hover:via-gray-700 hover:to-black" href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FiGithub className="text-black transition-colors duration-300 group-hover:text-white" />
        </a>
        <a className="hover:scale-125 relative p-2 rounded-full bg-white transition-all duration-300 transform hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 group" href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FiInstagram className="text-black transition-colors duration-300 group-hover:text-white" />
        </a>
        <a className="transition-all duration-300 hover:scale-125 relative p-2 rounded-full bg-white group hover:bg-gradient-to-r hover:from-blue-400 hover:via-blue-500 hover:to-blue-600" href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FiTwitter className="text-black transition-colors duration-300 group-hover:text-white" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
