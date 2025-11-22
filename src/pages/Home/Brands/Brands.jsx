import React from "react";
// 1. Import Swiper and SwiperSlide from 'swiper/react'
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";

const brandsLogo = [
  amazon,
  casio,
  moonstar,
  randstad,
  star,
  start_people,
  amazon_vector,
];

const Brands = () => {
  return (
    <div>
      <div>
        <h1 className="text-center font-semibold pb-10 text-2xl text-secondary">We've helped thousands of sales teams</h1>
      </div>
      <Swiper
        slidesPerView={4}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {[...brandsLogo, ...brandsLogo].map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt={`Brand ${index}`}  />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
