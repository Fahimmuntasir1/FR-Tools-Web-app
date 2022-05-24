import React from "react";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BussinessSummary/BusinessSummary";
import MyReviewMap from "../MyReviewMap";

import Tools from "../Tools/Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tools />
      <BusinessSummary />
      <MyReviewMap />
    </div>
  );
};

export default Home;
