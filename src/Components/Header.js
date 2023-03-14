import { Link, NavLink } from "react-router-dom";
import "../App.css";

function Header({ children }) {
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
      <div className=" header-container  text-[#000000]  flex">
        <svg className=" mt-[-3px]" width="25" height="25" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23.1582 45.1511C35.5847 45.1511 45.6582 35.0776 45.6582 22.6511C45.6582 10.2247 35.5847 0.151062 23.1582 0.151062C10.7318 0.151062 0.658203 10.2247 0.658203 22.6511C0.658203 35.0776 10.7318 45.1511 23.1582 45.1511Z"
            fill="#EEA302"
          />
        </svg>
        <Link to="/home" className="mt-[-10px] ml-[15px]">
          <h1 className=" tracking-[1px] text-[24px] font-[500]">Ijeoma Candy Obi</h1>
          <h3 className=" text-[16px] font-[400]">Frontend Engineer & UX Designer </h3>
        </Link>
        <div className=" mt-[5px] ml-[37rem] w-[300px] flex justify-between">
          {menuItems.map((item, index) => (
            <NavLink className="text-[14px]  tracking-[1px] font-[500] hover:underline " to={item.path} key={index}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      <main>{children}</main>
    </>
  );
}

export default Header;
