import React, { useState } from 'react';
import coursesData from './courses.json';
import './CourseList.css'
import Confetti from 'react-dom-confetti';
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
    <div className="App">
      <h1>Free Courses</h1>
      {/* <div className='fixedme'> */}
        <div className="course-container">
          {coursesData.courses.map((course, index) => (
            <div className="course" key={index} onClick={() => handleCourseClick(course)}>
              <p>{course.course_name}</p>
              <p>{course.description}</p>
            </div>
          ))}
        </div>

        {selectedCourse &&
          <div className="course-roadmap" >
            <h2>{selectedCourse.course_name} Roadmap</h2>
            <button onClick={handleCloseClick}> Close </button>
            <div class="timeline">
              {selectedCourse.steps.map((step, stepIndex) => (
                <div className={stepIndex % 2 === 0 ? "container left" : "container right"} key={stepIndex}>
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
    // </div>
  )
}

export default CourseList;