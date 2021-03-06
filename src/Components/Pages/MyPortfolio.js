import React from "react";

const MyPortfolio = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-primary py-3 uppercase">
        About Developer
      </h2>
      <div className="flex h-1 justify-center my-3 ">
        <div className="  mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
        <div className=" mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
        <div className=" mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
      </div>
      <div className="grid grid-cols-2 gap-5 my-10 m-auto align-middle">
        <div class="ml-5">
          <h1 class="text-5xl uppercase font-semibold">
            HELLO! <br />I AM <br />
            FAHIM MUNTASIR
          </h1>
          <p className="text-xl font-semibold">
            I am jr. Front-end developer and recently I am learn MERN for Full
            stack Web Development
          </p>
          <button class="btn btn-outline btn-primary my-5">Hire me</button>
        </div>
        <div>
          <img
            className="w-1/3 rounded-full lg:ml-80"
            src="https://i.ibb.co/4Mk1xt2/IMG-20220503-121053-01-01.jpg"
            alt="proImg"
          />
        </div>
      </div>
      <div>
        <h2 className="text-center uppercase text-2xl font-semibold my-10 text-lime-400">
          My Recently Created Web app
        </h2>

        <div className="flex flex-col text-center text-xl ">
          <a
            className="hover:text-blue-500 hover:link my-5"
            href=" https://smart-electronics.netlify.app/"
          >
            1.Smart Electronics
          </a>
          <a
            className="hover:text-blue-400 hover:link my-5"
            href=" https://book-reviewer.netlify.app/"
          >
            2.Book Reviewer app
          </a>
          <a
            className="hover:text-blue-400 hover:link my-5"
            href=" https://bike-warehouse-b8017.web.app/"
          >
            3. Bike WareHouse app
          </a>
          <a
            className="hover:text-blue-400 hover:link my-5"
            href=" https://independent-service-prov-a109e.web.app/"
          >
            4. Independent Service Provider
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
