import React from "react";
import "./Definitions.css";

export default function Definitions(props) {
  //console.log(props.definitions);

  if (props.definitions) {
    return (
      <div className="Definitions">
        <p>{props.definitions.definition}</p>

        <p className="Example">{props.definitions.example}</p>

        {props.definitions.synonyms.map(function (synonyms, index) {
          return (
            <ul key={index}>
              <li className="text-primary Synonyms">{synonyms}</li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
