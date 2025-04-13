import React from "react";

function Hero() {
  return (
    <div id="supportHero" style={{height:"60vh", marginTop: "10vh"}}>
<div className="container" >
      <div className="d-flex justify-content-between p-5">
        <div className="">
          <h1 className="fs-3">Support Portal</h1>
          </div>
        <div className="fs-5">
        <a href="">Track Tickets</a>
        </div>
      </div>


      <div className="row">
        <div className="col-6 p-3">
          <div className="fs- mb-4">
            <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          </div>
          
          <div>
              <input placeholder="Eg. how do I activate F&O" />
          </div>
        
          <div className="fs-5 d-flex flex-wrap my-3">
            <a href="#" >Track account opening</a>
          <a href="#" className="mx-4">Track segment activation</a>
          <a href="#" >Intraday margins</a>
          <a href="#" className="mx-4">Kite user manual</a>
          </div>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="#">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="#">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Hero;
