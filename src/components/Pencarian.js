/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import "../assets/css/pencarian.css";
import { Link } from "react-router-dom";
import axios from "axios";
import ImageFive from "../assets/images/loading.svg";

const Pencarian = () => {
  const [regions, setRegions] = useState([]);
  const [province, setProvince] = useState("Aceh");
  const [lokasi, setLokasi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://api.vaksinasi.id/regions")
      .then((response) =>{
        setRegions(response.data.data)
      })
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.vaksinasi.id/locations/${province}`)
      .then((response) => {
        setLoading(false);
        setLokasi(response.data.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setLokasi({});
        setError("Something Wrong");
      });
  }, [province]);

  const provinceItemClick = (event) => {
    setProvince(event.target.innerText);
  };
  return (
    <div className="container">
      <div className="title">
        <h2 className="my-4 mt-4 ">
          <b>Cari Lokasi Vaksin</b>
        </h2>
        <h5 className="mb-3 prov">Provinsi</h5>
      </div>
      <div>
        <div className="row">
          <div className="col">
            <div className="dropdown">
              <button
                className="btn btn-primary btndrop dropdown-toggle mb-4"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {province}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {regions.map((item, index) => (
                  <li>
                    <a
                      className="dropdown-item"
                      key={index}
                      onClick={provinceItemClick}
                    >
                      {item.province}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-2 border-bottom" />

      <div>
        <div className="row text-center">
          {loading ? 
          (
            <img
              src={ImageFive}
              height="400px"
              className="PicIF"
              alt=""
            />
          ) : (
            lokasi.map((item, idx) => (
              <div className="col" key={idx}>
                <div className="card-group">
                  <div className="card">
                    <h5 className="card-title">{item.title.toUpperCase()}</h5>
                    <div className="row mt-2 border-bottom" />
                    <h6 className="card-text my-2  mb-4">{item.address}</h6>
                    <Link
                      to={`/detail/${province}/${idx}`}
                      className="btn btn-primary"
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
          {error ? error : null}
        </div>
      </div>
    </div>
  );
};

export default Pencarian;

