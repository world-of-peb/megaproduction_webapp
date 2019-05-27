import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './MiniOffre.css';
import { casting, offre } from "../Classe/Classe"


interface offreState {
    //items: Dictionary<string>;
  
  
  }
  
  interface offreProps {
    offre: offre;
  }

export default class CastingList extends React.Component<offreProps, offreState> {
    constructor(props: offreProps) {
      super(props);
  
      
    }

    public render() {

        return (
            <div className="MiniOffre">
                     <div className="blockCasting">
                            <div >
                                <div className="FondOffre">
                                <p>{this.props.offre.metier}</p>
                                <p>{this.props.offre.contrat}</p>
                                    <img src="" alt="" />
                                </div>
                                <div className="Description">
                                    <div>{this.props.offre.libelle}</div>
                                    <div>{this.props.offre.description}</div>
                                </div>
                            </div>
                        </div>

                </div >
        );

    }
}

interface MiniOffre {
    offre: offre,
}
