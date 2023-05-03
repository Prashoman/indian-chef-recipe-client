import React from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaInvision } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer z-0 px-4 py-5  lg:p-10 bg-slate-900 lg:px-32 text-white text-neutral-content">
        <div className="lg:flex justify-between items-center">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png"
              className="z-10 w-20 h-20"
              alt=""
            />
            <p>
              This is Indian chef Recipe
              <br />
              Providing reliable tech since 2023
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-sans font-bold">Explore</h1>
            <ul className="lg:space-y-2 mt-3">
              <li>Recipes</li>
              <li>Fitness</li>
              <li>Healthy Living</li>
              <li>Blogs</li>
            </ul>
          </div>

          <div className="mt-3 lg:mt-0">
            <h1 className="text-2xl font-sans font-bold">Social</h1>
            <div className="flex  lg:mt-7">
              <FaFacebook className="w-8 lg:w-14 h-11"></FaFacebook>
              <FaGoogle className="w-8 ms-2 lg:w-14 h-11"></FaGoogle>
              <FaInstagram className="w-8 ms-2 lg:w-14 h-11"></FaInstagram>
              <FaInvision className="w-8 ms-2 lg:w-14 h-11"></FaInvision>
            </div>
          </div>
          <div className="mt-3 lg:mt-0">
            <h1 className="text-2xl font-sans font-bold">NEWSLETTER</h1>
            <div className="space-y-2 lg:mt-3">
              <input
                type="text"
                placeholder="user@gmail.com"
                className="border focus:outline-none focus:border-sky-500 border-black w-52 h-10 px-3 text-black rounded"
              />
              <button className="bg-orange-500 px-6 py-2 rounded text-white">
                subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="mt-3" />
        <div className="text-center mt-3">
          <p>Copyright © 2023 - All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
