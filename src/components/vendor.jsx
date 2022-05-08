import "./vendor.css"; // css

import Bride from '../images/bride.jpg';//bride image

import { BsTelephone, BsGlobe } from 'react-icons/bs';//icons for globe and call

import { FaRegEnvelope } from 'react-icons/fa'; //icons for email

function vendorPage() {
  return (
    <>
      <header id="vendorsHeader">
              <h1>
                  <span className="span1">&#8212;&#8212;&#8212;</span>
                    Capture the sweet moments
                  <span className="span2">&#8212;&#8212;&#8212;</span>
              </h1>
        <h2>photography</h2>
          </header>
          
          <section className="vendorsSection">
              <h4>FLICK PHOTO STUDIOS</h4>
              <div className="detailsSection">
                  <figure>
                      <img src={Bride} alt="bride Image" />
                  </figure>
                  <div className="contactDetails">
                      <title>Details</title>
                      <div><i><FaRegEnvelope/></i> flickphotos@gmail.com</div>
                      <div> <i><BsTelephone/></i> +233 445 6789</div>
                      <div> <i><BsGlobe/></i> www.flickphotos.com</div>
                  </div>
                </div>
          </section>
    </>
  );
}

export default vendorPage;
