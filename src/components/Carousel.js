import React from 'react'
import "../styles/Carousel.css"
import JN from "../images/janella.png"
import PREV from "../images/prev.png"
import NEXT from "../images/next.png"

export function Carousel() {
  return (
    <div className="carousel">

      <div className='carousel-text'>
         <h1>Client Testimonials</h1>
         <p>Loren loren loren loren lorem lorem</p>
      </div>
     

      <div className="carousel-container">
        <div className='prev-button'>
          <img className='prev' src={PREV} alt="previous-button"/>
        </div>

        <div className="carousel-one">
          <p>Loren lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem
            lorem lorem lorem
          </p>


          <div className="profile-flex">

            <img src={JN} alt="user-icon"/>
            <div className='profile-name, black'>
              <p>Janella</p>
              <p>LUTON</p>
            </div>

          </div>

         
  

        </div>


        <div className="carousel-two">
        <p>Loren lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem
            lorem lorem lorem
          </p>

      

          <div className="profile-flex">

            <img src={JN} alt="user-icon"/>
            <div className='profile-name'>
              <p>Janella</p>
              <p>LUTON</p>
            </div>

          </div>
          

        </div>


        <div className="carousel-three">
        <p>Loren lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem
            lorem lorem lorem
          </p>

         

          <div className="profile-flex">

            <img src={JN} alt="user-icon"/>
            <div className='profile-name, black'>
              <p>Janella</p>
              <p>LUTON</p>
            </div>

          </div>
          
        </div>


        <div className='next-button'>
          <img className='next' src={NEXT} alt="next-button"/>
        </div>


      </div>
    </div>
  )
}


export default Carousel;
