import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h3 className="home__text">Upload a Prescription</h3>
      <div className="homm">
        <input class="button" type="file" />
        <Link to="/output">
          <input class="button1" type="submit" value="Submit" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
