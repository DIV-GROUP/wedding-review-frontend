import { Container } from "react-bootstrap";

function VendorHeader() {
    return ( 
        <Container fluid id="vendorsHeader" className="p-3 mb-3">
        <h1>
          <span className="span1">&#8212;&#8212;&#8212;</span>
          Capture the sweet moments
          <span className="span2">&#8212;&#8212;&#8212;</span>
        </h1>
        <h2 className="pt-3">photography</h2>
      </Container>
     )
}

export default VendorHeader;