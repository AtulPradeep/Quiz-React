import React from "react";
import "./CSS/Default.css";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from "./Game";
import { useState } from "react";
export default function Default() {
  const history = useHistory();

  return (
    <>
      <div className="float-container">
        <div className="float-childs">
          <div className="card" id="cardo">
            <div className="card-body">
              <h5 className="card-title">
                <strong>We challenge you !</strong>
              </h5>
              <p className="card-text">
                {" "}
                Quiz Master 2.0 lets you to evaluate your knowledge in different
                fields such as sports,movies,currentaffairs and general.You
                could also step up a level and choose our random quiz generator
                to feel yourself challenged.
              </p>
            </div>
          </div>
        </div>
        <div className="float-child">
          <div className="Heading"> Quiz master 2.0</div>
          <p className="powered">Powered by A-Tech</p>

          <button
            type="button"
            className="btn btn-warning"
            id="buttonplay"
            onClick={() => {
              history.push("/Game");
            }}
          >
            Play Now
          </button>

          {/* {stoggle && <Game />} */}
        </div>
      </div>
    </>
  );
}
