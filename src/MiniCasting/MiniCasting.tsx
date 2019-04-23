import React, { Component } from 'react';
import './MiniCasting.css';

export default class CastingList extends Component<MiniCasting> {
    /*constructor(props, context) {
      super(props, context);
    }*/

    public render() {

        return (
            <div className="Competence">
                {// <Link to={`/${this.props.id}/${this.props.title}`} id={this.props.title}> </Link>
                }
                <div className="Fond"></div>
                <div className="Description">
                    <div>{this.props.title}</div>
                    <div>{this.props.comment}</div>
                </div>

            </div >
        );
    }
}

interface MiniCasting {
    //TODO: implemente l'interface
    id: number
    title: string;
    comment: string;
}
