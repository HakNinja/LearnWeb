import React from 'react'
import { cover } from '../../assets'

const Home = () => {
  return (
    <div class="container col-xxl-8 px-4 pt-5" className='colorGradient'>
      <div class="row flex-lg-row-reverse align-items-center g-5 pt-6">
        <div class="col-10 col-sm-8 col-lg-6">
            <img src={cover} alt="cover" className='d-block mx-lg-auto img-fluid' loading='lazy'/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{marginLeft:"10rem", marginBottom:"5rem"}}>You Learn Today And Earn Tomorrow.</h1>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start" style={{marginLeft:"10rem", marginBottom:"5rem"}}>
            <button class=" btn btn-light"><a class="nav-link" href="logIn.html">Login</a></button>
            <button class=" btn btn-light"><a class="nav-link" href="SignIn.html">SignUp</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home