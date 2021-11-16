import React from "react";
import Vaksinasi from "../components/Vaksinasi"
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/HomePage.css";
import ImageFour from "../assets/images/herosection.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <section>
        <div className="hero-container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <img
                src={ImageFour}
                height="300px"
                className="rounded float-end"
                alt=""
              ></img>
              <h1 className="display-5 fw-bold text-blue">LoVa</h1>
              <p className="col-md-6 fs-4">
                LoVa (Lokasi Vaksin) merupakan website yang menyediakan
                informasi mengenai lokasi vaksin yang ada di sekitar anda.
                dengan website ini, dapat memberikan kemudahan bagi anda untuk
                mengakses ifnormasi mengenai lokasi vaksin terdekat di sekitar
                anda.
              </p>
              <Link to="/location" className="btn btn-primary btn-lg" type="button">
                Find location
              </Link>
            </div>
          </div>
          </div>
        <Vaksinasi />
        <Footer />
      </section>
    </>
  );
}
