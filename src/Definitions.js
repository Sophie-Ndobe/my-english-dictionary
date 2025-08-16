import React from "react";

export default function Definitions(props) {
  //console.log(props.definitions);

  if (props.definitions) {
    return (
      <div className="Definition">
        <p>{props.definitions.definition}</p>
        <p>
          <em>"{props.definitions.example}"</em>
        </p>
        <p className="text-primary">{props.definitions.synonyms}</p>
      </div>
    );
  } else {
    return null;
  }
}
