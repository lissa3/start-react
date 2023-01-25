import React, { useState } from "react";
import { SideBar } from "./components/SideBar";



function App() {   
  const [currentComp,setComponent] = useState([]);
  const getChoice = (choice)=>{
    console.log(choice)
    setComponent(choice)
  }
  
  return(            
     <div className="flex ">
          <div className="flex-none w-1/4 pl-3 ml-3 bg-red-50">
            <SideBar onChange={getChoice} value={currentComp}/>
          </div>        
          <div className="flex-none w-3/4 bg-orange-50">
            Placeholder for arrays ...
          </div>
      </div>  
    )
}
export default App;
