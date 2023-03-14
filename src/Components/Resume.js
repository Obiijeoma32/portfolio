import Footer from "./Footer";
import resume from "./resume.png";

function Resume() {
  return (
    <>
      <div className=" ml-[25%] mt-[8rem]">
        <img className=" h-[70%] w-[70%]" src={resume} alt="Resume" />
      </div>
      <div className=" w-[95%] mt-[6rem] ml-[2.5rem] mb-[2rem] border-t-2 border-[#C7C7C7]">
        <Footer />
      </div>
    </>
  );
}

export default Resume;
