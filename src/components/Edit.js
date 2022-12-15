import { useState } from "react";

const Edit = ({onSubmit,books})=> {

    const first = books[0] 
    
    const [id,setId] = useState(first ? first.id : '');
    const [title, setTitle] = useState(first ? first.title : '');

    const getTitle = (e)=>{
        setTitle(e.target.value)
    }
    const handleChange = (e)=>{
        const id = parseInt(e.target.value)
        console.log("id of book",id)
        setId(id)       
        const book = books.find(book => book.id === id);
        // const findObj = books.find(item=>item.id===id)
        if(book){
            console.log("book found with id-title",book.id,book.title)
            setTitle(book.title)
        }
}  
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(id,title)
        onSubmit(id,title)
    }
    
    return (
      <div>
       <form onSubmit={handleSubmit}>
        <label htmlFor="">Choose an id</label>
        <select value={id} onChange={handleChange}>
         {books.map(book => <option key={book.id} value={book.id}>{book.id}</option>)}
        </select>

        
        <label htmlFor="">Edit a book</label>        
        <input  value={title} onChange={getTitle}/>
        <button>Edit</button>
       </form>
      </div>
    );
  }
  

  export default Edit;