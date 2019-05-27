import React, { Component } from 'react';
import './CastingDetails.css';
import { casting, offre } from "../Classe/Classe";
import MiniOffre from "../MiniOffre/MiniOffre";

export default class CastingDetails extends Component<InfoCompetenceProps> {
  /**constructor(props : InfoCompetenceProps) {
    super(props);
  } */



  public render() {

    let data: casting;
    const url = 'http:\\172.16.2.6\api\Casting\${this.props.match.params.id}';
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {

        data = myJson
      });

    /**
     * <div>{data.nom}</div>
              <div>{data.description}</div>
     */

    let listOffre;
    //listOffre = data.listOffre;
    let offre = { libelle: "a", description: "a", nombre_postes: 3, contrat: { libelle: "a" }, metier: { libelle: "a" } };
    //offre = listOffre[this.props.match.params.id]


    return (
      <div className="">

        <div className="">
          <div className="titreCast">
            <h1>{offre.libelle}</h1>
          </div>

          <div className="descriptionCast">
            <p>{offre.description}</p>
          </div>

          <div className="">
            <p>Metier : {offre.metier.libelle}</p>

            <p>Nombre de postes disponible: {offre.nombre_postes}</p>
            <p>Contrat : {offre.contrat.libelle}</p>

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

interface InfoCompetenceProps {
  id: number,
  match: {
    params: {
      id: number
    }
  }
}
