import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import "./SearchResults.css";

export default function SearchResults(props) {
  if (props.results) {
    return (
      <div className="SearchResults">
        <section>
          <div className="row">
            <div className="col-2">
              <Phonetics phoneticsUrl={props.results[0]} />
            </div>
            <div className="col-10 p-0">
              <h3>{props.results[0].word}</h3>
            </div>
            <div className="col-2"></div>
            <div className="col-10 p-0">
              <div className="PhoneticText">{props.results[0].phonetic}</div>
            </div>
          </div>
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
