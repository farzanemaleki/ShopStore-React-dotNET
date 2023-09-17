import React, { useEffect, useState } from 'react';
import './App.css';
function App() {
  const[products, setProducts] = useState([
    {name:"p1", price:100},
    {name:"p2", price:200}
  ]);
  useEffect(() =>{
    fetch("https://localhost:7289/api/Products")
    .then(response => response.json())
    .then(data => setProducts(data))
  },[]);
  const AddProduct = () =>{
    setProducts(prevState => [...prevState, {name: `p${prevState.length+1}`, price: (prevState.length+1)*100 }]);
  }
  return (
    <div>
      <h1>Re-Store</h1>
      <ul>
        {products.map((p,index) => (
          <li key={index}>{p.name} with price ${p.price}</li>
        ))}
      </ul>
      <button onClick={AddProduct}>Add Product</button>
    </div>
  );
}

export default App;
