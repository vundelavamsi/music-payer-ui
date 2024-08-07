import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import details from "../../images/details.svg";
import volumeIcon from "../../images/volumeIcon.svg";
import prevTrack from "../../images/prevTrack.svg";
import nextTrack from "../../images/nextTrack.svg";
import play from "../../images/play.svg";
import pause from "../../images/pause.svg";

const MusicPlayer = ({ song, songs, onSelectSong }) => {
  const [currentSong, setCurrentSong] = useState(song);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      setCurrentTime(0);
      audioRef.current.play().catch((error) => {
        console.error("Autoplay policy error:", error);
      });
      setIsPlaying(true);
    }
  }, [song]);

  useEffect(() => {
    setIsPlaying(false);
  }, [currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.ontimeupdate = () => {
        setCurrentTime(audioRef.current.currentTime);
      };
      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current.duration);
      };
    }
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Autoplay policy error:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const currentIndex = songs.findIndex((s) => s.id === song.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    onSelectSong(songs[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = songs.findIndex((s) => s.id === song.id);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    onSelectSong(songs[prevIndex]);
  };

  const handleSeek = (event) => {
    const seekTime = (event.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="music-player-container">
      <div className="song-heading-artist-container">
        <h1 className="heading">{song.name}</h1>
        <p className="artist-name">{song.artist}</p>
      </div>
      <img
        src={`https://cms.samespace.com/assets/${song.cover}`}
        alt="cover"
        className="cover-image"
      />
      <audio ref={audioRef} src={song.url} />
      <div className="controls">
        {/* <div className="seeker-container"></div> */}
        <div className="time-display">
          <span className="timer">{formatTime(currentTime)}</span>
          <input
            type="range"
            className="seeker-container"
            min="0"
            max="100"
            value={(currentTime / duration) * 100 || 0}
            onChange={handleSeek}
          />
          <span className="timer">{formatTime(duration)}</span>
        </div>

        <div className="music-controls-container">
          <div className="music-details-container">
            <img src={details} alt="details" />
          </div>
          <div className="music-play-pause-next-prev-container">
            <img
              src={prevTrack}
              alt="prevTrack"
              className="prev-icon"
              onClick={handlePrev}
            />
            <button className="play-pause-button" onClick={handlePlayPause}>
              {isPlaying ? (
                <img src={pause} alt="play" />
              ) : (
                <img src={play} alt="play" />
              )}
            </button>
            <img
              src={nextTrack}
              alt="nextTrack"
              className="next-icon"
              onClick={handleNext}
            />
          </div>
          <div className="volume-container">
            <img src={volumeIcon} alt="details" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
