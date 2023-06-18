import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    const { title, desc, url, id } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title ? title.slice(0, 40) : ""}...</h5>
            <p className="card-text">{desc ? desc.slice(0, 100) : ""}...</p>
            <a href={id} target="_blank" className="btn btn-sm btn-primary">
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}
