import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    const { title, desc, url, id, author, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0 start-0 translate-middle-y badge rounded-pill bg-danger z-1" >
               {source? source : "unknown"}
              </span>
          <img
            src={
              url
                ? url
                : "https://img.etimg.com/thumb/msid-101060778,width-1070,height-580,imgsize-572969,overlay-etwealth/photo.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title
                ? title.slice(0, 40)
                : "SGB: Sovereign Gold Bond Scheme 2023-24 Series I issue price announced; check details - The Economic Times"}
              ...
            </h5>
            <p className="card-text">
              {desc
                ? desc.slice(0, 100)
                : "The Reserve Bank of India (RBI) has kept the settlement date of this tranche of Sovereign Gold Bond Scheme 2023-24 Series as June 27, 2023."}
              ...
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "unknown"}
              </small>
            </p>
            <a
              href={
                id
                  ? id
                  : "https://economictimes.indiatimes.com/wealth/invest/sgb-sovereign-gold-bond-scheme-2023-24-series-i-issue-price-announced-check-details/articleshow/101060746.cms"
              }
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}
