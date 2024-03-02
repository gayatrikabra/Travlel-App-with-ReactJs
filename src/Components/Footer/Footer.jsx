import React, {useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/vid1.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md"
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos'
import 'aos/dist/aos.css'
function Footer() {

  useEffect(() => {
    Aos.init({duration:2000})
},[])

  return (
  
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type='video/mp4'></video>
      </div>
      <div className="setContent container">
        <div className="contactDiv flex">
          <div className="text" data-aos='fade-up'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel With Us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address'  data-aos='fade-up'/>
            <button className="btn flex" type='submit'>
            SEND  <FiSend className='icon' />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href='#' className='logo flex'>
              <MdOutlineTravelExplore className='icon'/>
                Travel.
              </a>
            </div>
            <div className="footerParagraph" data-aos='fade-up'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolores expedita repellendus excepturi facere, consectetur blanditiis animi veritatis, modi minus omnis dolor molestiae! Laborum tempore aliquid, ex iste commodi saepe.
            </div>
            <div className="footerSocials flex" data-aos='fade-up'>
            <AiOutlineTwitter  className = 'icon'/>
            <AiFillYoutube  className = 'icon'/>
            <AiFillInstagram  className = 'icon'/>
            <FaTripadvisor  className = 'icon'/>
            </div>
          </div>
          <div className="footerLinks grid">
            <div className="linkGroup" data-aos='fade-up' data-aos-duration = '3000'>
              <span className="groupTitle">
                OUR AGENCY
              </span>
              <li className="footerList flex">
              <FiChevronRight  className = 'icon'/>
              Services
              </li>

              <li className="footerList flex">
              <FiChevronRight  className = 'icon'/>
              Insurance
              </li>

              <li className="footerList flex">
              <FiChevronRight  className = 'icon'/>
              Agency
              </li>

              <li className="footerList flex">
              <FiChevronRight  className = 'icon'/>
              Tourism
              </li>

              <li className="footerList flex">
              <FiChevronRight  className = 'icon'/>
              Payment
              </li>
            </div>


            <div className="linkGroup" data-aos='fade-up' data-aos-duration = '4000'>
              <span className="groupTitle">
                LAST MINUTE
              </span>
              <li className="footerList flex">
              <FiChevronRight  className = 'icon'/>
              London
              </li>

              <li className="footerList flex">
              <FiChevronRight  className = 'icon'/>
              California
              </li>

              <li className="footerList flex">
              <FiChevronRight  className = 'icon'/>
              Indonesia
              </li>

              <li className="footerList flex">
              <FiChevronRight  className = 'icon'/>
              Europe
              </li>

              <li className="footerList flex">
              <FiChevronRight  className = 'icon'/>
              Australia
              </li>
            </div>


            <div className="linkGroup" data-aos='fade-up' data-aos-duration = '5000'>
              <span className="groupTitle">
                PARTNERS
              </span>
              <li className="footerList flex">
              <FiChevronRight  className = 'icon'/>
              Bookings
              </li>

              <li className="footerList flex">
              <FiChevronRight  className = 'icon'/>
              Rentcars
              </li>

              <li className="footerList flex">
              <FiChevronRight  className = 'icon'/>
              Hotelworld
              </li>

              <li className="footerList flex">
              <FiChevronRight  className = 'icon'/>
              Trivago
              </li>

              <li className="footerList flex">
              <FiChevronRight  className = 'icon'/>
              Tripadviser
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED GAYATRI</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer