import '../App.css'
import { useState } from 'react';

const SearchBar = ({handleSubmit})=> {  
  const [term,setTerm] = useState(""); 
  
  const getTerm = (e)=>{
    // let op: thx value={term} <-> update value in App(?)
    // idea behind: use event-handle way to communitate with App ans SearchBar
    setTerm(e.target.value)
  }
  const searchHandleSubmit = (e)=>{
    e.preventDefault();
    // pass term as a param to App method
    handleSubmit(term)
  }
        
  return (
  <div className="input-form">
    <form action="#" onSubmit={searchHandleSubmit}  className="form">
        <label>Enter search </label>
        <input type="text" value={term} onChange={getTerm}/>        
        <button  type="submit" className="but">Search</button>
    </form>
  </div>
  )
   
}

export default SearchBar;
