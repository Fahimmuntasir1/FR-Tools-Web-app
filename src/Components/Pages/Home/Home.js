import React from "react";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BussinessSummary/BusinessSummary";
import MyReviewMap from "../MyReviewMap";

import Tools from "../Tools/Tools";
import WeProvide from "../WeProvide";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tools />
      <BusinessSummary />
      <WeProvide/>
      <MyReviewMap />
    </div>
  );
};

export default Home;
