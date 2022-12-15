import React from 'react';
import {useState} from 'react'
import Input from './components/Input';
import Edit from './components/Edit';



function App() {
  const [books, setBooks] = useState([
      { id: 10, title: 'Harry Potter' }, // Don't change
      { id: 17, title: 'Hunger Games' },
      { id: 54, title: 'Dark Tower' }
  ]);
  
//   

  const displayBooks = books.map((book,idx)=>{
      return (
      <li key={idx}>{book.title},{book.id}</li>)
    })     

  const handleCreate = (title)=>{
    // const updateBooks = [
    //   ...books,{id:Math.round(Math.random()*1000),title}
    // ]
    // setBooks(updateBooks)
    setBooks([...books,{id:Math.round(Math.random()*1000),title}])
  }  
  
  const updateBookById = (id,title)=>{
    console.log("Collecting form data to change",id,title)
    const updatedBooks = books.map((book)=>{
      if(book.id === id){
        // NOT like this: book.title = title
        console.log("yes")
        return {...book,title}

      }
      return book
    })
    setBooks(updatedBooks)
  }
  
  return (
    <div>
      <div>Create a new book</div>
      <div>
        <Input onCreate = {handleCreate} />
      </div>
      <p>List of books</p>
      <ol>
        {displayBooks}
      </ol>
      <br />
      <br />
      <hr></hr>
      <div>
        Lets edit:
        <Edit books={books} onSubmit={updateBookById} />
      </div>
    </div>
  );
}


export default App;