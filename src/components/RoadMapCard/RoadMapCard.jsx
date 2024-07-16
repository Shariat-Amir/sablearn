
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
const RoadMapCard = ({icon, title , courses ,color}) => {
 
    const iconSelector=()=>{
        switch (icon) {
            case 'frontend':
                return < DevicesOutlinedIcon/>;
                
            case 'security':
                return <LocalPoliceOutlinedIcon />;
                
            case 'python':
                return <BuildOutlinedIcon />;
                
            case 'soft skills':
                return <ExtensionOutlinedIcon />
                
        }
    }

    const colorSelector=()=>{
        switch (color) {
            case 'orange':
                return 'bg-gradient-to-l from-red-600 to-orange-400';
            case 'green':
                return 'bg-gradient-to-l from-green-400 to-blue-300';
            case 'purple':
                return ' bg-gradient-to-l from-purple-500 to-blue-500';
            case 'pink':
                return 'bg-gradient-to-l from-pink-700 to-red-500';
        }
    }
  return (
    <div className={`w-80 h-52 rounded-2xl flex  justify-center items-center hover:scale-[1.02] transition-all duration-200 ${colorSelector()}`} >
            <a  className='h-full w-full flex flex-col justify-center items-center gap-6' href="">
                <span className='scale-[2] text-white'>{iconSelector()}</span>
                <p className='text-white mt-5 text-2xl'>{title}</p>
                <p className='text-white text-xl px-2 '>{courses ? courses +" "+"دوره" : ""}</p>
            </a>

    </div>
  )
}

export default RoadMapCard