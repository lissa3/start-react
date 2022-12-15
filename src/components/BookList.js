import React from "react";
import BookShow from './BookShow'


const BookList = ({books,onDelete,onEdit}) =>{   

  
  const BookCollection = books.map((book)=>{
     return <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit}/>
  })
  
    return(
      <div className="app">        
        <h3>I am a BookList comp</h3>
        <div className="book-list" >
          {BookCollection}
        </div>

      </div>      
    )
}

export default BookList;
