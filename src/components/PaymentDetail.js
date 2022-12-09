const PaymentInfo = ({extra,total})=> { 
      
       
    return (
      <div>        
        <h4>Payment info</h4>
        <h3>Your bill</h3>
        <h3>Extra: {extra}</h3>
        <h2>Total: {total}</h2>
      </div>
    )
  }
  export default PaymentInfo;