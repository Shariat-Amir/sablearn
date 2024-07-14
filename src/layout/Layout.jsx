import { Outlet } from "react-router-dom"
import { Footer, NavBar } from "../features"


const Layout = () => {
  return (
    <>
     <NavBar />
     <Outlet />
    <Footer />
    </>
  
  )
}

export default Layout