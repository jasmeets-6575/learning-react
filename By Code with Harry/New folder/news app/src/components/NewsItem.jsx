import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <div className="card" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="/newsContainer" className="btn btn-primary">
            Read More...
          </a>
        </div>
      </div>
    );
  }
}
