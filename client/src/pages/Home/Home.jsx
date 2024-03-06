import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'
import { cover } from '../../assets'
import Roadmap from '../../components/Roadmap';
import { Link } from "react-router-dom"

const Home = () => {
  const { logout, user } = useAuth0();
  // console.log(user)
  return (
    <div class="container col-xxl-8 px-4 pt-5" className='colorGradient'>
      <div class="row flex-lg-row-reverse align-items-center g-5 pt-6">
        <div class="col-10 col-sm-8 col-lg-6">
          <img src={cover} alt="cover" className='d-block mx-lg-auto img-fluid' loading='lazy' />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{ marginLeft: "10rem", marginBottom: "5rem" }}>You Learn Today And Earn Tomorrow.</h1>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start" style={{ marginLeft: "10rem", marginBottom: "5rem" }}>
            {user ? (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>) : (<><button class=" btn btn-light"><Link class="nav-link" to="login">Login</Link></button>
              <button class=" btn btn-light"><Link class="nav-link" to="signup">SignUp</Link></button></>)}
          </div>
        </div>
      </div>
      <Roadmap />
    </div>
  )
}

export default Home