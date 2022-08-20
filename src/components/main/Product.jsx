import React from 'react';
import { useState, useEffect } from 'react';

const url = 'https://openmarket.weniv.co.kr/';

export default function Product() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const getProducts = async() => {
    const response = await fetch(url + 'products/');
    const json = await response.json();
    setProducts(json.results);
    setLoading(false);
  }
  useEffect(() => {
    getProducts();
  }, [])
  console.log('products', products);

  return (
    <div>
      {loading ? <strong>Loading...</strong> : 
        <ul>
          {Array.from(products).map((product) => 
          <li key={product.product_id}>
            <img src={product.image}/>
            <strong>{product.product_name}</strong>
            <p>{product.product_info}</p>
            <p>{product.price}</p>
          </li>)}
        </ul>}
    </div>
  )
}
