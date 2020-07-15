import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <div className="nav">
        <ul className="container">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/student">
            <li>Student</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
