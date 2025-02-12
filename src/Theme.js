import React,{useEffect,useState,createContext } from "react";

//refernece for the toogle theme : https://nimishjn.medium.com/toggle-theme-in-reactjs-4095dd35c69d

const ThemeContext = createContext();

const getTheme = () =>{
   const theme = localStorage.getItem("theme");

   if(!theme){
     localStorage.setItem("theme","light");
     return "light";
   }
   else return theme;
};

const ThemeProvider = ({children}) =>{
    const[theme,setTheme] = useState(getTheme);

    const toggleTheme = () =>{
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    useEffect(()=>{
        const refreshTheme = () => {
            localStorage.setItem("theme", theme);
            document.body.className = theme;
        };
      
        refreshTheme(); 
    },[theme]);
    //children represents and react component that are nested inside the themeprovider
    return(
    <ThemeContext.Provider
      value={{theme, setTheme,toggleTheme,}}
    >
    {children}
    </ThemeContext.Provider>
    )
}

export {ThemeProvider,ThemeContext};

