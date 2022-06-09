import React, { useState } from 'react';
import Search from './components/Search';
import Token from './components/Token';
import axios from "axios";
import { Buffer } from 'buffer';
import "./App.css"

const {REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_REDIRECT_URI} = process.env

const client_id = REACT_APP_CLIENT_ID;
const client_secret = REACT_APP_CLIENT_SECRET;

const App = () => {

  const [token, setToken] = useState("")

  const {REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_REDIRECT_URI} = process.env

  const client_id = REACT_APP_CLIENT_ID;
  const client_secret = REACT_APP_CLIENT_SECRET;
  
  
  axios('https://accounts.spotify.com/api/token', {
        headers: {
          'Authorization': 'Basic ' +  ( new Buffer.from(client_id + ':' + client_secret).toString('base64')),
          'Content-Type' : 'application/x-www-form-urlencoded'
        },
        data: "grant_type=client_credentials",
        method: "POST"
      }).then(response => {
        setToken(response.data.access_token)
      })
  
  


  return (
    <div>
      <div>
        <Search token={token} />
        <Token />
      </div>
    </div>
  )
}

export default App