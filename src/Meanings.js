import React from "react";
import Definitions from "./Definitions";
import "./Meanings.css";

export default function Meanings(props) {
  //  console.log(props.meanings);

  if (props.meanings) {
    return (
      <div className="Meanings">
        {props.meanings.definitions.map(function (definition, index) {
          return (
            <section key={index}>
              <h4>{props.meanings.partOfSpeech}</h4>

              <Definitions definitions={definition} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
