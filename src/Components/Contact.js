function Contact() {
  return (
    <>
      {/* LARGE SCREENS */}
      <div className="mt-[131px] 3xxS:hidden 10inch:hidden 1xS:flex  flex flex-col justify-between items-center  ">
        <div className=" flex flex-col justify-center items-center ">
          <h2 className=" text-[48px]  font-medium text-[#25282B]">Contact</h2>
          <h3 className="border-b-[4px] w-[100px] rounded-[2px] border-b-[#FFB600]">{/* intentional break */}</h3>
        </div>
        {/* contact container */}
        <div className=" flex justify-between w-[74.8%] mt-[80px] items-center ">
          {/* form box */}
          <div className="bg-[#fff] w-[570px] h-[700px] pl-[25px] rounded-[24px]  flex items-center justify-center pt-[25px] ">
            <form className="  ">
              <label className="text-[#767676] text-[16px] ">Your Full Name ( Required)</label>
              <br />
              <input className=" mt-[10px] mb-[25px] active:border-[#25282B] text-[#25282B] pl-[20px] pr-[20px] bg-[#F0F0F6CC] opacity-80 rounded-[24px] w-[521px] h-[50px] " type="name" />
              <br />
              <label className="text-[#767676] text-[16px] ">Your Email ( Required)</label>
              <br />
              <input className=" mt-[10px] mb-[25px] active:border-[#25282B] text-[#25282B] pr-[20px] pl-[20px] bg-[#F0F0F6CC] opacity-80 rounded-[24px] w-[521px] h-[50px] " type="email" />
              <label className="text-[#767676] text-[16px] ">Subject</label>
              <br />
              <input className=" mt-[10px] pr-[20px] mb-[25px] active:border-[#25282B] text-[#25282B] pl-[20px] bg-[#F0F0F6CC] opacity-80 rounded-[24px] w-[521px] h-[50px] " type="text" />
              <label className="text-[#767676] text-[16px] ">Message</label>
              <br />
              <textarea className=" mt-[10px] pt-[20px] pr-[20px] mb-[21px] active:border-[#25282B] text-[#25282B] pl-[20px] bg-[#F0F0F6CC] opacity-80 rounded-[24px] w-[521px] h-[210px] " type="text" />
              <button className=" w-[183px] rounded-[8px] h-[43px] bg-[#FFB600] text-[#25282B] text-[18px] ">Send Message</button>
            </form>
          </div>
          <div className="h-[700px] flex flex-col justify-between items-center ">
            {/* contact box 1 */}
            <div className="bg-[#fff] w-[370px] h-[225px] rounded-[24px]   flex items-center justify-center pt-[25px] ">
              <div className="w-[90%] flex flex-col items-center justify-center ">
                <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-[#FFB600] ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <g clip-path="url(#clip0_106_2937)">
                      <path
                        d="M1.5 3.75L6.75 1.5L11.25 3.75L15.9772 1.72425C16.0343 1.69979 16.0966 1.68988 16.1584 1.69541C16.2202 1.70094 16.2797 1.72173 16.3316 1.75593C16.3834 1.79013 16.4259 1.83666 16.4553 1.89135C16.4847 1.94603 16.5001 2.00716 16.5 2.06925V14.25L11.25 16.5L6.75 14.25L2.02275 16.2758C1.96569 16.3002 1.90344 16.3101 1.8416 16.3046C1.77976 16.2991 1.72026 16.2783 1.66844 16.2441C1.61662 16.2099 1.5741 16.1633 1.54471 16.1087C1.51531 16.054 1.49994 15.9928 1.5 15.9307V3.75ZM11.25 14.823V5.382L11.2013 5.403L6.75 3.177V12.618L6.79875 12.597L11.25 14.823Z"
                        fill="#2B2B2B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_106_2937">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="w-[300px] mt-[31px]">
                  <div className="flex justify-between mb-[14px] ">
                    <h3 className="text-[#767676] text-[18px] font-medium ">Country:</h3>
                    <h4 className="text-[#767676] text-[15px] font-[400] ">Nigeria</h4>
                  </div>
                  <div className="flex justify-between mb-[14px] ">
                    <h3 className="text-[#767676] text-[18px] font-medium ">State:</h3>
                    <h4 className="text-[#767676] text-[15px] font-[400] ">Lagos</h4>
                  </div>
                  <div className="flex justify-between mb-[14px] ">
                    <h3 className="text-[#767676] text-[18px] font-medium ">City:</h3>
                    <h4 className="text-[#767676] text-[15px] font-[400] ">Ikeja</h4>
                  </div>
                </div>
              </div>
            </div>
            {/* contact box 2 */}
            <div className="bg-[#fff] w-[370px] h-[225px] rounded-[24px]   flex items-center justify-center pt-[25px] ">
              <div className="w-[90%] flex flex-col items-center justify-center ">
                <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-[#FFB600] ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <g clip-path="url(#clip0_108_2994)">
                      <path
                        d="M2.25 2.25H15.75C15.9489 2.25 16.1397 2.32902 16.2803 2.46967C16.421 2.61032 16.5 2.80109 16.5 3V15C16.5 15.1989 16.421 15.3897 16.2803 15.5303C16.1397 15.671 15.9489 15.75 15.75 15.75H2.25C2.05109 15.75 1.86032 15.671 1.71967 15.5303C1.57902 15.3897 1.5 15.1989 1.5 15V3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25ZM9.045 8.76225L4.236 4.6785L3.26475 5.8215L9.05475 10.7378L14.7405 5.81775L13.7595 4.683L9.04575 8.76225H9.045Z"
                        fill="#2B2B2B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_108_2994">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="w-[300px]  mt-[31px]">
                  <div className="flex justify-between mb-[14px] ">
                    <h3 className="text-[#767676] text-[18px] font-medium ">Email:</h3>
                    <a className="  " href="mailto:Obiijeoma32@gmail.com">
                      <h4 className="text-[#767676] text-[15px] hover:underline hover:text-[#25282b] font-[400] ">Obiijeoma32@gmail.com</h4>
                    </a>
                  </div>
                  <div className="flex justify-between mb-[14px] ">
                    <h3 className="text-[#767676] text-[18px] font-medium ">GitHub:</h3>
                    <a className="  " href="https://github.com/Obiijeoma32">
                      <h4 className="text-[#767676] hover:underline hover:text-[#25282b] text-[15px] font-[400] ">obiijeoma32</h4>
                    </a>
                  </div>
                  <div className="flex justify-between mb-[14px] ">
                    <h3 className="text-[#767676] text-[18px] font-medium ">X:</h3>
                    <a className="  " href="https://twitter.com/obiijeoma151">
                      <h4 className="text-[#767676] hover:underline hover:text-[#25282b] text-[15px] font-[400] ">@obiijeoma151</h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* contact box 3 */}
            <div className="bg-[#fff] w-[370px] h-[225px] rounded-[24px]   flex items-center justify-center pt-[25px] ">
              <div className="w-[90%] flex flex-col items-center justify-center ">
                <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-[#FFB600] ">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_110_3013)">
                      <path
                        d="M4.5 1.5H13.5C13.6989 1.5 13.8897 1.57902 14.0303 1.71967C14.171 1.86032 14.25 2.05109 14.25 2.25V15.75C14.25 15.9489 14.171 16.1397 14.0303 16.2803C13.8897 16.421 13.6989 16.5 13.5 16.5H4.5C4.30109 16.5 4.11032 16.421 3.96967 16.2803C3.82902 16.1397 3.75 15.9489 3.75 15.75V2.25C3.75 2.05109 3.82902 1.86032 3.96967 1.71967C4.11032 1.57902 4.30109 1.5 4.5 1.5ZM9 12.75C8.80109 12.75 8.61032 12.829 8.46967 12.9697C8.32902 13.1103 8.25 13.3011 8.25 13.5C8.25 13.6989 8.32902 13.8897 8.46967 14.0303C8.61032 14.171 8.80109 14.25 9 14.25C9.19891 14.25 9.38968 14.171 9.53033 14.0303C9.67098 13.8897 9.75 13.6989 9.75 13.5C9.75 13.3011 9.67098 13.1103 9.53033 12.9697C9.38968 12.829 9.19891 12.75 9 12.75Z"
                        fill="#2B2B2B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_110_3013">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="w-[300px]  mt-[31px]">
                  <div className="flex justify-between mb-[14px] ">
                    <h3 className="text-[#767676] text-[18px] font-medium ">LinkedIn:</h3>
                    <a href="https://www.linkedin.com/in/obiijeoma32/">
                      <h4 className="text-[#767676] hover:underline hover:text-[#25282b] text-[15px] font-[400] ">Ijeoma Candy Obi</h4>
                    </a>
                  </div>
                  <div className="flex justify-between mb-[14px] ">
                    <h3 className="text-[#767676] text-[18px] font-medium ">Personal:</h3>
                    <a href="tel:2348142931440">
                      <h4 className="text-[#767676] hover:underline hover:text-[#25282b] text-[15px] font-[400] ">+234 (081) 4293 1440</h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SMALL SCREENS */}
      <div className="flex w-full 3xxS:flex 1xS:hidden 10inch:flex h-fit mb-[40px] mt-[50px] justify-center items-center ">
        <div className="flex justify-between flex-col w-[85%] 10inch:max-w-[85%]">
          <div className=" flex flex-col justify-center items-center ">
            <h2 className=" text-[40px]  font-medium text-[#25282B]">Contact</h2>
            <h3 className="border-b-[4px] w-[100px] rounded-[2px] border-b-[#FFB600]">{/* intentional break */}</h3>
          </div>
          <div className="bg-[#fff] mt-[40px] w-full h-fit pb-[40px] pl-[25px] rounded-[24px]  flex items-center justify-center pt-[25px] ">
            <form className="  ">
              <label className="text-[#767676] text-[16px] ">Your Full Name ( Required)</label>
              <br />
              <input className=" mt-[10px] mb-[25px] active:border-[#25282B] text-[#25282B] pl-[20px] pr-[20px] bg-[#F0F0F6CC] opacity-80 rounded-[24px] w-[90%] h-[50px] " type="name" />
              <br />
              <label className="text-[#767676] text-[16px] ">Your Email ( Required)</label>
              <br />
              <input className=" mt-[10px] mb-[25px] active:border-[#25282B] text-[#25282B] pr-[20px] pl-[20px] bg-[#F0F0F6CC] opacity-80 rounded-[24px] w-[90%] h-[50px] " type="email" />
              <label className="text-[#767676] text-[16px] ">Subject</label>
              <br />
              <input className=" mt-[10px] pr-[20px] mb-[25px] active:border-[#25282B] text-[#25282B] pl-[20px] bg-[#F0F0F6CC] opacity-80 rounded-[24px] w-[90%] h-[50px] " type="text" />
              <label className="text-[#767676] text-[16px] ">Message</label>
              <br />
              <textarea className=" mt-[10px] pt-[20px] pr-[20px] mb-[21px] active:border-[#25282B] text-[#25282B] pl-[20px] bg-[#F0F0F6CC] opacity-80 rounded-[24px] w-[90%] h-[210px] " type="text" />
              <button className=" w-[183px] rounded-[8px] h-[43px] bg-[#FFB600] text-[#25282B] text-[18px] ">Send Message</button>
            </form>
          </div>
          <div className="bg-[#fff] w-full mt-[40px] h-[225px] rounded-[24px]   flex items-center justify-center pt-[25px] ">
            <div className="w-[85%] flex flex-col items-center justify-center ">
              <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-[#FFB600] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <g clip-path="url(#clip0_106_2937)">
                    <path
                      d="M1.5 3.75L6.75 1.5L11.25 3.75L15.9772 1.72425C16.0343 1.69979 16.0966 1.68988 16.1584 1.69541C16.2202 1.70094 16.2797 1.72173 16.3316 1.75593C16.3834 1.79013 16.4259 1.83666 16.4553 1.89135C16.4847 1.94603 16.5001 2.00716 16.5 2.06925V14.25L11.25 16.5L6.75 14.25L2.02275 16.2758C1.96569 16.3002 1.90344 16.3101 1.8416 16.3046C1.77976 16.2991 1.72026 16.2783 1.66844 16.2441C1.61662 16.2099 1.5741 16.1633 1.54471 16.1087C1.51531 16.054 1.49994 15.9928 1.5 15.9307V3.75ZM11.25 14.823V5.382L11.2013 5.403L6.75 3.177V12.618L6.79875 12.597L11.25 14.823Z"
                      fill="#2B2B2B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_106_2937">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="w-full mt-[31px]">
                <div className="flex justify-between mb-[14px] ">
                  <h3 className="text-[#767676] text-[18px] font-medium ">Country:</h3>
                  <h4 className="text-[#767676] text-[15px] font-[400] ">Nigeria</h4>
                </div>
                <div className="flex justify-between mb-[14px] ">
                  <h3 className="text-[#767676] text-[18px] font-medium ">State:</h3>
                  <h4 className="text-[#767676] text-[15px] font-[400] ">Lagos</h4>
                </div>
                <div className="flex justify-between mb-[14px] ">
                  <h3 className="text-[#767676] text-[18px] font-medium ">City:</h3>
                  <h4 className="text-[#767676] text-[15px] font-[400] ">Ikeja</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] w-full mt-[40px] h-[225px] rounded-[24px]   flex items-center justify-center pt-[25px] ">
            <div className="w-[90%] flex flex-col items-center justify-center ">
              <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-[#FFB600] ">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <g clip-path="url(#clip0_108_2994)">
                    <path
                      d="M2.25 2.25H15.75C15.9489 2.25 16.1397 2.32902 16.2803 2.46967C16.421 2.61032 16.5 2.80109 16.5 3V15C16.5 15.1989 16.421 15.3897 16.2803 15.5303C16.1397 15.671 15.9489 15.75 15.75 15.75H2.25C2.05109 15.75 1.86032 15.671 1.71967 15.5303C1.57902 15.3897 1.5 15.1989 1.5 15V3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25ZM9.045 8.76225L4.236 4.6785L3.26475 5.8215L9.05475 10.7378L14.7405 5.81775L13.7595 4.683L9.04575 8.76225H9.045Z"
                      fill="#2B2B2B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_108_2994">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="w-full  mt-[31px]">
                <div className="flex justify-between mb-[14px] ">
                  <h3 className="text-[#767676] text-[18px] font-medium ">Email:</h3>
                  <a className="  " href="mailto:Obiijeoma32@gmail.com">
                    <h4 className="text-[#767676] text-[15px] hover:underline hover:text-[#25282b] font-[400] ">Obiijeoma32@gmail.com</h4>
                  </a>
                </div>
                <div className="flex justify-between mb-[14px] ">
                  <h3 className="text-[#767676] text-[18px] font-medium ">GitHub:</h3>
                  <a className="  " href="https://github.com/Obiijeoma32">
                    <h4 className="text-[#767676] hover:underline hover:text-[#25282b] text-[15px] font-[400] ">obiijeoma32</h4>
                  </a>
                </div>
                <div className="flex justify-between mb-[14px] ">
                  <h3 className="text-[#767676] text-[18px] font-medium ">X:</h3>
                  <a className="  " href="https://twitter.com/obiijeoma151">
                    <h4 className="text-[#767676] hover:underline hover:text-[#25282b] text-[15px] font-[400] ">@obiijeoma151</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] w-full mt-[40px] h-[225px] rounded-[24px]   flex items-center justify-center pt-[25px] ">
            <div className="w-[90%] flex flex-col items-center justify-center ">
              <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-[#FFB600] ">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_110_3013)">
                    <path
                      d="M4.5 1.5H13.5C13.6989 1.5 13.8897 1.57902 14.0303 1.71967C14.171 1.86032 14.25 2.05109 14.25 2.25V15.75C14.25 15.9489 14.171 16.1397 14.0303 16.2803C13.8897 16.421 13.6989 16.5 13.5 16.5H4.5C4.30109 16.5 4.11032 16.421 3.96967 16.2803C3.82902 16.1397 3.75 15.9489 3.75 15.75V2.25C3.75 2.05109 3.82902 1.86032 3.96967 1.71967C4.11032 1.57902 4.30109 1.5 4.5 1.5ZM9 12.75C8.80109 12.75 8.61032 12.829 8.46967 12.9697C8.32902 13.1103 8.25 13.3011 8.25 13.5C8.25 13.6989 8.32902 13.8897 8.46967 14.0303C8.61032 14.171 8.80109 14.25 9 14.25C9.19891 14.25 9.38968 14.171 9.53033 14.0303C9.67098 13.8897 9.75 13.6989 9.75 13.5C9.75 13.3011 9.67098 13.1103 9.53033 12.9697C9.38968 12.829 9.19891 12.75 9 12.75Z"
                      fill="#2B2B2B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_110_3013">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="w-full  mt-[31px]">
                <div className="flex justify-between mb-[14px] ">
                  <h3 className="text-[#767676] text-[18px] font-medium ">LinkedIn:</h3>
                  <a href="https://www.linkedin.com/in/obiijeoma32/">
                    <h4 className="text-[#767676] hover:underline hover:text-[#25282b] text-[15px] font-[400] ">Ijeoma Candy Obi</h4>
                  </a>
                </div>
                <div className="flex justify-between mb-[14px] ">
                  <h3 className="text-[#767676] text-[18px] font-medium ">Personal:</h3>
                  <a href="tel:2348142931440">
                    <h4 className="text-[#767676] hover:underline hover:text-[#25282b] text-[15px] font-[400] ">+234 (081) 4293 1440</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
