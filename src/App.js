import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Filter from "./Components/Filter";
class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/filter" component={Filter} />

                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
