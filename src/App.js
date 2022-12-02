import React from "react";
import Login from './components/Login'
import  {loginAPI}  from "./utils";
import './App.css'
 

const App = ()=>{
  const appLoginSubmit = (email,psw)=>{     
    loginAPI(email,psw)     
  }     
  return (
  <div className="app">     
    <Login  handleLoginSubmit={appLoginSubmit} />    
  </div>
  )   
}
export default App;
