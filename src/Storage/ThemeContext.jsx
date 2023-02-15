import { createContext, useEffect, useState } from "react";

const themeContext = createContext();

export function ThemeContextProvider(props){

    const darkColor1 = "#dbd8e3";
    const darkColor2 = "#5c5470"
    const darkColor3 = "#352f44"
    const darkColor4 = "#2a2438"
    const darkest = "#1d1d1d"

    const light1 = "#8EA4C8"
    const light2 = "#C3B8AA"
    const light3 = "#DEDCE4"
    const light4 = "#DB98A5"
    const light5 = "#C7CDC5"
   
    const gradient13 = "linear-gradient(to bottom, #8EA4C8, #DEDCE4)";
    const gradient34 = "linear-gradient(to bottom, #DEDCE4, #DB98A5)";
    const gradient35 =  "linear-gradient(to bottom, #DEDCE4, #C7CDC5)"; 
    const gradient45 = "linear-gradient(to bottom, #DB98A5, #C7CDC5)";
    const gradient51 = "linear-gradient(to bottom, #C7CDC5, #8EA4C8)";


    const [darkMode, setDarkMode] = useState(true)
 

    useEffect(() => {
      const json = localStorage.getItem("site-dark-mode");
      const currentMode = JSON.parse(json);
      if (currentMode) {
        setDarkMode(false);
      } else {
        setDarkMode(true);
      }
    }, []);
  
  
    useEffect(()=>{
      if(!darkMode){
        document.body.classList.add("dark");
      }else{
        document.body.classList.remove("dark");
      }
      const json = JSON.stringify(darkMode);
      localStorage.setItem("site-dark-mode", json);
    }, [darkMode]);

    function handleTheme(){
        setDarkMode(!darkMode)
    }


    const value = {
        darkMode,
        handleTheme,
        darkColor1,
        darkColor2,
        darkColor3,
        darkColor4,
        light1,
        light2,
        light3,
        light4,
        light5,
        gradient13,
        gradient34,
        gradient35,
        gradient45,
        gradient51,
        darkest


        
    };


    return(
        <themeContext.Provider value={value}>{props.children}</themeContext.Provider>
    )
}

export default themeContext