// import React from "react";
import { useState } from 'react'
import bird from '../svg/bird.svg'
import cat from '../svg/cat.svg'
import cow from '../svg/cow.svg'
import dog from '../svg/dog.svg'
import gator from '../svg/gator.svg'
import heart from '../svg/heart.svg'
import horse from '../svg/horse.svg'
// import './AnimalShow.css'

const svgMap = {
  bird,cat,cow,dog,gator,heart,horse
}
function AnimalShow({type}) {   
  const [countClick,setClick] = useState(1)
  const handleClick = (e)=>{
    setClick(countClick + 1)
  }  
  return(
      <div className="">      
        <div onClick={handleClick}>
        <img className="" src={svgMap[type]} alt="animal"/>               
        <img className='' src={heart} alt="heart" 
        style = {{width:10+10*countClick + 'px'}}/> 
        </div>
      </div>      
    )
}

export default AnimalShow;
