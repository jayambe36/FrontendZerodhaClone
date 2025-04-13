import React,{useState, useContext} from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function Login() {
const [userInfo, setUserInfo] = useState({email: "", password: ""});
const {login} = useContext(AuthContext);
const navigate = useNavigate();

const handleChange = (e) => {
  const {name, value} = e.target; 
  setUserInfo({...userInfo, [name]: value});
}

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("https://backendzerodhaclone.onrender.com/login", userInfo);
    if (res.data.success) {
      toast.success(res.data.message);
      login(res.data.token, res.data.user); // Update the authentication state
      setTimeout(()=>{
        navigate("/"); // Redirect to the dashboard
      },2000)
      
    } else {
      toast.error(res.data.message);
    }
  } catch (error) {
    toast.error("An error occurred during login. Please try again.");
  }
};


  return (
    <div
      className="container d-flex justify-content-center align-item-center"
      style={{ marginTop: "20vh", width: "50%" }}
    >
      <div className="col-12" style={{ width: "50%" }}>
        <h1 className="mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address : 
            </label>
            <input
              type="email"
              className="form-control"
               name="email"
              aria-describedby="emailHelp"
              value = {userInfo.email}
              onChange = {handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password : 
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value = {userInfo.password}
              onChange = {handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
      
    </div>
  );
}

export default Login;
