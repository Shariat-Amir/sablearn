import { redirect, useNavigate } from "react-router-dom";


const Notfound = () => {

    const theme=localStorage.getItem("theme")
    console.log(theme);
    const navigate=useNavigate()
  return (
    <div className={`flex flex-col items-center justify-center h-screen dark:bg-gradient-to-l from-green-950 to-slate-600`}>

        <img src="../../images/main/NotFound.png" alt="Notfound" className="w-[1000px]" />
        <p className="text-3xl">متاسفانه صفحه مورد نظر شما پیدا نشد.</p>
        <button onClick={()=>{
            navigate('/')
        }} className="hover:text-green-500 transition-colors duration-200"> بازگشت به صفحه قبلی</button>
    </div>
  )
}

export default Notfound