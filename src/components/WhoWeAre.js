import React from 'react'
import '../styles/WhoWeAre.css'
import ChatIcon from "../images/chatIcon.png"


function WhoWeAre() {
  return (
    <div className='WhoWeAreContainer'>


      <div className='chatIcon'>
        <img src={ChatIcon} alt="ChatIcon"/>
      </div>

      <div className='WhoWeAre'>
        <h1 className='whoweare-header'>Who We Are</h1>
        <p className='whoweare-para'>Lorem lorem lorem lorem, lorem lorem lorem ipsum 
          lorem ipsum ipsumm lorem lorem lorem Lorem lorem lorem lorem, lorem lorem lorem ipsum 
          lorem ipsum ipsumm lorem lorem lorem</p>
        <button className="learnMore">Learn more</button>

      </div>
        
       
    </div>
  )
}

export default WhoWeAre
