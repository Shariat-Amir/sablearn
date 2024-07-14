
const Hero = () => {
  return (
    <div className="flex dark:bg-slate-800 dark:">
      <div id="right" className="w-1/2 mt-4 p-40 bg-gradient-to-l dark:from-green-500 to-white bg-clip-text">
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
  );
};

export default Hero;
