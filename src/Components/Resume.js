import Footer from "./Footer";
import resume from "./resume.png";

function Resume() {
  return (
    <>
      <div className=" ml-[25%] mt-[8rem]">
        <img className=" h-[70%] w-[70%]" src={resume} alt="Resume" />
        <div className=" w-[650px] h-[100px] items-center mt-[40px] flex justify-center">
          <a className="w-[250px] mt-[40px] hover:bg-[#EEA302] hover:text-[#fff] hover:border-[#EEA302]  border-[0.5px] h-[50px] border-[#000] rounded-[40px] items-center flex justify-evenly" href={resume} download="IJEOMA CANDY OBI RESUME">
            <h1>Download Resume</h1>
            <svg width="39" height="29" viewBox="0 0 49 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24.5 19.5V37M24.5 37L18.875 31.1668M24.5 37L30.125 31.1668M11 34.0832C6.02945 34.0832 2 29.9793 2 24.9168C2 20.745 4.73595 17.2243 8.47995 16.1143C8.63905 16.067 8.75 15.9188 8.75 15.75C8.75 8.15608 14.7942 2 22.25 2C29.7058 2 35.75 8.15608 35.75 15.75C35.75 15.8955 35.884 16.0035 36.0235 15.9718C36.6595 15.8265 37.321 15.75 38 15.75C42.9705 15.75 47 19.854 47 24.9168C47 29.9793 42.9705 34.0832 38 34.0832"
                stroke="currentColor"
                strokeWdth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className=" w-[95%] mt-[6rem] ml-[2.5rem] mb-[2rem] border-t-2 border-[#C7C7C7]">
        <Footer />
      </div>
    </>
  );
}

export default Resume;
