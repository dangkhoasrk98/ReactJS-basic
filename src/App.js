import React, { Component } from "react";
import User from './User';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 1,
    };
  }

  render() {
    const data = [{
      "id": 1,
      "first_name": "Elonore",
      "last_name": "Ferrer",
      "ip_address": "249.69.63.111"
    }, {
      "id": 2,
      "first_name": "Shirline",
      "last_name": "Waleran",
      "ip_address": "159.172.208.64"
    }, {
      "id": 3,
      "first_name": "Levey",
      "last_name": "Goodison",
      "ip_address": "220.126.99.201"
    }, {
      "id": 4,
      "first_name": "Braden",
      "last_name": "Jobbins",
      "ip_address": "126.57.92.242"
    }, {
      "id": 5,
      "first_name": "Riannon",
      "last_name": "Camplejohn",
      "ip_address": "1.27.116.233"
    }, {
      "id": 6,
      "first_name": "Muhammad",
      "last_name": "Querree",
      "ip_address": "107.92.241.86"
    }, {
      "id": 7,
      "first_name": "Carver",
      "last_name": "Davidzon",
      "ip_address": "181.235.241.176"
    }, {
      "id": 8,
      "first_name": "Nicol",
      "last_name": "Deluce",
      "ip_address": "190.156.19.128"
    }, {
      "id": 9,
      "first_name": "Aluino",
      "last_name": "Bradwell",
      "ip_address": "67.192.29.232"
    }, {
      "id": 10,
      "first_name": "Ambros",
      "last_name": "Gellier",
      "ip_address": "245.85.105.101"
    }]

    var randomClick = () => {
      this.setState({
        number: Math.random() * 10,
      });
    };
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button
          onClick={() => {
            randomClick();
          }}
        >
          Click
        </button>

        <hr></hr>        
        <User jsonData={data}/>
      </div>
    );
  }
}
