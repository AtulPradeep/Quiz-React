import React from "react";
import Game from "./Game";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Default from "./Default";
import Quizcomp from "./Quizcomp";

export default function Home() {
  return (
    <Router>
      <div className="">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/Default">QUIZ MASTER 2.0</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Play Now</Nav.Link>
              <Nav.Link href="/Game">Game</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Default} />
          <Route exact path="/Default" component={Default} />

          <Route exact path="/Game" component={Game} />
        </Switch>
      </div>
    </Router>
  );
}
