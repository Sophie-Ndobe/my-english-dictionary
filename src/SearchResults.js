import React from "react";

export default function SearchResults(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="SearchResults">
        <h3>{props.results[0].word}</h3>
        {props.results[0].meanings.map(function (meaning, index) {
          return <div key={index}>meaning</div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
