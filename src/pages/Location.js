import React from "react";
// import List from "../components/List";
// import Cards from "../components/Card";
import Pencarian from "../components/Pencarian";

export default function Location() {
  return (
  <>
  <Pencarian />
  {/* <List />,
  <Cards  /> */}
  </>
  );
}






































































































// import { Dropdown, Row, Col, Card, Container, Button } from "react-bootstrap";
// import { useState, useEffect } from "react";

// const Location = () => {
//   const [regions, setRegions] = useState([]);
//   const [province, setProvince] = useState('Provinsi');
//   const [lokasi, setLokasi] = useState([])

//   useEffect(() => {
//     async function getCharacters() {
//       const response = await fetch("https://api.vaksinasi.id/regions");
//       const body = await response.json();
//       setRegions(body.data);
//     }
//     getCharacters();
//   }, []);

//   useEffect(()=>{
//     async function getLokasi() {
//       const response = await fetch(`https://api.vaksinasi.id/locations/${province}`);
//       const body = await response.json();
//       setLokasi(body.data)
//     }
//     getLokasi();
//   }, [province]);
//   console.log(lokasi)

//   const provinceItemClick = (event) => {
//     console.log(event.target.innerText);
//     setProvince(event.target.innerText);
//     // setProvince()
//   };
//   console.log(regions);
//   return (
//     <Container>
//       <h4 className="mt-4">Cari Lokasi Vaksin</h4>
//       {/* <div className='d-flex my-4 gx-4'> */}
//       <Row md={6} className=" d-flex ">
//         <Col>
//           <Dropdown className="pt-4 m-4">
//             <h6 className="mb-4">Provinsi</h6>
//             <Dropdown.Toggle variant="secondary" id="dropdown-basic">
//               {province}
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//               {regions.map((item, index) => (
//                 <Dropdown.Item key={index} onClick={provinceItemClick}>
//                   {item.province}
//                 </Dropdown.Item>
//               ))}

//               {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
//             </Dropdown.Menu>
//           </Dropdown>
//         </Col>
//         <Col>
//           <Dropdown className="pt-4 m-4">
//             <h6 className="mb-4">Kota</h6>
//             <Dropdown.Toggle variant="secondary" id="dropdown-basic">
//               Kota
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//               <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </Col>
//       </Row>
//       {/* </div> */}

//       <Row className=" mb-4 border-bottom" />

//       <Row xs={1} md={4} className="g-4 text-center">
//         {Array.from({ length: 4 }).map((_, idx) => (
//           <Col key={idx}>
//             <Card>
//               <Card.Body>
//                 <Card.Title>{}</Card.Title>
//                 <Card.Text>Deskripsi Singkat</Card.Text>
//                 <Button variant="primary">Detail</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Location;
// // body.results.map(({ name }) => ({ label: name, value: name })));
