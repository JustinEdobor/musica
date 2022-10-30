import React from 'react'
import '../assets/css/Songs.css';
import SongCard from "./SongCard";
import SongCardData from "./SongCardData"

class NewSong extends React.Component {
  render() {
    return (
    <>
       <h1>New releases</h1>
         <div class="song_section">
          {SongCardData.map((ide, num) =>{
               return (
                   <SongCard
                   key={num}
                   imgsrc={ide.imgsrc}
                   title={ide.title}
                   artist={ide.artist}
                   />
               )
           })}
       </div>
    </>
    )       
  }
}

export default NewSong;