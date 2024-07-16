import { CarouselComponent } from "../../components"


const carouselContainer = () => {
  return (
    <div className="">
        <h2 className='text-3xl dark:text-white flex gap-5 ms-20'>
        <span className='w-6 h-6  bg-green-500'></span>
             پیشنهاد سبزلرن
        </h2>
        <p className="text-xl text-slate-300 pt-5 ms-20 mb-10 ">جدیدترین دوره های تکمیل شده </p>
        <CarouselComponent />
    </div>
  )
}

export default carouselContainer