import React, { Component } from 'react';
import './Home.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default class Home extends Component {
  /*constructor(props, context) {
    super(props, context);
  }*/

  public render() {

    return (
      <div className="container">

        <div className="vertical-center">
          {//  <img src="../../assets/cinema.jpg" alt=""/>
          }
          <div className="dispos_center">
            <NavLink className="bouton_list" to="/casting" exact>
              Afficher la liste des Casting
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
