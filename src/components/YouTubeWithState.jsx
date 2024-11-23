import { useState } from "react";
import YouTube from "react-youtube";

const YouTubeWithState = () => {
  const [playerState, setPlayerState] = useState("");

  const handleStateChange = (event) => {
    const state = event.data;
    switch (state) {
      case -1:
        setPlayerState("Unstarted");
        break;
      case 0:
        setPlayerState("Ended");
        break;
      case 1:
        setPlayerState("Playing");
        break;
      case 2:
        setPlayerState("Paused");
        break;
      default:
        setPlayerState("Unknown");
    }
  };

  return (
    <div>
      <YouTube videoId="2g811Eo7K8U" onStateChange={handleStateChange} />
      <p>Player State: {playerState}</p>
    </div>
  );
};

export default YouTubeWithState;
