import React from "react";
import { useState,useContext } from "react";
import BooksContext from '../context/books';



const BookCreate = ()=> {  
    const [title,setTitle] = useState("")
    const getTitle = (e)=>{        
       setTitle(e.target.value);                
    }
    const {createBook} = useContext(BooksContext)
    const collectTitle = (e)=>{
        // event == submit form
        e.preventDefault()        
        createBook(title);
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
