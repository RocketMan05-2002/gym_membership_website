import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line,RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.png'

const Menu = () =>{
  return(
    <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#diet'>Diet</a></p>
    <p><a href='#exercises'>Exercises</a></p>
    <p><a href='#membership'>Membership Plans</a></p>
    </>
  )
}

const Navbar = () => {

  const [toggleMenu,setToggleMenu] = useState(true);

  return (
    <div className='gym__navbar'>
      <div className='gym__navbar-links'>
        <div className='gym__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gym__navbar-links_container'>
          <Menu />
        </div>
      </div>
      {/* ----------------- */}
      <div className='gym__navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      {/* ----------------- */}
      <div className='gym__navbar-menu'>
        {
          toggleMenu
          ? <RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(false)} />
          : <RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(true)} />
        }
        {
          !toggleMenu && (
            <div className='gym__navbar-menu_container'>
              <div className='gym__navbar-menu_container-links'>
                <Menu />
              </div>
              <div className='gym__navbar-menu_container-links-sign'>
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
