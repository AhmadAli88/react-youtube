/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import YouTube from 'react-youtube';

const Duration = () => {
  // Handle the onReady event
  const onReady = (event) => {
    const duration = event.target.getDuration(); // Total video duration
    const currentTime = event.target.getCurrentTime(); // Current playback time
    console.log(`Duration: ${duration}, Current Time: ${currentTime}`);

    // Log duration every 2 seconds
    setInterval(() => {
      const newCurrentTime = event.target.getCurrentTime();
      console.log(`Current Time: ${newCurrentTime}`);
    }, 2000);
  };

  // Handle state change event (optional)
  const onStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      console.log("Video is playing");
    } else if (event.data === window.YT.PlayerState.PAUSED) {
      console.log("Video is paused");
    }
  };

  const onEnd = (event) => {
    console.log('Video ended!');
  };

  return (
    <div>
      <h1>YouTube Player Example</h1>
      <YouTube
        videoId="oDvx1vaM11U" // Example video ID
        opts={{
          height: '390',
          width: '640',
          playerVars: {
            autoplay: 1, // Autoplay video when ready
          },
        }}
        onReady={onReady} // When the player is ready
        onStateChange={onStateChange} // When the state of the player changes
        onEnd={onEnd} // When the video ends
      />
    </div>
  );
};

export default Duration;
