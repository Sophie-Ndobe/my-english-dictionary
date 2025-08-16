import React from "react";
import "./Definitions.css";

export default function Definitions(props) {
  console.log(props.definitions);

  if (props.definitions) {
    return (
      <div className="Definitions">
        <p>{props.definitions.definition}</p>

        <p className="Example">{props.definitions.example}</p>

        <p className="text-primary">{props.definitions.synonyms}</p>
      </div>
    );
  } else {
    return null;
  }
}
