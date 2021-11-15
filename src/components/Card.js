import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
// import { useState, useEffect } from "react";
// import { useCallback } from "react";

export default function Cards() {

  return (
    <Container>
      <Row xs={1} md={4} className="g-4 text-center ">
        {Array.map((itm, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Body>
                <Card.Title>title</Card.Title>
                <Card.Text>deskripsi</Card.Text>
                <Button variant="primary">Detail</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
