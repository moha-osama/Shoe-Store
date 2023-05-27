"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import img1 from "../public/assets/assets/p1.png";
import img2 from "../public/assets/assets/p2.png";
import img3 from "../public/assets/assets/p3.png";
import img4 from "../public/assets/assets/p4.png";
import img5 from "../public/assets/assets/p5.png";
import img6 from "../public/assets/assets/p6.png";
import img7 from "../public/assets/assets/p7.png";

function ProductPreview() {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <Image src={img1} width={50} height={50} alt="p1" />
        <Image src={img2} width={50} height={50} alt="p1" />
        <Image src={img3} width={50} height={50} alt="p1" />
        <Image src={img4} width={50} height={50} alt="p1" />
        <Image src={img5} width={50} height={50} alt="p1" />
        <Image src={img6} width={50} height={50} alt="p1" />
        <Image src={img7} width={50} height={50} alt="p1" />
      </Carousel>
    </div>
  );
}

export default ProductPreview;
