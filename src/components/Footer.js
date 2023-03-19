import React from 'react'
import '../styles/footer.css'
import IG from '../images/ig.png'
import TW from  '../images/tw.png'
import FB from  '../images/fb.png'
import IN from'../images/in.png'
import SLK from '../images/slk.png'
import PaperPlane from '../images/paperPlane.png'

function Footer() {
  return (
    <div className='footer'>
        <h1 className='footerHeader'>Contact Us</h1>

        <p className='footerPara'>lorem Lorem lorem lorem Lorem lorem <br></br>
        lorem Lorem lorem</p>

        <form className='inputForm'>
        <input type="text" placeholder='Enter your email address'></input>
        <img  className= "paperPlane" src={PaperPlane} alt="Paper plane"></img>

        </form>

        <div className='socials'>
            <img src={IG} alt="Instagram" />
            <img src={TW} alt="Twitter" />
            <img src={FB} alt="Facebook" />
            <img src={IN} alt="LinkedIn" />
            <img src={SLK} alt="Slack" />

        </div>

    </div>
  )
}


export default Footer
