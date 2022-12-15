import { useState } from "react";


const Input = ({onCreate})=> {
    const [title,setTitle] = useState("")

        const handleSubmit = (e)=>{
        e.preventDefault()        
        onCreate(title)
        setTitle("")
    }
const readTitle = (e)=>{
        setTitle(e.target.value)
    }

    return (
      <div>
       <form onSubmit={handleSubmit}>
        <label htmlFor="">Add a book</label>
        <input value={title} type="text" onChange={readTitle}/>
        <button>Submit</button>
       </form>
      </div>
    );
  }
  

  export default Input;