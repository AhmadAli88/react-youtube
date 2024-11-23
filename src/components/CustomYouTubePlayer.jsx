import { useState } from "react";
import YouTube from "react-youtube";

const CustomYouTubePlayer = () => {
  const [player, setPlayer] = useState(null);

  const opts = {
    height: "390",
    width: "640",
    playerVars: { autoplay: 0 },
  };

  const onReady = (event) => {
    setPlayer(event.target); // Save the player instance
  };

  const playVideo = () => player && player.playVideo();
  const pauseVideo = () => player && player.pauseVideo();

  return (
    <div>
      <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onReady} />
      <button onClick={playVideo}>Play</button>
      <button onClick={pauseVideo}>Pause</button>
    </div>
  );
};

export default CustomYouTubePlayer;
