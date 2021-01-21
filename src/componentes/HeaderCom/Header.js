import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <a className="logo">Ryck & Morphy</a>
      <div className="header-right">
        <Link to="/personajes" className="a">
          Personajes
        </Link>
      </div>
    </header>
  );
};
