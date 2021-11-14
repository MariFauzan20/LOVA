import React from "react";
import { Dropdown, Row, Col, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function List() {
  const [regions, setRegions] = useState([]);
  const [province, setProvince] = useState("Provinsi");
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
  };

  return (
    <Container>
      <h4 className="mt-4">Cari Lokasi Vaksin</h4>
      {/* <div className='d-flex my-4 gx-4'> */}
      <Row md={6} className=" d-flex ">
        <Col>
          <Dropdown className="pt-4 m-4">
            <h6 className="mb-4">Provinsi</h6>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {province}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {regions.map((item, index) => (
                <Dropdown.Item key={index} onClick={provinceItemClick}>
                  {item.province}
                </Dropdown.Item>
              ))}

              {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <Row className=" mb-4 border-bottom" />

    </Container>
  );
}
