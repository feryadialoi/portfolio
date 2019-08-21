import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import photoProfile from "../../assets/images/profile.jpg";
import { Link } from "react-router-dom";
import { hello, text2 } from "../../string/En";
const Home = props => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <p>{hello}</p>
        </div>
        <div className="row justify-content-center">
          <p>{text2}</p>
        </div>
        <div className="row justify-content-center">
          <img
            alt="profile"
            src={photoProfile}
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
              borderRadius: 50
            }}
          />
        </div>
        <div className="row justify-content-center">
          <Link to="">Home</Link>
          <Link to="">Projects</Link>
          <Link to="">Skills</Link>
          <a href="https://www.instagram.com/feryadialoi">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
