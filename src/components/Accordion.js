import React from 'react';
import { useState } from 'react';
import Content from './Content';

const Accordion = ({items}) => {
    const [isOpen,setIsOpen] = useState(false);

    // однако при этом будут "открываться ВСЕ div with content"
    
    const handleOpen = ()=>{
        setIsOpen(!isOpen);
        
    }   

    const renderedItems = items.map((item)=>{
        return (
            <div key={item.id}>
            <h4 onClick={handleOpen}>{item.label}</h4>           
            <Content content={item.content} showContent={isOpen}/>
            </div>          
        )
    })
    return (
        <div>
           {renderedItems}
        </div>
    );
};

export default Accordion;