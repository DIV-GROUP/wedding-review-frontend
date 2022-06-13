import React from 'react'
import { Carousel} from "react-bootstrap";
import  cover1 from './images/cover1.jpeg'
import cover2 from "./images/cover2.jpeg";
import cover3 from "./images/cover3.jpeg";

export default function Main() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              // className="d-block w-100  bg-danger "
              src={cover1}
              alt="First slide"
              style={{
                height: "70vh",
                width: "100%",
                backgroundRepeat: "no-repeat",
                objectFit: "cover",
                // objectPosition:"top"
              }}
            />
            <Carousel.Caption>
              <h3>Img</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 bg-dark"
              src={cover2}
              alt="Second slide"
              style={{
                height: "70vh",
                backgroundRepeat: "no-repeat",
                objectFit: "cover",
              }}
            />

            <Carousel.Caption>
              <h3>Img2</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 bg-primary"
              src={cover3}
              alt="Third slide"
              style={{
                height: "70vh",
                backgroundRepeat: "no-repeat",
                objectFit: "cover",
              }}
            />

            <Carousel.Caption>
              <h3>Img3</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}
