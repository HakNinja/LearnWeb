import React, { useState } from 'react';
import coursesData from './courses.json';
import './CourseList.css'
import Confetti from 'react-dom-confetti';
import CourseListRoadmap from './CourseListRoadmap'

function CourseList() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="App">
      <h1>Free Courses</h1>
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
      <ul>
        {selectedCourse.steps.map((step, stepIndex) => (
          <li key={stepIndex}>{step}</li>
        ))}
      </ul>
      </div>
      }
    </div>
  )}

  export default CourseList;