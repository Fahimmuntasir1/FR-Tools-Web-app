import React from "react";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BussinessSummary/BusinessSummary";
import Review from "../Review";
import Tools from "../Tools/Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tools />
      <BusinessSummary />
      <Review />
    </div>
  );
};

export default Home;
