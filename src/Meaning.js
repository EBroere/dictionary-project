import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="titlePartOfSpeech">{props.meaning.partOfSpeech}</h3>
      <hr />

      <div>
        <h3 className="title">Definition</h3>
        <div className="definition">{props.meaning.definition}</div>
        <hr />
        <h3 className="title">Example</h3>
        <div className="example">{props.meaning.example}</div>
        <hr />
        <h3 className="titleSynonyms">Synomym</h3>
        <Synonyms synonyms={props.meaning.synonyms} />
        <hr />
  
      </div>
    </div>
  );
}
