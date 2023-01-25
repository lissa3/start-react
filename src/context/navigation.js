import { createContext } from "react";
import { useState,useEffect } from "react";

const NavigattionContext = createContext();

function NavigationProvider({children}){

    const [currentPath,setCurrentPath] = useState(window.location.pathname);
    // console.log("path is:",currentPath);
    useEffect(()=>{
    // re-render if user clicks but <- or ->    
    // waiting for a popState effect on handler; 
    // tracking click "back"<- or -> forward 
    // let op: but NOT hard re-fresh
        const handler = ()=>{
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate',handler)
        return ()=>{
           window.removeEventListener('popstate',handler) 
        }
    },[])
    const navigate = (to)=>{
        window.history.pushState({},"",to);
        setCurrentPath(to)
    }

    return (
      <NavigattionContext.Provider value={{currentPath,navigate}}>
        {currentPath}
        {children}
      </NavigattionContext.Provider>
    )
}
export {NavigationProvider};
export default NavigattionContext;
