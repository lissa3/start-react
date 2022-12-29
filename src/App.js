import React from 'react';
import Accordion from './components/Accordion';



function App() {
  const items = [{id:1,content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident saepe laboriosam tempore reprehenderit adipisci numquam voluptatum? Sapiente corporis, non quae quas ab inventore debitis, labore cumque impedit ea laboriosam distinctio.",label:"first label"},{id:2,label:"second label",content:"nostrum et natus repellendus perferendis quos, accusamus dolorum qui. Perferendis magnam cum debitis. Vel, nesciunt non!"}]    
  return (
    <div className="container mx-auto">
      <Accordion items = {items}/>
    </div>
  );
}

export default App;
