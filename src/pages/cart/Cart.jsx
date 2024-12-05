
import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'


const Cart = () => {
const {cartItem,food_list,removeFromCart}=useContext(StoreContext)

  return (
    <div className='cart'>
      
<div className="cart-items">

<div className="cart-items-tittle">
  <p>Items</p>
  <p>Tittle</p>
  <p>Price</p>
  <p>Quantity</p>
  <p>Total</p>
  <p>Remove</p>
</div>

<br></br>
<hr></hr>

{food_list.map((item,index)=>{
  //iska matlv h cartItem obj m jo 1:"" value agar 0 sa badi h to uska name print kar do
if(cartItem[item._id]>0)
{
  return (
    <>
    <div className="cart-items-tittle cart-items-item">
      <img src={item.image} alt="" />
      <p>{item.name}</p>
      <p>{item.price}</p>
      <p>{cartItem[item._id]}</p>
      <p>{item.price*cartItem[item._id]}</p>
      <p className='cross'>X</p>
    </div>
    <hr />
    </>
  )
}

})}

</div>

    </div>
  )
}

export default Cart
