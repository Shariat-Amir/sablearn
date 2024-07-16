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

    
   
    return(
        <AppContext.Provider value={{theme , changeTheme } }>
            {children}
        </AppContext.Provider>
    )
}


export{ AppProvider , AppContext}