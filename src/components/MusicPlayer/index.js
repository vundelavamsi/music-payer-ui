import React from 'react'
import "./index.css"
import details from "../../images/details.svg"
import volumeIcon from "../../images/volumeIcon.svg"
import prevTrack from "../../images/prevTrack.svg"
import nextTrack from "../../images/nextTrack.svg"
import play from "../../images/play.svg"


const MusicPlayer = () => {
    // const response = await fetch("https://cms.samespace.com/assets/4f718272-6b0e-42ee-92d0-805b783cb471")
    // console.log(response);
    return (
    <div className='music-player-container'>
        <div className='song-heading-artist-container'>
            <h1 className='heading'>Starboy</h1>
            <p className='artist-name'>The Weekend</p>
        </div>
        <img src="https://cms.samespace.com/assets/4f718272-6b0e-42ee-92d0-805b783cb471" alt='cover' className='cover-image' />
        <div className='controls'>
            <div className='seeker-container'>

            </div>
            <div className='music-controls-container'>
                <div className='music-details-container'>
                    <img src={details} alt='details' />
                </div>
                <div className='music-play-pause-next-prev-container'>
                    <img src={prevTrack} alt='prevTrack' className='prev-icon' />
                    <img src={play} alt='play' />
                    <img src={nextTrack} alt='nextTrack' className='next-icon' />

                </div>
                <div className='volume-container'>
                <img src={volumeIcon} alt='details' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MusicPlayer