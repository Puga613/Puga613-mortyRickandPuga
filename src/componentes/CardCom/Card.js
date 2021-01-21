import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

const Card = (props) => (
  <div className="div1">
      <div className="property-card">
      <h2>{`${props.personaje.name} `}</h2>
        <div className="property-image">
          <img
            src={props.personaje.image}
            alt={props.personaje.name}
            className="property-image"
          />
        </div>

        <div className="property-description">
          <p>{`Type: ${props.personaje.species}`}</p>
          <p>{`Status: ${props.personaje.status}`}</p>
          <p>{`Origin: ${props.personaje.origin.name}`}</p>
        </div>
      </div>
  </div>
);

export default Card;
