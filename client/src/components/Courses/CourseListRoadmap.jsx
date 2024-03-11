import React, { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import { fireConfetti } from "./confetti"; // Import confetti function

function CourseListRoadmap({ selectedCourse }) {
  const [isEndOfRoadmap, setIsEndOfRoadmap] = useState(false);
  const timelineRefs = useRef([]);

  useEffect(() => {
    // Reset end-of-roadmap flag on course change
    setIsEndOfRoadmap(false);
    // Clear refs for new course to avoid stale references
    timelineRefs.current = [];
  }, [selectedCourse]);

  const handleScroll = (event) => {
    const element = event.target;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const clientHeight = element.clientHeight;

    // Check if scrolled to the end (within a tolerance)
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      setIsEndOfRoadmap(true);
    }
  };

  return (
    selectedCourse && (
      <div className="course-roadmap" onScroll={handleScroll}>
        <h2>{selectedCourse.course_name} Roadmap</h2>
        <TimelineObserver
          initialColor="#e5e5e5" // Adjust initial timeline color
          fillColor="black" // Adjust fill color
          handleObserve={(setObserver) => (
            <ul ref={setObserver}>
              {selectedCourse.steps.map((step, stepIndex) => (
                <li key={stepIndex}>
                  <div
                    id={`timeline${stepIndex + 1}`} // Ensure unique IDs
                    ref={(el) => (timelineRefs.current[stepIndex] = el)}
                    className="timeline"
                  />
                  <div className="step-content">
                    {step}
                  </div>
                </li>
              ))}
            </ul>
          )}
        />
        {isEndOfRoadmap && <button onClick={fireConfetti}>Celebrate!</button>}
      </div>
    )
  );
}

export default CourseListRoadmap;
