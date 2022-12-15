import React from 'react';
import {useState} from 'react'

function Input({ onSubmit }) {
  const [title, setTitle] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(title);
    setTitle('');
  };
  const readTitle = (e)=>{
    setTitle(e.target.value)
  }
  
  return <form onSubmit={handleSubmit}>
    <div>
        <label>Title</label>
        <input value={title} onChange={readTitle} />
        
    </div>
    <button>Submit</button>
  </form>
}

export { Input };
