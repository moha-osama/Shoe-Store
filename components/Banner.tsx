"use client";

import React from "react";
import { BiArrowBack } from "react-icons/bi";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import img1 from "../public/assets/assets/slide-1.png";
import img2 from "../public/assets/assets/slide-2.png";
import img3 from "../public/assets/assets/slide-3.png";

type Slides = {
  img: any;
  alt: string;
}[];
function Banner() {
  const slides: Slides = [
    { img: img1, alt: "slide1" },
    { img: img2, alt: "slide2" },
    { img: img3, alt: "slide3" },
  ];
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        {slides.map((slide) => (
          <div key={slide.alt}>
            <Image
              src={slide.img}
              alt={slide.alt}
              style={{ objectFit: "cover" }}
              className="aspect-[16/10] md:aspect-auto"
            />
          </div>
        ))}
      </Carousel>
      <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
        Shop now
      </div>
    </div>
  );
}

export default Banner;
