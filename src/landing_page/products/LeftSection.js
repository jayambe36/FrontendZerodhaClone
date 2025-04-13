import React from "react";

function LeftSection({
 data
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={data.imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{data.productName}</h1>
          <p>{data.productDesription}</p>
          <div>
            <a href={data.tryDemo}>Try Demo</a>
            <a href={data.learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={data.googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={data.appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
