import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";


function App() {        
  const [books,setBooks] = useState([])
  const baseURL = "http://127.0.0.1:8000/zork/notes/";
  
  const fetchBooks = async ()=>{
    await axios.get(baseURL).then(
      (resp)=>{
        if(resp.status === 200){
          setBooks(resp.data);
          
        }
      }
    ).catch(err=>console.log("error: ",err))
  }
  // args in useEffect: 
// [] by first render, nothing each time re-render,[countVar] by change of countVar
  useEffect(()=>{
    fetchBooks()
  },[])
  
  const createBook = async (title)=>{   
    console.log("title is ",title)
    // const data = JSON.stringify({title:title})
    await axios.post(baseURL,{title:title})
      .then((resp)=>{
      console.log("status is",resp.status)
      if(resp.status === 201){
        const data = resp.data;
      setBooks([...books,data])
      }      
    }).catch(err=>console.log("and ????}",err))
    
    
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
      <div><BookList  books={books} onDelete={deleteBookById} onEdit={editBookById}/></div>     
      <div><BookCreate onCreate={createBook}/></div>     
        
      </div>      
    )
}

export default App;
