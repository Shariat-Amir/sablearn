import { useContext } from "react"
import { NavBar } from "./features"
import { AppContext } from "./context/app-context"


function App() {
  const{theme}=useContext(AppContext)

  return (
   <div className={`${theme === true ? "dark" : "light"}`}>
  <NavBar />
  <p>{theme}</p>
   </div>
  )
}

export default App
