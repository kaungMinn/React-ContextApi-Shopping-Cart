import React from 'react'
import { Link } from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';
import Product from './Product'
import './shop.css'


import { Card, Button, Row, Col, Container, Badge } from 'react-bootstrap';


const Shop = () => {

  const {products, addCartItem, cartItems} = useStateContext();

  const product = products.map((product) => product.id);
  
  
  

  const cartItemAmount = cartItems[product.map(product => product.id)];
 
  
  return (
    
    <Container>
      <div className='products'>

            { products.map(product => <Product key={product.id} data={product}/>)} 
       
      </div>
    </Container>
  )
}

export default Shop
