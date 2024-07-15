import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import allCourses from "../../../core/allCourses";
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import GroupIcon from '@mui/icons-material/Group';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const CarouselComponent = () => {
  return (
  
         <Carousel responsive={responsive} autoPlay={true} centerMode={false} infinite={true} showDots={true} >
  {
    allCourses.map((course) => (
        <div key={course.id} className="dark:bg-slate-700 shadow-lg mb-10 dark:text-white w-80 min-h-[550px]  mx-auto rounded-xl flex flex-col justify-between text-right">
            <a href=""><img src={course.imgSrc} className="h-full w-full rounded-t-xl " alt="" /></a>
            <a href="" className='text-2xl p-3 pb-2'>{course.title}</a>
        <a href="" className='text-xl p-2'>{course.disc}</a>
       
        <div className='flex justify-between items-center flex-row-reverse'>
            <div className='flex justify-center 0 items-center px-2 flex-row-reverse'>
            <span><PersonIcon /></span>
            <p className='pt-2 text-nowrap'>{course.teacher}</p>
            </div>
          <div className='flex text-yellow-400 mr-28 ps-10 flex-row-reverse'>
                 <p className='pt-1'>5.0 </p>
                <span><StarIcon /></span>
          </div>
          
           
            
        </div>
        <div className='flex justify-between mt-5 px-4 flex-row-reverse'>
            <div className='flex  mb-4 flex-row-reverse gap-2'>
                <span><GroupIcon /></span>
                 <p className='pt-1'>{course.studentsNum}</p>
            </div>
               
               <div className='flex gap-1'> 
                <span>{course.price}</span>
               <p className='text-red-500'>تومان</p>
               </div>
            </div>
            
            
        </div>
    ))
  }
 
</Carousel>
    
   
  )
}

export default CarouselComponent