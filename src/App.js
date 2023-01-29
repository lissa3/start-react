// import React, { useState,useParams } from "react";
import { SideBar } from "./components/SideBar";
import {Routes,Route} from "react-router-dom"
import {Posts} from "./pages/Posts"
import {Post} from "./pages/Post"
import {NewPost} from "./pages/NewPost"
import {PageNotFound} from "./pages/PageNotFound"
import {Home} from "./pages/Home"
import {About} from "./pages/About"

function App() {  
  return(            
     <div className="flex  justify-around">    
        <SideBar />  
          
        <Routes>
          <Route path="/">
              <Route index element={<Home/>} />
              <Route path="about" element={<About/>} />
              <Route path="posts">
                <Route index  element={<Posts/>}/>
                <Route  path=":id" element={<Post/>} />
                <Route path="new-post" element={<NewPost/>} />              
              </Route>              
          </Route>
          <Route path="*"  element={<PageNotFound/>}  />     
        </Routes>
      </div>  
      )
    }
    

export default App;
