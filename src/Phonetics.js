import React, { useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phoneticsUrl);

  let audioRef = useRef(null);

  function handlePlay() {
    if (audioRef) {
      audioRef.current.audioEl.current.play();
    }
  }

  return (
    <div className="Phonetics">
      <div className="AudioButton">
        <ReactAudioPlayer
          src={props.phoneticsUrl.phonetics[0].audio}
          ref={audioRef}
          controls={false}
        />
        <button onClick={handlePlay} className="AudioButton">
          🔊
        </button>
      </div>
    </div>
  );
}
