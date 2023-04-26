import "../App.css";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <div className="mt-[11rem] flex justify-between ml-[5rem] mr-[3rem] w-[85%]">
        <div>
          <div className=" mt-4 ">
            <h1 className="font-[500] text-[#000]  text-[40px]">Contact </h1>
            <p className="font-[300] text-[#000]  text-[16px]"> Looking forward to hearing from you</p>
          </div>
          <div className=" mt-8">
            <h1 className="font-[500] text-[#000]  text-[22px]">Email</h1>
            <a className="font-[300] text-[#000]  text-[16px] hover:underline" href="mailto:obiijeoma32@gmail.com">
              obiijeoma32@gmail.com
            </a>
          </div>
        </div>
        <div>
          <form autoComplete="on" className="" action="https://formsubmit.co/obiijeoma32@gmail.com" method="POST">
            <div className="flex contact-form mt-4 w-[550px] justify-between items-center 5xl:w-[850px]">
              <span>
                <label className="font-[400] text-[#000]  text-[16px]" htmlFor="Fname">
                  First Name
                </label>
                <br />
                <input className="w-[250px]  bg-transparent  pl-2 h-[40px] 5xl:w-[400px] " type="text" name="Fname" />
              </span>
              <span>
                <label className="font-[400] text-[#000]  text-[16px]" htmlFor="Lname">
                  Last Name
                </label>
                <br />
                <input className="w-[250px] pl-2  bg-transparent  h-[40px] 5xl:w-[400px]" type="text" name="Lname" />
              </span>
            </div>
            <div className=" contact-form mt-4 flex w-[550px] justify-between items-center 5xl:w-[850px]">
              <span>
                <label className="font-[400] text-[#000]  text-[16px]" htmlFor="email">
                  Email
                </label>
                <br />
                <input className="w-[250px]  pl-2 bg-transparent  h-[40px] 5xl:w-[400px]" type="email" name="email" />
              </span>
              <span>
                <label className="font-[400] text-[#000]  text-[16px]" htmlFor="subject">
                  Subject
                </label>
                <br />
                <input className="w-[250px]  pl-2 bg-transparent  h-[40px] 5xl:w-[400px]" type="text" name="subject" />
              </span>
            </div>
            <div className=" contact-form mt-4 flex w-[500px] justify-between items-center 5xl:w-[650px]">
              <span>
                <label className="font-[400] text-[#000]  text-[16px]" htmlFor="Message">
                  Enter Message
                </label>
                <br />
                <textarea className="w-[300px]  p-2 bg-transparent 5xl:w-[450px]" cols="" rows="5" />
              </span>
              <button type="submit" className="socials2  font-[500] text-[20px] rounded-[100%] pt-[60px] w-[140px] h-[140px]  outline  outline-1 bg-[#fdc244] hover:bg-[#fff] ">
                <h3 className="text-center pb-[65px]">Submit</h3>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className=" w-[95%] mt-[8rem] ml-[2.5rem] mb-[2rem] border-t-2 border-[#C7C7C7]">
        <Footer />
      </div>
    </>
  );
}

export default Contact;
