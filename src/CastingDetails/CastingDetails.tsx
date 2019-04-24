import React, { Component } from 'react';
import './CastingDetails.css';
import { casting } from "../Classe/Classe"

export default class CastingDetails extends Component<InfoCompetenceProps> {
  /*constructor(props, context) {
    super(props, context);
  }*/

  public render() {

    return (
      <div className="">

        <div className="">

          <div>{this.props.match.params.casting.nom}</div>
          <div>{this.props.match.params.casting.description}</div>

        </div>

      </div>
    );
  }
}

//<a href={`/${'E4'}/${this.props.title}`} id={this.props.title}>

interface CastingDetailsProps {
  casting: casting;

}

interface InfoCompetenceProps {
  id: number;
  match: {
    params: {
      casting: casting
    }
  }
}
