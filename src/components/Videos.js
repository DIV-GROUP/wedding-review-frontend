import React from 'react'
import { Card, Container, Row, Nav } from "react-bootstrap";

export default function Videos() {
    return (
      <div>
        <div className="d-flex flex-column  align-items-center ">
          <div className="d-flex  mt-5 ">
            <hr style={{ width: "3em", color: "tomato", height: "1.5px" }} />

            <span className="px-2 mt-1 text-danger">Get Inspired</span>

            <hr style={{ width: "3em", color: "tomato", height: "1.5px" }} />
          </div>
          <span style={{ fontSize: "1.5em" }} className=" mb-5 ">
            TRENDING WEDDING VIDEOS
          </span>
        </div>

        <div>
          <Container fluid>
            <Row className="justify-content-md-center ">
              <Card style={{ width: "22em", margin: " 2em", padding: "0" }}>
                <Card.Img
                  variant="top"
                  src="holder.js/100px180"
                  className="bg-dark w-100"
                />
                <Card.Body className="p-0">
                  <Card.Link
                    className="btn rounded-0 text-white"
                    style={{
                      width: "100%",
                      margin: "0",
                      backgroundColor: "#9A685F",
                    }}
                  >
                   The Ansahs
                  </Card.Link>
                </Card.Body>
              </Card>

              <Card style={{ width: "22em", margin: " 2em", padding: "0" }}>
                <Card.Img
                  variant="top"
                  src="holder.js/100px180"
                  className="bg-dark w-100"
                />
                <Card.Body className="p-0">
                  <Card.Link
                    className="btn rounded-0 text-white"
                    style={{
                      width: "100%",
                      margin: "0",
                      backgroundColor: "#9A685F",
                    }}
                  >
                   #KENCY2020
                  </Card.Link>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </div>
      </div>
    );
}
