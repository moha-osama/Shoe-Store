import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

type CustomButtonProps = { title: string; style: string; icon?: boolean };

const CustomButton = ({ title, style, icon }: CustomButtonProps) => {
  return (
    <button
      className={`w-full rounded-full py-4 text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center justify-center gap-2 ${style}`}
    >
      {title}
      {icon && <AiOutlineHeart size={20} />}
    </button>
  );
};

export default CustomButton;

//
//
//
// </button>
