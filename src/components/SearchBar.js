import './SearchBar.css'
import { useState } from 'react';

const SearchBar = ({handleSubmit})=> {  
  const [term,setTerm] = useState(""); 
  
  const getTerm = (e)=>{    
    // idea: use event-handle way to communitate with App ans SearchBar    // console.log(myStr.replace(/[^a-z0-9']/g, "6"))    
    setTerm(e.target.value.replace([/a-z/],'')) // does not work
  }
  const searchHandleSubmit = (e)=>{
    e.preventDefault();
    // to APP.js comp
    handleSubmit(term)
  }        
  return (
  <div className="search-bar">
    <form action="#" onSubmit={searchHandleSubmit}  className="form">
        <label>Enter search </label>
        <input type="text" 
        className='search-bar' value={term} onChange={getTerm}/>   
        <p>{term.length<3 && 'Term should be longer than 3 chars'}</p>     
        {/* will work even without button type "submit" */}
    </form>
  </div>
  )   
}
export default SearchBar;
