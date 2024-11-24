import React, { useState } from 'react'
import "./Fooditem.css"
import { assets } from '../../assets/assets'

const FoodItem = ({id,name,description,price,image}) => {

const [itemCount,setitemCount]=useState(0);

  return (
    <div className='food-item'>
      
<div className="food-item-img-container">
    <img className='food-item-image'  src={image} alt="" />
    {
        !itemCount //thats mean if itemcounter ==0
        ?<img className='add' onClick={(prev)=>setitemCount(prev=>+1)} src={assets.add_icon_white} alt></img>
        :<div className='food-item-counter'>   
        <img onClick={()=>setitemCount(prev=>prev-1)} src={assets.remove_icon_red}></img>
        <p>{itemCount}</p>
        <img onClick={()=>setitemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
                 </div>
    }
</div>

<div className="food-item-info">
<div className="food-item-name-rating">
    <p>{name}</p>
    <img src={assets.rating_starts} alt="" />
</div>
<p className="food-item-description">{description}</p>
<p className="food-item-price">${price}</p>

</div>

    </div>
  )
}

export default FoodItem
