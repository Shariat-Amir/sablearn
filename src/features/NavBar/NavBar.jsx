import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.css';
import { ChangeTheme } from '../../components'; // assuming ChangeTheme is another component in the components folder
import { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/app-context';

function NavBar() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        navigate('/dashboard');
        console.log(data);
    };

    const [showLogin, setShowLogin] = useState(false);
    const ref = useRef();
    const showLoginHandler = () => {
        setShowLogin(prevShowLogin => !prevShowLogin);
    };

    useEffect(() => {
        const checkClickOutside = (e) => {
            if (showLogin && ref.current && !ref.current.contains(e.target)) {
                setShowLogin(false);
            }
        };

        document.addEventListener('mousedown', checkClickOutside);
        return () => {
            document.removeEventListener('mousedown', checkClickOutside);
        };
    }, [showLogin]);

    useEffect(()=>{
   
    },[])
// ...................................
const [windowWidth, setWindowWidth]=useState(window.innerWidth)

useEffect(()=>{

    const changeWindowWidth=()=>{
        setWindowWidth(window.innerWidth)
        console.log(windowWidth);
    }
    window.addEventListener('resize',changeWindowWidth)
    return ()=>{window.removeEventListener('resize', changeWindowWidth)}

},[windowWidth])
// ...........................
const {showSidebar , setShowSideBar}=useContext(AppContext)
const sidebarHandler=()=>{
    setShowSideBar((prevShowSideBar)=>!prevShowSideBar)
}
const ref2=useRef()
useEffect(()=>{
const sideBarCheckOutsideClick=()=>{
    if(showSidebar && ref2.current && !ref2.current.contains(event.target)){
        setShowSideBar(false)
    }}

    document.addEventListener('mousedown',sideBarCheckOutsideClick)
    return ()=>{document.removeEventListener('mousedown',sideBarCheckOutsideClick)}
})

// ............................
if(windowWidth >1024){
    return (
        <div className='flex shadow-lg pt-4 pb-5 dark:bg-slate-700 dark:text-white'>
            <div className='right flex w-1/2 justify-center gap-32 items-center'>
                <a href=""><img src="../../../public/images/main/logo.webp" alt="logo" className='w-20' /></a>
                <ul className='flex gap-10'>
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
                    <li className='dropdown-link py-4'>
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
                    <li className='dropdown-link py-4'>
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
                    <li className='dropdown-link py-4'>
                        پی اچ پی
                        <KeyboardArrowDownOutlinedIcon />
                        <div className='absolute dropdown-container'>
                            <ul>
                                <li className='my-3'><a href="">ربات تلگرام با PHP</a></li>
                                <li className='my-3'><a href="">چروژه های کاربردی با PHP</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className='dropdown-link py-4'>
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
                                <li className='my-3'><a href="">دوره Mern Stack</a></li>
                                <li className='my-3'><a href="">آموزش زجکس(regex)</a></li>
                                <li className='my-3'><a href="">Npm برای جاوا اسکریچت کار ها </a></li>
                                <li className='my-3'><a href="">آموزش VsCode</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className='dropdown-link py-4'>
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
            <div className='left w-1/2 flex flex-row-reverse justify-between items-center px-44 pt-2'>
                <div className='flex gap-10'>
                    <ChangeTheme />
                    <button className='bg-slate-100 h-[50px] w-[50px] rounded-full' onClick={showLoginHandler}>
                        <PersonOutlineOutlinedIcon className='scale-110 text-gray-400' />
                    </button>
                </div>
                {showLogin && (
                    <>
                        <div ref={ref} className="w-[400px] h-60 dark:bg-slate-600 absolute left-24 bg-white top-28 transition-all shadow-xl duration-200 rounded-lg z-10">
                            <form className="h-full flex flex-col items-center justify-center gap-2" onSubmit={handleSubmit(onSubmit)}>
                                <p>شماره موبایل</p>
                                <input {...register("username", { required: true, minLength: 10, maxLength: 11 })} type="text" placeholder="لطفا نام کاربری را وارد نمایید" className={`w-[80%] rounded-lg shadow-lg text-center text-black ${errors.username && 'border border-red-500'}`} />
                                {errors.username && <p className="text-red-500">شماره موبایل وارد شده باید 10 رقم باشد</p>}
                                <p>رمزعبور</p>
                                <input {...register("password", { required: true, minLength: 8, maxLength: 20 })} type="password" placeholder="لطفا رمز عبور را وارد نمایید" className={`w-[80%] rounded-lg shadow-lg text-center text-black ${errors.password && 'border border-red-500'}`} />
                                {errors.password && <p className="text-red-500">کلمه عبور وارد شده باید حداقل 8 و حداکثر 20 رقم باشد</p>}
                                <button className="" type="submit">ورود</button>
                            </form>
                        </div>
                        <div className="dark:bg-slate-600 bg-white w-14 h-14 rotate-45 absolute left-38 top-24 z-0"></div>
                    </>
                )}
                <div className='bg-gray-100 flex justify-between gap-5 h-[80%] rounded-3xl px-4'>
                    <input type="text" placeholder="چیو میخوایی یاد بگیری" className='bg-transparent border-none outline-none' />
                    <button><SearchOutlinedIcon className='text-gray-400' /></button>
                </div>
            </div>
        </div>
    );
}
else{
    return(
        <div className=' w-full h-20 shadow-lg dark:bg-slate-600 flex justify-center items-center'>
            <div className='w-1/3 flex items-center justify-center' onClick={sidebarHandler}><MenuIcon /></div>
            <div className=' w-1/3 flex items-center justify-center'><a href=""><img src="../../../public/images/main/logo.webp" className='w-16 scale-75' alt="" /></a></div>
            <div className=' w-1/3 flex items-center justify-center '>
                <ChangeTheme className="scale-75" />
                <button className='bg-slate-100 h-[50px] w-[50px] rounded-full scale-75' onClick={showLoginHandler}>
                        <PersonOutlineOutlinedIcon className='scale-110 text-gray-400' />
                    </button>
{showLogin && (
                    <>
                        <div ref={ref} className="w-[80%] h-60 dark:bg-slate-600 absolute left-5  bg-white top-28 transition-all shadow-xl duration-200 rounded-lg z-10">
                            <form className="h-full flex flex-col items-center justify-center gap-2" onSubmit={handleSubmit(onSubmit)}>
                                <p>شماره موبایل</p>
                                <input {...register("username", { required: true, minLength: 10, maxLength: 11 })} type="text" placeholder="لطفا نام کاربری را وارد نمایید" className={`w-[80%] rounded-lg shadow-lg text-center text-black ${errors.username && 'border border-red-500'}`} />
                                {errors.username && <p className="text-red-500">شماره موبایل وارد شده باید 10 رقم باشد</p>}
                                <p>رمزعبور</p>
                                <input {...register("password", { required: true, minLength: 8, maxLength: 20 })} type="password" placeholder="لطفا رمز عبور را وارد نمایید" className={`w-[80%] rounded-lg shadow-lg text-center text-black ${errors.password && 'border border-red-500'}`} />
                                {errors.password && <p className="text-red-500">کلمه عبور وارد شده باید حداقل 8 و حداکثر 20 رقم باشد</p>}
                                <button className="" type="submit">ورود</button>
                            </form>
                        </div>
                        <div className="dark:bg-slate-600 bg-white w-14 h-14 rotate-45 absolute left-10 top-24 z-0"></div>
                    </>
                )}
                </div>
                {
                    showSidebar && (
                        <div ref={ref2} className='bg-white z-10  cursor-pointer w-44 h-64 shadow-lg dark:bg-slate-600 dark:text-white rounded-lg absolute right-0 top-20 sidebarAnimation flex flex-col items-center justify-center gap-5  '>
                            <a className='hover:text-green-500' href="#">فرانت اند</a>
                            <a className='hover:text-green-500' href="#">امنیت</a>
                            <a className='hover:text-green-500' href="#">پایتون</a>
                            <a className='hover:text-green-500' href="#">مهارت های نرم</a>
                            <a className='hover:text-green-500' href="#">مقالات</a>
                        </div>
                    )
                }
        </div>
    )
}
   
}

export default NavBar;
