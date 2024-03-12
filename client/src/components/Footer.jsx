import React from 'react'

const Footer = () => {
  return (
    < div style={{ display: "flex" }} className='colorGradient'>
      <div className="col mb-3 text-center" style={{ marginTop: "3rem" }}>
        <p className="text-body-secondary">© 2024 LearnWeb</p>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-youtube"></i>
      </div>


      <div className="col mb-3 text-center" style={{ marginTop: "3rem" }}>
        <h5>Features</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">LearWeb Business</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Teach on LearnWed</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">About us</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Contact us</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Get the App</a></li>
        </ul>
      </div>

      <div className="col mb-3 text-center" style={{ marginTop: "3rem" }}>
        <h5>Careers</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Blog</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Help and Support</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Affiliate</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Investors</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Sitemap</a></li>
        </ul>
      </div>
    </ div>
  )
}

export default Footer