import React from "react";

function Hero() {
  return (
    <div className="container text-center" style={{marginTop : "10vh"}}>
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero"
          style={{ height: "40%", width: "40wh" }}
        />
      </div>

      <div className="row text-center">

        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
