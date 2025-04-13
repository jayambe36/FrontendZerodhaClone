 //retrieved
 import React, {useContext} from "react";
 import { Link, useNavigate } from "react-router-dom";
 import { AuthContext } from "./context/AuthContext";
 import { toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 
 function Navbar() {
    const {isAuthenticated, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
      logout();
      toast.success("Logout successfully", {
        position: "top-right",
      });
    }


    const goToDashboard = (evt) => {
      evt.preventDefault();
      if (isAuthenticated) {
        window.location.href = "https://zeroshadashboard.onrender.com/";
      } else {
        toast.error("Please log in to access the dashboard", {
          position: "top-center",
          autoClose: 4000,
        });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
        
      }
    };
  
   return (
     <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top mb-5" style={{ height: "10vh" }}>
       <div className="container">
         <div>
           <Link className="navbar-brand" to="/">
             <img
               src="media/images/logo.svg"
               alt="logo"
               style={{ width: "23%" }}
               className="d-inline-block align-text-top"
             />
           </Link>
         </div>
 
         <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ fontSize: "1.2rem" }}>
           <form className="d-flex" role="search">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item">

                <div className="nav-link active">
                {isAuthenticated ? (
                    <button onClick={handleLogout} style={{ background: "none", border: "none" }}>Logout</button>
                  ) : (
                    <>
                      <Link className="text-decoration-none" style={{ color: "black" }} to="/signup">
                        Signup
                      </Link>
                      <Link className="text-decoration-none" style={{ color: "black" }} to="/login">
                        /Login
                      </Link>
                    </>
                  )}
                </div>
                
               </li>
               <li className="nav-item">
                 <Link className="nav-link active" to="/about">
                   About
                 </Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link active" to="/products">
                   Products
                 </Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link active" to="/pricing">
                   Pricing
                 </Link>
               </li>
               <li className="nav-item">
                 <Link className="nav-link active" to="/support">
                   Support
                 </Link>
               </li>
               <li className="nav-item">
                  
                    <button className="nav-link active" onClick={goToDashboard}>
                   Dashboard
                 </button>
                 
               </li>
               <li className="nav-item">
                 <Link className="nav-link active" to="/">
                   <span>
                     <i className="fa-solid fa-bars"></i>
                   </span>
                 </Link>
               </li>
             </ul>
           </form>
         </div>
       
       </div>
     </nav>
   );
 }
 
 export default Navbar;
 