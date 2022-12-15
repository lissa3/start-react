import { useState } from "react";


const BookEdit = ({book,onSubmit})=> { 
  const [title,setTitle] = useState(book.title)
 
  const getTitleVal = (e)=>{
    setTitle(e.target.value)
    
  }
  const submitEdit = (e)=>{
    e.preventDefault();
    onSubmit(book.id,title)
    
  }       
  
    return(
      <div className="app">
        <form action="#" onSubmit={submitEdit} className="book-edit">
            <label htmlFor="">Title</label>
            <input type="text" value={title} onChange={getTitleVal} className="input" />
            <button className="button is-primary">Save</button>
          </form>        
        
      </div>      
    )
}

export default BookEdit;
