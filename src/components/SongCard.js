import React from 'react'

const SongCard = (props) => {
  return (
    <div className="song_block">
        <img src={props.imgsrc} alt="album cover"></img>
        <h3>{props.title}</h3>
        <p class="artist">{props.artist}</p>
    </div>
  )
}

export default SongCard;