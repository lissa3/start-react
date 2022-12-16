import React from "react";
import { useState } from "react";



const BookCreate = ({onCreate})=> {  
    const [title,setTitle] = useState("")
    const getTitle = (e)=>{        
       setTitle(e.target.value);                
    }
    const collectTitle = (e)=>{
        // event == submit form
        e.preventDefault()        
        onCreate(title);
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
