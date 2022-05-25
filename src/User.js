import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              {Object.keys(this.props.jsonData[0]).map((title) => {
                return <th>{title}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {this.props.jsonData.map((item) => {
              return (
                <tr>
                  {Object.keys(this.props.jsonData[0]).map((title) => {
                    return <td>{item[title]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
