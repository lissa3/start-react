import {useState} from 'react'

function EditForm({ onSubmit, books }) {
  const first = books[0]
  const [id, setId] = useState(first ? first.id : '');
  const [title, setTitle] = useState(first ? first.title : '');
  
  const getTitle = (e)=>{
    setTitle(e.target.value)
  }
  const handleChange = (e) => {
    const id = parseInt(e.target.value);
    console.log("line 13 ID is",id)
    setId(id);
    const book = books.find(book => book.id === id);
    if (book) {
        setTitle(book.title);  
    }
  };
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(id, title);
  };
  
  return <form onSubmit={handleSubmit}>
    <div>
        <label>Id of color to Change</label>
        <select value={id} onChange={handleChange} >
         {books.map(book => <option key={book.id} value={book.id}>{book.id}</option>)}
        </select>
    </div>
    <div>
        <label>New Text</label>
        <input value={title} onChange={getTitle} />
        
    </div>
    <button>Change</button>
  </form>
}

export { EditForm }