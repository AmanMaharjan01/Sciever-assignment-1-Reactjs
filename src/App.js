import React, { Component } from "react";
import "./App.css";
import Home from "./components/home";
import Student from "./components/student";
import Details from "./components/details";
import Navigation from "./components/nav";
import PostData from "./students.json";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: PostData,
    };
  }
  render() {
    const stdDetails = ({ match }) => {
      return (
        <Details data={this.state.info.information} stdid={match.params.id} />
      );
    };
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/student"
              exact
              component={() => <Student datas={this.state.info.information} />}
            />
            <Route path="/student/:id" exact component={stdDetails} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
