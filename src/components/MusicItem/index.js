import React from 'react'
import './index.css'
// import cover from "../../images/cover.svg"

const MusicItem = ({eachSong, onClick}) => {
  return (
    <div className='music-item-container' onClick={onClick}>
        <div className='music-profile-name-section'>
            <img className='music-cover' src={`https://cms.samespace.com/assets/${eachSong.cover}`} alt={eachSong.name} />
            <div className='music-heading-artist'>
                <h1 className='music-heading'>{eachSong.name}</h1>
                <p className='music-artist'>{eachSong.artist}</p>
            </div>
        </div>
        <p className='music-timer'>4:16</p>
    </div>
  )
}

export default MusicItem