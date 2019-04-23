import React, { Component, Children } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import CastingList from "./CastingList/CastingList";
import CastingDetails from "./CastingDetails/CastingDetails";
import Header from "./Header/Header";

/**
 * <Route exact path="/" render={() => (
            (<Router to="/Home"/>) : (<Demarrage />))
          }/>
 */


class App extends Component {
  /*constructor(props, context) {
    super(props, context);
  }*/

  public render() {

    return (
      <Router >
        <div className="App">
          <html>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </html>
          <header className="header">
            <div id=""><Header /></div>
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/casting" component={CastingList} />
            <Route path="/casting/:name" component={CastingDetails} />

          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
            //<Route path=":id/:title" render={({ match }) => ( <InfoCompetence id={match.params.id} />  )} />
