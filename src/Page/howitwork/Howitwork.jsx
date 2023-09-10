import React from 'react'
import './style.css'
import { Helmet } from 'react-helmet'
import { url } from '../../Component/content'
const Howitwork = () => {
  return (
    <section id='howitwork'>
        <div className="howitwork-container container
">
            <h1 className="howitwork-title h1">አገልግሎቱ እንዴት ይሰራል</h1>
            <p className="howitwork-text p">የአዲስ ላይብረሪ ሰፊ ተደራሽነት አቅም የዘመነ ቴክኖሎጂ እና ፈጠራ የታከለበት ያልተማከለ አገልግሎት የመስጠት ስርዓት ከመከተሉ የሚመነጭ ሲሆን፤ አገልግሎቱም በሚከተሉት 4 ዋና ዋ2ና ክፍሎች የተዋቀረ ነው፦</p>
            <Cards/>
        </div>

       
    </section>
  )
}

const Cards = () => {
    return(
        <div className="cards">
                   <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="አገልግሎቱ እንዴት ይሰራል? የአዲስ ላይብረሪ ሰፊ ተደራሽነት አቅም የዘመነ ቴክኖሎጂ እና ፈጠራ የታከለበት ያልተማከለ አገልግሎት የመስጠት ስርዓት ከመከተሉ የሚመነጭ ሲሆን፤ አገልግሎቱም በሚከተሉት 4 ዋና ዋ2ና ክፍሎች የተዋቀረ ነው" />
                <link rel="canonical" href={`${url}#howitwork`} />
            </Helmet>

            <div className="card-first">
                <div className="card-img card-img1"></div>
                <h2 className="card-title box-title">የመፅሐፍት ቋት</h2>
                <p className="card-text box-text">በከተማይቱ የተለያዩ አከባቢዎች የሚገኙ እና የተለያዩ መጠን ያላቸው የመፅሐፍት ማከማቻ መጋዘኖች ናቸው።</p>
            </div>
            
            <div className="card-first">
                <div className="card-img card-img2"></div>
                <h2 className="card-title box-title">የማጓጓዣ አውታር</h2>
                <p className="card-text box-text">መፅሐፍትን ከቦታ ቦታ ለማዘዋወር የምንጠቅምባቸው እንደ መኪና፣ ሞተር ሳይክል እና ባይስክል ያሉ መጓጓዣዎች ናቸው።</p>
            </div>
            <div className="card-first">
                <div className="card-img card-img3"></div>
                <h2 className="card-title box-title">የማዘዣ ዘዴ</h2>
                <p className="card-text box-text">ትዕዛዞችን ከተገልጋዮች ለመቀበል የምንጠቀምባቸው የስልክ እና የዌብሳይት ሲስተሞች።</p>
            </div>
            <div className="card-first">
                <div className="card-img card-img4"></div>
                <h2 className="card-title box-title">አገልግሎት መስጫ ጣቢያ</h2>
                <p className="card-text box-text">የታዘዙ መፅሐፍትን የምናስረክብባቸው እና ተነበው ተመላሽ የተደረጉ መፅሐፍትን የምንረከብበት አጋር ድርጅቶች ናቸው።</p>
            </div>

        </div>
    )
}


export default Howitwork