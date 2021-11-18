/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function DetailLokasi() {
  let { id, regions } = useParams();
  let [lokasi, setLokasi] = useState([]);
  let [age, setAge] = useState([]);

  useEffect(() => {
    async function getLokasi() {
      const response = await fetch(
        `https://api.vaksinasi.id/locations/${regions}`
      );
      const body = await response.json();
      console.log(body.data[id]);
      setLokasi(body.data[id]);
      setAge(body.data[id].agerange);
      console.log(body.data[id].agerange);
    }
    getLokasi();
  }, [regions]);

  return (
    <>
      <div className="m-5 p-1">
        <h1 className="mb-3">Deskripsi Lokasi Vaksin</h1>

        <div className="carddetail border border-light rounded border-4">
          <div className="row">
            <h1 className="text-center text-md-start">{lokasi.title}</h1>
            <div className="col-8 col-md m-md-3 ratio ratio-4x3 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32658821.818401575!2d99.41920736768124!3d-2.2753629505597477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sen!2sid!4v1637129247057!5m2!1sen!2sid"
                allowfullscreen=""
                loading="lazy"
                className="blur"
              ></iframe>
              <div className="bg-text">
                <a
                  href={lokasi.map}
                  target="_blank"
                  className="btn btn-primary"
                >
                  Detail Maps
                </a>
              </div>
            </div>

            <div className="col-12 col-md m-md-3 border border-light rounded border-4 pt-3">
              <p>Tanggal Operasional :</p>
              <p className="fw-bold">
                {lokasi.datestart} - {lokasi.dateend}
              </p>
              <p>Jam Operasional :</p>
              <p className="fw-bold">
                {lokasi.timestart} - {lokasi.timeend}
              </p>
              <p>Metode Pendaftaran :</p>
              <p className="fw-bold">{lokasi.registration}</p>
              <p>Usia Vaksinasi :</p>
              {age.map((item, index) => (
                <p className="fw-bold" key={index}>
                  - {item}
                </p>
              ))}
              <p>Link Sumber :</p>
              <a href={lokasi.link} target="_blank">
                Klik Disini
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
