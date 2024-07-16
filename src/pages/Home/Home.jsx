import  { useEffect, useRef, useState } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Hero } from '../../features';

function Notification() {
    const [showDiv, setShowDiv] = useState(true);
    const ref = useRef();

   
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowDiv(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
      <>
      <Hero />
       {showDiv && (
            <div ref={ref} className="dark:bg-slate-600 w-[700px] h-[200px] gap-5 px-5 rounded-lg shadow-lg flex flex-col justify-center items-center text-center z-10 absolute top-40 left-[30%]">
              <span className='absolute top-2 right-2 cursor-pointer hover:text-slate-400 ' onClick={()=>{setShowDiv(false)}}><CloseOutlinedIcon /></span>
                <p className="text-3xl text-red-400">توجه ... !</p>
                <p className="dark:text-white">این وب سایت یک وبسایت تمرینی و الگو گرفته از سایت سبزلرن می باشد و به همین دلیل تمامی لینک های آن غیر فعال می باشد</p>
            </div>
        )}
        </>
    );
}

export default Notification;
