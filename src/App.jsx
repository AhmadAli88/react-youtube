import './App.css';
import CustomYouTubePlayer from './components/CustomYouTubePlayer';
import Duration from './components/Duration';
import DynamicYouTubePlayer from './components/DynamicYouTubePlayer';
import Playback from './components/PlayBack';
import StyledYouTubePlayer from './components/Styled';
import YouTubePlayer from './components/YouTubePlayer';

function App() {
  return (
    <div>
      <YouTubePlayer />
      <CustomYouTubePlayer/>
      <DynamicYouTubePlayer/>
      <StyledYouTubePlayer/>
      <Duration/>
      <Playback/>
    </div>
  );
}

export default App;
