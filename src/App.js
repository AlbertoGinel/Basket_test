import React, { useState, useEffect } from 'react';
import PRODUCTS from './data/products.json';
import BasketProduct from './components/BasketProduct';


function App() {

  const [products, setProducts] = useState(PRODUCTS);
  const [total, setTotal] = useState(0);

  const updateTotal = () => {
    setTotal(products.reduce((pre,curr)=>{ return pre + ((parseFloat(curr.price) * parseFloat(curr.quantity))) },0).toFixed(2));
  }

  const setQuantityProduct = (name, newQuantity) => {

    const prod = [...products];
    const index = prod.findIndex(p => p.name === name);
    if(index !== -1){
      prod[index].quantity = newQuantity;
    }
    setProducts(prod);
  }

  const eraseProduct = (name) => {

    setProducts(products.filter((p)=>{ return p.name !== name}));
  }

  const clear = () => {
    setProducts([]);
  }

  useEffect(() => { 
    updateTotal();
  }, [products]);


  return (
    
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#ececea]">   

      <div className='grid divide-y-2 divide-dashed divide-slate-400'>
        {products.map((p,index)=> <BasketProduct key={index}  name={p.name} quantity={p.quantity} price={p.price} setQuantityProduct={setQuantityProduct} eraseProduct={eraseProduct} clear={clear}/>)}
      </div>

      <div className='grid grid-col-6 grid-flow-col p-3 px-7 font-black font-poppins items-center bg-[#e1e2e0]'>

        <p   className='col-span-5 text-xl text-slate-700'>${total}</p>

        <button className='col-span-1 bg-transparent hover:bg-slate-200 text-slate-600 font-bold py-2 px-2 rounded' onClick={() => clear()} type="button">Clear</button> 

        <button className='col-span-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="button">Check Out</button> 


      </div>

    </div>

  );
}

export default App;


/* 

      <div class="grid grid-col-6 grid-flow-col px-3  font-black font-poppins items-center">
        <p      class="col-span-5 text-xl text-slate-700 ">$3.00</p>
        <button class="col-span-1 bg-transparent hover:bg-blue-700 text-slate-600 font-bold py-2 px-2 rounded" type="button">Clear</button>
        <button class="col-span-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded type="button">Check Out</button>
      </div>
    </div>

    </div>


*/