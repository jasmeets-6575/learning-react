import React, { Component } from "react";
import NewsItem from "./NewsItem";
import * as data from "../../sample-output.json";

export default class News extends Component {
  articles = data.articles;
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cc0605cd3c234fe0b243edde6467acdf&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }
  
  handlePrevClick = () => {
    console.log("prev");
  };

  handleNextClick = () => {
    console.log("next");
  };

  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
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
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            class="btn btn-primary"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
