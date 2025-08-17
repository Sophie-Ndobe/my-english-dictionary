import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import "./SearchResults.css";

export default function SearchResults(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="SearchResults">
        <section>
          <div className="row">
            <div className="col-2">
              <Phonetics />
            </div>
            <div className="col-10">
              <h3>{props.results[0].word}</h3>
            </div>
          </div>

          <div>{props.results[0].phonetic}</div>
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
