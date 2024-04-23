"use client";

import React from 'react'
import Slider from "react-slick";
import Slide from "@/components/Slide"

const Hero = () => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

  };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "Trending Item",
      mainTitle: "WOMEN'S LATES FASHION SALE",
      price: "$20"
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      mainTitle: "MODERN SUNGLASSES",
      price: "$15"
    },
    {
      id: 2,
      img: "/banner-3.jpg",
      title: "Sale Offer",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "$30"
    }
  ]

  return (
    <div className='w-[100%] h-[500px] bg-green-300' >
      {/* <div className='slider-container container pt-6 lg:pt-0'>
        <Slider {...settings} >
          {slideData.map((item) => {
            return <Slide 
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
              />
          })}
        </Slider>
      </div> */}
      Carousel
    </div>



    
  )
}

export default Hero