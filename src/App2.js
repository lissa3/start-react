import  { useEffect, useState } from "react";

function App2(){
    /*
    use-case: drop-down menu or modal 
    set event-listener on a doc body
    как предотвратить кроликов == event-handels (listener) formed during each
    component re-render
    Re: create "cleanUp func" and return it
    why? в этом hook мы можем прописать функ, к иначк не вписать в jsx

    */
    const [counter,setCounter] =useState(0);

    useEffect(()=>{
        const listener=()=>{
            console.log(counter)
        };
        document.body.addEventListener("click",listener);

        const cleanUp = ()=>{
            document.body.removeEventListener("click",listener)
        }
        return cleanUp
        // или можно без создания отдельно функции, а сразу писать
        // return document.body.remove ....
    },[counter])



    return (
        <>
        <button onClick={()=>{setCounter(counter +1)}}>Increment</button>
        
        </>
    )

}