import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Cart from './pages/cart/Cart.jsx'
import Placeorder from "./pages/placeorder/Placeorder.jsx"
import Footer from './components/footer/Footer.jsx'
import LoginPopup from './components/loginpopup/LoginPopup.jsx'

const App = () => {
//state variable for login page
  const [showLogin,setShowLogin]=useState(false)

  return (
    //if  showlogin true login page open
    <>
    {
      showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>
    }
     <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/cart' element={<Cart/>}></Route>
<Route path='/placeholder' element={<Placeorder/>}></Route>
      </Routes>


    </div>

<Footer/>

    </>
   
    
  )

}
export default App
