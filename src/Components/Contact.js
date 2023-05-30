import "../App.css";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <div className=" 3xxl:overflow-x-hidden">
        <div className="mt-[11rem] 6xxl:ml-[28%] 820xxl:ml-[15%] 7xxl:ml-[10%] 7xxl:grid 820xxl:grid 820xxl:w-[85%] 10inch:flex justify-between 10inch:ml-[5rem] 3xxl:ml-[40px]  10inch:mr-[3rem] w-[85%] 3xxl:grid">
          <div>
            <div className=" mt-4 ">
              <h1 className="font-[500] text-[#000]  text-[40px]">Contact </h1>
              <p className="font-[300] text-[#000]  text-[16px]"> Looking forward to hearing from you</p>
            </div>
            <div className=" 10inch:block 7xxl:hidden 820xxl:hidden hidden mt-8">
              <h1 className="font-[500] text-[#000]  text-[22px]">Email</h1>
              <a className="font-[300] text-[#000]  text-[16px] hover:underline" href="mailto:obiijeoma32@gmail.com">
                obiijeoma32@gmail.com
              </a>
            </div>
          </div>
          <div>
            <form autoComplete="on" className=" 7xxl:mt-[3rem] 820xxl:mt-[0px] " action="https://formsubmit.co/obiijeoma32@gmail.com" method="POST">
              <div className="md:flex  3xxl:grid contact-form mt-4 w-[550px] justify-between items-center 5xl:w-[850px]">
                <span>
                  <label className="font-[400] text-[#000]  text-[16px]" htmlFor="Fname">
                    First Name
                  </label>
                  <br />
                  <input className="md:w-[250px] 3xxl:w-[300px] 3xxl:mb-[20px] md:mb-[0px]  bg-transparent  pl-2 h-[40px] 5xl:w-[400px] " type="text" name="Fname" />
                </span>
                <span>
                  <label className="font-[400] text-[#000]   text-[16px]" htmlFor="Lname">
                    Last Name
                  </label>
                  <br />
                  <input className="md:w-[250px] 3xxl:w-[300px] pl-2  bg-transparent  h-[40px] 5xl:w-[400px]" type="text" name="Lname" />
                </span>
              </div>
              <div className=" contact-form mt-4 md:flex  3xxl:grid w-[550px] justify-between items-center 5xl:w-[850px]">
                <span>
                  <label className="font-[400] text-[#000]  text-[16px]" htmlFor="email">
                    Email
                  </label>
                  <br />
                  <input className="md:w-[250px] 3xxl:w-[300px] 3xxl:mb-[20px] md:mb-[0px]  pl-2 bg-transparent  h-[40px] 5xl:w-[400px]" type="email" name="email" />
                </span>
                <span>
                  <label className="font-[400] text-[#000]  text-[16px]" htmlFor="subject">
                    Subject
                  </label>
                  <br />
                  <input className="md:w-[250px] 3xxl:w-[300px]  pl-2 bg-transparent  h-[40px] 5xl:w-[400px]" type="text" name="subject" />
                </span>
              </div>
              <div className=" contact-form mt-4 md:flex  3xxl:grid w-[500px] justify-between items-center 5xl:w-[650px]">
                <span>
                  <label className="font-[400] text-[#000]  text-[16px]" htmlFor="Message">
                    Enter Message
                  </label>
                  <br />
                  <textarea className="w-[300px] 3xxl:mb-[20px] md:mb-[0px]  p-2 bg-transparent 5xl:w-[450px]" cols="" rows="5" />
                </span>
                <button type="submit" className="socials2  font-[500] text-[20px] rounded-[100%] pt-[60px] w-[140px] h-[140px]  outline  outline-1 bg-[#fdc244] hover:bg-[#fff] ">
                  <h3 className="text-center pb-[65px]">Submit</h3>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className=" 3xxl:ml-[2rem] 3xxl:mt-[3rem] 6xxl:w-[90%] 3xxl:w-[320px] md:w-[90%] md:ml-[2.5rem] md:mt-[4rem] mb-[2rem] border-t-2 border-[#C7C7C7] 2xl:w-[93%]">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Contact;
