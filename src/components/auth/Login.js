import '../../App.css'
import { useState } from 'react';
import Field from '../../components/common/Field';
import  {loginAPI}  from "../../utils";

const Login = ()=> {    
    const [email,setEmail] = useState(""); 
    const [psw,setPsw] = useState(""); 
    const handleLoginSubmit = ()=>{
      console.log(email,psw)
      loginAPI(email,psw)
    }  
        
  return (
  <div className="input-form">
    <form action="#" className="form" onSubmit={handleLoginSubmit}>
        <Field type="email" setValue={setEmail} /> 
        <br />
        <Field type="passwordl" setValue={setPsw} />        
        <br />
        <br />      
        <button  type="submit" className="but">Submit</button>
    </form>
  </div>
  )
   
}

export default Login;
