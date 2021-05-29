import React, { useState, useEffect} from "react";
import "./MusicCards.css";
import MusicCard from "react-tinder-card";
import axios from "./axios";
import SwipeButtons from "./SwipeButtons";

export default function MusicCards(props) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/comparte-canciones/cards");
      setSongs(req.data);
    }
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("Removiendo: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " salió de la pantalla");
  };

  const handleClick = (e) => {
    console.log("hola");
  };

  return (
    <div>
      <div className="musicCards">
        {songs.map((song) => (
          <MusicCard
            className="swipe"
            key={song._id}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, song.name)}
            onCardLeftScreen={() => outOfFrame(song.name)}
          >
            <div
              style={{ backgroundImage: `url(${song.imageUrl})` }}
              className="card"
            >
              <h3>{song.name}</h3>
            </div>
          </MusicCard>
        ))}
      </div>
      <div>
          <SwipeButtons handleClick = {() => handleClick}/>
      </div>
    </div>
  );
}
