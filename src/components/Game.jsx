import React from "react";
import "./CSS/Game.css";
import Quizcomp from "./Quizcomp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import Moviequiz from "./Moviequiz";
import Currentnews from "./Currentnews";
import Random from "./Random";
export default function Game() {
  const a = () => {
    console.log("printing game");
  };

  const [toggle, setToggle] = useState(false);
  const [current, setCurrent] = useState(false);
  const [movie, setMovie] = useState(false);
  const [random, setRandom] = useState(false);

  return (
    <>
      <p className="category">
        Which category do you think you are smart enough to beat me?{" "}
      </p>
      <div className="dropdown" id="drop">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuDark"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Choose the category
        </button>
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuDark"
        >
          <li>
            <button
              className="dropdown-item"
              href="/Quizcomp"
              onClick={() => setToggle(!toggle)}
            >
              {" "}
              Sports
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              href="/Moviequiz"
              onClick={() => setMovie(!movie)}
            >
              {" "}
              Movies
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              href="/Currentnews"
              onClick={() => setCurrent(!current)}
            >
              {" "}
              Current Affairs
            </button>
          </li>

          <li>
            <button
              className="dropdown-item"
              href="/Random"
              onClick={() => setRandom(!random)}
            >
              {" "}
              Random Questions
            </button>
          </li>
        </ul>
      </div>
      {toggle && <Quizcomp />}
      {movie && <Moviequiz />}
      {current && <Currentnews />}
      {random && <Random />}
    </>
  );
}
