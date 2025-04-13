import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  let data1 = {
    imageURL:"media/images/kite.png",
    productName:"Kite",
    productDesription:"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
    tryDemo:"",
    learnMore:"",
    googlePlay:"",
    appStore:""
  }

  let data2 = {
    imageURL:"media/images/console.png",
    productName:"Console",
    productDesription:"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
    learnMore:""
  }

  let data3 = {
    imageURL:"media/images/coin.png",
    productName:"Coin",
    productDesription:"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
    tryDemo:"",
    learnMore:"",
    googlePlay:"",
    appStore:""
  }
  let data4 ={
    imageURL:"media/images/kiteconnect.png",
    productName:"kite Connect API",
    productDesription:"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
    learnMore:""
  }
  let data5 ={
    imageURL:"media/images/varsity.png",
    productName:"Varsity mobile",
    productDesription:"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
    tryDemo:"",
    learnMore:"",
    googlePlay:"",
    appStore:""
  }

  return (
    <div style={{ marginTop: "15vh" }}>
      <Hero />
      <LeftSection
       data = {data1}
      />
      <RightSection
        data = {data2}
      />
      <LeftSection
       data = {data3}
      />
      <RightSection
       data = {data4}
      />
      <LeftSection
        data = {data5}
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe />
    </div>
  );
}

export default ProductsPage;
