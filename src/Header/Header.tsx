import React, { Component } from 'react';
//import logo from './logo_porfolio.svg';
import './Header.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default class Header extends Component {
    /*constructor(props, context) {
      super(props, context);
    }*/

    render() {
        return (
            <div className="header">
                <ul className="TopBarMenu">
                    <div>

                        <li><img className="lienMenu" src="https://i.pinimg.com/originals/9f/b1/25/9fb125f1fedc8cc62ab5b20699ebd87d.gif" alt="" width="25" /></li>
                        <li className=""><NavLink className="lienMenu" to="/" exact>Mega Casting</NavLink></li>
                        <li className=""><NavLink className="lienMenu" to="/casting" >Liste Casting</NavLink></li>

                    </div>
                </ul>
            </div>

        );
    }
}
