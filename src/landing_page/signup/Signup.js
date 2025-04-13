
 //retrieved
import React, { useState} from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [newUser, setNewUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://backendzerodhaclone.onrender.com/signup", newUser);
      console.log(res);
      toast.success(res.data.message);

      setNewUser({
        fullName: "",
        email: "",
        password: "",
      });
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="container" style={{ marginTop: "20vh" }}>
      <ToastContainer />
      <div className="mb-5 text-center">
        <h1 className="text-muted" style={{ fontSize: "3.1rem" }}>
          Open a free demat and trading account online
        </h1>
        <p className="fs-4 text-muted">
          Start investing brokerage free and join a community of 1.5+ crore
          investors and traders
        </p>
      </div>

      <div className="row mt-4">
        <div className="col-6 text-center">
          <img
            src="media/images/signup.png"
            alt="console"
            className="img-fluid"
            style={{ width: "98%" }}
          />
        </div>
        <div className="col-6 mt-4 p-3">
          <form onSubmit={handelSubmit}>
            <h1 className="mb-4">Signup Now</h1>
            <div className="mb-3 fs-5">
              <label htmlFor="fullName">Full Name : </label>
              <br />
              <input
                type="text"
                id="fullName"
                value={newUser.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="fs-5 mb-3">
              <label htmlFor="email">Email : </label>
              <br />
              <input
                type="email"
                id="email"
                value={newUser.email}
                onChange={handleChange}
              />
            </div>
            <div className="fs-5 mb-3">
              <label htmlFor="password">Create Password : </label>
              <br />
              <input
                type="password"
                id="password"
                value={newUser.password}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary fs-5 px-4">Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
