import React from 'react'
import { Card } from 'react-bootstrap';
import { useStateContext } from '../../contexts/ContextProvider';
const CartItem = (props) => {

    const {id, name, price, image} = props.data;
    const {addCartItem,removeCartItem , updateCartItemCount, cartItems} = useStateContext();

  return (


    <div className="cartItems">

            <div className="card mt-2">
            <div className='d-flex gap-3 mt-3 card-body'>

                <img src={image} style={{height: 100 }}></img>

                <div className='d-flex flex-column'>
                    <div>{name}</div>
                    <div>${price}</div>

                    <div className="input-group input-group-sm mt-3">
                        <button className="btn btn-primary btn-sm" onClick={() => addCartItem(id)}>+</button>
                        <input type="text" className="form-control" style={{ width:"5vw" }} value={cartItems[id]} onChange={(ev) => updateCartItemCount(Number(ev.target.value), id)} />
                        <button className="btn btn-primary btn-sm" onClick={() => removeCartItem(id)}>-</button>
                    </div>
                </div>
                
            </div >
            </div>
    </div>




  )
}

export default CartItem
