import { CarouselContainer, RoadMap } from "..";

import LastestCourses from "../lastest-courses/LastestCourses";


const Hero = () => {
  return (
    <div className="flex flex-col dark:bg-gradient-to-l from-slate-800 to-slate-700 py-52 ">
        <div className="flex">
        <div id="right" className="w-1/2 mt-4 p-40 bg-gradient-to-l   dark:from-blue-300 bg-clip-text">
        <h1 className="text-5xl dark:text-transparent  dark:bg-clip-text">آکادمی آموزش برنامه نویسی سبزلرن</h1>
        <p className="text-xl dark:text-transparent">
          با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد بگیر و
          پیشرفت کن
        </p>
      </div>
      <div id="left" className="w-1/2 mt-4 bg-clip-text">
        <img src="../../images/main/hero-removebg.png" alt="Hero " className="w-full"  />
      </div>
        </div>
   
      <LastestCourses />
      <RoadMap />
      <CarouselContainer />
    </div>
  );
};

export default Hero;
