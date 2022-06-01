// I have code, now just need to figure out how to use that code to get access token.
import React from 'react';

const {REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET} = process.env

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=629579831c91499992e38c561ae394bf&response_type=code&redirect_uri=http://localhost:3000`

const Token = () => {
  return (
    <div>
        <a href={AUTH_URL}>Login With Spotify</a>
    </div>
  )
}

export default Token;