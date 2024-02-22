import React, { useEffect, useState } from 'react'
import Data from './Data'
import Cart from './Cart'
import "./style.css"

const Myshop = () => {

    const [myProducts, setMyProducts]= useState([])

    useEffect(()=>{
        const existingProd= JSON.parse(localStorage.getItem("cart")) || []
        setMyProducts(existingProd)
    },[])

    const addProduct=(ele)=>{
     const newProducts={
        ...ele, count: 1
     }
     setMyProducts((preProd)=> [...preProd, newProducts])
     localStorage.setItem("cart", JSON.stringify([...myProducts, newProducts]))
     
    }
  return (
  <>
  <section className="shop">
    <div className="container">
        <h1>This is my shop</h1>
        <div className="shop">
            {
                Data.map((ele, key)=>(
                    <div className="item" key={key}>
                        <h2>{ele.title}</h2>
                        <p>{ele.desc}</p>
                        <span>Price: ${ele.price}</span>
                        <button onClick={()=>addProduct(ele)}>Add to cart</button>
                    </div>
                ))
            }
        </div>
    </div>
  </section>
  {
    myProducts.length > 0 && <Cart cartData={myProducts}/>
  }
  </>
  )
}

export default Myshop
