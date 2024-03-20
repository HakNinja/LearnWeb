import React, { useState } from 'react';
import coursesData from './courses.json';
import './CourseList.css'
import Confetti from 'react-dom-confetti';
import './CourseList.scss'
import {Link} from 'react-router-dom'
// import CourseListRoadmap from './CourseListRoadmap'

function CourseList() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showRoadmap, setShowRoadmap] = useState(true);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setShowRoadmap(true);
  };

  const handleCloseClick = () => {
    setSelectedCourse(null);
    setShowRoadmap(false);
  };

  return (
    <div className="App min-h-[90vh] relative mb-10">
      <div className='bg-div'><h1 className='mt-10 mb-10'>Courses Offers</h1></div>
      {/* <div className='fixedme'> */}
      {/* <div className="course-container "> */}
      <div className="recent_recipes_posts" >
      <div className="products-container">
        {coursesData.courses.map((course, index) => (
          <article className="product-card" key={index} >
                <img src={course.c_image} alt={course.course_name} width={300} height={300} className='product-image'/>
            <p className="product-name">{course.course_name}</p>
            <p className="product-name1">{course.description}</p>
            <div style={{display:"flex",alignItems:"center", justifyContent:"space-between"}}>
              <button className='roadmap-btn' onClick={() => handleCourseClick(course)}>Roadmap</button>
              <Link to={`/coursesdetails/${index}`}><button className='details-btn'>Details</button> </Link>
            </div>
          </article>
        ))}
      </div>

      {selectedCourse &&
        <div className="course-roadmap " >
          <h2>{selectedCourse.course_name} Roadmap</h2>
          <button onClick={handleCloseClick} className='absolute top-5 right-5  btn text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'> Close </button>
          <div className="timeline">
            {selectedCourse.steps.map((step, stepIndex) => (
              <div className={stepIndex % 2 === 0 ? "CourseListcontainer left" : "CourseListcontainer right"} key={stepIndex}>
                <div className="content">
                  <h2>Chapter {stepIndex + 1}</h2>
                  <p>{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </div>
    </div>
  )
}

export default CourseList;