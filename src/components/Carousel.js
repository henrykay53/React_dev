import React from 'react'
import "../styles/Carousel.css"
import JN from "../images/janella.png"
import PREV from "../images/prev.png"
import NEXT from "../images/next.png"

export function Carousel() {
  return (
    <div className="carousel">
      <h1>CLIENT TESTIMONIALS</h1>
      <p>Loren loren loren loren lorem lorem</p>

      <div className="carousel-container">
        <div className='prev-button'>
          <img src={PREV} alt="previous-button"/>
        </div>

        <div className="carousel-one">
          <p>Loren lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem
            lorem lorem lorem
          </p>

          <img src={JN} alt="user-icon"/>
  

        </div>


        <div className="carousel-two">
        <p>Loren lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem
            lorem lorem lorem
          </p>

          <img src={JN} alt="user-icon"/>
          

        </div>


        <div className="carousel-three">
        <p>Loren lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem
            lorem lorem lorem
          </p>

          <img src={JN} alt="user-icon"/>
          
        </div>


        <div className='next-button'>
          <img src={NEXT} alt="next-button"/>
        </div>


      </div>
    </div>
  )
}


export default Carousel;
