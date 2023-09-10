import React from 'react'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { MdOutlineLock } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import './style.css'
const Login = () => {
  return (
    <section id='login'>
        <div className="login-container container">
            <h1 className="login-title h1">ይግቡ</h1>
            <div className="login-icon">
                <a className='login-btn' href="http://" target="_blank" rel="noopener noreferrer"><FaGoogle/></a>
                <a className='login-btn' href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
            </div>
            
            <p className="login-text1">ወይም</p>
            
            <form className='login-form' action="" method="post">
                <div className="input-block">
                    <span className="icon">
                            <AiOutlineMail/>
                    </span>    
                        <input type="email" name="" id=""  placeholder='ኢሜል'/>
                </div>
                <div className="input-block">
                    <span className="icon">
                    <MdOutlineLock/>
                    </span>    
                        <input type="password" name="" id=""  placeholder='ይለፍ ቃል'/>
                </div>
                <div className="login-texts">
                <div className="login-link"><a href="#login"  className='login-text' rel="noopener noreferrer">የይለፍ ቃል ረሱ?</a></div>
                <button className='btn-premiere'>ይግቡ</button>
                <div className="login-link"><a href="#login"  className='login-text' rel="noopener noreferrer">መለያ ከሌሎት <span>መለያ ይፍጠሩ?</span></a></div>
                    </div>
                
            </form>
            
        </div>
    </section>
  )
}

export default Login