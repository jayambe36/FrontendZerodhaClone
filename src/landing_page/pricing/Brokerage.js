 //retrieved
 import React from 'react';

 function Brokerage() {
   return (
     <div className="container my-5">
       <div className="row">
         <div className="d-flex border-bottom" id="tabs">
           <h2 className="m-3">Equity</h2>
           <h2 className="m-3">Currency</h2>
           <h2 className="m-3">Commodity</h2>
         </div>
       </div>
 
       <div id="tab-equities" className="mt-5">
         <table className="border">
           <thead>
             <tr>
               <th>Equity delivery</th>
               <th>Equity intraday</th>
               <th>F&O - Futures</th>
               <th>F&O - Options</th>
             </tr>
           </thead>
 
           <tbody>
             <tr>
               <td>Brokerage</td>
               <td>Zero Brokerage</td>
               <td>0.03% or Rs. 20/executed order whichever is lower</td>
               <td>0.03% or Rs. 20/executed order whichever is lower</td>
               <td>Flat Rs. 20 per executed order</td>
             </tr>
             <tr>
               <td>STT/CTT</td>
               <td>0.1% on buy or sell</td>
               <td>0.025% on the sell side</td>
               <td>0.02% on the sell side</td>
               <td>
                 <ul>
                   <li>0.125% of the intrinsic value on options that are bought and exercised</li>
                   <li>0.1% on sell side (on premium)</li>
                 </ul>
               </td>
             </tr>
             <tr>
               <td>Transaction charge</td>
               <td>
                 BSE: 0.00375%
                 <br />
                 NSE: 0.00297%
               </td>
               <td>
                 BSE: 0.00375%
                 <br />
                 NSE: 0.00173%
               </td>
               <td>
                 BSE: 0
                 <br />
                 NSE: 0.03503% (on premium)
               </td>
               <td>BSE: 0.0325% (on premium)</td>
             </tr>
             <tr>
               <td>GST</td>
               <td>18% on (brokerage + SEBI charges + transaction charges)</td>
               <td>18% on (brokerage + SEBI charges + transaction charges)</td>
               <td>18% on (brokerage + SEBI charges + transaction charges)</td>
               <td>18% on (brokerage + SEBI charges + transaction charges)</td>
             </tr>
             <tr>
               <td>SEBI charges</td>
               <td>₹10 / crore</td>
               <td>₹10 / crore</td>
               <td>₹10 / crore</td>
               <td>₹10 / crore</td>
             </tr>
             <tr>
               <td>Stamp charges</td>
               <td>0.015% or ₹1500 / crore on buy side</td>
               <td>0.003% or ₹300 / crore on buy side</td>
               <td>0.002% or ₹200 / crore on buy side</td>
               <td>0.003% or ₹300 / crore on buy side</td>
             </tr>
           </tbody>
         </table>
       </div>
     </div>
   );
 }
 
 export default Brokerage;
 