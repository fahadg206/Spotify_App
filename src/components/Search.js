import React, { useState, useEffect } from 'react';
import Spotify from './Spotify';
import axios from 'axios';

const {REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET} = process.env

const Search = () => {

    const [term, setTerm] = useState("")

    const[songs, setSongs] = useState([])

    const fetchData = async () => {
        const res = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer `,
            },
            params: {
                q: term,
                type: "track,artist",
                limit: 10
            }
        })
        
        setSongs(res.data)
    }

    useEffect(() => {
        //fetchData()
    }
    , [])

   
    console.log(songs)
    
    return (
        <div>
            <form className='search'
                onSubmit={(e) => {
                    e.preventDefault()
                    //fetchData()
                }}
            >
                <label>Search Song: </label>
                <input
                onChange={(e) => setTerm(e.target.value)}
                type="text" 
                />
            </form>
            <div className='spotify'>
                <Spotify/>
            </div>
        </div>
    )

    
}

export default Search