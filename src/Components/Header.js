import { Link, NavLink } from "react-router-dom";
import "../App.css";
import { useState } from "react";

function Header({ children }) {
  const [hamBurgerMenu, setHamBurgerMenu] = useState(false);

  function handleHamBurgerMenu() {
    setHamBurgerMenu(!hamBurgerMenu);
  }
  const menuItems = [
    {
      path: "/resume",
      name: "RESUME",
    },
    {
      path: "/project",
      name: "PROJECTS",
    },
    {
      path: "/contact",
      name: "CONTACT",
    },
  ];
  return (
    <>
      <div className="3xxl:w-[375px]  md:pr-[40px]  header-container lg:w-[100%] md:w-[90%] md:justify-evenly  text-[#000000]  flex  3xxl:items-center ">
        <div className=" 3xxl:mr-[10px] 3xxl:w-[px] ">
          <svg className="  md:mt-[-3px]" width="25" height="25" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23.1582 45.1511C35.5847 45.1511 45.6582 35.0776 45.6582 22.6511C45.6582 10.2247 35.5847 0.151062 23.1582 0.151062C10.7318 0.151062 0.658203 10.2247 0.658203 22.6511C0.658203 35.0776 10.7318 45.1511 23.1582 45.1511Z"
              fill="#EEA302"
            />
          </svg>
        </div>
        <Link to="/home" className="md:mt-[-10px] md:ml-[15px]">
          <h1 className=" 3xxl:text-[20px] tracking-[1px] md:text-[24px] font-[500]">Ijeoma Candy Obi</h1>
          <h3 className=" 3xxl:text-[12px] md:text-[16px] font-[400]">Frontend Engineer & UX Designer </h3>
        </Link>
        <div className="lg:flex hidden mt-[5px] ml-[30rem] md:w-[400px]  justify-between 2xl:ml-[65%]">
          {menuItems.map((item, index) => (
            <NavLink className="text-[14px]  tracking-[1px] font-[500] hover:underline " to={item.path} key={index}>
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="lg:hidden   h-[80px] pb-[40px] w-[300px]">
          <div className=" mt-[10px] ml-[40px] w-[100px]">
            <svg onClick={handleHamBurgerMenu} width="40" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 17.5H47.5" stroke="#0C0310" strokeWidth="5" strokeLinecap="round" />
              <path d="M12.5 42.5H47.5" stroke="#0C0310" strokeWidth="5" strokeLinecap="round" />
              <path d="M12.5 30H47.5" stroke="#0C0310" strokeWidth="5" strokeLinecap="round" />
            </svg>
            {hamBurgerMenu && (
              <div className=" w-[150px] pt-[10px] float-right z-[99] h-[130px] rounded-[5px] shadow-lg bg-[#f3f3f3]  ">
                <div className="grid text-center ">
                  {menuItems.map((item, index) => (
                    <NavLink onClick={() => window.scrollTo(0, 0)} className="text-[14px] h-[40px] tracking-[1px] font-[500] hover:underline " to={item.path} key={index}>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
}

export default Header;
