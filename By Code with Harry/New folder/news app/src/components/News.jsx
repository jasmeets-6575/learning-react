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
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=cc0605cd3c234fe0b243edde6467acdf&page=1&pageSize=9";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=cc0605cd3c234fe0b243edde6467acdf&page=${
      this.setState.page - 1
    }&pageSize=9`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.setState.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    if (this.setState.page + 1 > Math.ceil(this.state.totalResults / 9)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=cc0605cd3c234fe0b243edde6467acdf&page=${
        this.setState.page + 1
      }&pageSize=9`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.setState.page + 1,
        articles: parsedData.articles,
      });
    }
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
            className="btn btn-primary"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
