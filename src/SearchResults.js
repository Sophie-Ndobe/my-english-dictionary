import React from "react";
import Meanings from "./Meanings";

export default function SearchResults(props) {
  //console.log(props.results);
  if (props.results) {
    return (
      <div className="SearchResults">
        <section>
          <h3>{props.results[0].word}</h3>
        </section>
        {props.results[0].meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meanings={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
