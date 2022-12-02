import '../App.css'
import { useState } from 'react';

const Login = ({handleLoginSubmit})=> {  
  const [email,setEmail] = useState(""); 
  const [psw,setPsw] = useState(""); 
  
  const getEmail = (e)=>{    
    setEmail(e.target.value)
  }
  const getPsw = (e)=>{    
    setPsw(e.target.value)
  }
  const loginHandleSubmit = (e)=>{
    e.preventDefault();
    // pass term as a param to App method
    handleLoginSubmit(email,psw)
  }
        
  return (
  <div className="input-form">
    <form action="#" onSubmit={loginHandleSubmit}  className="form">
        <label>Enter email </label>
        <input type="email" value={email} onChange={getEmail}/>  
        <label>Enter password </label>      
        <input type="password" value={psw} onChange={getPsw}/>  
        <br />
        <br />      
        <button  type="submit" className="but">Submit</button>
    </form>
  </div>
  )
   
}

export default Login;
