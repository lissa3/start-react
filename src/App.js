import React from "react";
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";


function App() {        
  const [books,setBooks] = useState([])
  const createBook = (title,id)=>{   
    // ...books == copy-paste old value in a new [] in RAM amd add a new object
    // a new ref появилась, к указывает на новый объект
    setBooks([...books,{id,title}])
    
  }
  const deleteBookById = (id)=>{
      const updatedBooks = books.filter((book)=>{
        return book.id !== id
      })
      setBooks(updatedBooks)
  }
  const editBookById = (id,newTitle)=>{
    
    const updatedBooks = books.map((book)=>{
      if(book.id===id){       
        // NOT as book.title
        return {...book,title:newTitle}
      }
      return book
    })
    console.log("updated: ",updatedBooks)
    setBooks(updatedBooks)
  }

    return(
      <div className="app">   
      <h1>Reading list</h1>
      <div><BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/></div>     
      <div><BookCreate onCreate={createBook}/></div>     
        
      </div>      
    )
}

export default App;
