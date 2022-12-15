import React from 'react';
import { Input } from './Input';
import { EditForm } from './EditForm';
import {useState} from 'react';


function App() {
  const [books, setBooks] = useState([
      { id: 10, title: 'Harry Potter' }, // Don't change
      { id: 17, title: 'Hunger Games' },
      { id: 54, title: 'Dark Tower' }
  ]);
  
  const updateBookById = (id, title) => {    
    const updatedBooks = books.map((book)=>{
        if (book.id === id){
             return {...book,title}
        }
        return book
    })
    setBooks(updatedBooks)
  }
  
  const addBook = (title) => {
    const book = { title: title, id: ~~(Math.random() * 1000) };
    setBooks([...books, book])
  };
  
  const renderedBooks = books.map((book, i) => {
      return <li key={book.id}>Title: {book.title}, Id: {book.id}</li>
  });
  
  return (
    <div>
      <Input onSubmit={addBook} />
      <ol>
        {renderedBooks}
      </ol>
      <hr />
      <EditForm books={books} onSubmit={updateBookById}  />
    </div>
  );
}


export default App;