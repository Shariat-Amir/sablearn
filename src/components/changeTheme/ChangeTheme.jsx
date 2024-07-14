import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useContext } from 'react';
import { AppContext } from '../../context/app-context';

const ChangeTheme = () => {
const { theme, changeTheme } = useContext(AppContext);

  
  return (
    <button className='bg-slate-100 h-[50px] w-[50px] rounded-full' onClick={changeTheme} >
      {theme===true ? <WbSunnyIcon className='scale-110 text-yellow-500'/>: < DarkModeOutlinedIcon className='scale-110 text-gray-400  '/>}

                    
 
    
    
    </button>
  )
}

export default ChangeTheme