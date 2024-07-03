import React from "react";
import Logo from "../images/mylogo1.png";
import Playstore from "../images/google-play.png";
import Appstore from "../images/app-store.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#192130] text-white p-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <img src={Logo} alt="" className="w-28 md:w-48 ml-8 mb-4 sm:mb-0" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center ml-8 w-52 gap-2">
              <img src={Playstore} alt="" className="w-16" />
              <img src={Appstore} alt="" className="w-16" />
            </div>
          </div>
          <div>
            <h2 className="font-bold mb-5">Yummy Tummy</h2>
            <p>About Us</p>
            <p>Franchise</p>
            <p>Help & Support</p>
          </div>
          <div>
            <h2 className="font-bold mb-5">Explore Partners</h2>
            <a href="https://www.restaurantonline.co.uk/">
              <p>Restaurant 1</p>
            </a>
            <p>Contact us</p>
            <p>Disclaimer</p>
            <p>City shops</p>
          </div>
          <div>
            <h2 className="font-bold mb-4 text-2xl">Follow</h2>
            <div className="flex flex-row sm:flex-col gap-2">
              <p className="py-2 px-2 cursor-pointer text-xl">
                <a href="https://www.facebook.com/">
                  <FaFacebook />
                </a>
              </p>
              <p className="py-2 px-2 cursor-pointer text-xl">
                <a href="https://www.instagram.com/">
                  <FaInstagram />
                </a>
              </p>
              <p className="py-2 px-2 cursor-pointer text-xl">
                <a href="https://x.com/?lang=en">
                  <RiTwitterXLine />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
