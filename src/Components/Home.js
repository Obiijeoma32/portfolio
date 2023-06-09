import image from "./image.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "../App.css";

function Home() {
  return (
    <>
      <div className=" 3xxl:overflow-x-hidden">
        <div className=" 820xxl:flex 6xxl:ml-[15%] 4xl:w-[70%] 4xl:ml-[20%] 7xxl:ml-[5%] 5xxl:ml-[15%] 820xxl:ml-[40px] 6xxl:w-[85%] 820xxl:items-center 3xxl:w-[320px] 820xxl:w-[90%] 3xxl:ml-[20px] 3xxl:grid 5xl:justify-evenly 4xl:justify-evenly 3xl:justify-evenly  text-[#000000] 1xl:ml-[6rem] mt-[9rem]">
          <img className=" home-img rounded-[100%] 6xxl:w-[400px] 6xxl:h-[400px] 3xxl:ml-[20px] md:w-[400px] 3xxl:w-[300px] 3xxl:h-[300px] md:h-[400px]" src={image} alt="candy" />
          <div className=" home-details md:w-[80%] 6xxl:w-[85%]  md:ml-[3rem] mt-9 3xxl:w-[300px]">
            <div className="  w-[250px] justify-between flex">
              <h1 className=" font-[500]   text-[70px]">Hello</h1>
              <svg className="mt-[25px]" width="50" height="50" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.1738 46.3687C14.7051 46.2749 14.3301 46.1812 13.8613 45.9937C13.3926 45.8062 13.0176 45.7124 12.6426 45.5249C11.7988 45.1499 11.0488 44.6812 10.2988 44.1187C8.79884 43.0874 7.58009 41.6812 6.64259 39.9937C5.70509 38.3999 5.14259 36.5249 5.04884 34.7437C4.95509 33.8062 5.04884 32.9624 5.14259 32.0249C5.23634 31.5562 5.33009 31.1812 5.42384 30.7124C5.51759 30.2437 5.70509 29.8687 5.79884 29.3999L5.89259 30.7124C5.89259 31.1812 5.98634 31.5562 6.08009 32.0249C6.17384 32.8687 6.36134 33.7124 6.54884 34.4624C6.92384 36.0562 7.48634 37.5562 8.33009 38.9624C9.17384 40.3687 10.1113 41.6812 11.3301 42.8999C11.8926 43.4624 12.5488 44.0249 13.2051 44.5874C13.4863 44.8687 13.8613 45.1499 14.2363 45.4312L15.1738 46.3687Z"
                  fill="#000000"
                />
                <path
                  d="M14.8926 49.7436C14.6113 49.9311 14.2363 50.0249 13.8613 50.1187C13.4863 50.2124 13.2051 50.3062 12.8301 50.3062C12.1738 50.3999 11.4238 50.4937 10.6738 50.3999C9.26758 50.3062 7.76758 49.9311 6.54883 49.2749C5.23633 48.6186 4.11133 47.5874 3.36133 46.3687C2.98633 45.8062 2.61133 45.1499 2.33008 44.4937C2.23633 44.2124 2.14258 43.8374 2.04883 43.4624C2.04883 43.1812 1.95508 42.8999 1.95508 42.5249C2.23633 42.8062 2.42383 43.0874 2.61133 43.2749C2.89258 43.5562 3.08008 43.8374 3.26758 44.0249C3.73633 44.4937 4.11133 44.9624 4.58008 45.3374C5.51758 46.1812 6.45508 46.9312 7.58008 47.4937C8.61133 48.0562 9.83008 48.5249 10.9551 48.8999C11.5176 49.0874 12.1738 49.1812 12.8301 49.3687C13.1113 49.4624 13.4863 49.4624 13.7676 49.5562C14.2363 49.6499 14.5176 49.6499 14.8926 49.7436Z"
                  fill="#000000"
                />
                <path
                  d="M36.0801 4.18115C36.5488 4.2749 36.9238 4.4624 37.3926 4.6499C37.8613 4.8374 38.2363 5.0249 38.6113 5.2124C39.4551 5.68115 40.2051 6.1499 40.9551 6.7124C42.4551 7.8374 43.6738 9.3374 44.5176 11.0249C45.3613 12.7124 45.8301 14.5874 45.8301 16.3687C45.8301 17.3062 45.7363 18.1499 45.5488 19.0874C45.4551 19.5562 45.3613 19.9312 45.1738 20.3999C44.9863 20.8687 44.8926 21.2437 44.7051 21.6187L44.6113 20.3062C44.6113 19.8374 44.6113 19.4624 44.5176 18.9937L44.2363 16.4624C43.9551 14.8687 43.3926 13.2749 42.6426 11.7749C41.8926 10.2749 40.9551 8.9624 39.8301 7.74365C39.2676 7.0874 38.6113 6.5249 38.0488 5.86865C37.7676 5.5874 37.3926 5.30615 37.0176 5.0249L36.0801 4.18115Z"
                  fill="#000000"
                />
                <path
                  d="M44.2363 3.80615C44.6113 3.8999 44.8926 3.99365 45.1738 4.18115C45.4551 4.2749 45.8301 4.4624 46.1113 4.6499C46.6738 5.0249 47.2363 5.3999 47.7988 5.86865C48.8301 6.80615 49.6738 7.93115 50.1426 9.24365C50.7051 10.5562 50.8926 11.9624 50.7051 13.3687C50.6113 14.0249 50.4238 14.6812 50.2363 15.3374C50.1426 15.6187 49.9551 15.9937 49.8613 16.2749C49.6738 16.5562 49.5801 16.8374 49.2988 17.1187V15.2437C49.2988 14.5874 49.2051 14.0249 49.2051 13.4624C49.0176 12.2437 48.8301 11.1187 48.3613 10.0874C47.8926 8.9624 47.3301 8.0249 46.6738 6.99365C46.2988 6.5249 45.9238 5.9624 45.5488 5.49365C45.3613 5.2124 45.1738 5.0249 44.8926 4.74365C44.7051 4.2749 44.4238 3.99365 44.2363 3.80615Z"
                  fill="#000000"
                />
                <path d="M9.455 17.7747C7.58 18.6184 6.92375 20.8684 7.7675 22.7434L19.58 47.3997L26.1425 44.3059L14.33 19.5559C13.4863 17.6809 11.33 16.8372 9.455 17.7747Z" fill="#FFDD67" />
                <path d="M40.4863 37.3684L47.4238 34.0872L33.9238 5.96216C32.9863 4.08716 30.7363 3.24341 28.7676 4.18091C26.8926 5.11841 26.0488 7.36841 26.9863 9.33716L40.4863 37.3684Z" fill="#FFDD67" />
                <path
                  d="M28.8613 4.08758C28.6738 4.18133 28.4863 4.27508 28.2988 4.46258C30.0801 3.99383 31.9551 4.83758 32.7988 6.52508L46.2988 34.6501L47.5176 34.0876L34.0176 5.96258C33.0801 3.99383 30.8301 3.15008 28.8613 4.08758Z"
                  fill="#EBA352"
                />
                <path d="M26.1425 44.2122L33.3613 40.7434L19.58 12.0559C18.6425 10.0872 16.205 9.14969 14.2363 10.0872C12.2675 11.0247 11.4238 13.4622 12.3613 15.4309L26.1425 44.2122Z" fill="#FFDD67" />
                <path
                  d="M14.2363 10.1813C14.0488 10.2751 13.8613 10.3688 13.6738 10.5563C15.4551 10.0876 17.5176 10.9313 18.3613 12.7126L26.8926 30.6188L28.9551 31.8376L19.5801 12.1501C18.6426 10.0876 16.2988 9.24381 14.2363 10.1813Z"
                  fill="#EBA352"
                />
                <path d="M32.2363 38.4936L39.455 35.0249L25.6738 6.33736C24.7363 4.36861 22.2988 3.43111 20.33 4.46236C18.3613 5.39986 17.5175 7.83736 18.455 9.80611L32.2363 38.4936Z" fill="#FFDD67" />
                <path
                  d="M20.3301 4.36881C20.1426 4.46256 19.9551 4.65006 19.7676 4.74381C21.5488 4.27506 23.6113 5.11881 24.4551 6.90006L34.1113 27.1501L36.1738 28.3688L25.6738 6.33756C24.7363 4.27506 22.2988 3.43131 20.3301 4.36881Z"
                  fill="#EBA352"
                />
                <path
                  d="M9.45508 17.7751C9.26758 17.8688 9.08008 17.9626 8.89258 18.1501C10.5801 17.6813 12.3613 18.5251 13.1113 20.2126L20.1426 34.9313L22.2051 36.1501L14.3301 19.6501C13.4863 17.6813 11.3301 16.8376 9.45508 17.7751Z"
                  fill="#EBA352"
                />
                <path
                  d="M57.08 14.9626C54.5487 12.9939 50.4237 15.1501 48.3612 21.9001C46.955 26.5876 46.7675 27.9939 43.7675 29.4001L42.08 25.9314C42.08 25.9314 15.455 38.7751 16.4862 40.8376C16.4862 40.8376 19.6737 50.7751 25.1112 55.3689C33.1737 62.3064 52.0175 54.9001 52.8612 36.9939C53.33 26.5876 59.7987 17.1189 57.08 14.9626Z"
                  fill="#FFDD67"
                />
                <path
                  d="M57.0801 14.9624C56.6113 14.5874 56.0488 14.3999 55.4863 14.3062C55.5801 14.3999 55.7676 14.3999 55.8613 14.4937C58.6738 16.6499 55.7676 21.6187 54.1738 26.1187C52.8613 29.6812 51.7363 33.3374 51.9238 36.8999C52.6738 52.4624 37.0176 59.8687 27.6426 57.0562C36.8301 60.8999 53.8926 53.5874 53.1426 37.3687C52.9551 33.8062 53.9863 30.3374 55.3926 26.5874C56.8926 22.0874 59.7988 17.1187 57.0801 14.9624Z"
                  fill="#000000"
                />
                <path d="M44.6112 29.0249C38.7987 29.6812 30.2675 38.0249 36.2675 47.1187C31.8612 37.9312 39.08 31.7437 43.6737 29.5874C44.1425 29.2124 44.6112 29.0249 44.6112 29.0249Z" fill="#000000" />
              </svg>
            </div>
            <div className="  mt-4">
              <h3 className=" ml-1 font-[500] text-[25px]">A Bit About Me</h3>
              <p className=" tracking-[1px] 3xxl:w-[335px] 6xxl:w-[100%]   ml-1 mt-1 md:text-[14px] 10inch:w-[85%] 1xl:text-[16px] font-[400] md:w-[100%] 5xl:w-[800px] 4xl:w-[700px] 3xl:w-[600px]  ">
                My name is Candy Ijeoma Obi, and I am a frontend engineer with a passion for JavaScript and a strong understanding of React. I have also honed my skills as a creative UX designer, enjoying the process of designing and playing with
                colors to create visually appealing and user-friendly interfaces. In addition to my professional pursuits, I am also someone who loves to laugh and finds joy in the simple things in life. I am a hardworking individual who takes pride
                in my work and strives to deliver the best possible outcomes in everything I do.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="  3xxl:w-[340px]  820xxl:w-[95%] 5xl:mt-[-5rem] 6xxl:w-[100%] 820xxl:flex justify-end 5xl:w-[50%] 4xl:w-[65%] 4xl:ml-[15%] 4xl:mt-[-1rem] 3xl:w-[89%] 3xl:mt-[-4rem]">
          <div className=" 3xxl:ml-[28px] 1halfxl:w-[70%]  13inch:w-[55%] 7xxl:w-[85%] 7xxl:justify-evenly 7xxl:ml-[5%] 5xxl:w-[75%] 5xxl:ml-[20%] 6xxl:ml-[10%] 6xxl:flex 6xxl:w-[75%] 6xxl:justify-evenly  820xxl:flex justify-between 820xxl:mt-[4rem] 3xxl:mt-[5rem] 3xxl:w-[300px] 10inch:w-[68%] 10inch:ml-[0%] 10inch:justify-center  820xxl:w-[680px]  ">
            <div className=" 3xxl:w-[320px] 10inch:w-[50%] 7xxl:w-[50%] 6xxl:w-[45%] 3xxl:justify-between  3xxl:flex">
              <Link onClick={() => window.scrollTo(0, 0)} to="/resume">
                <div className=" socials 3xxl:mb-[20px] font-[500] 3xxl:text-[20px] 6xxl:text-[15px] md:text-[20px] rounded-[100%] 3xxl:pt-[60px] 6xxl:pt-[40px] md:pt-[60px] md:w-[150px] md:h-[150px] 6xxl:h-[100px] 6xxl:w-[100px]  3xxl:w-[150px] 3xxl:h-[150px] text-center outline  outline-1 bg-[#fdc244] hover:bg-[#fff]  ">
                  Resume
                </div>
              </Link>
              <Link onClick={() => window.scrollTo(0, 0)} to="/project">
                <div className=" socials 3xxl:mb-[20px] font-[500] 3xxl:text-[20px] 6xxl:text-[15px] md:text-[20px] rounded-[100%] 3xxl:pt-[60px] 6xxl:pt-[40px] md:pt-[60px] md:w-[150px] md:h-[150px] 6xxl:h-[100px] 6xxl:w-[100px]  3xxl:w-[150px] 3xxl:h-[150px]  text-center outline  outline-1 bg-[#FF3B25] hover:bg-[#fff]  ">
                  {" "}
                  Projects
                </div>
              </Link>
            </div>
            <div className=" md:ml-[30px] 7xxl:w-[50%] 6xxl:w-[45%] 3xxl:w-[320px] 10inch:w-[50%] 3xxl:justify-between 3xxl:flex">
              <a href="https://github.com/Obiijeoma32">
                <div className="socials2 font-[500] 3xxl:mb-[20px] 3xxl:text-[20px] 6xxl:text-[15px] md:text-[20px] rounded-[100%] 3xxl:pt-[60px] 6xxl:pt-[40px] md:pt-[60px] md:w-[150px] md:h-[150px] 6xxl:h-[100px] 6xxl:w-[100px]  3xxl:w-[150px] 3xxl:h-[150px] text-center outline  outline-1 bg-[#80D8DA] hover:bg-[#fff] hover:outline-offset-2">
                  Github
                </div>
              </a>
              <a href="https://www.linkedin.com/in/obiijeoma32/">
                <div className="socials2 font-[500] 3xxl:text-[20px] 6xxl:text-[15px] md:text-[20px] 3xxl:mb-[20px] rounded-[100%] 3xxl:pt-[60px] 6xxl:pt-[40px] md:pt-[60px] md:w-[150px] md:h-[150px] 6xxl:h-[100px] 6xxl:w-[100px]  3xxl:w-[150px] 3xxl:h-[150px] text-center outline  outline-1 bg-[#008AFC] hover:bg-[#fff] ">
                  linkedin
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className=" 3xxl:ml-[2rem] 5xxl:w-[90%] 6xxl:w-[90%] 3xxl:w-[320px] md:w-[90%] md:ml-[2.5rem] md:mt-[4rem] mb-[2rem] border-t-2 border-[#C7C7C7] 2xl:w-[93%]">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
