/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function DetailLokasiPage() {
  let { id, regions } = useParams();

  let [lokasi, setLokasi] = useState({});

  useEffect(() => {
    async function getLokasi() {
      const response = await fetch(
        `https://api.vaksinasi.id/locations/${regions}`
      );
      const body = await response.json();
      console.log(body.data[id]);
      setLokasi(body.data[id]);
    }
    getLokasi();
  }, [regions]);

  return (
    <>
      <div className="m-5 p-1">
        <h1 className="mb-3">Deskripsi Lokasi Vaksin</h1>

        <div className="carddetail border border-light rounded border-4">
          <div className="row">
            <h1>{lokasi.title}</h1>
            <div className="col-8 col-sm m-sm-3 ratio ratio-4x3">
              <iframe
                src={lokasi.map}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="col-12 col-sm m-sm-3 border border-light rounded border-4 pt-3">
              <p>Tanggal Operasional :</p>
              <p>
                {lokasi.datestart} - {lokasi.dateend}
              </p>
              <p>Jam Operasional :</p>
              <p>
                {lokasi.timestart} - {lokasi.timeend}
              </p>
              <p>Metode Pendaftaran :</p>
              <p>Walk In</p>
              <p>Usia Vaksinasi :</p>
              <p>Tanggal</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
