import React from 'react'
import { about, Deepak, nilesh, akansha, anshul, Maitri, Yogesh } from '../../assets'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import './About.scss'

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-lw'>
                <div><h2>About LearnWeb</h2></div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                    <img src={about} alt="" />
                    <div><p>
                        LearnWeb is a dynamic online platform offering a diverse array of courses to empower learners worldwide. With an intuitive interface and comprehensive curriculum, LearnWeb caters to various skill levels and interests, fostering a culture of continuous learning. From web development to digital marketing, users access expertly crafted courses designed to enhance their professional acumen and personal growth. Our commitment to excellence is reflected in our engaging multimedia content, interactive exercises, and real-world projects, ensuring practical knowledge acquisition. Whether aspiring to enter new fields or advance existing careers, LearnWeb provides the tools and resources necessary for success. Join our vibrant community today and embark on a transformative educational journey with LearnWeb.</p></div>
                </div>
            </div>
            <div className='about-phoenix'>
                <div>
                    <h3>Meet Team Phoenix</h3>
                </div>

                <div className='about-card-container'>
                    <div class="wrapper">
                        <div class="card front-face">
                            <img src={Deepak} alt="" />
                        </div>
                        <div class="card back-face">
                            <img src={Deepak} alt="" />
                            <div class="info">
                                <div class="title">Deepak Kumar</div>
                                <p>Student, COC player <br /> DevOps enthusiast</p>
                            </div>
                            <ul>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaFacebook style={{ width: "40px" }} /></a>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaTwitter /></a>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaInstagram /></a>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaYoutube /></a>
                            </ul>
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="card front-face">
                            <img src={akansha} alt='' />
                        </div>
                        <div class="card back-face">
                            <img src={akansha} alt='' />
                            <div class="info">
                                <div class="title">Akansha</div>
                                <p>Student and <br /> Python developer</p>
                            </div>
                            <ul>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaFacebook style={{ width: "40px" }} /></a>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaTwitter /></a>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaInstagram /></a>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaYoutube /></a>
                            </ul>
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="card front-face">
                            <img src={nilesh} alt='' />
                        </div>
                        <div class="card back-face">
                            <img src={nilesh} alt='' />
                            <div class="info">
                                <div class="title">Nilesh Thakur</div>
                                <p>Student, Singer and <br />php developer</p>
                            </div>
                            <ul>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaFacebook style={{ width: "40px" }} /></a>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaTwitter /></a>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaInstagram /></a>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaYoutube /></a>
                            </ul>
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="card front-face">
                            <img src={anshul} alt='' />
                        </div>
                        <div class="card back-face">
                            <img src={anshul} alt='' />
                            <div class="info">
                                <div class="title">Anshul Pant</div>
                                <p>Student, Volley Ball Player and <br />blockchain developer</p>
                            </div>
                            <ul>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaFacebook style={{ width: "40px" }} /></a>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaTwitter /></a>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaInstagram /></a>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaYoutube /></a>
                            </ul>
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="card front-face">
                            <img src={Maitri} alt='' />
                        </div>
                        <div class="card back-face">
                            <img src={Maitri} alt='' />

                            <div class="info">
                                <div class="title">Maitri Rautela</div>
                                <p>Student, ex SRCASW President and <br />NodeJs Developer</p>
                            </div>
                            <ul>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaFacebook style={{ width: "40px" }} /></a>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaTwitter /></a>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaInstagram /></a>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaYoutube /></a>
                            </ul>
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="card front-face">
                            <img src={Yogesh} alt='' />
                        </div>
                        <div class="card back-face">
                            <img src={Yogesh} alt='' />

                            <div class="info">
                                <div class="title">Yogesh Tiwari</div>
                                <p>Student, Traveller and <br />MERN Stack Developer</p>
                            </div>
                            <ul>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaFacebook style={{ width: "40px" }} /></a>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaTwitter /></a>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaInstagram /></a>
                                <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><FaYoutube /></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About