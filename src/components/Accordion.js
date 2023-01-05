import React from 'react';
import { useState } from 'react';
import { GoTriangleLeft,GoTriangleDown } from 'react-icons/go';


const Accordion = ({items}) => {
    const [expendedIndex,setExpandedIndex] = useState(null);
    // use hybride arrow func + named event handler:
    // + reach scope 
    const handleClick = (idx)=>{
        // func way to update the state
        // cuurent == most updated val in state val
        // tech way: if a new val depands on the one(very quickly need to update)
        // prevent small bug: delayed update: simulate 2 clickes one-by-one
        // current is the most recent val triggers change-re-render
       setExpandedIndex((currentExtendedIndex)=>{
        if(currentExtendedIndex ===idx){
            return null
        }else{
            // return a new val (without delay)
            return idx
        }
       })
    }       
     
    const renderedItems = items.map((item,index)=>{
        const isExtended = index === expendedIndex;
        const icon = <span className='text-2xl'>{isExtended?<GoTriangleDown/>:<GoTriangleLeft/>}</span>                
        return (
          <div key={item.id}>
            <div onClick ={()=>handleClick(index)} className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer">
            {item.label} {icon}              
            </div> 
            {isExtended&&<div className='border-b p-5'>{item.content}</div>}
            <hr></hr>
          </div>          
        )
    })
    return (
        <div className='border-x border-t rounded'>
           {renderedItems}
        </div>
    );
};

export default Accordion;