import React, {useState} from 'react'
import "../styles/Carousel.css"
import JN from "../images/janella.png"
import PREV from "../images/prev.png"
import NEXT from "../images/next.png"

export function Carousel() {

  const [currentCarousel, setCurrentCarousel] = useState(1);
  const [scrollColor, setScrollColor] = useState(1);
  

  const Increase = ()=> {
    
    if(currentCarousel < 3) {
      setCurrentCarousel(currentCarousel + 1) 
    }

    else  {
      setCurrentCarousel(1)
    }

    if (scrollColor < 3) {
      setScrollColor(scrollColor + 1)
    }

    else {
      setScrollColor(1)
    }
  
  }

  const Decrease = ()=> {
    if(currentCarousel > 1) {
      setCurrentCarousel(currentCarousel -1)
    }

    else {
      setCurrentCarousel(1)
    }

    if (scrollColor > 1) {
      setScrollColor(scrollColor -1)
    }

    else {
      setScrollColor(1)
    }

  }

  return (

    <div className="carousel">

      <div className='carousel-text'>
         <h1>Client Testimonials</h1>
         <p className="carousel-para">Loren lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem
            lorem lorem lorem
          </p>
      </div>

 
      <div className="carousel-container">
      

        {currentCarousel === 1 && <div className="carousel-one">

          <p>Loren lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem loremlorem lorem lorem
          </p>

          <div className="profile-flex">

            <img src={JN} alt="user-icon"/>
            <div className='profile-name, black'>
              <p>Janella</p>
              <p className='lastNameOne'>LUTON</p>
            </div>

          </div>

        </div>}

        {currentCarousel === 2 && <div className="carousel-two">

        <p>Loren lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem
            lorem lorem lorem
          </p>
        


          <div className="profile-flex">

            <img src={JN} alt="user-icon"/>
            <div className='profile-name, black'>
              <p>Janella</p>
              <p className='lastNameTwo'>LUTON</p>
            </div>

          </div>

    
        </div>}

        {currentCarousel === 3 && <div className="carousel-three">

          <p>Loren lorem lorem lorem lorem lorem lorem
            lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem
            lorem lorem lorem
          </p>


          <div className="profile-flex">

            <img src={JN} alt="user-icon"/>
            <div className='profile-name, black'>
              <p>Janella</p>
              <p className='lastNameThree'>LUTON</p>
            </div>

          </div>

        </div>}


        <div className='prev-button' onClick={()=> Decrease()}>
          <img className='prev' src={PREV} alt="previous-button"/>
        </div>


        <div className='next-button' onClick={()=> Increase()}>
          <img className='next' src={NEXT} alt="next-button"/>
        </div>


      </div>

  
    
      <div className='scroll'>
          {/*When the value for scrollColor passes as 'true' the 'isActive' class is add to give it a background color of white to get the scroll effect*/}

          <span className ={scrollColor === 1 ? 'isActive' : ''}></span>
          <span className ={scrollColor === 2 ? 'isActive' : ''}></span>
          <span className ={scrollColor === 3 ? 'isActive' : ''}></span>

        </div>

    </div>
  )
}


export default Carousel;
