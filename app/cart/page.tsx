import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import CustomButton from "@/components/CustomButton";

const page = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <h1 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Shopping Cart
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          <div className="flex-[2]">
            <div className="text-lg font-bold">Cart Items</div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="flex-[1]">
            <p className="text-lg font-bold">Summary</p>
            <div className="p-5 my-5 bg-black/[0.2] rounded-xl">
              <div className="flex justify-between">
                <h2 className="uppercase text-md md:text-lg font-medium text-black">
                  Subtotal
                </h2>
                <p className="md:text-lg font-medium text-black">$ 19,695.00</p>
              </div>
              <p className="text-sm md:text-md py-5 border-t mt-5">
                The subtotal reflects the total price of your order, including
                duties and taxes, before any applicable discounts. It does not
                include delivery costs and international transaction fees.
              </p>
            </div>
            <CustomButton title="Checkout" style="bg-black text-white" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default page;
