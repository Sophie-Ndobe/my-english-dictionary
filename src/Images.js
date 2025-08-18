import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.images) {
    return (
      <section>
        <div className="Images row">
          {props.images.map(function (image, index) {
            return (
              <div key={index} className="col-4">
                <img
                  src={image.src.landscape}
                  alt={image.alt}
                  className="img-fluid"
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
