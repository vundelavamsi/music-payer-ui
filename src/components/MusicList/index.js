import React, { useEffect, useState } from "react";
import "./index.css";
import search from "../../images/search.svg";
import MusicItem from "../MusicItem";

const MusicList = ({ songs, onSelectSong, currentSong, showList }) => {
  const [filteredSongs, setFilteredSongs] = useState(songs);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [songsWithDuration, setSongsWithDuration] = useState(songs);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDuration = (audioUrl) => {
      return new Promise((resolve) => {
        const audio = new Audio(audioUrl);
        audio.onloadedmetadata = () => {
          resolve(audio.duration);
        };
      });
    };

    const fetchSongsWithDuration = async () => {
      const result = await Promise.all(
        songs.map(async (song) => {
          const duration = await fetchDuration(song.url);
          return { ...song, duration };
        })
      );
      setSongsWithDuration(result);
      setIsLoading(false);
    };
    fetchSongsWithDuration();
  }, [songs]);

  useEffect(() => {
    let result = songsWithDuration;

    // Filter by category
    if (category === "top-track") {
      console.log(category);
      result = result.filter((song) => song.top_track === true);
      console.log(result);
    }

    // Filter by search query
    if (searchQuery) {
      result = result.filter(
        (song) =>
          song.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    console.log(result);
    setFilteredSongs(result);
  }, [songsWithDuration, category, searchQuery]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div
      className={
        showList ? "music-list-container" : "music-list-container display-none"
      }
    >
      <div className="music-category-container">
        <button
          className={`music-category-button ${category === "" ? "active" : ""}`}
          onClick={handleCategoryChange}
          value=""
        >
          For You
        </button>
        <button
          className={`music-category-button ${
            category === "top-track" ? "active" : ""
          }`}
          onClick={handleCategoryChange}
          value="top-track"
        >
          Top Track
        </button>
      </div>
      <div className="search-element-container">
        <input
          placeholder="Search Song, Artist"
          className="search-element"
          onChange={handleSearchChange}
        />
        <img src={search} alt="search-icon" className="search-icon" />
      </div>
      {isLoading ? (
        <div className="loading-indicator">Loading...</div>
      ) : (
        <div className="songs-list-container">
          {filteredSongs.map((eachSong) => (
            <MusicItem
              eachSong={eachSong}
              key={eachSong.id}
              onClick={() => onSelectSong(eachSong)}
              currentSong={currentSong}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MusicList;
