import React from 'react'
import '../styles/WhoWeAre.css'
import ChatIcon from "../images/chatIcon.png"
import BlueRectangle from "../images/blueRectangle.png";

function WhoWeAre() {
  return (
    <div className='WhoWeAreContainer'>


      <div className='chatIcon'>
        <img src={ChatIcon} alt="ChatIcon"/>
      </div>

      <div className='WhoWeAre'>
        <h1>Who we are</h1>
        <p>Lorem lorem lorem lorem, lorem lorem <br/> lorem lorem</p>
        <button className="learnMore">Learn more</button>

      </div>
        
       
    </div>
  )
}

export default WhoWeAre
