import React from 'react'
import '../assets/css/ControlBar.css';
import Control from './Control'
import VolumeBar from './VolumeBar'
import Slider from './Slider'
import playmusic from '../assets/img/song1.png';

const ControlBar = () => {

    return (
    <div className="control_bar">
      <div className="song_play flex-initial w-32 fl-small">
        <img src={playmusic} width="50px" height="50px"></img>
          <div className="song_play_details">
            <h3>mountain </h3>
            <p>The van</p> 
         </div>
      </div>
      <div className="cont">
        <Control />
        <Slider />
      </div>
      <div className="vol-bar">
        <VolumeBar />
      </div>
    </div>
    )
  
}

export default ControlBar;