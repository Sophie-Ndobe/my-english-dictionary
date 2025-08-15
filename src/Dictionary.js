import axios from "axios";
import React, { useState } from "react";
import SearchResults from "./SearchResults";

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
      <h2>This is the dictionary component</h2>
      <form onSubmit={handleSubmitForm}>
        <input type="search" onChange={handleChange} />
      </form>
      <SearchResults results={results} />
    </div>
  );
}
