import React, {useState} from 'react'
import CourseInfo from '../components/CourseInfo';
import VideoPlayer from '../components/VideoPlayer';
import ProgressTracker from '../components/ProgressTracker';

const CV = () => {

    const [progress, setProgress] = useState(0);

  const handleProgressChange = (newProgress) => {
    setProgress(newProgress);
  };


  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <CourseInfo />
        </div>
        <div>
          <VideoPlayer onProgressChange={handleProgressChange} />
        </div>
      </div>
      <div className="mt-8">
        <ProgressTracker progress={progress} />
      </div>
    </div>
  )
}

export default CV