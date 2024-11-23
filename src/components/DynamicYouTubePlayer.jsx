import { useState } from "react";
import YouTube from "react-youtube";

const DynamicYouTubePlayer = () => {
  const [videoId, setVideoId] = useState("2g811Eo7K8U");

  const changeVideo = () => {
    setVideoId("M7lc1UVf-VE"); // Switch to a new video
  };

  return (
    <div>
      <YouTube videoId={videoId} />
      <button onClick={changeVideo}>Change Video</button>
    </div>
  );
};

export default DynamicYouTubePlayer;
