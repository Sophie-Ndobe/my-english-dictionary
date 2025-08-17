import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phoneticsUrl);

  return (
    <div className="Phonetics">
      <div className="AudioButton">
        <ReactAudioPlayer src={props.phoneticsUrl} />
        🔊
      </div>
    </div>
  );
}
