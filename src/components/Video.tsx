// assisted by Cursor AI
import React from 'react';

interface VideoProps {
  src: string;
  width?: string | number;
  height?: string | number;
}

const Video: React.FC<VideoProps> = ({ src, width = '100%', height = '500px' }) => {
  return (
    <div className="video-container">
      <iframe
        src={src}
        width={width}
        height={height}
        frameBorder="0"
        allowFullScreen
        loading="lazy"
      />
      <style>
        {`
          .video-container {
            position: relative;
            overflow: hidden;
            width: 100%;
            padding-top: 56.25%; /* 16:9 Aspect Ratio */
          }
          .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Video; 