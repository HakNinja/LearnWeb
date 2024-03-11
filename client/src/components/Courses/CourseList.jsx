import React, { useState } from 'react';
import coursesData from './courses.json';
import CourseListRoadmap from './CourseListRoadmap';
import './CourseList.css'

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
      {selectedCourse && <CourseListRoadmap course={selectedCourse} />}
    </div>
  );
}

export default CourseList;
