const logic = (tip)=>{
    // TODO: why can't I use here a default (tip=15)?
    if(!tip){
        tip=15
    }    
    return {
        calcExtra(bill){            
            return parseInt(bill)*parseInt(tip)/100
        },
        calcTotal(bill){           
            return parseInt(bill) + this.calcExtra(bill)           
            
        }
    }
}

// const step1 = logic(bill,tip)
// console.log(step1())

export {logic}