const doSortDown =(arr)=>{
    return arr.sort(
      function(a,b){
        if(parseInt(a.price)>parseInt(b.price)){
          return 1
        }else if(parseInt(a.price)<parseInt(b.price)){
          return -1
        }else{
          return 0
        }
      }
    )
    // return arr
  }
const doSortUp =(arr)=>{

    return arr.sort(
      function(a,b){
        if(parseInt(a.price)<parseInt(b.price)){
          return 1
        }else if(parseInt(a.price)>parseInt(b.price)){
          return -1
        }else{
          return 0
        }
      }
    )
    // console.log("arr is ",arr)
    // return arr
  }  

export {doSortDown,doSortUp}  