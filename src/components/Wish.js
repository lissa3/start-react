
import { useState } from "react";


const Wish = ({collectDataForm})=> { 
  const [bill,setBill] = useState("");
  const [tip,setTip] = useState("");     
       
    const getBill = (e)=>{      
      setBill(e.target.value);
      console.log("new bill is",e.target.value)
      
    }
    const getTip = (e)=>{           
      setTip(e.target.value);
      console.log("new tip is",e.target.value)
      
    }
    const handleSubmit = (e)=>{
      e.preventDefault()
      console.log("form submitted",bill,tip)
      collectDataForm(bill,tip)
    }
    
       
    return (
      <div>        
        <form action="#" onSubmit={handleSubmit}>
          <label>Bill amount in $</label>
          <input type="text" value ={bill} onChange ={getBill}/>
          <label>Tip as decimal (%)</label>
          <input type="text" value={tip} onChange={getTip} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
  export default Wish;