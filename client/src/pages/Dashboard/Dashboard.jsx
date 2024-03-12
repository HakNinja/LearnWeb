import React, { useState } from 'react';
import './Dashboard.css';

import Certificates from './Certificates'
import Doubts from './Doubts'
import Overview from './Overview'
import MyCoursePage from './MyCoursePage'
import Profile from './Profile'
import Quizzes from './Quizzes'


const StudentDashboard = () => {
  const [activePage, setActivePage] = useState('Overview');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const renderPageContent = () => {
    switch (activePage) {
      case 'Overview':
        return <Overview />
      case 'Profile':
        return <Profile />
      case 'My Courses':
        return <MyCoursePage />
      case 'Quizzes':
        return <Quizzes />
      case 'Doubts':
        return <Doubts />
      case 'Certificates':
        return <Certificates />
      default:
        return <Overview />

    }
  }

  return (
    <div className="student-dashboard">

      <div className="student-dashboard__content min-h-svh">
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