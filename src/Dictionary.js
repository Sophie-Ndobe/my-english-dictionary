import axios from "axios";
import React, { useState } from "react";
import SearchResults from "./SearchResults";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState(" ");
  let [results, setResults] = useState(null);

  function displayResults(response) {
    setResults(response.data);
  }

  function handleSubmitForm(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(displayResults);
  }

  function handleChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h2>Which word would you like to search for?</h2>
        <form onSubmit={handleSubmitForm}>
          <input type="search" onChange={handleChange} />
        </form>
        <div className="Suggestion">
          suggested word: time, life, flower, travel
        </div>
      </section>

      <SearchResults results={results} />
    </div>
  );
}
