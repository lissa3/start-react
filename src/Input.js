import React from 'react';
// Udemy's code editor is a little weird... 
// We do *not* need an 'import {useState}' line

function Input({ onSubmit }) {
  const [text, setText] = React.useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
    setText('');
  };
  
  return <form onSubmit={handleSubmit}>
    <div>
        <label>Title</label>
        <input value={text} onChange={e => setText(e.target.value)} />
    </div>
    <button>Submit</button>
  </form>
}

export { Input };
