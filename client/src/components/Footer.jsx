import React from 'react'

const Footer = () => {
  return (
    < div style={{ display: "flex" }} className='colorGradient'>
      <div class="col mb-3 text-center" style={{ marginTop: "3rem" }}>
        <p class="text-body-secondary">© 2024 LearnWeb</p>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-youtube"></i>
      </div>


      <div class="col mb-3 text-center" style={{ marginTop: "3rem" }}>
        <h5>Features</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">LearWeb Business</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Teach on LearnWed</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">About us</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Contact us</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Get the App</a></li>
        </ul>
      </div>

      <div class="col mb-3 text-center" style={{ marginTop: "3rem" }}>
        <h5>Careers</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Blog</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Help and Support</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Affiliate</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Investors</a></li>
          <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">Sitemap</a></li>
        </ul>
      </div>
    </ div>
  )
}

export default Footer