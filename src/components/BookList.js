import React from "react";
import BookShow from './BookShow'
import { useContext } from "react";
import BooksContext from '../context/books'


const BookList = () =>{  
  const {books} = useContext(BooksContext)
  const BookCollection = books.map((book)=>{
     return <BookShow book={book} key={book.id}/>
  })
  
    return(
      <div className="app">        
        <h3>I am a BookList comp</h3>
        <h4>Test Provide button</h4>        
        <div className="book-list" >
          {BookCollection}
        </div>

      </div>      
    )
}

export default BookList;
