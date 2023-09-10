import React from 'react'
import './style.css'
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaTelegramPlane, FaTwitter } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { url } from '../../Component/content'
const Contact = () => {
  return (
    <section id='contactus'>
              <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="ያናግሩን" />
                <link rel="canonical" href={`${url}#contactus`} />
            </Helmet>
              <h1 className="contact-title h1">ያናግሩን</h1>
        <div className="contact-container container">

            <div className="left">
                <div className="contact-info">

                    <div className="contact-text">
                    <a href="mailto:info@addislibrary.com" className='info' >
                    <div className="contact-btn">
                      <AiOutlineMail/>
                      </div>
                        <h3>info@addislibrary.com</h3>
                    </a>
                    </div>

                    <div className="contact-text">
                      <a href="https://t.me/+251935467690" className='info'  target="_blank">
                      <div className="contact-btn">
                      <FaTelegramPlane/>
                      </div>
                        <h3>+251935467690</h3>
                      </a>
                    </div>

                    <div className="contact-text">
                      <a href="tel:+251935467690" className='info'  target="_blank">
                      <div className="contact-btn">
                      <FaPhoneAlt/>
                      </div>
                        <h3>+251935467690</h3>
                      </a>
                    </div>

                </div>
                <div className="button-container">
                <a href="" className="social-btn mg"><FaFacebookF/></a>
                <a href="" className="social-btn mg"><FaTwitter /></a>
                <a href="" className="social-btn mg"><FaTelegramPlane/></a>
                <a href="" className="social-btn mg"><FaInstagram/></a>
                
        </div>
            </div>
            <div className="right">
            <form action="" method="post" className="contact-form">
            

                <div className="input-block">
                <input type="text" name="" id=""  placeholder='ስም' required />
                </div>
                <div className="input-block">
                <input type="email" name="" id=""  placeholder='ኢሜል' required />
                </div>
                <div className="input-block">
                <textarea name="message" rows="10" placeholder='መልክት' required></textarea>
                </div>
                
          <button type="submit" value="Send" className='btn-premiere'>ላክ</button>
      </form>   
            </div>
        </div>
    </section>
  )
}

export default Contact