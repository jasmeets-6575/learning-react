import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return <div>
      <Navbar />
      <News pageSize={12}/>
    </div>;
  }
}
