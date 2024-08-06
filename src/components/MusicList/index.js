import React, { useEffect, useState } from "react";
import "./index.css";
import search from "../../images/search.svg";
import MusicItem from "../MusicItem";

const MusicList = ({ songs }) => {
  const [filteredSongs, setFilteredSongs] = useState(songs);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    let result = songs;

    // Filter by category
    if (category === "top-track") {
      result = result.filter((song) => song.top_track === true);
      console.log(result)
    }

    // Filter by search query
    if (searchQuery) {
      result = result.filter(
        (song) =>
          song.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredSongs(result);
  }, [songs, category, searchQuery]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="music-list-container">
      <div className="music-category-container">
        <button
           className={`music-category-button ${category === '' ? 'active' : ''}`}
          onClick={handleCategoryChange}
          value=""
        >
          For You
        </button>
        <button
          className={`music-category-button ${category === 'top-track' ? 'active' : ''}`}
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
      <div className="songs-list-container">
        {filteredSongs.map((eachSong) => (
          <MusicItem eachSong={eachSong} key={eachSong.id} />
        ))}
      </div>
    </div>
  );
};

export default MusicList;
