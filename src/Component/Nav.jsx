import React, { useState , useEffect } from 'react'
import Logo from "../Asset/Logos/Addis-Library-Logo.png"
import {HiMenuAlt1} from 'react-icons/hi'
import {IoClose} from 'react-icons/io5'

import "./style.css"
const Nav = () => {
  const [nav,setnav] = useState(null)
  const [icon1,setIcon1] = useState('show')
  const [icon2,setIcon2] = useState(null)
  const [addBg,setAddBg] =useState(false)

  const navOpen = ()=> {
    setnav("mobile-active")
    setIcon1(null)
    setIcon2('show')
  }
  const navClose = ()=> {
    setnav(null)
    setIcon1('show')
    setIcon2(null)
  }
  
  const addBackground = ()=>{

    if(window.scrollY >= 100){
      setAddBg(true)
    }else{
      setAddBg(false)
    }
    
   
    
}
    window.addEventListener('scroll',addBackground)
 
    useEffect(()=>{
      const handler =()=>{
        navClose()
    }
    if(setIcon2){
      document.addEventListener("mousedown",handler)
    }
    },[setIcon2])


  return (
    <nav className={addBg?'active':null}>
        <div className="container nav-container">
        <div className="img-container">
           <a href="#home"> <img src={Logo} alt="Addis-Library-Logo" /> </a>
        </div>
        <ul className={`${nav} desktop`} >
            <li className='nav-link-top'><a className='nav-link' href="#home">Home</a></li>
            <li><a className='nav-link' href="#howitwork">How It Work</a></li>
            <li><a className='nav-link' href="#howtouse">How To Use</a></li>
            <li><a className='nav-link' href="#ourteam">Our Team</a></li>
            <li><a className='nav-link mobile' href="#ourteam">Contact Us</a></li>
            <li className='btn desktop-contact'><a href="#contactus">Contact Us</a></li>
        </ul>
        <ul className="mobile">
          <li className={ `${icon1} nav-btn` }  onClick={()=>navOpen()}><HiMenuAlt1/></li>
          <li className={`${icon2} nav-btn` } onClick={()=>navClose()}> <IoClose/> </li>
        </ul>
        </div>
    </nav>
  )
}

export default Nav