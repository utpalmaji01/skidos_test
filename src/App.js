import React, { Component } from "react";
import Login from "./pages/login"
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/general.scss";
import Header from "./components/Header";
import { Route, Router,Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Announcements from "./pages/announcements";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <>
        {/* <OnBoardng /> */}
        <Router history={history}>
        <Header history={history} />
        <div className="contant-container">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/announcements" component={Announcements} />
          </Switch>
        </div>
        </Router>
      </>
    );
  }
}

export default App;
