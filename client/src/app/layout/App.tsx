import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

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
      price: (prevState.length+1)*100,
      brand: "new brand",
      pictureUlr: `https://picsum.photos/${(prevState.length+1)*100}`,
    }]);
  }
  return (
    <div>
      <Typography variant="h2">
        Shop Store
      </Typography>
      <Catalog  products={products} AddProduct={AddProduct}/>
    </div>
  );
}

export default App;
