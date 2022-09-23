import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <img
        className="home-logo"
        src={process.env.PUBLIC_URL + `/images/redberrylogo.png`}
        alt="redberry logo"
      />
      <img
        className="home-photo"
        src={process.env.PUBLIC_URL + `/images/Group1.png`}
        alt="group1"
      />
      <div className="button">
        <Link to="/forms">
          <div>
            <span>ჩანაწერის დამატება</span>
          </div>
        </Link>
        <div>
          <span>ჩანაწერის ნახვა</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
