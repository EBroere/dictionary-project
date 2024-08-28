import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  // Ensure results and its properties are defined
  if (
    props.results &&
    props.results.meanings &&
    props.results.meanings.length > 0
  ) {
    const { word, phonetic, meanings } = props.results;

    return (
      <div className="Results">
        <h2 className="titleWord">{word}</h2>
        <Phonetics phonetic={phonetic || ""} />{" "}
        {/* Default to empty string if phonetic is undefined */}
        <hr />
        {meanings.map((meaning, index) => (
          <section key={index}>
            <Meaning meaning={meaning} />
          </section>
        ))}
      </div>
    );
  } else {
    return <div className="error">No results found</div>; // Return a message if no results
  }
}
