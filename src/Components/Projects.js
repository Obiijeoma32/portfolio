import lawId from "./images/forLawPor.png";
import mentalPic from "./images/Web and Mobile Presentation Blue.jpg";
import guardian from "./images/PresentationGg.jpg";
import coming from "./images/Coming Soon Presentation.jpg";
import mojo from "./images/MOJO Presentation.jpg";

function Projects() {
  return (
    <>
      {/* small screens from 300px - 900px */}
      <div className=" 3xxS:block   1xS:hidden w-full mt-[90px] h-fit mb-[20px] flex items-center justify-center   ">
        <div className=" w-full flex items-center justify-center  ">
          <div className=" w-[90%]  flex flex-col justify-center items-center">
            <div className=" flex flex-col justify-center items-center ">
              <h2 className=" text-[24px]  font-medium text-[#25282B]">Projects</h2>
              <h3 className="border-b-[4px] w-[80px] rounded-[2px] border-b-[#FFB600]">{/* intentional break */}</h3>
            </div>
            <div className=" flex flex-col w-full 7xxS:max-w-[50%] justify-center items-center ">
              {/* First Project Box */}
              <div className="flex justify-between mt-[50px] w-full h-[175px]  ">
                <div className="w-[50%] h-[175px] ">
                  <img className="rounded-l-[24px] bg-no-repeat  h-[100%]" src={guardian} alt="guardian" />
                </div>{" "}
                <div className=" w-[50%] h-[175px] flex justify-center items-center pt-[10px]  bg-[#fff] rounded-r-[24px] ">
                  <div className="    pl-[15px] flex flex-col ">
                    <h1 className=" text-[16px] mb-[10px] whitespace-nowrap  text-[#25282B] font-medium ">Guardian Guide</h1>
                    <p className="  text-[#828282] text-[10px] font-normal mb-[10px] ">A purposeful creation designed to empower guardian parents in navigating childcare seamlessly. </p>
                    <a href="https://www.behance.net/gallery/184923431/GuardianGuide-Nurturing-Parenthood">
                      <div className=" hover:bg-[#25282B] hover:text-[#fff] border-[1.8px] border-[#25282B] text-center flex justify-center items-center rounded-[24px] w-[100px] h-[25px] text-[10px] text-[#25282B] ">View More</div>
                    </a>
                  </div>
                </div>
              </div>
              {/* Second Project Box */}
              <div className="flex justify-between mt-[40px] w-full h-[175px]  ">
                <div className=" w-[50%] pl-[5px] h-[175px] flex justify-center items-center py-[10px]  bg-[#fff] rounded-l-[24px] ">
                  <div className="   px-[10px] text-left flex flex-col ">
                    <h1 className=" text-[16px] mb-[10px]  text-[#25282B] font-medium ">CalmYou</h1>
                    <p className=" mb-[20px] text-[#828282] text-[10px] font-normal ">Crafted with intention, this app is a sanctuary for users to foster their mental health.</p>
                    <a href="https://www.behance.net/gallery/183162361/CalmYou-Mental-Wellness-App">
                      <div className=" hover:bg-[#25282B] hover:text-[#fff] border-[1.8px] border-[#25282B] text-center flex justify-center items-center rounded-[24px] w-[100px] h-[25px] text-[10px] text-[#25282B] ">View More</div>
                    </a>
                  </div>
                </div>{" "}
                <div className="w-[50%] h-[175px] ">
                  <img className="rounded-r-[24px] bg-no-repeat  h-[100%]" src={mentalPic} alt="metal health" />
                </div>
              </div>
              {/* Third Project Box */}
              <div className="flex justify-between mt-[50px] w-full h-[175px]  ">
                <div className="w-[50%] h-[175px] ">
                  <img className="rounded-l-[24px] bg-no-repeat  h-[100%]" src={mojo} alt="Soccer" />
                </div>
                <div className=" w-[50%] px-[10] h-[175px] flex justify-center items-center py-[10px]  bg-[#fff] rounded-r-[24px] ">
                  <div className="    pl-[10px] flex flex-col ">
                    <h1 className=" text-[16px] mb-[10px]  text-[#25282B] font-medium ">Mojo Quiz</h1>
                    <p className="  text-[#828282] text-[10px] font-normal mb-[20px] ">Mojo Soccer Quiz App: An exciting mobile app challenging users with fun soccer quizzes. </p>
                    <a href="https://www.behance.net/gallery/186957837/Mojo-Soccer-Quiz-App">
                      <div className=" hover:bg-[#25282B] hover:text-[#fff] border-[1.8px] border-[#25282B] text-center flex justify-center items-center rounded-[24px] w-[100px] h-[25px] text-[10px] text-[#25282B] ">View More</div>
                    </a>
                  </div>
                </div>
              </div>
              {/* Fourth Project Box */}
              <div className="flex justify-between mt-[40px] w-full h-[175px]  ">
                <div className=" w-[50%] h-[175px] px-[10px] flex justify-center items-center py-[10px]  bg-[#fff] rounded-l-[24px] ">
                  <div className="    pl-[10px] text-left flex flex-col ">
                    <h1 className=" text-[16px] mb-[10px]  text-[#25282B] font-medium ">Coming Soon</h1>
                    <p className="  text-[#828282] text-[10px] font-normal mb-[20px] ">Coming Soon landing page, designed to captivate and intrigue.</p>
                    <a href="https://www.behance.net/gallery/183849031/Coming-Soon-Landing-Page">
                      <div className=" hover:bg-[#25282B] hover:text-[#fff] border-[1.8px] border-[#25282B] text-center flex justify-center items-center rounded-[24px] w-[100px] h-[25px] text-[10px] text-[#25282B] ">View More</div>
                    </a>
                  </div>
                </div>
                <div className="w-[50%] h-[175px] ">
                  <img className="rounded-r-[24px] bg-no-repeat  h-[100%]" src={coming} alt="Coming Soon" />
                </div>
              </div>
              {/* Fifth Project Box */}
              <div className="flex justify-between mt-[50px] w-full h-[175px]  ">
                <div className="w-[50%] h-[175px] ">
                  <img className="rounded-l-[24px] bg-no-repeat  h-[100%]" src={lawId} alt="law portfolio" />
                </div>
                <div className=" w-[50%] px-[13px] h-[175px] flex justify-center items-center py-[10px]  bg-[#fff] rounded-r-[24px] ">
                  <div className="    pl-[10px] flex flex-col ">
                    <h1 className=" text-[16px] mb-[10px]  text-[#25282B] font-medium ">Law Portfolio</h1>
                    <p className="  text-[#828282] text-[10px] font-normal mb-[20px] ">I made a project to create a webpage that displays information about law firm.</p>
                    <a href="https://www.figma.com/proto/3oQNgw0KQckziFPY3YnTEN/Law-Landing-Page?page-id=4%3A11&type=design&node-id=4-12&viewport=561%2C442%2C0.54&t=GZDX7CCSyQ4MKz0y-1&scaling=scale-down-width&starting-point-node-id=4%3A12&mode=design">
                      <div className=" hover:bg-[#25282B] hover:text-[#fff] border-[1.8px] border-[#25282B] text-center flex justify-center items-center rounded-[24px] w-[100px] h-[25px] text-[10px] text-[#25282B] ">View More</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Big Screens from 1050px - 2600px */}
      <div className=" 3xxS:hidden  1xS:flex max-w-[100%] w-full flex justify-center items-center   ">
        <div className=" w-[80%] mt-[50px]   ">
          <div className=" flex flex-col justify-center items-center ">
            <h2 className=" text-[48px]  font-medium text-[#25282B]">Projects</h2>
            <h3 className="border-b-[4px] w-[100px] rounded-[2px] border-b-[#FFB600]">{/* intentional break */}</h3>
          </div>
          <div className=" flex flex-col justify-center items-center ">
            {/* First Project Box */}
            <div className="flex justify-between mt-[60px] w-[992px] h-fit  ">
              <div className="w-[50%] ">
                <img className="rounded-l-[24px] " src={guardian} alt="Guardian Guide" />
              </div>
              <div className=" w-[50%]  flex justify-center items-center  bg-[#fff] rounded-r-[24px] ">
                <div className=" w-[70%] mt-[50px] flex flex-col ">
                  <h1 className=" text-[40px] h-[70px] text-[#25282B] font-medium ">Guardian Guide</h1>
                  <p className=" h-[110px] text-[#828282] text-[18px] font-normal ">A purposeful creation designed to empower guardian parents in navigating childcare seamlessly.</p>
                  <a href="https://www.behance.net/gallery/184923431/GuardianGuide-Nurturing-Parenthood">
                    <div className=" hover:bg-[#25282B] hover:text-[#fff] border-[1.8px] border-[#25282B] text-center flex justify-center items-center rounded-[24px] w-[141px] h-[43px] text-[18px] text-[#25282B] ">View More</div>
                  </a>
                </div>
              </div>
            </div>
            {/* Second Project Box */}
            <div className="flex justify-between mt-[60px] w-[992px] h-fit  ">
              <div className=" w-[50%]  flex justify-center items-center  bg-[#fff] rounded-l-[24px] ">
                <div className=" w-[70%] mt-[50px] flex flex-col ">
                  <h1 className=" text-[40px] h-[70px] text-[#25282B] font-medium ">CalmYou</h1>
                  <p className=" h-[110px] text-[#828282] text-[18px] font-normal ">Crafted with intention, this app is a sanctuary for users to foster their mental health.</p>
                  <a href="https://www.behance.net/gallery/183162361/CalmYou-Mental-Wellness-App">
                    <div className=" hover:bg-[#25282B] hover:text-[#fff] border-[1.8px] border-[#25282B] text-center flex justify-center items-center rounded-[24px] w-[141px] h-[43px] text-[18px] text-[#25282B] ">View More</div>
                  </a>
                </div>
              </div>
              <div className="w-[50%]  ">
                <img className="rounded-r-[24px] h-[350px] " src={mentalPic} alt="metal health" />
              </div>
            </div>

            {/* Third Project Box */}
            <div className="flex justify-between mt-[60px] w-[992px] h-fit  ">
              <div className="w-[50%] ">
                <img className="rounded-l-[24px] " src={mojo} alt="Soccer" />
              </div>
              <div className=" w-[50%]  flex justify-center items-center  bg-[#fff] rounded-r-[24px] ">
                <div className=" w-[70%] mt-[50px] flex flex-col ">
                  <h1 className=" text-[40px] h-[70px] text-[#25282B] font-medium ">Mojo Quiz</h1>
                  <p className=" h-[110px] text-[#828282] text-[18px] font-normal ">Mojo Soccer Quiz App: An exciting mobile app challenging users with fun soccer quizzes.</p>
                  <a href="https://www.behance.net/gallery/183162361/CalmYou-Mental-Wellness-App">
                    <div className=" hover:bg-[#25282B] hover:text-[#fff] border-[1.8px] border-[#25282B] text-center flex justify-center items-center rounded-[24px] w-[141px] h-[43px] text-[18px] text-[#25282B] ">View More</div>
                  </a>
                </div>
              </div>
            </div>
            {/* Fourth Project Box */}

            <div className="flex justify-between mt-[60px] w-[992px] h-fit  ">
              <div className=" w-[50%]  flex justify-center items-center  bg-[#fff] rounded-l-[24px] ">
                <div className=" w-[70%] mt-[50px] flex flex-col ">
                  <h1 className=" text-[40px] h-[70px] text-[#25282B] font-medium ">Coming Soon</h1>
                  <p className=" h-[130px] text-[#828282] text-[18px] font-normal ">Coming Soon" landing page, designed to captivate and intrigue.</p>
                  <a href="https://www.behance.net/gallery/183849031/Coming-Soon-Landing-Page">
                    <div className=" hover:bg-[#25282B] hover:text-[#fff] border-[1.8px] border-[#25282B] text-center flex justify-center items-center rounded-[24px] w-[141px] h-[43px] text-[18px] text-[#25282B] ">View More</div>
                  </a>
                </div>
              </div>
              <div className="w-[50%]  ">
                <img className="rounded-r-[24px] h-[350px] " src={coming} alt="Coming Soon" />
              </div>
            </div>
            {/* Fifth Project Box */}

            <div className="flex justify-between mt-[60px] w-[992px] h-fit  ">
              <div className="w-[50%] ">
                <img className="rounded-l-[24px]  h-[350px] " src={lawId} alt="law portfolio" />
              </div>
              <div className=" w-[50%]  flex justify-center items-center  bg-[#fff] rounded-r-[24px] ">
                <div className=" w-[70%] mt-[50px] flex flex-col ">
                  <h1 className=" text-[40px] h-[70px] text-[#25282B] font-medium ">Law Portfolio</h1>
                  <p className=" h-[110px] text-[#828282] text-[18px] font-normal ">I made a project to create a webpage that displays information about law firm.</p>
                  <a href="https://www.figma.com/proto/3oQNgw0KQckziFPY3YnTEN/Law-Landing-Page?page-id=4%3A11&type=design&node-id=4-12&viewport=561%2C442%2C0.54&t=GZDX7CCSyQ4MKz0y-1&scaling=scale-down-width&starting-point-node-id=4%3A12&mode=design">
                    <div className=" hover:bg-[#25282B] hover:text-[#fff] border-[1.8px] border-[#25282B] text-center flex justify-center items-center rounded-[24px] w-[141px] h-[43px] text-[18px] text-[#25282B] ">View More</div>
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

export default Projects;
