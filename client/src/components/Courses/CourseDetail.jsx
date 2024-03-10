import React from 'react';

const CourseDetail = ({ steps, course, onClose }) => {
  return (
    <div>
      <h2>{course.title}</h2>
      <h3>Steps</h3>
      <ul>
        {steps.map((step) => (
          <li key={step.id}>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CourseDetail;