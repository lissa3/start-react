import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Images from "./Images";
import  sendRequest  from "./utils";
import './App.css'

function App() {   
  const [images,setImagesList] = useState([]) 
  const appOnSubmit = async (term)=>{     
    const resultAPICall = await sendRequest(term);
    // without async + await  result == Promise хе-хе... а ты ожидала array of objects?      
    setImagesList(resultAPICall) 
     
  } 
    
  return (
  <div className="app">  
    <div>
      <SearchBar  handleSubmit={appOnSubmit} />    
    </div> 
    <div className="image-collection">
      <Images images={images}></Images>
    </div>   
  </div>
  )   
}
export default App;
