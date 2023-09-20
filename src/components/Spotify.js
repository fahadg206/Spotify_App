import React from "react";
import Header from "./Header";

//helper function to convert ms to minutes and seconds for the duration
const millisToMinutesAndSeconds = (ms) => {
  let minutes = Math.floor(ms / 60000);
  let seconds = ((ms % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

const Spotify = ({ songs }) => {
  const renderedSongs = songs.map((song) => {
    return (
      <div key={song.id} className="song">
        <div className="song-name">
          <a href={song["external_urls"].spotify} target="_blank">
            {song.name}
          </a>
        </div>
        <div className="album-name">
          <p>{song.album.name}</p>
        </div>
        <div className="song-duration">
          <p>{millisToMinutesAndSeconds(song.duration_ms)}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Header />
      {renderedSongs}
    </div>
  );
};

export default Spotify;
