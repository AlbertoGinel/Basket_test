import React from 'react'



const BasketProduct = (props) => {
  return (

  <div className='body-font font-poppins m-3 grid grid-flow-col grid-cols-5 p-2'>
      
        <div className='col-span-3'>
          {props.name}
        </div>

        <input className='col-span-1 w-14 border-2 border-black' type="number"  min="0" value={props.quantity} onChange={(e) => {props.setQuantityProduct(props.name,e.target.value)}} />

        <div className='place-self-end self-end px-2 text-lg text-[#ff9c62] font-bold'>
          ${props.price}
        </div>

        <button type="button" onClick={() => {props.eraseProduct(props.name)}} class="items-center justify-self-end rounded-md bg-transparent hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>




  </div>)
}

export default BasketProduct

