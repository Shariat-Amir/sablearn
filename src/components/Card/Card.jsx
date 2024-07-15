import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import GroupIcon from '@mui/icons-material/Group';
import SimpleParallax from "simple-parallax-js";
const Card = ({title,imgSrc,studentsNum,disc,teacher,price,className}) => {
  return (
    <div className={` w-80 min-h-[500px] dark:bg-slate-700 dark:text-white flex flex-col justify-between rounded-lg shadow-lg ${className}`} >
        <SimpleParallax scale={1.1} orientation='right'>
        <img src={imgSrc} className='rounded-t-lg' alt="" />
        </SimpleParallax>
        <a href="" className='text-2xl p-3 pb-2'>{title}</a>
        <a href="" className='text-xl p-2'>{disc}</a>
       
        <div className='flex justify-between items-center'>
            <div className='flex justify-center 0 items-center px-2'>
            <span><PersonIcon /></span>
            <p className='pt-2 text-nowrap'>{teacher}</p>
            </div>
          <div className='flex text-yellow-400 mr-28 ps-10'>
                 <p className='pt-1'>5.0 </p>
                <span><StarIcon /></span>
          </div>
          
           
            
        </div>
        <div className='flex justify-between mt-5 px-4'>
            <div className='flex  mb-4'>
                <span><GroupIcon /></span>
                 <p className='pt-1'>{studentsNum}</p>
            </div>
               
               <div className='flex gap-1'> 
                <span>{price}</span>
               <p className='text-red-500'>تومان</p>
               </div>
            </div>
    </div>
  )
}

export default Card