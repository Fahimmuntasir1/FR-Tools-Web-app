import React from "react";

const BussinessSummary = () => {
  return (
    <div className="my-5">
      <h2 className="uppercase text-center text-4xl font-bold text-primary">
        Millions Business trust us
      </h2>
      <p className="uppercase text-center font-semibold text-xl text-slate-500">
        try to understand user expedition
      </p>
      <div class="stats w-full text-center stats-vertical lg:stats-horizontal shadow mt-3">
        <div class="stat">
          <div class="stat-title">Customers</div>
          <div class="stat-value text-secondary">10k+</div>
          <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div class="stat">
          <div class="stat-title">Annual revenue</div>
          <div class="stat-value text-secondary">120M+</div>
          <div class="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div class="stat">
          <div class="stat-title">Reviews</div>
          <div class="stat-value text-secondary">33k+</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div class="stat">
          <div class="stat-title">Tools</div>
          <div class="stat-value text-secondary">300+</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default BussinessSummary;
