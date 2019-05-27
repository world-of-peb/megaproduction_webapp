import axios from 'axios';
import React, { Component } from 'react';
import './Home.css';
import { NavLink } from "react-router-dom";
import { number } from 'prop-types';


export default class Home extends Component {
  /*constructor(props, context) {
    super(props, context);
  }*/
  state = {
    persons: {
      competitiveStats: {},
      endorsement: number,
    }
  }

  componentDidMount() {
    let url = `https://jsonplaceholder.typicode.com/users`
    url = `https://ow-api.com/v1/stats/pc/eu/Lioad-2627/profile`
    axios.get(url)
      .then((res: any) => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  public render() {



    return (
      <div className="container">

        <div className="vertical-center">
          {//  <img src="../../assets/cinema.jpg" alt=""/>
          }
          <div className="dispos_center">
            <NavLink className="bouton_list" to="/casting" exact>
              Afficher la liste des Casting
            </NavLink>
          </div>
          <div><ul>
            { /* this.state.persons.map((person:any) => <li>{person.name}</li>) 
          this.state.persons.endorsement*/
            }
          </ul>
          </div>
        </div>


      </div>
    );
  }
}
