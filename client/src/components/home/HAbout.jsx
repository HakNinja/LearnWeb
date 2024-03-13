import React from "react"
import OnlineCourses from "../allcourses/OnlineCourses"
// import Heading from "../common/heading/Heading"
// import "../allcourses/courses.css"
import "./HAbout.css"
import video from '../../assets/1.mp4'// import { coursesCard } from "../../dummydata"

const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
        <div className='HAbout-container'>
          {/* <Heading subtitle='our courses' title='explore our popular online courses' /> */}

          <div class="container" style={{}}>
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
              <h2 class="display-4 fw-normal">Top Category Courses</h2>
              <p class="fs-5 text-body-secondary text-center"> LearnWeb is a Section 8 non-profit organization with the aim to
                enhance the quality of education in India</p>
            </div>
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                  <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">NDA/SSC/Competitive Problem Solving
                    </h4>
                  </div>
                  <div class="card-body">
                    {/* <video controls> */}
                    <video src={video} type="video/mp4">
                      Your browser does not support the video tag
                    </video>
                    <button type="button" class="w-100 btn btn-lg btn-outline-dark">Sign up for free</button>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                  <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">FREE Career Path for Web Development
                    </h4>
                  </div>
                  <div class="card-body">
                    <video src={video} type="video/mp4">
                      Your browser does not support the video tag
                    </video>
                    <button type="button" class="w-100 btn btn-lg btn-outline-dark">0%Get started</button>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                  <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Cyber Security-: Precautions Against Digital Dark Art
                    </h4>
                  </div>
                  <div class="card-body">
                    {/* <video controls> */}
                    <video src={video} type="video/mp4">
                      Your browser does not support the video tag
                    </video>
                    <button type="button" class="w-100 btn btn-lg btn-outline-dark">$19</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OnlineCourses />
      </section>
    </>
  )
}

export default HAbout
