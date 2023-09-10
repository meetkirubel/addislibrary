import React  from 'react';
import p1 from '../../Asset/p-1.jpg'
import {FaInstagram,FaFacebookF,FaLinkedin} from 'react-icons/fa'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import {Autoplay } from 'swiper/modules';
const Cards = () => {
    return(
        
    
    <Swiper
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 300,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 90,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 100,
            }
          }}
          spaceBetween={150}
        autoplay={{
            delay: 2500
          }}

        modules={[Autoplay]}
        className="mySwiper team-container"
      >
        <SwiperSlide className="team">
        <div className="team-img team-img1">
            <img src={p1} alt="" />
        </div>
                <h3 className="team-title">ዳዊት ከበደ</h3>
                <p className="team-text">ማናጀር</p>
                <div className="links">
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                </div>
        </SwiperSlide>
        
        
        <SwiperSlide className="team">
        <div className="team-img team-img1">
            <img src={p1} alt="" />
        </div>
                <h3 className="team-title">ዳዊት ከበደ</h3>
                <p className="team-text">ማናጀር</p>
                <div className="links">
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                </div>
        </SwiperSlide>
        
        
        <SwiperSlide className="team">
        <div className="team-img team-img1">
            <img src={p1} alt="" />
        </div>
                <h3 className="team-title">ዳዊት ከበደ</h3>
                <p className="team-text">ማናጀር</p>
                <div className="links">
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                </div>
        </SwiperSlide>
        
        
        <SwiperSlide className="team">
        <div className="team-img team-img1">
            <img src={p1} alt="" />
        </div>
                <h3 className="team-title">ዳዊት ከበደ</h3>
                <p className="team-text">ማናጀር</p>
                <div className="links">
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                </div>
        </SwiperSlide>
        
        
        
      </Swiper>

           
    )
}


const Ourteam = () => {
  return (
    <section id='ourteam'>
        <div className="howtouse-container container">
            <h1 className="title h1">የቡድን ዓባላት</h1>
            <Cards/>
        </div>

       
    </section>
  )
}




export default Ourteam