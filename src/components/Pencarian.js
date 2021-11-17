/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import "../assets/css/pencarian.css";
import { Link } from "react-router-dom";

const Pencarian = () => {
  const [regions, setRegions] = useState([]);
  const [province, setProvince] = useState("Aceh");
  const [lokasi, setLokasi] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const response = await fetch("https://api.vaksinasi.id/regions");
      const body = await response.json();
      setRegions(body.data);
    }
    getCharacters();
  }, []);

  useEffect(() => {
    async function getLokasi() {
      const response = await fetch(
        `https://api.vaksinasi.id/locations/${province}`
      );
      const body = await response.json();
      setLokasi(body.data);
    }
    getLokasi();
  }, [province]);
  console.log(lokasi);

  const provinceItemClick = (event) => {
    console.log(event.target.innerText);
    setProvince(event.target.innerText);

    // setProvince()
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
          {lokasi.map((item, idx) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pencarian;
