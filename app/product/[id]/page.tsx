import React from "react";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import SizeSelection from "@/components/SizeSelection";
import CustomButton from "@/components/CustomButton";

const AVAILABLESIZES = [
  { title: "UK 6", isExist: true },
  { title: "UK 6.5", isExist: true },
  { title: "UK 7", isExist: true },
  { title: "UK 7.5", isExist: true },
  { title: "UK 8", isExist: true },
  { title: "UK 8.5", isExist: true },
  { title: "UK 9", isExist: true },
  { title: "UK 9.5", isExist: true },
  { title: "UK 10", isExist: false },
  { title: "UK 10.5", isExist: false },
  { title: "UK 11", isExist: false },
];

function page() {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          <div className="flex-[1] py-3">
            <h1 className="text-[34px] font-semibold mb-2">Jordan Retro 6 G</h1>
            <h2 className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </h2>
            <h2 className="text-lg font-semibold">MRP : $ 19,695.00</h2>
            <p className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </p>
            <p className="text-md font-medium text-black/[0.5] mb-20">{`(Also includes all applicable duties)`}</p>
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <h3 className="text-md font-semibold">Select Size</h3>
                <h3 className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </h3>
              </div>
              <ul className="grid grid-cols-3 gap-2">
                <SizeSelection options={AVAILABLESIZES} />
              </ul>
              <p className="text-red-600 mt-1">Size selection is required</p>
            </div>
            <CustomButton title="Add to Cart" style="bg-black text-white" />
            <CustomButton
              icon
              title="Wishlist"
              style=" bg-white text-black border border-black"
            />
            <div>
              <h2 className="text-lg font-bold mb-5">Product Details</h2>
              <p className="text-md mb-5">
                Air Jordan shoes are a popular line of athletic footwear created
                by Nike in collaboration with the legendary basketball player
                Michael Jordan. The shoes have become iconic not only for their
                performance on the court but also for their stylish design and
                cultural significance
              </p>
              <p className="text-md mb-5">
                The upper of Air Jordan shoes is typically made of leather,
                synthetic materials, or a combination of both. The shoes often
                feature the iconic Jumpman logo, which is a silhouette of
                Michael Jordan performing a slam dunk. Many Air Jordan shoes
                also feature unique colorways and designs, which have become
                highly collectible among sneaker enthusiasts.
              </p>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </Wrapper>
    </div>
  );
}

export default page;
