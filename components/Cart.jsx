import React, { useRef } from 'react'
import Link from 'next/Link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import  TiDeleteOutline from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext} from '../context/StateContext';
import { url } from '../lib/client';



const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart } = useStateContext();
  
  return (
   
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button></button>

      </div>
      Cart
      </div>
  )
}

export default Cart