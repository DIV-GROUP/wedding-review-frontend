import React from 'react'
import { Col,Form, Container, Row, Nav, Button } from "react-bootstrap";

export default function Subscribe() {
    return (
      <div className="h-25 bg-dark p-5 mb-5" style={{ marginTop: " 10em" }}>
        <Container fluid className="d-flex justify-content-center">
            <span className="text-white mx-3" style={{ fontSize:" 1.3em"   }}> SUBSCRIBE</span>
          <Form>
            <Row  className="" style={{   }}>
              <Col>
                <Form.Control placeholder="Email" className="" style={{ width:"20em "  }}/>
              </Col>
              <Col>
                <Button className="bg-white text-dark" style={{ width:"8em"  }}>SEND</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    );
}
