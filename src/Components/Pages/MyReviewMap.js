import React, { useEffect, useState } from "react";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MyReviewCard from "./MyReviewCard";

const MyReviewMap = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://fr-tools-house.onrender.com/review")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="mt-24">
      <h1 className="uppercase text-center text-4xl font-bold text-primary mt-5">
        Review{" "}
      </h1>
      <div className="flex h-1 justify-center my-3 ">
        <div className="  mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
        <div className=" mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
        <div className=" mx-3 bg-slate-400 w-3 card rounded-box place-items-center"></div>
      </div>
      <div className="p-6 md:px-16">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper "
        >
          {users?.map((user) => (
            <SwiperSlide className="sm:m-10" key={user._id}>
              <MyReviewCard user={user}></MyReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MyReviewMap;
