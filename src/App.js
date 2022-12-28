import React from "react";
import { useState,useEffect } from "react";
import booksList from "./bron.json"
import axios from "axios"
import Book from "./components/Book";
import SelectMenu from "./components/SelectBook";
import { ImArrowUp2 } from "react-icons/im";
import { ImArrowDown2 } from "react-icons/im";
import {doSortUp,doSortDown} from "./utils.js"


function App() {   
  const [books,setBooks] = useState([]); 
  const [down,setDown] = useState(true);
  const [total,setTotal] =useState(0)
// initial books collection
  useEffect(()=>{
    setBooks(booksList)
  },[])
  // async function getData(){
  //   // await axios.get("http://localhost:3000/bron.json")
  //   await axios.get("./src/bron.json")
  //   .then((resp)=>{
  //     setBooks(resp)
  //   })
  //   .catch(err=>console.log(err))
  // }
  
  
  const takeAction = (categ)=>{    
    if(categ){
    const updatedBooks = books.filter((book)=>{
      return book.category === categ
    })
    setBooks(updatedBooks)
  }
  }
  // sort by price (default low on top (down == true))  
  const toggleSortPrice = ()=>{
    setDown(!down);    
    if(down) {      
      doSortDown(books);      
    }else{     
      doSortUp(books);      
    }

  }
  let direction = <div className="ml-3"><ImArrowDown2/></div>
  if(!down){
    direction = <div className="ml-3"><ImArrowUp2/></div>
  }
  // collect books -> price on click
  const handlePrice = (price)=>{
    setTotal(price);
    console.log("total is",total)
  }  
  const bookCollection  = books.map((book)=>{        
    return <Book book={book} key={book.id} collectPriceVal={handlePrice}/>
  })   
 
    return(
      <div className="container mx-auto bg-slate-50">        
        <div className="flex flex-row mt-6">
          <div onClick={toggleSortPrice}
          className="basis-1/2 h-14 text-2xl flex flex-row mt-6">
            Price 
            {direction}
          </div>    
          <div className="basis-1/2 h-14">
            <SelectMenu books={books} onChoice = {takeAction} />

          </div>
        </div>
       
        <div className=""> 
          {bookCollection}         
        </div> 
        <div className="mt-6">
          <h2>Total count: </h2>: 
        </div>
        <div className="mt-6">
          <h3>Total price: {total} </h3>: 
          
        </div>
      </div>     
    )
}

export default App;
