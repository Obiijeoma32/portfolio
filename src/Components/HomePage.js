import { Link } from "react-router-dom";
import Header from "./Header";
import Projects from "./Projects";
import SocialFooter from "./SocialFooter";
import homePagePic from "./images/homePagePicture.png";
import smallScreens from "./images/pp.png";
// import { useState, useEffect } from "react";
// import { useMemo } from "react";
import backgroundImage from "./images/bg.png";

function HomePage() {
  // const [text, setText] = useState("");
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
  };

  // const contentArray = useMemo(
  //   () => ["I’m ", "a ", "Frontend ", "Developer ", "and ", "UI", "/", "UX", " designer", " who’s", " passionate", " about", " fusing", " design", " and", " code", " to", " craft", " fluid", " digital", " experiences."],
  //   []
  // );
  // useEffect(() => {
  //   let index = 0;
  //   const intervalId = setInterval(() => {
  //     setText((prevText) => prevText + contentArray[index]);
  //     index++;

  //     if (index === contentArray.length) {
  //       clearInterval(intervalId);
  //     }
  //   }, 500);

  //   // Cleanup function to clear the interval when the component is unmounted
  //   return () => clearInterval(intervalId);
  // }, [contentArray]);

  return (
    <>
      <Header />
      {/* small screens from 300px - 500px */}
      <div className="3xxS:flex 5xxS:hidden 10inch:hidden 820xxS:hidden w-full pt-[6rem] h-fit justify-center items-center  1xS:hidden bg-no-repeat object-cover bg-center bg-cover" style={divStyle}>
        <div className="  w-[85%] max-w-[85%] ">
          <h3 className="text-[10px] text-[#FFf] text-opacity-70 font-normal">UI/UX Designer</h3>
          <h1 className="text-[#25282B]  text-[30px] font-semibold  ">Hello, my name is Candy Obi</h1>
          <div className=" w-full flex items-end  justify-between   ">
            <div>
              <p className="text-[13px] mt-[10px] text-[#828282] font-normal ">I’m a Frontend Developer and UI/UX designer who’s passionate about fusing design and code to craft fluid digital experiences.</p>
              <div className="w-[160px] mt-[30px] flex justify-between h-[43px]">
                <Link to="/projects">
                  <button className="w-[75px] font-medium h-[35px] hover:border-[1.8px] hover:border-[#25282B] bg-[#FFB600] rounded-[8px] text-[11px] text-[#25282B] ">Projects</button>
                </Link>
                <a href="https://www.linkedin.com/in/obiijeoma32/">
                  <button className="w-[75px] font-medium h-[35px] border-[1.8px] hover:bg-[#25282B] hover:text-[#ffff] border-[#25282B] rounded-[8px] text-[11px] text-[#25282B] ">LinkedIn</button>
                </a>
              </div>
            </div>
            <img className=" w-[40%] h-[140px]  " src={smallScreens} alt="Candy" />
          </div>
        </div>
      </div>
      {/* mini ipad to 900 */}
      <div className=" 3xxS:hidden 5xxS:flex  10inch:hidden 1xS:hidden  w-full h-fit ">
        <div className=" z-10 mt-[100px] w-[60%] flex justify-between items-center  pl-[30px]  ">
          <div>
            <h3 className="text-[16px] text-[#FFB600B2] text-opacity-70 font-normal">UI/UX Designer</h3>
            <h1 className="text-[#25282B]  text-[40px] font-semibold  ">Hello, my name is Candy Obi</h1>
            <p className="text-[18px] mt-[10px] text-[#828282] font-normal ">I’m a Frontend Developer and UI/UX designer who’s passionate about fusing design and code to craft fluid digital experiences.</p>
            <div className="w-[260px]  mt-[20px] flex justify-between h-[43px]">
              <Link to="/projects">
                <button className="w-[121px] font-medium h-[43px] hover:border-[1.8px] hover:border-[#25282B] bg-[#FFB600] rounded-[8px] text-[18px] text-[#25282B] ">Projects</button>
              </Link>
              <a href="https://www.linkedin.com/in/obiijeoma32/">
                <button className="w-[121px] font-medium h-[43px] border-[1.8px] hover:bg-[#25282B] hover:text-[#ffff] border-[#25282B] rounded-[8px] text-[18px] text-[#25282B] ">LinkedIn</button>
              </a>
            </div>
          </div>
        </div>
        <img className=" absolute top-0 right-0 z-1 h-[500px] w-[400px] " src={homePagePic} alt="Candy" />
        <img className=" absolute 3xxS:hidden right-[5px] w-[260px] top-[15rem] h-[280px]" src={smallScreens} alt="Candy" />
      </div>
      {/* big screens from 1050px - 2600px */}
      <div className=" 3xxS:hidden 5xxS:hidden  820xxS:block  1xS:block">
        <div className=" h-[750px] w-[100%] flex  justify-between">
          <div className=" mt-[200px] w-[45%] pl-[60px]  ">
            <div>
              <h3 className="text-[20px] text-[#FFB600B2] text-opacity-70 font-normal">UI/UX Designer</h3>
              <h1 className="text-[#25282B]  text-[64px] font-semibold  ">Hello, my name is Candy Obi</h1>
              <p className="text-[23px] mt-[10px] text-[#828282] font-normal ">I’m a Frontend Developer and UI/UX designer who’s passionate about fusing design and code to craft fluid digital experiences.</p>
              <div className="w-[264px] mt-[30px] flex justify-between h-[43px]">
                <Link to="/projects">
                  <button className="w-[121px] font-medium h-[43px] hover:border-[1.8px] hover:border-[#25282B] bg-[#FFB600] rounded-[8px] text-[18px] text-[#25282B] ">Projects</button>
                </Link>
                <a href="https://www.linkedin.com/in/obiijeoma32/">
                  <button className="w-[121px] font-medium h-[43px] border-[1.8px] hover:bg-[#25282B] hover:text-[#ffff] border-[#25282B] rounded-[8px] text-[18px] text-[#25282B] ">LinkedIn</button>
                </a>
              </div>
            </div>
          </div>
          <img className=" h-[680px] w-[55%]  " src={homePagePic} alt="Candy" />
        </div>
      </div>
      <Projects />
      <SocialFooter />
    </>
  );
}

export default HomePage;
