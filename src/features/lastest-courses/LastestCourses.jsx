import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Card } from '../../components';
import allCourses from '../../../core/allCourses'

const LastestCourses = () => {
  return (
    <div className='flex flex-col '>
        <div className='flex justify-between px-20'>
            
        <p className='text-3xl dark:text-white flex gap-5'>
        <span className='w-6 h-6 bg-yellow-500'></span>
            آخرین دوره های سبزلرن
            </p>
        <a className='text-xl text-white' href="">
            مشاهده همه ی دوره ها
            <span><ArrowBackIcon /></span>
            
        </a>
        </div>
        <div className='flex  justify-center gap-20 flex-wrap py-10'>
          {
            allCourses.map((course)=>(
                <Card key={course.id}  title={course.title} price={course.price} imgSrc={course.imgSrc} studentsNum={course.studentsNum}
                teacher={course.teacher} disc={course.disc}
                />
            ))
          }
            
        </div>

       
    </div>
  )
}

export default LastestCourses