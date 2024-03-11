import './CoursesPage.css';



const CoursesPage = () => {
    const courses = [
      {
        id: 1,
        title: 'Biology',
        lessons: [
          {
            id: 1,
            title: 'Lesson 1',
            topics: [
              {
                id: 1,
                title: 'Topic 1',
                quizzes: [
                  {
                    id: 1,
                    title: 'Quiz 1',
                    questions: [
                      {
                        id: 1,
                        text: 'Question 1',
                        type: 'Multiple Choice'
                      },
                      {
                        id: 2,
                        text: 'Question 2',
                        type: 'True/False'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
  
    return (
      <div>
        <h1>Courses</h1>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <h2>{course.title}</h2>
              {course.lessons.map((lesson) => (
                <div key={lesson.id}>
                  <h3>{lesson.title}</h3>
                  {lesson.topics.map((topic) => (
                    <div key={topic.id}>
                      <h4>{topic.title}</h4>
                      {topic.quizzes.map((quiz) => (
                        <div key={quiz.id}>
                          <h5>{quiz.title}</h5>
                          {quiz.questions.map((question) => (
                            <div key={question.id}>
                              <p>{question.text}</p>
                              <p>{question.type}</p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default CoursesPage;
  