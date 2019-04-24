import React, { Component } from 'react';
import './CastingList.css';
import { casting } from '../Classe/Classe';
import MiniCasting from '../MiniCasting/MiniCasting';

export default class CastingList extends Component {
  /*constructor(props, context) {
    super(props, context);
  }*/

  castingList: casting[] = [
    { id: 1, nom: "Casting 1", description: "Lorem Ipsum" },
    { id: 2, nom: "Casting 2", description: "Lorem Ipsum" },
    { id: 3, nom: "Casting 3", description: "Lorem Ipsum" },
  ];



  public render() {

    let miniCastings: React.ReactNode[] = [];
    for (let i = 0; i < this.castingList.length; i++) {
      miniCastings.push(
        <MiniCasting
          casting={this.castingList[i]}
        />)
    }; // et tu places ton {skills} dans l'html


    return (
      <div className="">
        <div className="">
          <div>

            {miniCastings}

          </div>

        </div>

        <div className="">
        </div>

      </div>
    );
  }
}

