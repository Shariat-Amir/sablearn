import { useContext } from "react";
import { CarouselContainer, RoadMap } from "..";
import { AppContext } from "../../context/app-context";

import LastestCourses from "../lastest-courses/LastestCourses";


const Hero = () => {
  const {showSidebar,windowWidth }=useContext(AppContext)
  const carousel=()=>{
    if(windowWidth>1240){
      return <CarouselContainer/>;
    }
  }
  return (
    <div className={`  flex flex-col dark:bg-gradient-to-l from-slate-800 to-slate-700 py-52 ${showSidebar && "blur-sm transition-all duration-200"}`}>
        <div className="flex desktop:flex-row mobile:flex-col-reverse">
        <div id="right" className="desktop:w-1/2 mt-4 desktop:p-40 text bg-gradient-to-l text-center desktop:text-right dark:from-blue-300 bg-clip-text">
        <h1 className="desktop:text-5xl text-xl  dark:text-transparent  dark:bg-clip-text">آکادمی آموزش برنامه نویسی سبزلرن</h1>
        <p className="desktop:text-xl  text-md dark:text-transparent my-5">
          با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد بگیر و
          پیشرفت کن
        </p>
      </div>
      <div id="left" className="desktop:w-1/2 mt-4 bg-clip-text ">
        <img src="../../images/main/hero-removebg.png" alt="Hero " className="w-full"  />
      </div>
        </div>
   
      <LastestCourses />
      <RoadMap />
      {
        carousel()
      }
     
    </div>
  );
};

export default Hero;
