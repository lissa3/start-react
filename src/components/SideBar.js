import * as React from 'react';
import Panel from './Panel';

export function SideBar({onChange,value}) {
    const comps = ["Accordion","DropDown","Button","Slider"];    
    const itemFabric = comps.map((comp,idx)=>{
        return (
          <Panel onClick={()=>onChange(comp)} value={value}  key= {idx} className="cursor-pointer">
          {comp}
         </Panel>           
        )
    })

  return (
    <div>
        <h4>SideBar coming</h4>
        {itemFabric}
      
    </div>
  );
};