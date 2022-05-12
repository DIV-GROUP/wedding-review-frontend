import "./vendor.css"; // css

import Bride from "../images/bride.jpg"; //bride image

import { BsTelephone, BsGlobe } from "react-icons/bs"; //icons for globe and call

import { FaRegEnvelope } from "react-icons/fa"; //icons for email

import { Container, Row, Col,Card,CardGroup } from "react-bootstrap";

function vendorPage() {
  return (
    <>
      <Container fluid id="vendorsHeader" className="p-3 mb-3">
        <h1>
          <span className="span1">&#8212;&#8212;&#8212;</span>
          Capture the sweet moments
          <span className="span2">&#8212;&#8212;&#8212;</span>
        </h1>
        <h2 className="pt-3">photography</h2>
      </Container>

      <section className="vendorsSection">
        <h4 className="mb-3  ms-5">
          <span className="me-4 pb-2"></span>FLICK PHOTO STUDIOS
        </h4>

        <Container>

          <Container className="mt-5">
          <Row>

            <Col>
              <Card >

                  <Card.Img variant="top" src={Bride} alt="bride" style={{height:'26rem'}}/>

              </Card> 
              
            </Col>

            <Col className="contactDetails mt-5">
     
              <h4>Details</h4>
              
                  <div className="mt-2 mb-3 custom"><i><FaRegEnvelope className="me-2"/></i>flickphotos@gmail.com</div>
                  <div className="me-5 mb-3 custom"><i><BsTelephone  className="me-2"/></i> +233 445 6789</div>
                  <div><i><BsGlobe className="me-2 custom" /></i>www.flickphotos.com</div>
                    
            </Col>

          </Row>
          </Container>
          
        </Container>

        <div>
          <div className="hrspan mt-5"></div>
          <h3 className = "ourwork mt-3">Our Works</h3>
          <div className="hrspan1 mt-3 mb-5"></div>
          </div>

      </section>

  <CardGroup>

  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
  </Card> 
        
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
   </Card>
        
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
  </Card>
        
      </CardGroup>

      <Container fluid className="p-0">

      <footer className="p-4">
        <div>2022</div>
      </footer>
      </Container>
    </>
  );
}

export default vendorPage;
