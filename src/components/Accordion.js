import React from 'react';
import { useState } from 'react';
import { GoTriangleLeft,GoTriangleDown } from 'react-icons/go';


const Accordion = ({items}) => {
    const [expendedIndex,setExpandedIndex] = useState(null);
    // use hybride arrow func + named event handler:
    // + reach scope 
    const handleClick = (idx)=>{
       setExpandedIndex((current)=>{
        if(current ===idx){
            return null
        }else{
            return idx
        }
       })
    }
    // const handleClick = (idx)=>{
    //     if(expendedIndex === idx){
    //         setExpandedIndex(null)
    //     }else{
    //         setExpandedIndex(idx)
    //     }
    // }
    
     
    const renderedItems = items.map((item,index)=>{
        const isExtended = index === expendedIndex;
        const icon = <span className='text-2xl'>{isExtended?<GoTriangleDown/>:<GoTriangleLeft/>}</span> 
        // conditional rendering
        // const content= isExtended&&<div>{item.content}</div>        
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