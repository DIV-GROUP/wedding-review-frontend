import React from 'react'
import {Card, Container,Row,Nav} from "react-bootstrap";
import photo from "./images/photo.jpeg";
import decor from './images/decor.jpeg'
import assess from './images/asses.jpeg'
import shoes from './images/shoes.jpeg'
import gowns from './images/gowns.jpeg'
import cater from './images/cater.jpeg'
import ven from './images/ven.jpeg'
import jd from './images/jd.jpeg'
import trad from './images/trad.png'

export default function Vendors() {
    return (
      <div>
        <div className="d-flex flex-column  align-items-center ">
          <div className="d-flex  mt-5 ">
            <hr style={{ width: "3em", color: "tomato", height: "1.5px" }} />
            <span className="px-2 text-danger mt-1"> Saying yes to forever</span>
            <hr style={{ width: "3em", color: "tomato", height: "1.5px" }} />
          </div>
          <span style={{ fontSize: "1.5em" }} className=" mb-5 ">
            
            FIND THE BEST IN THE FIELD
          </span>
        </div>

        <div>
          <Container fluid>
            <Row className="justify-content-md-center ">
              <Card style={{ width: "15em", height: "10em", margin: " 2em", padding:"0" }}>
                <Card.Img
                  variant="top"
                  src={photo}
                  
                />
                <Card.Body className="p-0">
                  <Card.Link className="btn rounded-0 text-white" style={{ width: "100%", margin:"0", backgroundColor:"#9A685F" }}>
                    PHOTOGRAPGHY
                  </Card.Link>
                </Card.Body>
              </Card>

              <Card style={{ width: "15em", height: "15em", margin: " 2em", padding:"0" }}>
                <Card.Img
                  variant="top"
                  src={decor}
                  
                />
                <Card.Body className="p-0">
                  <Card.Link className="btn rounded-0 text-white" style={{ width: "100%", margin:"0", backgroundColor:"#9A685F" }}>
                   DECORATIONS
                  </Card.Link>
                </Card.Body>
              </Card>

              <Card style={{ width: "15em", height: "15em", margin: " 2em", padding:"0" }}>
                <Card.Img
                  variant="top"
                  src={assess}
                  className="bg-dark w-100"
                />
                <Card.Body className="p-0">
                  <Card.Link className="btn rounded-0 text-white" style={{ width: "100%", margin:"0", backgroundColor:"#9A685F" }}>
                    ACCESSORIES
                  </Card.Link>
                </Card.Body>
              </Card>
            </Row>

           <Row className="justify-content-md-center ">
              <Card style={{ width: "15em", height: "15em", margin: " 2em", padding:"0" }}>
                <Card.Img
                  variant="top"
                  src={shoes}
                  className="bg-dark w-100"
                />
                <Card.Body className="p-0">
                  <Card.Link className="btn rounded-0 text-white" style={{ width: "100%", margin:"0", backgroundColor:"#9A685F" }}>
                    SHOES
                  </Card.Link>
                </Card.Body>
              </Card>

              <Card style={{ width: "15em", height: "15em", margin: " 2em", padding:"0" }}>
                <Card.Img
                  variant="top"
                  src={gowns}
                  className="bg-dark w-100"
                />
                <Card.Body className="p-0">
                  <Card.Link className="btn rounded-0 text-white" style={{ width: "100%", margin:"0", backgroundColor:"#9A685F" }}>
                    WHITE GOWNS
                  </Card.Link>
                </Card.Body>
              </Card>

              <Card style={{ width: "15em", height: "15em", margin: " 2em", padding:"0" }}>
                <Card.Img
                  variant="top"
                  src={trad}
                  className="bg-dark w-100"
                />
                <Card.Body className="p-0">
                  <Card.Link className="btn rounded-0 text-white" style={{ width: "100%", margin:"0", backgroundColor:"#9A685F" }}>
                    TRADITIONAL WEAR
                  </Card.Link>
                </Card.Body>
              </Card>
            </Row>

            <Row className="justify-content-md-center ">
              <Card style={{ width: "15em", height: "15em", margin: " 2em", padding:"0" }}>
                <Card.Img
                  variant="top"
                  src={cater}
                  className="bg-dark w-100"
                />
                <Card.Body className="p-0">
                  <Card.Link className="btn rounded-0 text-white" style={{ width: "100%", margin:"0", backgroundColor:"#9A685F" }}>
                    CATERING
                  </Card.Link>
                </Card.Body>
              </Card>

              <Card style={{ width: "15em", height: "15em", margin: " 2em", padding:"0" }}>
                <Card.Img
                  variant="top"
                  src={ven}
                  className="bg-dark w-100"
                />
                <Card.Body className="p-0">
                  <Card.Link className="btn rounded-0 text-white" style={{ width: "100%", margin:"0", backgroundColor:"#9A685F" }}>
                    VENUES
                  </Card.Link>
                </Card.Body>
              </Card>

              <Card style={{ width: "15em", height: "15em", margin: " 2em", padding:"0" }}>
                <Card.Img
                  variant="top"
                  src={jd}
                  className="bg-dark w-100 "
                />
                <Card.Body className="p-0">
                  <Card.Link className="btn rounded-0 text-white" style={{ width: "100%", margin:"0", backgroundColor:"#9A685F" }}>
                    DISC JOKEYS (DJ)
                  </Card.Link>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </div>
      </div>
    );
}



