import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"


const Login = () => {


    const {register, handleSubmit , formState:{errors} }=useForm()
    const Navigate=useNavigate()
    const onSubmit = data => {
        
        Navigate("/dashboard")
        console.log(data);
    };
  return (
    <>
    
    <div className="w-[400px] h-60 dark:bg-slate-600 absolute  left-24 bg-white top-28 transition-all shadow-xl duration-200 rounded-lg z-10">
       
        <form className=" h-full flex flex-col items-center justify-center gap-2"  onSubmit={handleSubmit(onSubmit)}>
           <p>شماره موبایل</p>
            <input {...register("username" , {required:true ,minLength:10 , maxLength:11})} type="text"  placeholder=" لطفا نام کاربری را وارد نمایید" className={`w-[80%] rounded-lg shadow-lg text-center text-black ${errors.username && 'border border-red-500'}`} />
            {errors.username && <p className="text-red-500"> شماره موبایل وارد شده باید 10 رقم  باشد</p>}
            {errors.username ?.message}
            <p>رمزعبور</p>
            <input {...register("password",{required:true , minLength:8 , maxLength:20})} type="password" placeholder=" لطفا رمز عبور را وارد نمایید" className={`w-[80%] rounded-lg shadow-lg text-center text-black ${errors.username && 'border border-red-500'}`}/>
            {errors.password && <p className="text-red-500">کلمه عبور وارد شده باید حداقل  8 و حداکثر 20 رقم  باشد</p>}
            <button className="" type="submit">ورود</button>
        </form>

    </div>
     <div className="dark:bg-slate-600 bg-white w-14 h-14 rotate-45 absolute left-38 top-24 z-0"></div>
     </>
  )
}

export default Login