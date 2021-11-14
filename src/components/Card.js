import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
// import { useState, useEffect } from "react";

export default function Cards() {

  return (
    <Container>
      <Row xs={1} md={4} className="g-4 text-center ">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Body>
                <Card.Title>Judul</Card.Title>
                <Card.Text>Deskripsi Singkat</Card.Text>
                <Button variant="primary">Detail</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
