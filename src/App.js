import ProfileSection from "./components/ProfileScection";
import MusicList from "./components/MusicList";
import MusicPlayer from "./components/MusicPlayer";
import "./App.css";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [showList, setShowList] = useState(true);

  const appContainerRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://cms.samespace.com/items/songs");
      const data = await response.json();
      setSongs(data.data);
      setCurrentSong(data.data[0] || null);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (currentSong && currentSong.accent) {
      const accentColor = currentSong.accent;
      if (appContainerRef.current) {
        appContainerRef.current.style.backgroundImage = `linear-gradient(to right, ${accentColor}, #000000)`;
      }
    } else {
      if (appContainerRef.current) {
        appContainerRef.current.style.backgroundImage = 'linear-gradient(to right, #33425E, #000000)'; // Reset to default if no song selected
      }
    }
  }, [currentSong]);

  const handleSongSelect = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="app-container" ref={appContainerRef}>
      <ProfileSection />
      <div className="show-list" onClick={() => setShowList(!showList)}>{!showList ? "Show List" : "Hide List"}</div>
      <MusicList songs={songs} onSelectSong={handleSongSelect} currentSong={currentSong} showList={showList} />
      { currentSong && <MusicPlayer song={currentSong} songs={songs} onSelectSong={handleSongSelect} showList={showList} /> }
    </div>
  );
};

export default App;
