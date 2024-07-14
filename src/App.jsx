import { useContext } from "react"
import { Footer, NavBar } from "./features"
import { AppContext } from "./context/app-context"


function App() {
  const{theme}=useContext(AppContext)

  return (
   <div className={`${theme === true ? "dark" : "light"}`}>
  <NavBar />
  <div className="bg-green-300 h-[1000px]"></div>
 <Footer />
   </div>
  )
}

export default App
