import React from "react";
import Button from "../components/Button";
import Vector1 from "../assets/Vector/1.png";
import Vector2 from "../assets/Vector/2.png";
import Vector3 from "../assets/Vector/3.png";
import Vector5 from "../assets/Vector/Vector5.png";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section id="home">
      <img src={Vector1} alt="Vector1" className="Vector1" />
      <div className="container-fluid px-0">
        <div className="container">
          <div className="row mt-lg-4">
            <div className="col-lg-8 col-md-12">
              <h1 className="primary-text" style={{ marginTop: "3rem" }}>
              Navigate Profiles, Explore Addresses : Discover the World in One Click

              </h1>
              <h3
                className="para-1 d-flex justify-content-center align-items-center"
                style={{ marginTop: "1rem", lineHeight: "1.3rem" }}
              >
                ProfileAtlas is an innovative web application designed to let users effortlessly explore profiles and their corresponding addresses on an interactive map. Whether you're looking to connect with individuals, locate businesses, or simply explore new places, ProfileAtlas offers a seamless experience combining both profiles and locations in a visually engaging way.
              </h3>
              <Link to="/explore">
                <Button label="Explore" c="main-btn" type="start" />
              </Link>
            </div>
            <div className="col-lg-4 col-md-12 d-flex justify-content-center align-items-center Graphics-1">
              <img
                src={Vector5}
                alt="Graphical-1"
                height="480px"
                style={{borderRadius: '1rem'}}
              />
            </div>
          </div>

          <img src={Vector3} alt="Vector3" className="Vector3" />
          <img src={Vector2} alt="Vector2" className="Vector2" />

        </div>
      </div>
    </section>
  );
}
