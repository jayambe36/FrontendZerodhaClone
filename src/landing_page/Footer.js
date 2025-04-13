
 //retrieved
 import React from 'react';

 function Footer() {
   return (
     <div className="container mt-5 mb-5">
       <div className="row">
         <div className="col-3">
           <div>
             <img
               src="media/images/logo.svg"
               alt="logo"
               style={{ width: "60%", height: "60%" }}
               className="mb-3"
             />
             <p>
               © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
             </p>
           </div>
           <div className="fs-4 text-muted">
             <div
               className="d-flex justify-content-between flex-wrap"
               style={{ width: "70%" }}
             >
               <span style={{ marginLeft: "20px" }}>
                 <i className="fa-brands fa-x-twitter"></i>
               </span>
               <span style={{ marginLeft: "20px" }}>
                 <i className="fa-brands fa-facebook"></i>
               </span>
               <span style={{ marginLeft: "20px" }}>
                 <i className="fa-brands fa-instagram"></i>
               </span>
               <span style={{ marginLeft: "20px" }}>
                 <i className="fa-brands fa-youtube"></i>
               </span>
               <span style={{ marginLeft: "20px" }}>
                 <i className="fa-brands fa-linkedin-in"></i>
               </span>
               <span style={{ marginLeft: "20px" }}>
                 <i className="fa-brands fa-telegram"></i>
               </span>
               <span style={{ marginLeft: "20px" }}>
                 <i className="fa-brands fa-whatsapp"></i>
               </span>
             </div>
           </div>
         </div>
 
         <div className="col-3">
           <h1 className="mb-4">Company</h1>
           <a href="#" className="text-decoration-none d-block mb-2">About</a>
           <a href="#" className="text-decoration-none d-block mb-2">Products</a>
           <a href="#" className="text-decoration-none d-block mb-2">Pricing</a>
           <a href="#" className="text-decoration-none d-block mb-2">Referral program</a>
           <a href="#" className="text-decoration-none d-block mb-2">Careers</a>
           <a href="#" className="text-decoration-none d-block mb-2">Press & media</a>
           <a href="#" className="text-decoration-none d-block mb-2">Zerodha Cares (CSR)</a>
           <a href="#" className="text-decoration-none d-block mb-2">Technology</a>
         </div>
 
         <div className="col-3">
           <h1 className="mb-4">Support</h1>
           <a href="#" className="text-decoration-none d-block mb-2">Contact</a>
           <a href="#" className="text-decoration-none d-block mb-2">Support portal</a>
           <a href="#" className="text-decoration-none d-block mb-2">Z-Connect blog</a>
           <a href="#" className="text-decoration-none d-block mb-2">List of charges</a>
           <a href="#" className="text-decoration-none d-block mb-2">Downloads & resources</a>
         </div>
 
         <div className="col-3">
           <h1 className="mb-4">Account</h1>
           <a href="#" className="text-decoration-none d-block mb-2">Open an account</a>
           <a href="#" className="text-decoration-none d-block mb-2">Fund transfer</a>
           <a href="#" className="text-decoration-none d-block mb-2">60 day challenge</a>
         </div>
       </div>
 
       <div>
         <p>
           Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
         </p>
 
         <p>
           Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
         </p>
 
         <p>
           Smart Online Dispute Resolution | Grievances Redressal Mechanism
         </p>
 
         <p>
           Investments in securities market are subject to market risks; read all the related documents carefully before investing
         </p>
 
         <p>
           Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
         </p>
 
         <p>
           "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
         </p>
 
         <div className="d-flex">
           <a href="#"><p>   NSE</p></a>
           <a href="#"><p>   BSE</p></a>
           <a href="#"><p>   MCX</p></a>
           <a href="#"><p>   Terms & conditions</p></a>
           <a href="#"><p> Policies & procedures  </p></a>
           <a href="#"><p>   Privacy policy Disclosure For investor's attention</p></a>
           <a href="#"><p>   Investor charter</p></a>
         </div>
       </div>
     </div>
   );
 }
 
 export default Footer;
 