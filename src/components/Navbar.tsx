import  { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import image from "../../public/images/logo-color.png";
import image1 from "../../public/images/img-a9juSuGpTC2yU1tvr4Jue.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between border-b-2 overflow-hidden">
      <div className="flex flex-row justify-between items-center w-full md:w-auto border-b md:border-none">
        <figure className="w-32 h-24 ml-8 mb-6">
          <img src={image} alt="" />
        </figure>
        <FontAwesomeIcon
          icon={faBars}
          className="md:hidden mx-4 text-2xl cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      <div
        className={`${
          isMenuOpen ? "flex flex-col" : "hidden md:flex"
        } md:flex-row gap-6 my-auto`}
      >
        <Link to={"/"} className="text-xl text-gray-500">
          Inspiration
        </Link>
        <Link to={"/"} className="text-xl text-gray-500">
          Find Work
        </Link>
        <Link to={"/"} className="text-xl text-gray-500">
          Learn Design
        </Link>
        <Link to={"/"} className="text-xl text-gray-500">
          Go Pro
        </Link>
        <Link to={"/"} className="text-xl text-gray-500">
          Hire Designers
        </Link>
      </div>

      <div className="flex flex-row gap-4 px-4">
        <div className="my-auto bg-slate-300 py-2 px-1 rounded-md">
          <FontAwesomeIcon className="mx-1" icon={faMagnifyingGlass} />
          <input
            type="text"
            className="outline-none w-fit bg-slate-300"
            placeholder="Search"
          />
        </div>

        <div className="h-14 w-14 my-auto" style={{ borderRadius: "50%", overflow: "hidden" }}>
          <img src={image1} className="object-cover" alt="" />
        </div>

        <div className="flex my-auto">
          <button className="bg-pink-500 py-2 px-2 text-white text-md rounded-md">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
