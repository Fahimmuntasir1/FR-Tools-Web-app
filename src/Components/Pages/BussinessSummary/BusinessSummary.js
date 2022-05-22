import React from "react";

const BussinessSummary = () => {
  return (
    <div className="my-5">
      <div className="mt-10">
        <h2 className="uppercase text-center text-4xl font-bold text-primary mt-5">
          Millions Business trust us
        </h2>
        <p className="uppercase text-center font-semibold text-xl text-slate-500">
          try to understand user expedition
        </p>
      </div>
      <div className="stats w-full text-center stats-vertical lg:stats-horizontal shadow mt-3">
        <div className="stat">
          <div className="stat-title">Customers</div>
          <div className="stat-value text-secondary">10k+</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">Annual revenue</div>
          <div className="stat-value text-secondary">120M+</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">Reviews</div>
          <div className="stat-value text-secondary">33k+</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">Tools</div>
          <div className="stat-value text-secondary">300+</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default BussinessSummary;
