import React, { useState, useEffect } from 'react';
import Spotify from './Spotify';
import axios from 'axios';

const {REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET} = process.env

const Search = ({ token }) => {

    const [term, setTerm] = useState("nba")

    const[songs, setSongs] = useState([])

    const fetchData = async () => {
        const res = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                "Authorization": `Bearer ${token} `,
                "Content-Type": 'application/json'
            },
            params: {
                q: term,
                type: "track,artist",
                limit: 15
            }
        })
        setSongs(res.data.tracks.items)
    }

    useEffect(() => {
        fetchData()
    }
    , [])

    
    return (
        <div>
            <form 
                onSubmit={(e) => {
                    e.preventDefault()
                    fetchData()
                }}
            >
                <div className="ui search">
                    <div className="ui icon input">
                        <input 
                            className="prompt" 
                            type="text" 
                            onChange={(e) => setTerm(e.target.value)} 
                            placeholder="Artists, songs, or podcasts..." 
                        />
                        <i className="search icon" />
                    </div>
                    <div className="results"></div>
                </div>
            </form>
            <div className='spotify'>
                <Spotify songs={songs} />
            </div>
        </div>
    )

    
}

export default Search