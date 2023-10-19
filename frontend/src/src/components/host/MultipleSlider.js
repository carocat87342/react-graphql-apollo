import { useState, useEffect, useRef } from "react";
import { Box, Stack, Container, Typography } from "@mui/material";
import { SliderCard } from "./";
import Slider from "react-slick";
import "./slick.css";

export default function MultipleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    // centerMode: true,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Stack>
      <Slider {...settings}>
        {[...Array(15)].map((item, index) => (
          <SliderCard />
        ))}
      </Slider>
    </Stack>
  );
}
