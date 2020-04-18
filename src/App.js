import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import { SignUp } from "./Components/Auth/SignUp";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" component={Home} /> */}
          <Route path="/" component={SignUp} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
