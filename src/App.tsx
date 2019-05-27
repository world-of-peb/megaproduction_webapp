import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import DocumentTitle from "react-document-title";
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

            <head>
              <DocumentTitle title='MegaCasting' />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <header className="header">
              <div id=""><Header /></div>
            </header>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/casting" component={CastingList} />

              {//<Route path="/casting/:nom" render={({ match }) => (<CastingDetails />)} />
                // <Route exact path="/casting/:id" component={(props) => <CastingDetails casting={match.params.casting} {...props} />} />

                // <Route path=":id/:nom" component={CastingDetails} />
              }
              <Route path="/casting/:id/" component={CastingDetails} />
            </Switch>
          </html>
        </div>
      </Router>
    );
  }
}
export default App;
//<Route path=":id/:title" render={({ match }) => (<InfoCompetence id={match.params.id} />)} />

