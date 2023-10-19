import { useState, useEffect, useRef } from "react";
import { Box, Stack, Container, Typography } from "@mui/material";
import { SliderCard } from "./";
import Slider from "react-slick";
import "./slick.css";

const guests = [
  {
    _id: "guest1",
    name: "Prada",
    domain: "prada.com",
    thumb: "prada",
    description:
      "Prada specializes in leather handbags, travel accessories, shoes, ready-to-wear, perfumes and other fashion accessories.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: false,
  },
  {
    _id: "guest2",
    name: "Calvin Klein",
    domain: "ck.com",
    thumb: "ck",
    description:
      "Calvin Klein Inc. is an American fashion house. It specializes in leather, lifestyle accessories, home furnishings, perfumery, jewellery, watches.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: false,
  },
  {
    _id: "guest3",
    name: "Gucci",
    domain: "gucci.com",
    thumb: "gucci",
    description:
      "Gucci  is an Italian luxury fashion house based in Florence, Italy. Its product lines include handbags, ready-to-wear, footwear, and accessories, makeup, fragrances, and home decoration.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: false,
  },
  {
    _id: "guest4",
    name: "Asics",
    domain: "Asics.com",
    thumb: "asics",
    description:
      "Asics is a Japanese multinational corporation which produces sports equipment designed for a wide range of sports.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: true,
  },
  {
    _id: "guest5",
    name: "Nike",
    domain: "nike.com",
    thumb: "nike",
    description:
      "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: false,
  },
  {
    _id: "guest6",
    name: "Adidas",
    domain: "Adidas.com",
    thumb: "adidas",
    description:
      "Adidas that designs and manufactures shoes, clothing and accessories.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: false,
  },
  {
    _id: "guest7",
    name: "Zara",
    domain: "Zara.com",
    thumb: "zara",
    description:
      "The company specializes in fast fashion, and products include clothing, accessories, shoes, swimwear, beauty, and perfumes.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: true,
  },
  {
    _id: "guest8",
    name: "Tommy",
    domain: "Tommy.com",
    thumb: "tommy",
    description:
      "Is an American premium clothing brand, manufacturing apparel, footwear, accessories, fragrances and home furnishings.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: false,
  },
  {
    _id: "guest9",
    name: "Louis Vuition",
    domain: "Louis.com",
    thumb: "louis",
    description:
      "Louis Vuitton Malletier (French commonly known as Louis Vuitton or by its initials LV, is a French fashion house and luxury goods company.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: false,
  },
  {
    _id: "guest10",
    name: "Prada",
    domain: "prada.com",
    thumb: "prada",
    description:
      "Prada specializes in leather handbags, travel accessories, shoes, ready-to-wear, perfumes and other fashion accessories.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: false,
  },
  {
    _id: "guest11",
    name: "Calvin Klein",
    domain: "ck.com",
    thumb: "ck",
    description:
      "Calvin Klein Inc. is an American fashion house. It specializes in leather, lifestyle accessories, home furnishings, perfumery, jewellery, watches.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: true,
  },
  {
    _id: "guest12",
    name: "Gucci",
    domain: "gucci.com",
    thumb: "gucci",
    description:
      "Gucci  is an Italian luxury fashion house based in Florence, Italy. Its product lines include handbags, ready-to-wear, footwear, and accessories, makeup, fragrances, and home decoration.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: true,
  },
  {
    _id: "guest13",
    name: "Asics",
    domain: "Asics.com",
    thumb: "asics",
    description:
      "Asics is a Japanese multinational corporation which produces sports equipment designed for a wide range of sports.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: true,
  },
  {
    _id: "guest14",
    name: "Nike",
    domain: "nike.com",
    thumb: "nike",
    description:
      "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: true,
  },
  {
    _id: "guest15",
    name: "Adidas",
    domain: "Adidas.com",
    thumb: "adidas",
    description:
      "Adidas that designs and manufactures shoes, clothing and accessories.",
    comission: "28",
    categories: ["Shoes", "Clothes"],
    shippingTime: "13",
    approvalNeeded: true,
  },
];

export default function MultipleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    // centerMode: true,
    arrows: true,
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
        {guests.map((item, index) => (
          <SliderCard item={item} />
        ))}
      </Slider>
    </Stack>
  );
}
