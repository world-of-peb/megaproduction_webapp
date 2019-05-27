import React, { Component } from 'react';
//import logo from './logo_porfolio.svg';
import './Header.css';
import { NavLink } from "react-router-dom";

export default class Header extends Component {
    /*constructor(props, context) {
      super(props, context);
    }*/


    render() {
        let logo = require('../assets/logo.jpg');
        return (
            <div className="header">
                <ul className="TopBarMenu">
                    <div>
                        <li ><img src={logo} className="lienMenu" alt="logo" width="20"/> </li>
                        <li className=""><NavLink className="lienMenu" to="/" exact>Mega Casting</NavLink></li>
                        <li className=""><NavLink className="lienMenu" to="/casting" >Liste Casting</NavLink></li>
                        <li className=""><NavLink className="lienMenu" to="/api" >api</NavLink></li>

                    </div>
                </ul>
            </div>

        );
    }
}
