import axios from "axios";
import React, { useState } from "react";
import SearchResults from "./SearchResults";
import Images from "./Images";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [images, setImages] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function displayImages(response) {
    setImages(response.data.photos);
  }

  function displayResults(response) {
    setResults(response.data);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    axios.get(apiUrl).then(displayResults);

    let pexelApiKey =
      "DBJHcCFEaIeyZ0Z1yzNoJTQv7XqgsaMxdi46uyuUQ6AfD3psmbSbI8TO";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    let headers = { Authorization: `${pexelApiKey}` };

    axios.get(pexelApiUrl, { headers: headers }).then(displayImages);
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
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
        <Images images={images} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
