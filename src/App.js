import React, { Component } from "react";

const data = [
  {
    id: 1,
    first_name: "Dehlia",
    last_name: "Jedrasik",
    email: "djedrasik0@japanpost.jp",
    gender: "Female",
    ip_address: "223.212.33.214",
  },
  {
    id: 2,
    first_name: "Geno",
    last_name: "Embury",
    email: "gembury1@guardian.co.uk",
    gender: "Male",
    ip_address: "127.177.8.232",
  },
  {
    id: 3,
    first_name: "Gray",
    last_name: "Giraudeau",
    email: "ggiraudeau2@privacy.gov.au",
    gender: "Male",
    ip_address: "121.21.27.109",
  },
  {
    id: 4,
    first_name: "Gayler",
    last_name: "De Atta",
    email: "gdeatta3@nba.com",
    gender: "Agender",
    ip_address: "98.18.79.24",
  },
  {
    id: 5,
    first_name: "Donny",
    last_name: "McLeese",
    email: "dmcleese4@naver.com",
    gender: "Male",
    ip_address: "13.70.213.43",
  },
  {
    id: 6,
    first_name: "Annissa",
    last_name: "Truce",
    email: "atruce5@barnesandnoble.com",
    gender: "Female",
    ip_address: "49.251.154.110",
  },
  {
    id: 7,
    first_name: "Sigfried",
    last_name: "Haken",
    email: "shaken6@woothemes.com",
    gender: "Male",
    ip_address: "100.101.150.50",
  },
  {
    id: 8,
    first_name: "Angy",
    last_name: "Wippermann",
    email: "awippermann7@gizmodo.com",
    gender: "Female",
    ip_address: "33.42.164.58",
  },
  {
    id: 9,
    first_name: "Kimball",
    last_name: "Prescott",
    email: "kprescott8@abc.net.au",
    gender: "Male",
    ip_address: "50.99.122.48",
  },
  {
    id: 10,
    first_name: "Heda",
    last_name: "Paterno",
    email: "hpaterno9@howstuffworks.com",
    gender: "Polygender",
    ip_address: "250.3.42.246",
  },
];

export default class App extends Component {
  render() {
    return (
      <div className="container mt-3">
        <h2>Striped Rows</h2>
        <p>The .table-striped class adds zebra-stripes to a table:</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Gender</th>
              <th>IP</th>
            </tr>
          </thead>
          <tbody>
            {data.map((n) => {
              return (
                <tr>
                  <td>{n.id}</td>
                  <td>{n.first_name}</td>
                  <td>{n.last_name}</td>
                  <td>{n.gender}</td>
                  <td>{n.ip_address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
