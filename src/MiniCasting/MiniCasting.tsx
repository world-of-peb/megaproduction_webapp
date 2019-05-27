import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './MiniCasting.css';
import { casting } from "../Classe/Classe"

export default class CastingList extends Component<MiniCasting> {
    /**constructor(props, context) {
         super(props, context);
    }*/

    public render() {

        return (
            <div className="MiniCasting">
                <Link to={`casting/${this.props.casting.id}/`} id={this.props.casting.id.toString()} >
                    <div className="blockCasting">
                        <div >
                            <div className="Fond">
                                <img src="" alt="" />
                            </div>
                            <div className="Description">
                                <div>{this.props.casting.libelle}</div>
                                <div>{this.props.casting.description}</div>
                            </div>
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
