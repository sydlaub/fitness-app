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
    const [nowPlaying, setNowPlaying] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        console.log("This is what we derived from the url:", getTokenFromUrl());
        const spotifyToken = getTokenFromUrl().access_token
        window.location.has = '';
        console.log("This is our spotify token", spotifyToken);

        if (spotifyToken) {
            setSpotifyToken(spotifyToken)
            // use spotify API
            spotifyApi.setAccessToken(spotifyToken);
            spotifyApi.getMe().then((user) => {
                console.log(user)
            });
            setLoggedIn(true);
        }

    });

    const getNowPlaying = () => {
        spotifyApi.getMyCurrentPlayingTrack().then((response) => {
            console.log(response);
            if (response.item) { 
                setNowPlaying({
                name: response.item.name,
                albumArt: response.item.album.images[0].url,
                artist: response.item.artists[0].name
            
            });
        }
        });
    };

    return (
        <>
            <div className='App'>
                {!loggedIn && <a href='http://localhost:8888'>Login to Spotify</a>}
                {loggedIn && (
                    <>
                        <div>
                            Now Playing: {nowPlaying.name}
                        </div>
                        <div>
                            Artist: {nowPlaying.artist}
                        </div>
                        <div><img src={nowPlaying.albumArt} style={{ height: 150 }} /></div>
                    </>
                )}
                {loggedIn && (
                    <button onClick={() => getNowPlaying()}>Check Now Playing</button>
                )}
            </ div>
        </>
    )
};


export default MusicPage;