import React from 'react'
import './index.css'
// import cover from "../../images/cover.svg"

const MusicItem = ({eachSong, onClick, currentSong}) => {
    console.log(eachSong)
    const formatDuration = (duration) => {
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      };
  return (
    <div className={`music-item-container ${currentSong.name === eachSong.name ? "selected" : ""}`} onClick={onClick}>
        <div className='music-profile-name-section'>
            <img className='music-cover' src={`https://cms.samespace.com/assets/${eachSong.cover}`} alt={eachSong.name} />
            <div className='music-heading-artist'>
                <h1 className='music-heading'>{eachSong.name}</h1>
                <p className='music-artist'>{eachSong.artist}</p>
            </div>
        </div>
        <p className='music-timer'>{formatDuration(eachSong.duration || 0)}</p>
    </div>
  )
}

export default MusicItem