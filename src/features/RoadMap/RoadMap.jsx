import { RoadMapCard } from "../../components"

const RoadMap = () => {
  return (
    <div >
        <div className="px-20 pt-10 dark:text-white ">
        <h2 className='text-3xl dark:text-white flex gap-5'>
        <span className='w-6 h-6 bg-red-500'></span>
            نقشه راه
        </h2>
        <p className="text-xl text-slate-400  pt-5">نقشه راه برای شروع اصولی یادگیری</p>

        </div>
        <div className="flex desktop:justify-between p-20  desktop:flex-row flex-col justify-center items-center gap-5">
        <RoadMapCard icon='frontend' title='فرانت اند' courses='28' color='orange'/>
        <RoadMapCard icon='security' title='امنیت' courses='9' color='green'/>
        <RoadMapCard icon='python' title='پایتون' courses='6' color='purple'/>
        <RoadMapCard icon='soft skills' title='مهارت های نرم' courses='6' color='pink'/>
        </div>

        
    </div>
  )
}

export default RoadMap