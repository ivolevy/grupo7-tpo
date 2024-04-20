import {TitleCont} from './home/comp/TitleCont'
import logo from '../img/logo.png'
import { IoLogoInstagram } from "react-icons/io5"
import { PiTiktokLogo } from "react-icons/pi"
import { FaXTwitter } from "react-icons/fa6"

export const Contact = () => {
  return (
    <>
      <section className="contact" id='contact'>
        <TitleCont title="contact" subtitle="some ways for you to contact us"/>
        <div className="contactImg">
          <img src={logo} alt="" id='cImg'/>
        </div>
        <div className="contactInfo">
          <p className='socialMediaText'>Email or phone us</p>
          <p className='smText'>bizio@bizio.com</p>
          <p className='smText'>123-456-7890</p>
        </div>
        <div className="contactSocialMedia">
          <p className='socialMediaText'>Social media</p>
          <div className='contactIcons'>
            <span><IoLogoInstagram className='socialIcon'/></span>
            <span><PiTiktokLogo className='socialIcon'/></span>
            <span><FaXTwitter className='socialIcon'/></span>
          </div>
        </div>
      </section>
    </>
  )
}
