import  { useRef, useState } from 'react';
import YouTube from 'react-youtube';

const Playback = () => {
  const playerRef = useRef(null); // Ref to access the player
  const [speed, setSpeed] = useState(1); // State to track playback speed

  // Handle the onReady event
  const onReady = (event) => {
    const player = event.target;
    playerRef.current = player; // Store the player reference
  };

  // Function to change playback speed
  const changePlaybackSpeed = (speed) => {
    if (playerRef.current) {
      playerRef.current.setPlaybackRate(speed); // Set the playback speed
      setSpeed(speed); // Update state with the current speed
    }
  };

  return (
    <div>
      <h1>YouTube Player with Adjustable Speed</h1>
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
      />

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => changePlaybackSpeed(0.5)}>0.5x Speed</button>
        <button onClick={() => changePlaybackSpeed(1)}>1x Speed</button>
        <button onClick={() => changePlaybackSpeed(1.5)}>1.5x Speed</button>
        <button onClick={() => changePlaybackSpeed(2)}>2x Speed</button>
      </div>

      <p>Current Playback Speed: {speed}x</p>
    </div>
  );
};

export default Playback;
