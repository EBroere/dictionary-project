import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    console.log(response.data.meanings[0]);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://www.shecodes.io/learn/apis/dictionary
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
          placeholder="Type the word that you want to look up here..."
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
      <Results results={results} />
    </div>
  );
}
