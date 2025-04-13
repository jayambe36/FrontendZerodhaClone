import React from "react";

function RightSection({ data }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{data.productName}</h1>
          <p>{data.productDesription}</p>
          <div>
            <a href={data.learnMore}>Learn More</a>
          </div>
        </div>
        <div className="col-6">
          <img src={data.imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
