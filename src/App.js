import React from "react";
import Wish from "./components/Wish";
import { logic } from "./utils";
import { useState } from "react";
import PaymentInfo from "./components/PaymentDetail";
import './App.css'

function App() {  
  const [extra,setExtra] = useState(0)
  const [total,setTotal] = useState(0)

    
  const handleSubmit = (bill,tip)=>{ 
    // let of bill and tip are strings
     const  startCalc = logic(tip);   
    setTotal(startCalc.calcTotal(bill));
    setExtra(startCalc.calcExtra(bill))
  }   
   
  return (
    <div>
      <h2>Calculate your tip</h2>
      <Wish collectDataForm = {handleSubmit} />
      <PaymentInfo extra={extra} total={total}/>
      
    </div>
  )
}
export default App;
