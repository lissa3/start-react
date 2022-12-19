import axios from "axios";
import { createContext,useState } from "react";

const BooksContext = createContext();

// custom react component:prop == children
function Provider({children}){
    const [books,setBooks] = useState([]);     
    const baseURL=  "http://127.0.0.1:8000/zork/notes/";
    const fetchBooks =  async ()=>{                     
        await axios.get(baseURL)
        .then(
        (resp)=>{
            if(resp.status === 200){
            setBooks(resp.data);                
            }
        }
        ).catch(err=>console.log("error: ",err))      
    } 
    const createBook = async (title)=>{      
        await axios.post(baseURL,{title:title})
          .then((resp)=>{      
          if(resp.status === 201){
            const data = resp.data;
          setBooks([...books,data])
          }      
        }).catch(err=>console.log("and ????}",err))
        
        
      };
    const  deleteBookById = async (id)=>{
        let url = `${baseURL}${id}/`;
        await axios.delete(url)
        .then((resp)=>{
          if (resp.status===204){        
            const updatedBooks = books.filter((book)=>{
              return book.id !== id
            })
            setBooks(updatedBooks)
                  
          }
        })
        .catch(err=>console.log("fauled to edit",err))
          
      };
    const editBookById =  async (id,newTitle)=>{
        let url = `${baseURL}${id}/`
        await axios.put(url,{title:newTitle})
        .then((resp)=>{
          if (resp.status===200){
            const data = resp.data;
            const updatedBooks = books.map((book)=>{
              if(book.id===id){       
                // NOT as book.title
                return {...book,...data}
              }
              return book
            })
            setBooks(updatedBooks);        
          }
        })
        .catch(err=>console.log("fauled to edit",err));  
        
      };   
    const booksToShare = {
          books,
          fetchBooks,
          deleteBookById,
          editBookById,
          createBook
      } 
      return <BooksContext.Provider value={booksToShare}>
                    {children}
              </BooksContext.Provider>
    
    }
    export {Provider};
    export default  BooksContext;
        
      

     

