import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import {Autoplay,Pagination } from 'swiper/modules';
const Cards = () => {
    return(
        
    
    <Swiper
    style={{
      '--swiper-navigation-color': '#1d1d1d',
      '--swiper-pagination-color': '#F8DE22',
      '--swiper-pagination-bullet-inactive-color': '#1d1d1d'
}}
        spaceBetween={50
        
        }
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 90,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            }
          }}
        autoplay={{
            delay: 2500
          }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper cards"
      >
        <SwiperSlide className="carder">
        <div className="card-img card-img1"></div>
                <h2 className="card-title box-title">መፅሐፍ ይዘዙ</h2>
                <p className="card-text box-text">በመጀመሪያ ተጠቃሚው የመረጠውን የማዘዣ ዘዴ ተጠቅሞ መፅሐፍ ያዛል።</p>
        </SwiperSlide>
        
        <SwiperSlide className="carder">
        <div className="card-img card-img2"></div>
                <h2 className="card-title box-title">የመፅሐፍት ቋት</h2>
                <p className="card-text box-text">ተጠቃሚው ያዘዘውን መፅሐፍ ወደ መረጠው የአገልግሎት መስጫ ይላክለታል።</p>
        </SwiperSlide>
        
        <SwiperSlide className="carder">
        <div className="card-img card-img3"></div>
                <h2 className="card-title box-title">የመፅሐፍት ቋት</h2>
                <p className="card-text box-text">በከተማይቱ የተለያዩ አከባቢዎች የሚገኙ እና የተለያዩ መጠን ያላቸው የመፅሐፍት ማከማቻ መጋዘኖች ናቸው።</p>
        </SwiperSlide>
        
        <SwiperSlide className="carder">
        <div className="card-img card-img4"></div>
                <h2 className="card-title box-title">የመፅሐፍት ቋት</h2>
                <p className="card-text box-text">በከተማይቱ የተለያዩ አከባቢዎች የሚገኙ እና የተለያዩ መጠን ያላቸው የመፅሐፍት ማከማቻ መጋዘኖች ናቸው።</p>
        </SwiperSlide>
        
      </Swiper>

           
    )
}


const Howtouse = () => {
  return (
    <section id='howtouse'>
                    <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="አገልግሎቱ እንዴት ይሰጣል" />
                <link rel="canonical" href={`${url}#howtouse`} />
            </Helmet>
        <div className="howtouse-container container">
            <h1 className="howtouse-title h1 title">አገልግሎቱ እንዴት ይሰጣል</h1>
            <Cards/>
        </div>

       
    </section>
  )
}




export default Howtouse