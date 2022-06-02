import React from 'react';
import axios from "axios";

const {REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_REDIRECT_URI} = process.env

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${REACT_APP_REDIRECT_URI}`


const getToken = async() => {
  const res = await axios.post("https://accounts.spotify.com/api/token", {
    params: {
      grant_type: "authorization_code",
      code: "",
      redirect_uri: REACT_APP_REDIRECT_URI
    }
  })
  console.log(res)

}

const Token = () => {
  return (
    <div>
        <a href={AUTH_URL} onClick={getToken}>Login With Spotify</a>
    </div>
  )
}

export default Token;