import React from "react";
import Image from "next/image";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
      <Image
        src="/empty-cart.jpg"
        width={300}
        height={300}
        alt="empty cart image"
        className="md:w-[400px]"
      />
      <span className="text-xl font-bold">Your cart is empty!</span>
      <span className="text-center mt-4">
        Looks like you have not added anything in your cart, <br />
        Go ahead and explore top categories
      </span>
      <Link href="/">
        <button className="mt-8 w-full py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
