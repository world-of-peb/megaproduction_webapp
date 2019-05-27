import React, { Component } from 'react';
import axios from 'axios';
import './CastingList.css';
import { casting } from '../Classe/Classe';
import MiniCasting from '../MiniCasting/MiniCasting';

interface castState {
  //items: Dictionary<string>;
  listCasting: casting[];

}

interface castProps {
  
}


export default class CastingList extends React.Component<castProps, castState> {
  constructor(props: castProps) {
    super(props);

    this.state = {
      listCasting: []

    };
  }


  componentDidMount() {
    let url = `http://172.16.2.69/api/Casting`;
    axios.get(url)
      .then((res: any) => {
        const datas = res.data;
        this.setState(state => ({ listCasting: datas }));

      })
  }


  public render() {

    let miniCasting: React.ReactNode[] = [];
    for (let i = 0; i < this.state.listCasting.length; i++) {
      miniCasting.push(
        <MiniCasting
          casting={this.state.listCasting[i]}
        />)
    }; // et tu places ton {skills} dans l'html



    return (
      <div className="">
        <div className="">
          <div>

            {miniCasting}

          </div>

        </div>

        <div className="">
        </div>

      </div>
    );
  }
}

