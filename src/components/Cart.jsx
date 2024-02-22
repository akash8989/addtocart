import React, { useEffect, useState } from 'react'
import "./style.css"

const Cart = ({cartData}) => {

    const [cart, setCart]=useState(cartData)

    useEffect(()=>{
        setCart(cartData)
    }, [cartData])

    const delItem=(
        key
    )=>{
      const  updateCart= [...cart]
      updateCart.splice(key, 1)
      localStorage.setItem("cart", JSON.stringify(updateCart))
      setCart(updateCart)
    }

    const calculatedTotal=()=>{
        return cart.reduce((total, item)=> total + item.price, 0)
    }
  return (
  <>
<div className="cart-section">
    <h1>Your List</h1>
    {
        cart.map((item, index)=>(
         <div key={index} className='cart_item'>
            <span>{item.title}</span>
            <span>{item.price}</span>
            <span>
                <button onClick={()=>delItem(index)}>remove</button>
            </span>

            </div>
        ))
    }
    <p className='total_price'>Total Price : {calculatedTotal()}</p>
</div>


  </>
  )
}

export default Cart
