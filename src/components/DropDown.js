import { useState,useEffect,useRef } from "react";
import { GoTriangleLeft,GoTriangleDown } from 'react-icons/go';
import Panel from "./Panel";

function DropDown({value,options,onChange}) {
  const [isOpen,setIsOpen] = useState(false); 
  const divElem = useRef() 
  const handelClick = ()=>{
    setIsOpen(!isOpen);
  }
  useEffect(()=>{
    const handler = (e)=>{
      // case if no reference to the elem at all
      if(!divElem.current){
        return;
      }
      // returns not a direct ref to divElem {current:<div> ...}; 
      if(!divElem.current.contains(e.target)) {
        setIsOpen(false)
      }    
    }
    // let op: arg == true обязателен,тк. I need stage of capture(useCapture)
    // Boolean the event should be executed in the capturing or bubbling phase
    document.addEventListener("click",handler,true)
    const cleanUp = ()=>{      
      document.removeEventListener('click',handler)
    }
    return cleanUp
  },[])
  // сначала я хотела юзать функ родит, тупо выпилить пермен,но задача
  // в т.ч. и закрыть меню по клику на item(option)|=> isOpen ->false       
  const handelOptionClick = (optionVal)=>{    
    setIsOpen(false);
    onChange(optionVal);    
  } 
  // cut not nullish values to prevent error(init selected == null)
  const content= value?.label ||  "Select";  
  const icon= <span className='text-2xl'>{isOpen?<GoTriangleDown/>:<GoTriangleLeft/>}</span>;  
  isOpen?<GoTriangleDown/>:<GoTriangleLeft/>
  // same as prev examp (handle outside from map iter)
  const renderedOptions = options.map((option,idx)=>{      
    return (      
      <Panel onClick={()=>handelOptionClick(option)} value={option.value}  key= {idx} className="cursor-pointer">
          {option.label}
      </Panel>            
      )        
    })       
    return(
      <div ref={divElem} className="w-48 relative"> 
       <Panel onClick={handelClick} className="flex justify-between items-center cursor-pointer">
        {content}
        {icon}
       </Panel>
       {isOpen&&<div className='absolute top-full border p-3 w-full shadow bg-white'>{renderedOptions}</div>}
                 
      </div>      
    )
}

export default DropDown;
