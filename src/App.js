import React, { useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";


const spotify = new SpotifyWebApi(); // Global object created that will help us to interact with spotify api


function App() {
  // const [token, setToken] = useState(null);

  // if we want to get anything from the data layer then we will follow the syntax given below
  const [{ user, token }, dispatch] = useDataLayerValue();
  // dispatch is like a gun which is used to shoot the data layer with some values i.e if we want to update the data layer with some values we will use dispatch
  //in above line we are pulling the user from the data layer 


  //run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    // console.log('I have a token ->',token)
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({ // dispatch will pop the user into the data layer
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      })

      spotify.getPlaylist('5dZdcND1dq4rnSl8lMjRHt').then(response =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      spotify.getMyTopArtists().then((response) =>
      dispatch({
        type: "SET_TOP_ARTISTS",
        top_artists: response,
      })
    );
    };
  }, []);
  console.log("🤠", user);
  console.log("👾 ",token)
  return <div className="app">{token ? <Player spotify={spotify} /> : <Login />}</div>;
}

export default App;
