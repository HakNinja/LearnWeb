import React from 'react';
import './InstructorDashboard.css';

const InstructorDashboard = () => {
  const courseData = [
    { title: 'Biology', points: 0, submissions: 0 },
    // Add more courses here
  ];

  const lessonsData = [
    { title: 'Lesson 1', students: 5 },
    { title: 'Lesson 2', students: 10 },
    { title: 'Lesson 3', students: 15 },
    // Add more lessons here
  ];

  return (
    <div className="instructor-dashboard">
      <div className="instructor-dashboard__header">
        <div className="instructor-dashboard__logo" />
        <div className="instructor-dashboard__title">Instructor Dashboard</div>
        <div className="instructor-dashboard__logout">Logout</div>
      </div>
      <div className="instructor-dashboard__content">
        <div className="instructor-dashboard__nav">
          <div className="instructor-dashboard__nav-item instructor-dashboard__nav-item--active">
            Overview
          </div>
          <div className="instructor-dashboard__nav-item">Courses</div>
          <div className="instructor-dashboard__nav-item">Lessons</div>
          <div className="instructor-dashboard__nav-item">Topics</div>
          <div className="instructor-dashboard__nav-item">Quizzes</div>
          <div className="instructor-dashboard__nav-item">Questions</div>
          <div className="instructor-dashboard__nav-item">Certificates</div>
          <div className="instructor-dashboard__nav-item">Earnings</div>
          <div className="instructor-dashboard__nav-item">Products</div>
          <div className="instructor-dashboard__nav-item">Profile</div>
        </div>
        <div className="instructor-dashboard__main">
          <div className="instructor-dashboard__main-section">
            <div className="instructor-dashboard__section-title">
              Unpaid Courses
            </div>
            <div className="instructor-dashboard__courses">
              {courseData.map((course, index) => (
                <div key={index} className="instructor-dashboard__course">
                  <div className="instructor-dashboard__course-title">
                    {course.title}
                  </div>
                  <div className="instructor-dashboard__course-points">
                    Points: {course.points}
                  </div>
                  <div className="instructor-dashboard__course-submissions">
                    Submissions: {course.submissions}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="instructor-dashboard__main-section">
            <div className="instructor-dashboard__section-title">
              Lessons ({lessonsData.length})
            </div>
            <div className="instructor-dashboard__lessons">
              {lessonsData.map((lesson, index) => (
                <div key={index} className="instructor-dashboard__lesson">
                  <div className="instructor-dashboard__lesson-title">
                    {lesson.title}
                  </div>
                  <div className="instructor-dashboard__lesson-students">
                    Students: {lesson.students}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Add more main sections here */}
        </div>
      </div>
    </div>
  );
};
  
export default InstructorDashboard;