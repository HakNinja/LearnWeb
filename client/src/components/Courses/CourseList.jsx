import React, { useState } from 'react';
import courses from './courses.json';
import CourseDetail from './CourseDetail';
import './CourseList.css';

const CourseList = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const handleClick = (course) => {
    setSelectedCourse(course);
    setIsBoxVisible(true);
  };

  const handleClose = () => {
    setIsBoxVisible(false);
  };

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.courses.map((course) => (
          <li key={course.id} onClick={() => handleClick(course)}>
            {course.title}
            {selectedCourse === course && (
              <ul>
                {course.steps.map((step) => (
                  <li key={step.id}>{step.title}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {isBoxVisible && (
        <div className="box">
          <CourseDetail steps={selectedCourse.steps} course={selectedCourse} onClose={handleClose} />
        </div>
      )}
    </div>
  );
};

export default CourseList;