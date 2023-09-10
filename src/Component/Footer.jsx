import Logo from '../Asset/Logos/ADDIS-LIB-Footer-Logo.png'
import "./style.css"
import {FaInstagram,FaFacebookF,FaTwitter,FaTelegramPlane} from 'react-icons/fa'

const Footer = () => {
  return (
        <footer id='footer'>
        <div className="container footer-container">
                <div className="img-container">
                    <img src={Logo} alt="" />
                </div>
                <ul>
            <li><a className='footer-link' href="#home">Home</a></li>
            <li><a className='footer-link' href="#howitwork">How It Work</a></li>
            <li><a className='footer-link' href="howtouse">How To Use</a></li>
            <li><a className='footer-link' href="#ourteam">Our Team</a></li>
            <li ><a className='footer-link' href="#contactus">Contact Us</a></li>
        </ul>
        <div className="button-container">
                <a href="" className="social-btn social-link"><FaFacebookF/></a>
                <a href="" className="social-btn social-link"><FaTwitter /></a>
                <a href="" className="social-btn social-link"><FaTelegramPlane /></a>
                <a href="" className="social-btn social-link"><FaInstagram/></a>
                
        </div>
        <p className='copyright'>copyright ©{ new Date().getFullYear()} all rights reserved</p>
        </div>
        </footer>
    
  )
}

export default Footer