import React from "react";
import BusinessSummary from "../BussinessSummary/BusinessSummary";
import Review from "../Review";
import Tools from "../Tools/Tools";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Tools />
      <BusinessSummary />
      <Review />
    </div>
  );
};

export default Home;
