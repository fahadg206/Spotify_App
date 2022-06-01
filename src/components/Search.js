import React, { useState, useEffect } from 'react';
import Spotify from './Spotify';
import axios from 'axios';

const token = 'AQBmVB-Wgabj2vD-88KRtArQmqjx76UawKJfbIMDEjPMbf5w4lfnXdWqBCsmjbY07CZAmgIlMXIKvBR2YAmSBeC9kXgcyCjL2l-F2BeNJnTb32E3MAmZVpiIGLyoBXm6ggq6tda0VWFFJFFmAaY-1S1oMo3ttJ4JDA'

const Search = () => {

    const [term, setTerm] = useState("")

    const[songs, setSongs] = useState([])


    const fetchData = async () => {
        const res = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`,
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
        fetchData()
    }
    , [])

   
    console.log(songs)
    
    return (
        <div>
            <form className='search'
                onSubmit={(e) => {
                    e.preventDefault()
                    fetchData()
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