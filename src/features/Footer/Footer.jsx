import './Footer.css'
const Footer = () => {
  return (
    <div className="flex p-10 dark:bg-slate-700 dark:text-white ">
      <div id="1" className="flex flex-col  justify-start items-start w-1/4">
        <p className='title'>درباره ی ما </p>
        <p>
          سبزلرن یک اکادمی خصوصی آموزش برنامه نویسی هست که با هدف تحویل نیروی
          متخصص بر پایه تولید محتوای غیرسطحی فعالیت میکند
        </p>
      </div>
      <div id="2" className="flex flex-col w-1/4 justify-start items-center">
        <p className='title'>دسترسی سریع</p>
        <a href="">قوانین و مقررات</a>
        <a href="">ارسال تیکت</a>
        <a href="">همه ی دوره ها </a>
      </div>
      <div id="3" className="flex flex-col w-1/4 justify-start items-center">
        <p className='title '>لینک های مفید</p>
        <a href="">آموزش جاوااسکریپت</a>
        <a href="">آموزش پایتون</a>
        <a href="">آموزش HTML</a>
        <a href="">آموزش CSS</a>
      </div>
      <div id="4" className="flex flex-col w-1/4 justify-start items-center">
        <p className='title'>شبکه های اجتماعی</p>
        <a href="" className="flex items-center ">
            <img src="../../../images/main/instagram-logo.png" alt="instagram" className="w-10" />
            <span>@sabzlearn_</span>
        </a>
        <a href="" className="flex items-center">
            <img src="../../../images/main/telegram-logo.png" alt="telegram" className="w-10" />
            <span>@sabzlearn</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
