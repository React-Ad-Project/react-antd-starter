import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Filter from "./Components/Filter";
import OfferDetails from "./Components/OfferDetails"

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/details" component={OfferDetails} />
                    <Route path="/filter" component={Filter} />

                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
