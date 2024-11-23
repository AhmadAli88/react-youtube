
import YouTube from 'react-youtube';

const YouTubePlayer = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1, // Auto-play the video
    },
  };

  const onReady = (event) => {
    // Access the YouTube player instance via event.target
    console.log('Player is ready', event.target);
  };

  return (
    <div>
      <h2>YouTube Player Example</h2>
      <YouTube
        videoId='oDvx1vaM11U
'
        opts={opts}
        onReady={onReady}
      />
    </div>
  );
};

export default YouTubePlayer;
