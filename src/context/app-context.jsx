import { createContext, useEffect, useState } from "react";

const AppContext =createContext()

const initialState=()=>{
    if(localStorage.getItem("theme")){
        return JSON.parse(localStorage.getItem("theme"))
    }
    else{
        return false
    }
}



const AppProvider=({children})=>{

    const [theme , setTheme]=useState(initialState)

    const changeTheme=()=>{
        setTheme(prevTheme=>!prevTheme)
        console.log(theme);
    }
    
    useEffect(()=>{
     localStorage.setItem("theme", theme)

    },[theme])

    // .............................

    const [showSidebar , setShowSideBar]=useState(false)
    // .............................
    const [windowWidth, setWindowWidth]=useState(window.innerWidth)

    useEffect(()=>{
    
        const changeWindowWidth=()=>{
            setWindowWidth(window.innerWidth)
            console.log(windowWidth);
        }
        window.addEventListener('resize',changeWindowWidth)
        return ()=>{window.removeEventListener('resize', changeWindowWidth)}
    
    },[windowWidth])

   
    return(
        <AppContext.Provider value={{theme , changeTheme,showSidebar , setShowSideBar , windowWidth } }>
            {children}
        </AppContext.Provider>
    )
}


export{ AppProvider , AppContext}