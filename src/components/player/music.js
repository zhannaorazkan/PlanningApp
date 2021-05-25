import { useState, useEffect } from "react";
import Player from "./components/Player";
import './index.css'

function App() {
  const [songs] = useState([
    {
      title: "Animals",
      artist: "Maroon5",
      img_src: "../images/Maroon5.png",
      src: "../music/Animals.mp3",
    },
    {
      title: "Boy with Luv",
      artist: "BTS feat Halsey",
      img_src: "../images/BTS.jpg",
      src: "../music/Boy with Luv.mp3",
    },
    {
      title: "7 Rings",
      artist: "Ariana Grande",
      img_src: "/images/Ariana_Grande.png",
      src: "../music/sevenRings.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
