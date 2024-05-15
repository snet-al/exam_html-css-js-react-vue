import React, {useContext, useState} from "react";

const AppContext= React.createContext()

const AppProvider=({children})=>{
    const [switcher,setSwitcher]=useState(false)

    const handleSwitcher = () => {
        setSwitcher(!switcher)
      };
    
    return <AppContext.Provider value={{setSwitcher,handleSwitcher, switcher }}>
        {children}
    </AppContext.Provider>
}
export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppProvider, AppContext}