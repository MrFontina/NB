import { createContext } from "react";

const themeContext = createContext();

export function ThemeContextProvider(props){

    const darkColor1 = "#dbd8e3";
    const darkColor2 = "#5c5470"
    const darkColor3 = "#352f44"
    const darkColor4 = "#2a2438"
   
    

    const value = {
        darkColor1,
        darkColor2,
        darkColor3,
        darkColor4

        
    };


    return(
        <themeContext.Provider value={value}>{props.children}</themeContext.Provider>
    )
}

export default themeContext