import { useContext, useEffect } from "react"
import { AppContext } from "./context/app-context"
import { RouterProvider } from "react-router-dom"
import router from "./routes"



function App() {
  const{theme}=useContext(AppContext)
  useEffect(()=>{
    const body=document.body;
   if(theme===true){
    body.classList.add("dark")
   }else{
    body.classList.remove("dark")
   }
  
  },[theme])



  return (
   <RouterProvider router={router} />
  )
}

export default App
