import { createContext, useState } from "react";

const AppContext =createContext()



const AppProvider=({children})=>{

    const [theme , setTheme]=useState(false)

    const changeTheme=()=>{
        setTheme(prevTheme=>!prevTheme)
        console.log(theme);
       
        
        }
    return(
        <AppContext.Provider value={{theme , changeTheme} }>
            {children}
        </AppContext.Provider>
    )
}


export{ AppProvider , AppContext}