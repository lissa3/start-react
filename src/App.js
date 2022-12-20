import React from "react";
import { useEffect,useContext } from "react";
import BooksContext from './context/books';
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";


function App() {   
  const {fetchBooks} = useContext(BooksContext);
  
  useEffect(()=>{
    // still variable: warning ESLint
    fetchBooks()
  },[fetchBooks]);  

  return(
      <div className="app">   
        <h1>Reading list</h1>
        <div><BookList/></div>     
        <div><BookCreate/></div>          
      </div>      
    )
}

export default App;
