import React, { useState } from 'react';
import { v } from '../assets';

const VideoPlayer = ({ onProgressChange }) => {
  const [currentTime, setCurrentTime] = useState(0);

  const handleTimeUpdate = (e) => {
    const { currentTime, duration } = e.target;
    setCurrentTime(currentTime);
    const newProgress = (currentTime / duration) * 100;
    onProgressChange(newProgress);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <video
        controls
        className="w-full"
        onTimeUpdate={handleTimeUpdate}
        src={v}
        type="video/mp4"
      >
        <source src={v} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;