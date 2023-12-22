import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  const [navBar, setNavBar] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const menuList = [
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/projects",
      name: "Projects",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];
  function handleScrollBackground() {
    if (window.scrollY >= 20) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  }
  window.addEventListener("scroll", handleScrollBackground);
  function handleHamburgerMenu() {
    setHamburger(!hamburger);
  }

  return (
    <>
      {/* small screens from 300px - 900px */}
      <div className={` 3xxS:flex w-full z-30 left-0 top-0 justify-center h-[70px]   pr-[35px] fixed items-center 1xS:hidden ${navBar ? "bg-opacity-20  bg-black" : "  bg-transparent"} `}>
        <div className=" w-full   flex  justify-between items-center ">
          <Logo />
          <div className="   text-[16px]   ">
            <svg onClick={handleHamburgerMenu} width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.125 3.16895H2.875V4.79811H20.125V3.16895Z" fill="#25282B" />
              <path d="M20.125 16.2023H2.875V17.8314H20.125V16.2023Z" fill="#25282B" />
              <path d="M20.125 9.68561H2.875V11.3148H20.125V9.68561Z" fill="#25282B" />
            </svg>
          </div>
        </div>
      </div>
      {hamburger && (
        <div className="bg-[#000000] top-0 z-30 font-medium bg-opacity-80 w-[100%] h-full fixed text-[#fff] text-[32px] ">
          <div className=" float-right w-fit h-fit mt-[18px] mr-[28px]  ">
            <svg onClick={() => setHamburger(false)} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.6666 10.6833L29.3166 8.33325L19.9999 17.6499L10.6833 8.33325L8.33325 10.6833L17.6499 19.9999L8.33325 29.3166L10.6833 31.6666L19.9999 22.3499L29.3166 31.6666L31.6666 29.3166L22.3499 19.9999L31.6666 10.6833Z" fill="white" />
            </svg>
          </div>

          <div className="h-[400px]  flex justify-center flex-col items-center  w-[100%] ">
            {menuList.map((item, index) => (
              <div className=" flex justify-center h-full flex-col items-center  w-[214px] ">
                <NavLink key={index} onClick={() => window.scrollTo(0, 0)} to={item.path}>
                  <h3 className=" hover:underline ">{item.name}</h3>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Big Screens from 1050px - 2600px */}
      <div className=" 3xxS:hidden 1xS:block ">
        <div className={navBar ? "w-[100%] h-[80px]   fixed pl-[50px] pr-[55px] flex  justify-between items-center bg-opacity-20  bg-black" : "  w-[100%] h-[80px] fixed pl-[50px] pr-[55px] flex  justify-between items-center bg-transparent"}>
          <Logo />
          <div className=" text-[#25282B] font-medium text-[16px] flex justify-between items-center w-[33%] ">
            {menuList.map((item, index) => (
              <div>
                <NavLink key={index} onClick={() => window.scrollTo(0, 0)} to={item.path}>
                  <h3 className=" hover:underline ">{item.name}</h3>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
