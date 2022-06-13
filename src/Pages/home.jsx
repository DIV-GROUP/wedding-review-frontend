import React from 'react';

import Header from "../components/Header"
import Main from '../components/Main'
import Vendors from '../components/Vendors'
import Subscribe from '../components/Subscribe'
import Destinations from "../components/Destinations";
import Review from "../components/Review"
import Videos from '../components/Videos'

const Home = () => {
    return (
        <div>
          <Header/>
      <Main/>
      <Vendors/>
      <Subscribe/>
      <Destinations/>
      <Review/>
      <Videos/>  
        </div>
    );
}

export default Home;
