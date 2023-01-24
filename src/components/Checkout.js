import React from 'react'

export default function CheckoutPage() {
  return (
    <div>
      <div className="container p-3">
  <div className="row">
    <div className="col-4 card m-3">
        <h2 className='p-3 text-center'>Fare Summary</h2><hr/>
        <p className='p-1 m-2'>Base Fare <span>Rs.</span></p><hr/>
        <p className='p-1 m-2'>Fee and Surcharges <span>Rs.</span></p><hr/>
        <p className='p-1 m-2'>Total Amount <span>Rs.</span></p><hr/>
    </div>
    <div className="col-6 card m-3">
        <h2 className='p-3 text-center'>Payment Method</h2><hr/>
        <input type='text' placeholder='Name on Card' className='p-1 m-1'/><br/>
        <input type='number' placeholder='Card Number' className='p-1 m-1'/><br/>
        <input type='text' placeholder='Expiry Date' className='p-1 m-1'/><br/>
        <input type='number' placeholder='CVV' className='p-1 m-1'/><br/>
        <button type='button' className='btn btn-outline-secondary w-25'>Pay</button>
    </div>
  </div>
</div>
    </div>
  )
}
