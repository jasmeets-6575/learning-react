import React, { Component } from "react";
import NewsItem from "./NewsItem";
import * as data from "../../sample-output.json"

export default class News extends Component {
    articles = data.articles
    constructor() {
        super();
        this.state = {
            articles: this.articles
        }
    }
    render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
        </div>
      </div>
    );
  }
}
