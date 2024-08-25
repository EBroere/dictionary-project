import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <strong>Definition</strong>
        <div className="definition">{props.meaning.definition}</div>
        <strong>Example</strong>
        <div className="example">{props.meaning.example}</div>
        <strong>Synomyms</strong>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
