import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Logo from "../images/YummyT.png";
import { Link } from "react-router-dom";
import Logo2 from "../images/mylogo1.png";

const Header = ({ count }) => {
  const [sidenav, setSideNav] = useState(false);

  return (
    <>
      <div className="fixed z-50 w-full top-0">
        <div className="flex justify-between py-1 px-6 text-xl font-semibold border-b-2 shadow-sm relative bg-[#5e0826] ml-4 mr-4 rounded-lg mt-1">
          <div className="rounded-lg">
            <Link to={"/"}>
              <img
                src={Logo2}
                alt="my logo"
                className="rounded-md w-24 cursor-pointer "
              />
            </Link>
          </div>
          <div className="my-4">
            <ul className=" sm:flex gap-4 hidden justify-center" id="nav">
              <Link to="/">
                <li className="text-[#ebf2fa] hover:text-[#f39c12] ">Home</li>
              </Link>
              <Link to="/aboutus">
                <li className="text-[#ebf2fa] hover:text-[#f39c12]">
                  About us
                </li>
              </Link>
              <Link to="/ourfood">
                <li className="text-[#ebf2fa] hover:text-[#f39c12]">
                  Our Food
                </li>
              </Link>
              <Link to="/SignIn">
                <li className="text-[#ebf2fa] hover:text-[#f39c12]">Sign in</li>
              </Link>
            </ul>
          </div>
          {sidenav ? (
            <div className="right-0 absolute bg-[#eae2b7] h-[100vh] w-56 flex items-center justify-center top-0 z-50">
              <IoIosCloseCircleOutline
                size={28}
                onClick={() => setSideNav(!sidenav)}
                className="absolute top-2 right-2  cursor-pointer 
              "
              />
              <ul
                className=" flex gap-10 flex-col cursor-pointer font-semibold "
                id="nav"
              >
                <Link to="/">
                  <li
                    className="hover:bg-[#6c584c] px-4 py-1 rounded-md ease-in duration-300 "
                    onClick={() => setSideNav(!sidenav)}
                  >
                    Home
                  </li>
                </Link>
                <Link to="/aboutus">
                  <li
                    className="hover:bg-[#6c584c] px-4 py-1 rounded-md ease-in duration-300 "
                    onClick={() => setSideNav(!sidenav)}
                  >
                    About us
                  </li>
                </Link>
                <Link to="/ourfood">
                  <li
                    className="hover:bg-[#6c584c] px-4 py-1 rounded-md ease-in duration-300 "
                    onClick={() => setSideNav(!sidenav)}
                  >
                    Our Food
                  </li>
                </Link>
                <Link to="/SignIn">
                  <li
                    className="hover:bg-[#6c584c] px-4 py-1 rounded-md ease-in duration-300 "
                    onClick={() => setSideNav(!sidenav)}
                  >
                    Sign in
                  </li>
                </Link>
              </ul>
            </div>
          ) : (
            ""
          )}
          <div className="flex gap-5 ">
            <p className="my-4">
              <GiHamburgerMenu
                size={30}
                className="block cursor-pointer sm:hidden text-[#ebf2fa] hover:text-[#f39c12] "
                onClick={() => setSideNav(!sidenav)}
              />
            </p>
            <p className="my-4 text-[#fda521]">
              {count}
              <FaShoppingCart
                size={30}
                className="cursor-pointer text-[#ebf2fa] hover:text-[#f39c12]"
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
