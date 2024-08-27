import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetic);

  return (
    <div className="Phonetic">
      <h3 className="titlephonetic">{props.phonetic}</h3>
    </div>
  );
}
