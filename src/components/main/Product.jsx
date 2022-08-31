import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProductDetail from '../../pages/ProductDetail/ProductDetail';

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
    <>
      {loading ? <strong>Loading...</strong> : 
        <ProductUl>
            {Array.from(products).map((product) => 
              <ProductList key={product.product_id}>
                <ProductImg src={product.image}/>
                <ProductName>{product.product_name}</ProductName>
                <ProductInfo>{product.product_info}</ProductInfo>
                <ProductPrice>{product.price} 원</ProductPrice>
              </ProductList>)}
        </ProductUl>}
    </>
  )
}

const ProductUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 70px;
  padding: 80px;
`
const ProductList = styled.li`
  display: flex;
  flex-direction: column;
`
const ProductImg = styled.img`
  width : 380px;
  height : 380px;
  border : 1px solid #c4c4c4;
  border-radius: 10px;
  margin-bottom: 16px;
`

const ProductName = styled.strong`
  font-size: 16px;
  color: #767676;
  margin-bottom: 10px;
`

const ProductInfo = styled.p`
  font-size: 18px;
  color: #000;
  margin-bottom: 10px;
`

const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #000;
`