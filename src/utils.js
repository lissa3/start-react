const doSortDown =(arr)=>{
    arr.sort(
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
  }
const doSortUp =(arr)=>{
    arr.sort(
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
  }  

export {doSortDown,doSortUp}  