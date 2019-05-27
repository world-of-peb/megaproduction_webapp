import React, { Component } from 'react';
import axios from 'axios';

import './CastingDetails.css';
import { casting, offre } from "../Classe/Classe";
import MiniOffre from "../MiniOffre/MiniOffre";
import { number } from 'prop-types';

interface castState {
  //items: Dictionary<string>;
  casting: casting;

}

interface castProps {
  id: number;
}


export default class CastingDetails extends React.Component<castProps, castState> {
  constructor(props: castProps) {
    super(props);

    this.state = {
      casting: {
        id: 0,
        libelle: "",
        adresse: "",
        email: "",
        telephone: 0,
        description: "",
        listOffre: []
      }
    };
  }



  componentDidMount() {
    let url = `http://172.16.2.69/api/Casting/{this.props.id}`;
    axios.get(url)
      .then((res: any) => {
        const datas = res.data;
        this.setState(state => ({ casting: datas }));

      })
  }

  public render() {


    let listOffre = this.state.casting.listOffre;
    let miniOffres: React.ReactNode[] = [];
    for (let i = 0; i < listOffre.length; i++) {
      miniOffres.push(
        <MiniOffre
          offre={listOffre[i]}
        />)
    }; // et tu places ton {skills} dans l'html


    return (
      <div className="">

        <div className="">
          <div className="titreCast">
            <h1>{this.state.casting.libelle}</h1>
          </div>

          <div className="descriptionCast">
            <p>{this.state.casting.description}</p>
            <p>contact : {this.state.casting.email}</p>
            <p>adresse : {this.state.casting.adresse}</p>

          </div>

          <div className="">

            <div className="listComp">
              <h2>Liste des offres</h2>
              {miniOffres}
            </div>
          </div>

        </div>

      </div>
    );
  }
}

//<a href={`/${'E4'}/${this.props.title}`} id={this.props.title}>
/*
interface CastingDetailsProps {
  casting: casting;

}*/
