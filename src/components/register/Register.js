import React from "react";
import Vector from "../../Vector.svg";
import "./Style.css";

const Register = () => {
  return (
    <div className="container">
      <div className="shopApp">
        <h2 className="shopapp1">Shop App</h2>
        <div className="logo">
          <img src={Vector} className="img" />
        </div>
      </div>

      <div className="welcome">
        Welcome to Shop App
        <input type="text" placeholder="User Name" className="username" />
        <input type="text" placeholder="Email@mail.com" className="email" />
        <input type="text" placeholder="Password" className="password" />
        <input type="text" placeholder="Confirm Password" className="confirm" />
        <button className="register">Register</button>
        <button className="login">Login</button>
      </div>
    </div>
  );
};

export default Register;
