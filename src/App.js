import React from "react";
import { useState } from "react";
import AnimalShow from "./components/AnimalShow";



function App() {        
  const getAnimal = ()=>{
      let arr = ["bird","cow","horse","dog","gator","cat","horse"]
      const idx = Math.round(Math.random()*(arr.length -1));         
      return arr[idx]
    }
    
    const [animals, setAnimal] = useState([]);     
    const handleClick = (e)=>{               
      setAnimal([...animals,getAnimal()])  
           
    } 
    // iteration: applly call-back for each elem in arr(wrap in comp) 
    const listAnimals =  animals.map((animal,index)=>{
      return <AnimalShow type={animal} key={index}></AnimalShow>   
      
    })  
    return(
      <div className="bg-slate-50"> 
          
        <button  className="rounded border border-red-600"   onClick={handleClick}>
          Add animal
        </button>        
        <div className="">{listAnimals}</div>                  
          
      </div>      
    )
}

export default App;
