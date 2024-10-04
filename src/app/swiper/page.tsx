"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "swiper/css";

// Dynamically import Swiper and SwiperSlide components
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
});
const SwiperSlide = dynamic(
  () => import("swiper/react").then((mod) => mod.SwiperSlide),
  { ssr: false }
);

const SwiperPage = () => {
  const [isClient, setIsClient] = useState(false); 

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default SwiperPage;
