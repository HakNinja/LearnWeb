import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
// import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      <section className='AboutCard-aboutHome'>
        <div className='AboutCard-container flexSB'>
          <div className='AboutCard-left AboutCard-row'>
            <img src='./images/about.png' alt='' />
            {/* <img src='./images/about.webp' alt='' /> */}
          </div>
          <div className='AboutCard-right AboutCard-row'>
            <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning ' />
            <div className='AboutCard-items'>
              {homeAbout.map((val) => {
                return (
                  <div className='AboutCard-item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <Awrapper /> */}
    </>
  )
}

export default AboutCard
