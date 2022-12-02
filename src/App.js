import React from "react";
import SearchBar from "./components/SearchBar";
import  sendRequest  from "./utils";
import './App.css'

function App() {    
  const appOnSubmit = (term)=>{     
    sendRequest(term)     
  }      
  return (
  <div className="app">      
    <SearchBar  handleSubmit={appOnSubmit} />    
  </div>
  )   
}
export default App;
