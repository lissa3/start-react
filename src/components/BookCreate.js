import React from "react";
import { useState } from "react";
import {getRandomId} from '../utils.js'


const BookCreate = ({onCreate})=> {  
    const [title,setTitle] = useState("")
    const getTitle = (e)=>{
        // event == change in input field
    //    console.log("input is:",e.target.value)
       setTitle(e.target.value); 
               
    }
    const collectTitle = (e)=>{
        // event == submit form
        e.preventDefault()
        const id = getRandomId()
        onCreate(title,id);
        setTitle("")
    }      
    return(
      
        <div className="book-create">
            <h3>Add a book:</h3>
            <form action="#" onSubmit={collectTitle} className="">
                <label htmlFor="">Title</label>
                <input  value={title} onChange={getTitle} className="input" type="text" />
                <button type="submit" className="button">Submit</button>

            </form>
        </div>
          
    )
}

export default BookCreate;
