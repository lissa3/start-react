import React from "react";
import BookEdit from "./BookEdit";
import { useState } from "react";


const BookShow = ({book,onDelete,onEdit})=> {   
  const [showEdit,setShowEdit] = useState(false);
    const handleClickDelete = ()=>{
      // onDelete == callback from App.js component
      onDelete(book.id)
    }
    
    
    const toggleEdit = ()=>{  
      setShowEdit(!showEdit)
    }
    const handelEditSubmit = (id,newTitle)=>{
      setShowEdit(false)
      onEdit(id,newTitle)
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
          <button onClick = {toggleEdit} onEdit={onEdit} className="edit">Edit</button> 
        </div>              
      </div>      
    )
}

export default BookShow;
