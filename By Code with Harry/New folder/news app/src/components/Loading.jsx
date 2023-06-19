import React, { Component } from "react";
import loading from "../assets/Spinner-0.8s-251px.gif";

export default class Loading extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="loading" />
      </div>
    );
  }
}
