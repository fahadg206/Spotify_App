import React from 'react';


const Spotify = ({ songs }) => {

const renderedSongs = songs.map(song => {
    return(
        <div key={song.id} className="song">
            <a href={song["external_urls"].spotify} target="_blank">{song.name}</a>
        </div>
    )
})

    return (
        <div>{renderedSongs}</div>
    )
}

export default Spotify