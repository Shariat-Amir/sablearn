import { useContext } from "react"
import { Footer, Hero, NavBar } from "./features"
import { AppContext } from "./context/app-context"


function App() {
  const{theme}=useContext(AppContext)

  return (
   <div className={`${theme === true ? "dark" : "light"} `}>
  <NavBar />
  <Hero />
 <Footer />
   </div>
  )
}

export default App
