import React from 'react';
import './InstructorDashboard.css';

const InstructorDashboard = () => {
  
  return (
    <div className="instructor-dashboard">
      <div className="instructor-dashboard__header">
        <div className="instructor-dashboard__logo" />
        <div className="instructor-dashboard__title">Student Dashboard</div>
        {/* <div className="instructor-dashboard__logout">Logout</div> */}
      </div>
      <div className="instructor-dashboard__content">
        <div className="instructor-dashboard__nav">
          <div className="instructor-dashboard__nav-item instructor-dashboard__nav-item--active">
            Overview
          </div>
          <div className="instructor-dashboard__nav-item">Profile</div>
          <div className="instructor-dashboard__nav-item">My Courses</div>
          {/* <div className="instructor-dashboard__nav-item">Lessons</div> */}
          {/* <div className="instructor-dashboard__nav-item">Topics</div> */}
          <div className="instructor-dashboard__nav-item">Quizzes</div>
          <div className="instructor-dashboard__nav-item">Doubts</div>
          <div className="instructor-dashboard__nav-item">Certificates</div>
          {/* <div className="instructor-dashboard__nav-item">Community</div> */}
          <div className="instructor-dashboard__nav-item">Token Earnings</div>
        </div>
      </div>
    </div>
  );
};
  
export default InstructorDashboard;