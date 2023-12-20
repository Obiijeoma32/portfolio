import { Link } from "react-router-dom";
import AboutHeader from "./AboutHeader";
import banner from "./images/imgBanner.png";
import Services from "./Services";
import Contact from "./Contact";
import AboutFooter from "./AboutFooter";
import cv from "./cv.pdf";

function About() {
  // console.log(cv);
  return (
    <>
      <AboutHeader />
      {/* LARGE SCREENS */}
      <div className=" 3xxS:hidden 10inch:flex  w-[100%] fit justify-center items-center flex mt-[150px] pl-[40px]   ">
        <div className="  w-[90%]  flex justify-between items-center">
          <div className="w-2/4">
            <h1 className=" text-[48px] mb-[32px] text-[#333333] ">About me</h1>
            <p className=" mb-[32px] text-[24px] text-[#828282] ">
              Hi, I'm Candy Ijeoma Obi, a Frontend Developer and UI/UX Designer with a passion for crafting user-friendly interfaces. I specialize in creating seamless digital experiences that blend aesthetics with functionality. Explore my work and
              lets make the web more user-centric together.
            </p>
            <div className="w-[264px] relative  mt-[30px] flex justify-between h-[43px]">
              <a className=" " href={cv} download={cv}>
                <button className=" w-[121px] h-[43px] text-center flex justify-evenly items-center hover:border-[1.8px] hover:border-[#25282B]  text-[#25282B] text-[18px] font-medium bg-[#FFB600] rounded-[8px] ">
                  {" "}
                  Resume{" "}
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      // opacity="0.5"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.89447 12.4756C3.23965 12.4756 3.51947 12.7554 3.51947 13.1006C3.51947 14.2968 3.5208 15.131 3.60543 15.7605C3.68764 16.372 3.83801 16.6958 4.06865 16.9264C4.29928 17.1571 4.6231 17.3074 5.23457 17.3897C5.86403 17.4743 6.6983 17.4756 7.89447 17.4756H12.8945C14.0906 17.4756 14.9249 17.4743 15.5544 17.3897C16.1659 17.3074 16.4896 17.1571 16.7203 16.9264C16.951 16.6958 17.1013 16.372 17.1836 15.7605C17.2681 15.131 17.2695 14.2968 17.2695 13.1006C17.2695 12.7554 17.5493 12.4756 17.8945 12.4756C18.2396 12.4756 18.5195 12.7554 18.5195 13.1006V13.1463C18.5195 14.286 18.5195 15.2046 18.4224 15.9271C18.3216 16.6772 18.1058 17.3087 17.6042 17.8103C17.1026 18.3119 16.4711 18.5277 15.721 18.6285C14.9985 18.7256 14.0799 18.7256 12.9402 18.7256H7.84875C6.70909 18.7256 5.79049 18.7256 5.06801 18.6285C4.31792 18.5277 3.68636 18.3119 3.18476 17.8103C2.68316 17.3087 2.46742 16.6772 2.36657 15.9271C2.26944 15.2046 2.26945 14.286 2.26947 13.1463C2.26947 13.1311 2.26947 13.1158 2.26947 13.1006C2.26947 12.7554 2.5493 12.4756 2.89447 12.4756Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.3945 14.5589C10.57 14.5589 10.7373 14.4852 10.8557 14.3557L14.1891 10.7098C14.422 10.4551 14.4043 10.0598 14.1496 9.82684C13.8948 9.59392 13.4995 9.61159 13.2666 9.86634L11.0195 12.3241V3.10059C11.0195 2.75541 10.7397 2.47559 10.3945 2.47559C10.0493 2.47559 9.76949 2.75541 9.76949 3.10059V12.3241L7.52243 9.86634C7.28952 9.61159 6.89418 9.59392 6.63943 9.82684C6.38468 10.0598 6.36697 10.4551 6.59989 10.7098L9.93324 14.3557C10.0517 14.4852 10.219 14.5589 10.3945 14.5589Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </a>
              <a className="  " href="https://www.behance.net/ijeomaobi">
                <button className="w-[121px] font-medium h-[43px] border-[1.8px] hover:bg-[#25282B] hover:text-[#ffff] border-[#25282B] rounded-[8px] text-[18px] text-[#25282B] ">Portfolio</button>
              </a>
            </div>
          </div>
          <div className=" w-[500px]   ">
            <img src={banner} alt="Candy" />
          </div>
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div className=" w-full mt-[140px] 3xxS:flex 10inch:hidden flex justify-center items-center h-fit ">
        <div className=" w-[85%] flex flex-col justify-between">
          <h1 className=" text-[40px] mb-[32px] text-[#333333] ">About me</h1>
          <div className=" w-full   ">
            <img src={banner} alt="Candy" />
          </div>
          <p className=" mb-[32px] text-[18px] mt-[20px] text-[#828282] ">
            Hi, I'm Candy Ijeoma Obi, a Frontend Developer and UI/UX Designer with a passion for crafting user-friendly interfaces. I specialize in creating seamless digital experiences that blend aesthetics with functionality. Explore my work and
            lets make the web more user-centric together.
          </p>
          <div className="w-[264px] relative mt-[10px] flex justify-between h-[43px]">
            <Link className=" " to="/resume">
              <button className=" w-[121px] h-[43px] text-center   text-[#25282B] text-[18px] font-medium bg-[#FFB600] rounded-[8px] "> Resume</button>
            </Link>
            <a className="  " href="https://www.behance.net/ijeomaobi">
              <button className="w-[121px] font-medium h-[43px] border-[1.8px] hover:bg-[#25282B] hover:text-[#ffff] border-[#25282B] rounded-[8px] text-[18px] text-[#25282B] ">Portfolio</button>
            </a>
          </div>
        </div>
      </div>
      <Services />
      <Contact />
      <AboutFooter />
    </>
  );
}

export default About;
