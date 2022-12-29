import React from 'react';
import { useState } from 'react';
import Content from './Content';

const Accordion = ({item}) => {
    const [isOpen,setIsOpen] = useState(false);      
    const handleOpen = ()=>{
        setIsOpen(!isOpen);        
    } 
    let content = "";
    if(isOpen){
        content = <div>{item.content}</div>
    }    
    return (
        <div>
            <div onClick={handleOpen}>{item.label}</div>
           {content}
        </div>
    );
};

export default Accordion;