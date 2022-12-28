import { useState } from "react";

const SelectMenu = ({onChoice,books})=>{
    

    // console.log("line 6:",books)
    const booksCats = ()=>{
        let categs = []
        books.forEach((book)=>{            
            if(!categs.includes(book.category)){                
                categs.push(book.category)
            }
        })       
        return categs
    } 
    // const [cat,setCateg] = useState("");   
    const handleChange = (e)=>{          
        // setCateg(e.target.value);
        console.log("cat is ",e.target.value)
        onChoice(e.target.value)  
               
    }    
      
    
  return (
  <div>   
    
        <label htmlFor="">Your choice</label>
        <select  onChange={handleChange}>            
            {booksCats().map((categ,idx) => {
            return <option key={idx} value={categ}>{categ}</option>})
            }
        </select>
     
  </div>
  )
}


export default SelectMenu;