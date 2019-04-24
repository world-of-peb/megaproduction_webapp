import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import './MiniCasting.css';
import { casting } from "../Classe/Classe"

export default class CastingList extends Component<MiniCasting> {
    /*constructor(props, context) {
      super(props, context);
    }*/

    public render() {

        return (
            <div className="MiniCasting">
                <Link className="blockCasting" to={`/casting/${this.props.casting.nom}`} >
                    <div >
                        <div className="Fond">
                            <img src="" alt="" />
                        </div>
                        <div className="Description">
                            <div>{this.props.casting.nom}</div>
                            <div>{this.props.casting.description}</div>
                        </div>
                    </div>
                </Link>

            </div >
        );

    }
}

interface MiniCasting {
    casting: casting,
}
