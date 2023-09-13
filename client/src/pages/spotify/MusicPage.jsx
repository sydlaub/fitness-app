import './index.css';
import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();


const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    }, {})
};

const MusicPage = () => {
    const [spotifyToken, setSpotifyToken] = useState("");
    const [nowPlaying, SetNowPlaying] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        console.log("This is what we derived from the url:", getTokenFromUrl());
        const spotifyToken = getTokenFromUrl().access_token
        window.location.has = '';
        console.log("This is our spotify token", spotifyToken);

        if (spotifyToken) {
            setSpotifyToken(spotifyToken)
            // use spotify API
            setLoggedIn(true);
        }

    });


    return (
        <>
          <div>
            <a href='http://localhost:8888'>Login to Spotify</a>
            </ div>
        </>
    )
};


export default MusicPage;