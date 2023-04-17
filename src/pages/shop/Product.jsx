import React from 'react'
import { Card, Button, Row, Col, Container, Badge } from 'react-bootstrap';
import { useStateContext } from '../../contexts/ContextProvider';

const Product = (props) => {
  const {id, name, image, price} = props.data;
 
  const {cartItems, addCartItem} = useStateContext();

  const cartItemAmount = cartItems[id];
  
  
  return (
   
            <Card style={{ width: '18rem', margin:'auto' , paddingTop: 20, marginTop: 20}}>
              <Card.Img variant="top" src={image} style={{ width: 150, margin: 'auto' }} />
              <Card.Body>
                <Card.Subtitle className='text-center mt-3 border rounded p-2'>{name} <Badge style={{ fontSize: 17 }}>${price}</Badge></Card.Subtitle>
                <Button variant="primary" className='w-100 mt-3' onClick={() => addCartItem(id)}>Add To Cart {cartItemAmount > 0 && <Badge className='bg-light text-primary'>{cartItemAmount}</Badge>}</Button>
              </Card.Body>
            </Card>
          
  )
}

export default Product
