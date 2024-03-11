import React from 'react';
import { useParams } from 'react-router-dom';

const Roadmap = () => {
  // Access the parameters from the URL
  const {course} = useParams()

    console.log(course.title)

  return (
    <div>
      <h2>Course Details</h2>
      <p>Steps :{course}</p>
      {/* You can fetch more details about the course using courseId */}
    </div>
  );
};

export default Roadmap;