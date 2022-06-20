import "./vendor.css"; // css
// importation of the vendor navbar component
import GeneralNavBar from "./generalNavBar";

// importation of the vendor header component
import VendorHeader from "./vendorHeader";

// importation of images
import Picc6 from "../images/picc6.jpg";
import Photos2 from "../images/photos2.jpg"; 
import Picc2 from "../images/picc2.jpg"; 
import Picc3 from "../images/picc3.jpg"; 
import Picc5 from "../images/picc5.jpg";
import Picc4 from "../images/picc4.jpg"; 

// importation of icons 
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"; //arrows icons from bootstrap

import { BsTelephone, BsGlobe } from "react-icons/bs"; //icons for globe and call from bootstrap

import { FaRegEnvelope } from "react-icons/fa"; //icons for email

// importation of react-bootstrap components 
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";

function vendorPage() {

  return (
    <>
    
      {/* navbar */}
      <GeneralNavBar/>
      
      {/* header */}
     <VendorHeader/> 

      {/* flick photos section  */}
      <section className="vendorsSection">
        <h4 className="mb-3  ms-5">
          <span className="me-4 pb-2"></span>FLICK PHOTO STUDIOS
        </h4>

        <Container>
          <Container className="mt-5">
            <Row>
              <Col>
                <Card>
                  <Card.Img 
                    variant="top"
                    src={Picc3}
                    alt="bride_photo"
                    style={{ height: "26rem" }}
                  />
                </Card>
              </Col>

              <Col className="contactDetails mt-5">
                <h4>Details</h4>

                <div className="mt-2 mb-3 custom">
                  <i>
                    <FaRegEnvelope className="me-2" />
                  </i>
                  flickphotos@gmail.com
                </div>
                <div className="me-5 mb-3 custom">
                  <i>
                    <BsTelephone className="me-2" />
                  </i>
                  +233 445 6789
                </div>
                <div>
                  <i>
                    <BsGlobe className="me-2 custom" />
                  </i>
                  www.flickphotos.com
                </div>
              </Col>
            </Row>
          </Container>
        </Container>

        <div>
          <div className="hrspan mt-5"></div>
          <h3 className="ourwork mt-3">Our Works</h3>
          <div className="hrspan1 mt-3"></div>
        </div>
      </section>

      {/* carousel section */}
      <Container>
        <div
          id="carouselExampleControlsNoTouching"
          className="carousel slide mb-5"
          data-bs-touch="false"
          data-bs-interval="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <CardGroup className="ms-4">
                <Card className="me-2">
                  <Card.Img
                    variant="top"
                    src={Picc4}
                    alt="bridal_photos"
                    className="customImg1"
                    loading="lazy"
                  />
                </Card>

                <Card className="mt-5">
                  <Card.Img
                    variant="top"
                    src={Picc5}
                    alt="bridal_photos"
                    className="customImg"
                    loading="lazy"

                  />
                </Card>

                <Card className="mt-5">
                  <Card.Img
                    variant="top"
                    src={Photos2}
                    alt="bridal photos"
                    className="customImg"
                    loading="lazy"

                  />
                </Card>

                <Card className="mt-5">
                  <Card.Img
                    variant="top"
                    src={Picc2}
                    alt="bridal_photos"
                    className="customImg"
                    loading="lazy"

                  />
                </Card>
              </CardGroup>
            </div>

            <div className="carousel-item ">
              <CardGroup className="ms-4">
                <Card className="me-2">
                  <Card.Img
                    variant="top"
                    src={Picc2}
                    alt="bridal_photos"
                    className="customImg1"
                    loading="lazy"

                  />
                </Card>

                <Card className="mt-5">
                  <Card.Img
                    variant="top"
                    src={Picc2}
                    alt="bridal photos"
                    className="customImg"
                    loading="lazy"

                  />
                </Card>

                <Card className="mt-5">
                  <Card.Img
                    variant="top"
                    src={Picc2}
                    alt="bridal_photos"
                    className="customImg"
                    loading="lazy"

                  />
                </Card>

                <Card className="mt-5">
                  <Card.Img
                    variant="top"
                    src={Picc2}
                    alt="bridal_photos"
                    className="customImg"
                    loading="lazy"

                  />
                </Card>
              </CardGroup>
            </div>

            <div className="carousel-item">
              <CardGroup className="ms-4">
                <Card className="me-2">
                  <Card.Img
                    variant="top"
                    src={Picc4}
                    alt="bridal_photos"
                    className="customImg1"
                    loading="lazy"

                  />
                </Card>

                <Card className="mt-5">
                  <Card.Img
                    variant="top"
                    src={Picc6}
                    alt="bridal_photos"
                    className="customImg"
                    loading="lazy"

                  />
                </Card>

                <Card className="mt-5">
                  <Card.Img
                    variant="top"
                    src={Picc4}
                    alt="bridal photos"
                    className="customImg"
                    loading="lazy"

                  />
                </Card>

                <Card className="mt-5">
                  <Card.Img
                    variant="top"
                    src={Picc2}
                    alt="bridal_photos"
                    className="customImg"
                    loading="lazy"

                  />
                </Card>
              </CardGroup>
            </div>
          </div>
        </div>

        {/* carousel left and right arrows */}
        <div id="customPre">
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
            {/* arrow left icon */}
            <span>
              <BsArrowLeft />
            </span>
          </button>

          <button
            className="carousel-control-next custom-btn"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
            {/* arrow right icon */}
            <span>
              <BsArrowRight />
            </span>
          </button>
        </div>
      </Container>

        {/* reviews section start here  */}
      <Container fluid className="review p-0 ">
        <div className="ms-5 mb-5">
          <h3 className="ms-4">Reviews</h3>
          <p className="mt-3 ms-4 mb-4 experience">Share your experience</p>
          <button
            type="button"
            className="btn btn-outline-dark mt-3 ms-4 mb-3 ps-3 pe-3"
            id="outlines"
          >
            Leave a review
          </button>
        </div>
        <hr />
        
        <p className="mt-4 ms-4 mb-4 customParagraphy">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur
        </p>
        <hr />
        <p className="mt-4 ms-4 mb-4 customParagraphy">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur
        </p>
        <hr className="mb-4"/>
      </Container>
      {/* review section ends here  */}

        {/* footer section start here  */}
      <Container fluid className="p-0">
        <footer className="p-3">
          <div>2022</div>
        </footer>
      </Container>
      {/* footer ends ends here  */}
    </>
  );
}

export default vendorPage;
