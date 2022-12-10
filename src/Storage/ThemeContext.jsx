import { createContext } from "react";

const themeContext = createContext();

export function ThemeContextProvider(props){

    const darkColor1 = "red";
    const color2 = "blue"
    

    const value = {
        darkColor1,
        color2
    };


    return(
        <themeContext.Provider value={value}>{props.children}</themeContext.Provider>
    )
}

export default themeContext