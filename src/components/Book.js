// import { useState } from "react"

const Book = ({book,collectPriceVal})=>{
    // const [price,setPrice] = useState(0);
    const notePrice = ()=>{
        collectPriceVal(book.price);
    }
    return (
        <div className="flex justify-between mt-4 mb-4 p-4 border border-green-700 rounded" onClick={notePrice}>
        <div>{book.id} {book.name}</div>        
        <div>{book.price}</div>
        </div>
    )
}


export default Book