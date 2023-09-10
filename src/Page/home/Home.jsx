import React from 'react'
import './style.css'
import Bg from '../../Asset/Hero-image.jpg'
import { useLottie } from "lottie-react";
import Arow from '../../Asset/Arow.json'
import {Helmet} from "react-helmet";

const Home = () => {
  const options = {
    animationData: Arow,
    loop: true
  };
  const { View } = useLottie(options);

  return (
    <header id='home' >
       <Helmet>
                <meta charSet="utf-8" />
                <title>አዲስ ላይብሪ ለምን ተቋቋመ?</title>
                <meta name="description" content="ከጊዜ ወደ ጊዜ እየተባባሰ በመጣው ከመጠን ያለፈ የመፅሐፍት የዋጋ ንረት የተገደበ የኢኮኖሚ አቅም ባላቸዉ ታዳጊ እና ወጣቶች የንባብ ዝንባሌ ላይ ያለው አሉታዊ ተፅዕኖ ለማንም ግልፅ ነው።
አዲስ ላይብረሪ ይህንን ችግር በተረዱ ምሁራን፣ የንግዱ ማህበረሰብ እና ሌሎች የህብረተሰብ አካላት ትብብር የተቋቋመ ሲሆን በሙሉ አቅሙ መንቀሳቀስ ሲጀምር በወር ከ 500 ሺህ የሚበልጡ ተጠቃሚዎች መፅሐፍትን በነፃ ተውሰው ማንበብ የሚያስችል አቅም ይኖረዋል።" />
                <link rel="canonical" href={`${url}#home`} />
            </Helmet>
      <div className="hero-img" style={{backgroundImage:`url(${Bg})`}}>
      </div>
      <div className="contaniner hero-container">
        <span className="icon-container">?</span>
        <h1 className="hero-title">አዲስ ላይብሪ ለምን ተቋቋመ?</h1>
        <p className="hero-text">ከጊዜ ወደ ጊዜ እየተባባሰ በመጣው ከመጠን ያለፈ <span>የመፅሐፍት የዋጋ ንረት </span> የተገደበ የኢኮኖሚ አቅም ባላቸዉ ታዳጊ እና ወጣቶች የንባብ ዝንባሌ ላይ ያለው አሉታዊ ተፅዕኖ ለማንም ግልፅ ነው።<br/>
        <span> አዲስ ላይብረሪ</span> ይህንን ችግር በተረዱ ምሁራን፣ የንግዱ ማህበረሰብ እና ሌሎች የህብረተሰብ አካላት ትብብር የተቋቋመ ሲሆን በሙሉ አቅሙ መንቀሳቀስ ሲጀምር በወር ከ 500 ሺህ የሚበልጡ ተጠቃሚዎች መፅሐፍትን በነፃ ተውሰው ማንበብ የሚያስችል አቅም ይኖረዋል።</p>
        <a  href="#howitwork"><div className="hero-button">{ View }</div></a>
      </div>
    </header>
  )
}



export default Home