import React from 'react'
import '../../App.css'
const Navbar = () => {
  return (
    <div className='navSection'>
      <div className='title'>
        <h2>BigBag</h2>
      </div>
      <div className='search'>
        <input type='text' placeholder='Search...' />
      </div>
      <div className='user'>
        <div className='user-detail'>
          signIn/signUp
        </div>
        <div className='cart'>
          cart
        </div>
      </div>
    </div>
  )
}

export default Navbar
