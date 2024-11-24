import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Cart from './pages/cart/Cart.jsx'
import Placeorder from "./pages/placeorder/Placeorder.jsx"

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/cart' element={<Cart/>}></Route>
<Route path='/placeholder' element={<Placeorder/>}></Route>
      </Routes>

    </div>
  )

}
export default App
