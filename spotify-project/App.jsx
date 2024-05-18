import React, { useState } from "react";
import "./App.css";

export default function App() {
   
    const searchTerm = "Beyonce";
    const dataType = "track"; // data type could also be "track" or "artist"
    const [song, setSong] = useState(null);


    function showSong() {
        if (song) {
            return (
                <div className="card">
                    <p>{song.name}</p>
                    <img src={song.album.image_url} />
                    <div>
                        <audio controls src={song.preview_url}></audio>
                    </div>
                </div>
            );
        } else {
            return "";
        }
    }
  
    // the job of this function is to go out to the internet and get some data
    // and do something with it
    async function fetchData() {
        const baseURL = "https://www.apitutor.org/spotify/simple/one/v1/search";
        const url = `${baseURL}?q=${searchTerm}&type=${dataType}`;
        console.log(url);
        const request = await fetch(url);
        const result = await request.json();
        console.log(result);
        // set state variable to redraw...

        setSong(result);
    }

   

    return (
        <>
            <header>
                <h1>Spotify Demo</h1>
            </header>
            <main>
                <p>Hello React!</p>
                <button onClick={fetchData}>Get Data</button>
                { showSong() }
            </main>
        </>
    );
}

