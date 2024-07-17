import { RoadMapCard } from "../../components"


const Dashbord = () => {
  return (
    <div className=" flex desktop:flex-row-reverse flex-col  my-10 justify-center items-center gap-20 h-[800px]">
        <RoadMapCard color='pink' title="دوره های خریداری شده "/>
        <RoadMapCard color='purple' title="دوره های  پیشنهادی"/>
        <RoadMapCard color='orange' title="دوره های مطالعه شده "/>
        
    </div>
  )
}

export default Dashbord