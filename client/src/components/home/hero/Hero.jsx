import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='home-hero'>
        <div className='home-container'>
          <div className='home-row'>
            <Heading subtitle='WELCOME TO LearnWeb' title='You Learn Today, and Earn Tomorrow' />
            {/* <p>Desc..........</p> */}
            <div>
              <button className='home-button home-primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button className='home-button'>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
