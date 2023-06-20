import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsMonkey`;
  }

  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cc0605cd3c234fe0b243edde6467acdf&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    console.log(this.state.articles);
    return (
      <div className="container my-3" style={{ margin: "30px 0px" }}>
        <h1 className="text-center">
          NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {this.state.loading ? (
          <Loading />
        ) : (
          <>
            <div className="row">
              {this.state.articles.map((element) => {
                const {
                  title,
                  description,
                  urlToImage,
                  url,
                  author,
                  source: { name },
                } = element;
                return (
                  <div className="col-md-4" key={url}>
                    <NewsItem
                      title={title}
                      desc={description}
                      url={urlToImage}
                      id={url}
                      author={author}
                      source={name}
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
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
              >
                Next &rarr;
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}
