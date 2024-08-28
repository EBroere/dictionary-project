import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          <h3 className="title">photo</h3>
          {props.photos.map((images) => (
            <div className="col-4">
              <a href={images.src.original} target="_blank" rel="noreferrer">
                <img
                  src={images.src.landscape}
                  className="img-fluid"
                  alt="Searched word"
                ></img>
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
