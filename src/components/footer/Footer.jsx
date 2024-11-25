import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className="footer">

<div className="footer-content">

<div className="footer-content-left">
    <img src={assets.logo} alt="" />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam perspiciatis iusto fugit ipsum recusandae, cumque dolor quam quidem, facere porro aliquam, eos tenetur asperiores minus numquam! Accusamus vitae distinctio provident?</p>
<div className="footer-social-icon">
    <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
</div>
</div>

<div className="footer-content-center">

</div>

<div className="footer-content-right"></div>

</div>

      
    </div>
  )
}

export default Footer
