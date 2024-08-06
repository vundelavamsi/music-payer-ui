import ProfileSection from "./components/ProfileScection";
import MusicList from "./components/MusicList";
import MusicPlayer from "./components/MusicPlayer";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://cms.samespace.com/items/songs");
      const data = await response.json();
      setSongs(data.data);
      setCurrentSong(data.data[0] || null);
    }
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <ProfileSection />
      <MusicList songs={songs} onSelectSong={setCurrentSong} />
      <MusicPlayer song={currentSong} />
    </div>
  );
};

export default App;
