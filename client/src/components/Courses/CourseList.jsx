import React, { useState } from 'react';
import courses from './courses.json';

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
    </div>
  );
};

export default CourseList;