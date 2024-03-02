import React, {useEffect} from 'react'
import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img from '../../Assets/img.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'
const data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of Romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventerious activities.  hjdhgvklhkjlkfjkjfkjflkjflkjljfl ahdk,hl.jadlk;las;cl;lf;l;d Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi enim ipsam beatae accusamus iusto officiis numquam aperiam quas nihil delectus nam maiores at sunt fugit ullam, commodi laudantium, dolores molestiae?'
  },

  {
    id:2,
    imgSrc: img,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Huayana Pichhu is mountain in Peru, rising over Machu Pichhu, the so called lost city of Incas. The place is popular among tourists as the sun rise from the sun gate is simply spectacular.'
  },

  {
    id:3,
    imgSrc: img,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia. It also holds great scientific interest as the habitat of species such as the dugong (‘sea cow’) and the large green turtle, which are threatened with extinction.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti inventore alias consequuntur incidunt voluptatum? Cupiditate, aliquid odio quo illum, beatae architecto alias ipsum reprehenderit maxime quia nihil officia numquam nisi?'
  },
  {
    id:4,
    imgSrc: img,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: "Famous for its unique rock formations and amazing hot air ballooning opportunities, the otherworldly landscapes of Cappadocia are one of Turkey's most popular natural"
  },
  {
    id:5,
    imgSrc: img,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: "Founded by the Spanish in the early 16th century, Guanajuato became the world's leading silver-extraction centre in the 18th century"
  }
]
function Main() {

  useEffect(() => {
    Aos.init({duration:2000})
},[])

  return (
    <section className='main container section'> 
    
      <div className="secTitle">
        <h3 className="title" data-aos='fade-right'>Most Visited Destinations</h3>
      </div>

      <div className="secContent grid">
        {
          data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
            return(
              <div className="singleDestination" key={id} data-aos='fade-up'>
                <div className="imageDiv">
                  {/* <img src= {imgSrc} alt={destTitle} style={{height:200, width:300}}/> */}
                  <img src= {imgSrc} alt={destTitle} />
                </div>


                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                  <HiOutlineLocationMarker  className='icon'/>
                  <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className='icon' />
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main