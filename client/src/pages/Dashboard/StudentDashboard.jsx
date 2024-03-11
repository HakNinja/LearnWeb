import React, { useState } from 'react';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const [activePage, setActivePage] = useState('Overview');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const renderPageContent = () => {
    switch (activePage) {
      case 'Overview':
        return <div>Overview Page</div>;
      case 'Profile':
        return <div>Profile Page</div>;
      case 'My Courses':
        return <div>My Courses Page</div>;
      case 'Quizzes':
        return <div>Quizzes Page</div>;
      case 'Doubts':
        return <div>Doubts Page</div>;
      case 'Certificates':
        return <div>Certificates Page</div>;
      default:
        return <div>Overview Page</div>;
    }
  };

  return (
    <div className="student-dashboard">
      <div className="student-dashboard__header">
        <div className="student-dashboard__logo" />
        <div className="student-dashboard__title">Student Dashboard</div>
        {/* <div className="student-dashboard__logout">Logout</div> */}
      </div>
      <div className="student-dashboard__content">
        <div className="student-dashboard__nav">
          {['Overview', 'Profile', 'My Courses', 'Quizzes', 'Doubts', 'Certificates'].map((page) => (
            <div
              key={page}
              className={`student-dashboard__nav-item ${activePage === page ? 'student-dashboard__nav-item--active' : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </div>
          ))}
        </div>
        {renderPageContent()}
      </div>
    </div>
  );
};

export default StudentDashboard;