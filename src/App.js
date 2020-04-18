import React, { Component } from "react";
import "./App.css";
import PostOffer from "./Components/PostOffer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/post" component={PostOffer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
