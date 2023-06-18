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
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cc0605cd3c234fe0b243edde6467acdf&pageSize=12&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    console.log("prev clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cc0605cd3c234fe0b243edde6467acdf&pageSize=12&page=${this.setState.page -1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.setState.page - 1,
      articles: parsedData.articles,
    });
    console.log(this.articles);
  };
  
  handleNextClick = async () => {
    console.log("next clicked");
    if (this.setState.page + 1 > Math.ceil(this.state.totalResults / 9)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cc0605cd3c234fe0b243edde6467acdf&pageSize=12&page=${this.setState.page + 1}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.setState.page + 1,
        articles: parsedData.articles,
      });
      console.log(this.articles);
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
