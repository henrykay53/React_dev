import React, {useState} from 'react'
import "../styles/Carousel.css"
import JN from "../images/janella.png"
import PREV from "../images/prev.png"
import NEXT from "../images/next.png"

export function Carousel() {

  const [currentCarousel, setCurrentCarousel] = useState(1);
  // const [scrollColor, setScrollColor] = useState(true);
  

  const Increase = ()=> {
    
    if(currentCarousel === 3) {
      setCurrentCarousel(1)
    }

    
    else {
      setCurrentCarousel(currentCarousel + 1)
    }
  
  }

  const Decrease = ()=> {
    if(currentCarousel > 1) {
      setCurrentCarousel(currentCarousel -1)
    }

    else {
      setCurrentCarousel(1)
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

      {/* <table className={this.state.isTableVisible ? 'tableRoot' : ''}></table> */}

      <div className='scroll isActive'>
          <span></span>
          <span></span>
          <span></span>

        </div>

    </div>
  )
}


export default Carousel;
