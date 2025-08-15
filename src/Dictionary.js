import axios from "axios";
import React, { useState } from "react";

export default function Dictionary() {
  let [word, setWord] = useState(" ");

  function displayResults(response) {
    console.log(response);
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
    </div>
  );
}
