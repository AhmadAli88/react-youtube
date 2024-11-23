
import YouTube from "react-youtube";

const StyledYouTubePlayer = () => {
  const onPlayerReady = (event) => {
    // Access the player if needed, e.g., play the video
    console.log("Player is ready!", event.target);
  };

  return (
    <YouTube
      videoId="2g811Eo7K8U"
      opts={{
        height: "300",
        width: "500",
      }}
      style={{
        border: "2px solid #4CAF50",
        borderRadius: "10px",
      }}
      onReady={onPlayerReady}
    />
  );
};

export default StyledYouTubePlayer;
