import React, { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import courses from './courses.json';
import './CourseList.css';

const CourseList = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const handleClick = (course) => {
    setSelectedCourse(course);
    setIsBoxVisible(true);
  };

  return (
    <div className='padding'>
      <h1>Courses Available : </h1>
      {/* <VerticalTimeline> */}
        {courses.courses.map((course) => (
          <VerticalTimelineElement
            key={course.id}
            date={course.date} // Add the date of the course here
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} // Customize icon style if needed
            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} // Customize content style if needed
            // icon={<Icon />} // You can add custom icons if needed
          >
            <h3 className="vertical-timeline-element-title" onClick={() => handleClick(course)}>
              {course.title}
            </h3>
            {selectedCourse === course && (
              <ul>
                {course.steps.map((step) => (
                  <li className="coursesListli" key={step.id}>{step.title}</li>
                ))}
              </ul>
            )}
          </VerticalTimelineElement>
        ))}
      {/* </VerticalTimeline> */}
    </div>
  );
};

export default CourseList;