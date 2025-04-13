 //retrieved
 import React from "react";

 function Universe() {
   return (
     <div className="container mt-5">
       <div className="row">
         <div className="text-center">
           <h1 className="pt-5">The Zerodha Universe</h1>
           <p className="my-3 fs-6">
             Extend your trading and investment experience even further with our
             partner platforms
           </p>
         </div>
       </div>
 
       <div
         className="row mt-5"
         style={{
           width: "90%",
           marginLeft :'10%'
           
           
         }}
       >
         <div className="col-4">
           <div>
             <img
               src="media/images/dittoLogo.png"
               alt="zerodhaFundhouse"
               style={{ width: "48%" }}
             />
           </div>
           <p>
             Our asset management venture that is creating simple and transparent
             index funds to help you save for your goals.
           </p>
         </div>
 
         <div className="col-4">
           <div>
             <img
               src="media/images/sensibullLogo.svg"
               alt="sensibullLogo"
               style={{ width: "70%" }}
               className="mb-4"
             />
           </div>
           <p>
             Options trading platform that lets you create strategies, analyze
             positions, and examine data points like open interest, FII/DII, and
             more.
           </p>
         </div>
 
         <div className="col-4">
           <div>
             <img
               src="media/images/zerodhaFundhouse.png"
               alt="rainmatterLogo"
               style={{ width: "45%" }}
             />
           </div>
           <p>
             Investment research platform that offers detailed insights on
             stocks, sectors, supply chains, and more.
           </p>
         </div>
       </div>
       <div
         className="row mt-5"
         style={{
           width: "90%",
           marginLeft :'10%'
           
         }}
       >
         <div className="col-4">
           <div>
             <img
               src="media/images/zerodhaFundhouse.png"
               alt="zerodhaFundhouse"
               style={{ width: "53%" }}
             />
           </div>
           <p>
             Our asset management venture that is creating simple and transparent
             index funds to help you save for your goals.
           </p>
         </div>
 
         <div className="col-4">
           <div>
             <img
               src="media/images/sensibullLogo.svg"
               alt="sensibullLogo"
               style={{ width: "70%" }}
               className="mb-4"
             />
           </div>
           <p>
             Options trading platform that lets you create strategies, analyze
             positions, and examine data points like open interest, FII/DII, and
             more.
           </p>
         </div>
 
         <div className="col-4">
           <div>
             <img
               src="media/images/zerodhaFundhouse.png"
               alt="rainmatterLogo"
               style={{ width: "45%" }}
             />
           </div>
           <p>
             Investment research platform that offers detailed insights on
             stocks, sectors, supply chains, and more.
           </p>
         </div>
       </div>
     </div>
   );
 }
 
 export default Universe;
 