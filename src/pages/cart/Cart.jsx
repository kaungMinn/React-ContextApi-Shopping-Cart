import React from 'react'
import {useStateContext} from '../../contexts/ContextProvider';
import { Badge, Container } from 'react-bootstrap';
import CartItem from './CartItem';
import './cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {

  const {products, getTotalAmount, cartItems} = useStateContext();
  const totalAmount = getTotalAmount();
  const styles = {
    fontFamily: 'Lobster_Two',
    fontWeight: 'normal',
    fontSize: '30px'
    
  }

  return (
    <div>
      <div className='mt-3 bg-light rounded p-2' >

       <h1 className='bg-primary w-100 text-center h5 text-white rounded p-2'> Your Cart Items</h1>
      </div>

      <div>
        {products.map((product) => {
          if(cartItems[product.id] !== 0){
            
            return <CartItem data={product} />
           
          }
        })}
      </div>

      <Container>
      <div className=' text-center'>

          <h1 className='bg-primary w-75  h6 text-white mx-auto rounded p-2'>Subtotal Amount- <Badge className='bg-white text-dark'>${totalAmount}</Badge> </h1>
      </div>

      <div class="d-flex justify-content-center mt-2 mb-3">
          <div class="btn-group btn-group-justified " role="group" aria-label="Basic example">
            <Link to='/' class="btn btn-primary btn-sm">Continue Shopping</Link>
            <Link  class="btn btn-outline-primary btn-sm">CheckOut</Link>
      
          </div>
      </div>
      </Container>
    </div>


  )
}

export default Cart
