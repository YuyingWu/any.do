import React from "react";
import {connect} from "react-redux";
import {Router, Route, hashHistory, IndexRoute} from "react-router";

import { Layout } from "../components/Layout";
import { Home } from "../components/Home";
import { Setting } from "../components/Setting";

class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path={"/"} component={Layout}>
                    <IndexRoute component={Home} />
                    <Route path={"setting"} component={Setting}/>
                </Route>
                <Route path={"*"} component={Layout}>
                    <IndexRoute component={Home} />
                </Route>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      // user: state.user,
      // math: state.math
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // setName: (name) => {
        //     dispatch(setName(name));
        // }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
