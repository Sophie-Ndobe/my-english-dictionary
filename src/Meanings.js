import React from "react";

export default function Meanings(props) {
  console.log(props.meanings);

  if (props.meanings) {
    return (
      <div className="Meanings">
        <h4>{props.meanings.partOfSpeech}</h4>
        {props.meanings.definitions.map(function (definition, index) {
          return <div key={index}>definition</div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
