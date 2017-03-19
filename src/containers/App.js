import styles from "../assets/styles/base.less";

import React from "react";
import {Router, Route, hashHistory, IndexRoute} from "react-router";

import { Layout } from "../components/Layout";
import Home from "./Home";
import List from "./List";
import { Setting } from "../components/Setting";

class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path={"/"} component={Layout}>
                    <IndexRoute component={Home} />
                    <Route path={"list/:id"} component={List}/>
                </Route>
                <Route path={"/setting"} component={Layout}>
                    <IndexRoute component={Setting} />
                </Route>
                <Route path={"*"} component={Layout}>
                    <IndexRoute component={Home} />
                </Route>
            </Router>
        );
    }
}

export default App;
