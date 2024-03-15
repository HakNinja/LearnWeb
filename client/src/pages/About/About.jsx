import React from 'react'
import { about } from '../../assets'
import './About.scss'

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-lw'>
                <div><h2>About LearnWeb</h2></div>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
                    <img src={about} alt="" />
                    <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, repellendus laborum dolor unde magni soluta. Quibusdam soluta veritatis saepe quis dolore harum facilis eum ipsa quidem aspernatur accusamus esse enim quo nam, voluptatibus officia ut, rem sequi. Perspiciatis quis, non recusandae ad labore praesentium eaque ratione, alias dignissimos officia ex, molestiae tempore veritatis. Architecto ducimus natus optio officia vitae consectetur voluptatum quod modi unde qui saepe maiores sed, velit numquam quasi molestias consequuntur hic at, ex similique ipsum cum voluptas? Facere, corporis provident, soluta veritatis expedita labore tempora dolorem illum cupiditate nesciunt ipsam eaque sunt, corrupti itaque neque quidem eligendi!</p></div>
                </div>
            </div>
            <div className='about-phoenix'>
                <div>
                    <h3>Meet Team Phoenix</h3>
                </div>

                <div className='about-card-container'>
                    <div class="wrapper">
                        <div class="card front-face">
                            <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />
                        </div>
                        <div class="card back-face">
                            <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />
                            <div class="info">
                                <div class="title">CodingLab</div>
                                <p>User interface designer and <br />front-end developer</p>
                            </div>
                            <ul>
                                <a href="/"><i class="fab fa-facebook-f"></i></a>
                                <a href="/"><i class="fab fa-twitter"></i></a>
                                <a href="/"><i class="fab fa-instagram"></i></a>
                                <a href="/"><i class="fab fa-youtube"></i></a>
                            </ul>
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="card front-face">
                            <img src="img2.jpg" />
                        </div>
                        <div class="card back-face">
                            <img src="img2.jpg" />
                            <div class="info">
                                <div class="title">CodingLab</div>
                                <p>User interface designer and <br />front-end developer</p>
                            </div>
                            <ul>
                                <a href="/"><i class="fab fa-facebook-f"></i></a>
                                <a href="/"><i class="fab fa-twitter"></i></a>
                                <a href="/"><i class="fab fa-instagram"></i></a>
                                <a href="/"><i class="fab fa-youtube"></i></a>
                            </ul>
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="card front-face">
                            <img src="img1.jpg" />
                        </div>
                        <div class="card back-face">
                            <img src="img1.jpg" />
                            <div class="info">
                                <div class="title">CodingLab</div>
                                <p>User interface designer and <br />front-end developer</p>
                            </div>
                            <ul>
                                <a href="/"><i class="fab fa-facebook-f"></i></a>
                                <a href="/"><i class="fab fa-twitter"></i></a>
                                <a href="/"><i class="fab fa-instagram"></i></a>
                                <a href="/"><i class="fab fa-youtube"></i></a>
                            </ul>
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="card front-face">
                            <img src="img1.jpg" />
                        </div>
                        <div class="card back-face">
                            <img src="img1.jpg" />
                            <div class="info">
                                <div class="title">CodingLab</div>
                                <p>User interface designer and <br />front-end developer</p>
                            </div>
                            <ul>
                                <a href="/"><i class="fab fa-facebook-f"></i></a>
                                <a href="/"><i class="fab fa-twitter"></i></a>
                                <a href="/"><i class="fab fa-instagram"></i></a>
                                <a href="/"><i class="fab fa-youtube"></i></a>
                            </ul>
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="card front-face">
                            <img src="img1.jpg" />
                        </div>
                        <div class="card back-face">
                            <img src="img1.jpg" />
                            <div class="info">
                                <div class="title">CodingLab</div>
                                <p>User interface designer and <br />front-end developer</p>
                            </div>
                            <ul>
                                <a href="/"><i class="fab fa-facebook-f"></i></a>
                                <a href="/"><i class="fab fa-twitter"></i></a>
                                <a href="/"><i class="fab fa-instagram"></i></a>
                                <a href="/"><i class="fab fa-youtube"></i></a>
                            </ul>
                        </div>
                    </div>
                    <div class="wrapper">
                        <div class="card front-face">
                            <img src="img1.jpg" />
                        </div>
                        <div class="card back-face">
                            <img src="img1.jpg" />
                            <div class="info">
                                <div class="title">CodingLab</div>
                                <p>User interface designer and <br />front-end developer</p>
                            </div>
                            <ul>
                                <a href="/"><i class="fab fa-facebook-f"></i></a>
                                <a href="/"><i class="fab fa-twitter"></i></a>
                                <a href="/"><i class="fab fa-instagram"></i></a>
                                <a href="/"><i class="fab fa-youtube"></i></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About