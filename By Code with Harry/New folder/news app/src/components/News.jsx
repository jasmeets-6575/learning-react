import React, { Component } from "react";
import NewsItem from "./NewsItem";
import * as data from "../../sample-output.json";

export default class News extends Component {
  articles = data.articles;
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            const { title, description, urlToImage, url } = element;
            return (
              <div className="col-md-4" key={url}>
                <NewsItem
                  title={title}
                  desc={description}
                  url={urlToImage}
                  id={url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
