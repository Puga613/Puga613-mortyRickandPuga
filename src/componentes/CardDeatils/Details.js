import React from "react";


const Card = (props) => (
  <div className="div1">
    <div className="property-card">
      <div className="property-image">
        <img
          src={props.personaje.image}
          alt={props.personaje.name}
          className="property-image"
        />
      </div>

      <div className="property-description">
        <h2>{`${props.personaje.name} `}</h2>
        <p>{`Type: ${props.personaje.species}`}</p>
      </div>
    </div>
  </div>
);

export default Card;
