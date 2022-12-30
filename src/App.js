import React from 'react';
import Accordion from './components/Accordion';



function App() {
  const items = [{id:1,content:"Lorem ipsum dolor sit",label:"first label"},{id:2,label:"second label",content:"nostrum et natus "}]    
  return (
    <div className="container mx-auto">
      <Accordion items = {items}/>
    </div>
  );
}

export default App;
