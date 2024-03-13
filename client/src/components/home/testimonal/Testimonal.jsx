import React from "react"
import { testimonal } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"

const Testimonal = () => {
  return (
    <>
      <section className='testimonal padding'>
          <Heading subtitle='TESTIMONIAL' title='Our Successful Students' />
        <div className='Testimonal-container'>
          <div className='Testimonal-content'>
            {testimonal.map((val) => (
              <div className='Testimonal-items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal
