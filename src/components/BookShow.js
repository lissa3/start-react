import React, { useContext } from "react";
import BookEdit from "./BookEdit";
import { useState } from "react";
import BooksContext from "../context/books";


const BookShow = ({book})=> {   
  const [showEdit,setShowEdit] = useState(false);
  const {deleteBookById} = useContext(BooksContext)



    const handleClickDelete = ()=>{
      // onDelete == callback from App.js component
      deleteBookById(book.id)
    }
    
    
    const toggleEdit = ()=>{  
      setShowEdit(!showEdit)
    }
    const handelEditSubmit = ()=>{
      setShowEdit(false);      
    }
    
    let content = <h3>{book.title}</h3>   
    if(showEdit){
      //no need to pass onEdit to BookEdit
        content = <BookEdit  book={book}  onSubmit={handelEditSubmit}/>
      }   
    
    return(
      <div className="book-show">
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="random"/>
        <div> {content}</div> 
               
        <div className="actions">
          <button onClick = {handleClickDelete}  className="delete">Delete</button>                
          <button onClick = {toggleEdit} className="edit">Edit</button> 
        </div>              
      </div>      
    )
}

export default BookShow;
