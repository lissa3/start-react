import {useState} from "react";
import DropDown from "../components/DropDown"

function DropDownPage() {   
  const options = [
    {value:"red",label:"Small red"},
    {value:"green",label:"Middle green"},
    {value:"blue",label:"Hot and blue"},
  ];
  const [selected,setSelected] = useState(null);

  const handelSelect = (item)=>{
    setSelected(item);    
  }   
  
  return(
    <div className="container mx-auto px-4 bg-slate-50"> 
      <div className="flex  justify-center bg-orange-400">          
        <DropDown options={options} value={selected}   onChange={handelSelect}/>           
       
      </div>      
    </div>   
           
    )
}

export default DropDownPage;
