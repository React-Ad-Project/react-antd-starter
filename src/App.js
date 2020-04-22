import React, { Component } from "react";
import "./App.css";
import PostOffer from "./Components/PostOffer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import { SignUp } from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SignIn";
import { ProfileEdit } from "./Components/Auth/ProfileEdit";
import Profile from "./Components/Auth/Profile";
import OfferView from "./Components/Auth/OfferView";
import OfferCardProvider from "./context/OfferCardContext";
import CategoryCardProvider from "./context/CategoryCardcontext";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <CategoryCardProvider>
      <OfferCardProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/profile/edit" component={ProfileEdit} />
          <Route path="/profile" component={Profile} />
          <Route path="/view" component={OfferView} />
          <Route path="/post" component={PostOffer} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      </OfferCardProvider>
      </CategoryCardProvider>
    
  
      
    )
  }
}

export default App;
