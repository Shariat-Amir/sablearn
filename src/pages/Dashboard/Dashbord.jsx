import { RoadMapCard } from "../../components"


const Dashbord = () => {
  return (
    <div className=" flex justify-center items-center gap-20 h-[600px]">
        <RoadMapCard color='pink' title="دوره های خریداری شده "/>
        <RoadMapCard color='purple' title="دوره های  پیشنهادی"/>
        <RoadMapCard color='orange' title="دوره های مطالعه شده "/>
        
    </div>
  )
}

export default Dashbord