import React from 'react'
import { Carousel } from "react-bootstrap";

export default function Review() {
    return (
      <div>
        <Carousel
          className=" h-75 "
          style={{ margin: "8em auto 2em auto", backgroundColor: "#F9EFE5" }}
        >
          <Carousel.Item>
            <p style={{ textAlign: "center", padding: "5em 9em 1em 9em" }}>
              {" "}
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              <div className="d-flex flex-column  align-items-center ">
                <div className="d-flex  my-5 ">
                  <hr
                    style={{ width: "3em", color: "tomato", height: "1.5px" }}
                  />

                  <span className="px-2 mt-1 text-danger">
                    Nana Adjoa Asamoah
                  </span>

                  <hr
                    style={{ width: "3em", color: "tomato", height: "1.5px" }}
                  />
                </div>
              </div>
            </p>
          </Carousel.Item>

          <Carousel.Item>
            <p style={{ textAlign: "center", padding: "5em 9em 1em 9em" }}>
              {" "}
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              <div className="d-flex flex-column  align-items-center ">
                <div className="d-flex  my-5 ">
                  <hr
                    style={{ width: "3em", color: "tomato", height: "1.5px" }}
                  />

                  <span className="px-2 mt-1 text-danger">
                    Lois Sam
                  </span>

                  <hr
                    style={{ width: "3em", color: "tomato", height: "1.5px" }}
                  />
                </div>
              </div>
            </p>
          </Carousel.Item>

           <Carousel.Item >
           <p style={{ textAlign:"center", padding:"5em 9em 1em 9em"}}> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
            
            <div className="d-flex flex-column  align-items-center ">
          <div className="d-flex  my-5 ">
            <hr style={{ width: "3em", color: "tomato", height: "1.5px" }} />

            <span className="px-2 mt-1 text-danger">Timmy Okey</span>

            <hr style={{ width: "3em", color: "tomato", height: "1.5px" }} />
          </div>
        </div>
            
            
            </p>
            
          </Carousel.Item>
        </Carousel>
      </div>
    );
}
