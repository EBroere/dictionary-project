import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null); 
  let [photos, setPhotos] = useState(null);
  let [error, setError] = useState("");

  function handleResponse(response) {
    if (
      response.data &&
      response.data.meanings &&
      response.data.meanings.length > 0
    ) {
      setResult({
        word: response.data.word,
        phonetic: response.data.phonetics
          ? response.data.phonetics.map((p) => p.text).join(", ")
          : "",
        meanings: response.data.meanings,
      });
      setError(""); // Clear any previous errors
      fetchPhotos();
    } else {
      setResult(null);
      setPhotos(null); // Clear photos if the word is not found
      setError("Word not found"); // Set error message
    }
  }

  function fetchPhotos() {
    const apiKey = `bd30oafc2f7e9f6a35bab68ba504ft6c`;
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(imagesApiUrl).then(handleImagesResponse);
  }

  function handleImagesResponse(response) {
    if (response.data.photos && response.data.photos.length > 0) {
      setPhotos(response.data.photos);
    } else {
      setPhotos(null); // Clear photos if no images are found
    }
  }

  function search(event) {
    event.preventDefault();

    const apiKey = `bd30oafc2f7e9f6a35bab68ba504ft6c`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          className="Search"
          onChange={handleKeywordChange}
          autoFocus={true}
          placeholder="Search for a word..."
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
      {error && <div className="error">{error}</div>}{" "}
      {/* Display error if any */}
      {result && <Results results={result} />} {/* Pass singular result */}
      {photos && <Photos photos={photos} />}
    </div>
  );
}
