import React from 'react';

const VideoPlaylist = ({ videos, onVideoClick }) => {
  return (
    <div className="w p-4 border-r overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Video Playlist</h2>
      <ul>
        {/* {videos.map((video, index) => ( */}
          <li
            // key={index}
            className="cursor-pointer hover:bg-gray-200 p-2 rounded mb-2"
            // onClick={() => onVideoClick(video.url)}
          >
            {/* {video.title} */}
            video title
          </li>
        {/* ))} */}
      </ul>
    </div>
  );
};

export default VideoPlaylist;