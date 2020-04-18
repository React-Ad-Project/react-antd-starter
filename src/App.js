import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import { SignUp } from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SignIn";

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
          <Route path="/signup" component={SignUp} />
          {/* <Route path="/signup" component={SignUp}/> */}
          <Route path="/signin" component={SignIn} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
