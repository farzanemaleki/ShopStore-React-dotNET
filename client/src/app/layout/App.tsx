import React, { useEffect, useState } from 'react';
import './styles.css';
import { Product } from '../models/Product';
import Catalog from '../../features/catalog/Catalog';
function App() {
  const[products, setProducts] = useState<Product[]>([]);
  useEffect(() =>{
    fetch("https://localhost:7289/api/Products")
    .then(response => response.json())
    .then(data => setProducts(data))
  },[]);
  const AddProduct = () =>{
    setProducts(prevState => [...prevState, {
      id: prevState.length + 101,
      name: `p${prevState.length+1}`, 
      description: "some desscription",
      pictureUlr: "some image URL",
      price: (prevState.length+1)*100,
      brand: "new brand",
    }]);
  }
  return (
    <div>
      <h1>Re-Store</h1>
      <Catalog  products={products} AddProduct={AddProduct}/>
    </div>
  );
}

export default App;
