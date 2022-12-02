import '../../App.css'


const Field = ({type,setValue})=> { 
      
  return (
    <div> 
        <label>Enter {type} </label>
        <input type={type}  onChange= {(e)=>setValue(e.target.value)}  />       
    
  </div>
  )
   
}

export default Field;