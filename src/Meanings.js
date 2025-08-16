import React from "react";
import Definitions from "./Definitions";

export default function Meanings(props) {
  console.log(props.meanings);

  if (props.meanings) {
    return (
      <div className="Meanings">
        {props.meanings.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <h4>{props.meanings.partOfSpeech}</h4>
              <Definitions definitions={definition} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
