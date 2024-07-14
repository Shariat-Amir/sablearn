
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import './NavBar.css'
import { ChangeTheme } from '../../components';


function NavBar() {


   
  return (
    <div className=' flex shadow-lg pt-4 pb-5 dark:bg-slate-700 dark:text-white '>
        <div className='right flex w-1/2 justify-center gap-32 items-center    '>
            <a href=""><img src="../../../public/images/main/logo.webp" alt="logo" className='w-20' /></a>
            <ul className='flex gap-10  '>
                <li className='dropdown-link py-4'>
                    فرانت اند 
                    <KeyboardArrowDownOutlinedIcon />
                    <div className='absolute dropdown-container'>
                        <ul>
                        <li className='my-3'><a href="">آموزش HTML</a></li>
                                <li className='my-3'><a href="">آموزش CSS</a></li>
                                <li className='my-3'><a href="">آموزش Flexbox</a></li>
                                <li className='my-3'><a href="">مینی پروژه های تخصصی با CSS</a></li>
                                <li className='my-3'><a href="">آموزش Tailwind CSS</a></li>
                                <li className='my-3'><a href="">آموزش اصولی طراحی قالب</a></li>
                                <li className='my-3'><a href="">اموزش بوت استرپ HTML</a></li>
                                <li className='my-3'><a href="">آموزش جاوا اسکریپت</a></li>
                                <li className='my-3'><a href="">پروژه های تخصصی با JS</a></li>
                                <li className='my-3'><a href="">آموزش جامع ری اکت ReactJS</a></li>
                                <li className='my-3'><a href="">آموزش ویو جی اس</a></li>
                                <li className='my-3'><a href="">آموزش VsCode</a></li>
                        </ul>
                    </div>
                </li>
                <li className='dropdown-link  py-4'>
                    امنیت
                    <KeyboardArrowDownOutlinedIcon />
                    <div className='absolute dropdown-container'>
                        <ul>
                        <li className='my-3'><a href="">نقشه راه فرود به دنیای هک و امنیت</a></li>
                                <li className='my-3'><a href="">شبکه با گرایش امنیت</a></li>
                                <li className='my-3'><a href="">لینوکس با گرایش امنیت</a></li>
                                <li className='my-3'><a href="">آموزش هکر قانونمند-CEH V11</a></li>
                                <li className='my-3'><a href="">آموزش کالی لینوکس</a></li>
                                <li className='my-3'><a href="">آموزش پایتون سیاه</a></li>
                                <li className='my-3'><a href="">آموزش Burp Suit</a></li>
                                <li className='my-3'><a href="">آموزش جاوااسکریپت سیاه</a></li>
                        </ul>
                    </div>
                </li>
                <li className='dropdown-link  py-4'>
                    پایتون
                    <KeyboardArrowDownOutlinedIcon />
                     <div className='absolute dropdown-container'>
                        <ul>
                        <li className='my-3'><a href="">دوره آموزش پایتون</a></li>
                                <li className='my-3'><a href="">پروژه های کاربردی با پایتون</a></li>
                                <li className='my-3'><a href="">بهینه نویسی کد ها در پایتون</a></li>
                                <li className='my-3'><a href="">آموزش جنگو</a></li>
                                <li className='my-3'><a href="">مصورسازی داده با پایتون</a></li>
                        </ul>
                    </div>
                </li>
                <li className='dropdown-link  py-4'>
                    پی اچ پی
                    <KeyboardArrowDownOutlinedIcon />
                     <div className='absolute dropdown-container'>
                        <ul>
                        <li className='my-3'><a href="">ربات تلگرام با PHP</a></li>
                                <li className='my-3'><a href="">چروژه های کاربردی با PHP</a></li>
                        </ul>
                    </div>
                </li>
                <li className='dropdown-link  py-4'>
                    ارتقای مهارت
                    <KeyboardArrowDownOutlinedIcon />
                     <div className='absolute dropdown-container'>
                        <ul>
                        <li className='my-3'><a href="">الگوریتم و ساختمان داده</a></li>
                                <li className='my-3'><a href="">آموزش websocket</a></li>
                                <li className='my-3'><a href="">گیت و گیتهاب</a></li>
                                <li className='my-3'><a href="">آموزش GraphQL</a></li>
                                <li className='my-3'><a href="">توسعه کابخانه با JS</a></li>
                                <li className='my-3'><a href=""> افزونه نویسی با JS</a></li>
                                <li className='my-3'><a href="">Clean Code برای JS</a></li>
                                <li className='my-3'><a href="">دیپلوی پروژه های JS</a></li>
                                <li className='my-3'><a href="">دوره  Mern Stack</a></li>
                                <li className='my-3'><a href="">آموزش زجکس(regex)</a></li>
                                <li className='my-3'><a href="">Npm برای جاوا اسکریچت کار ها </a></li>
                                <li className='my-3'><a href="">آموزش VsCode</a></li>
                        </ul>
                    </div>
                </li>
                <li className='dropdown-link  py-4'>
                    مقالات
                    <KeyboardArrowDownOutlinedIcon />
                     <div className='absolute dropdown-container'>
                        <ul>
                        <li className='my-3'><a href="">اچ تی ام ال</a></li>
                                <li className='my-3'><a href="">بوت استرپ</a></li>
                                <li className='my-3'><a href="">تست نفوذ و امنیت وب</a></li>
                                <li className='my-3'><a href="">جی کوئری</a></li>
                                <li className='my-3'><a href="">ری اکت جی اس</a></li>
                                <li className='my-3'><a href="">سی اس اس</a></li>
                                <li className='my-3'><a href="">طراحی سایت</a></li>
                                <li className='my-3'><a href="">ویو جی اس</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div className='left w-1/2 flex flex-row-reverse justify-between items-center px-44  pt-2'>
        <div className='flex gap-10'>
             <ChangeTheme />
                <button className='bg-slate-100 h-[50px] w-[50px] rounded-full'>
                    
                    <PersonOutlineOutlinedIcon className='scale-110 text-gray-400'/>
                    
                </button>
                </div>
               
                <div className='bg-gray-100 flex  justify-between gap-5 h-[80%] rounded-3xl px-4'>
                <input type="text" placeholder="چیو میخوایی یاد بگیری" className='bg-transparent border-none outline-none  ' />
                <button><SearchOutlinedIcon className='text-gray-400'/></button>
                </div>
        </div>
   
    </div>
  )
}

export default NavBar