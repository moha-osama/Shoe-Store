import React from "react";

type SizeSelectionProps = {
  options: { title: string; isExist: boolean }[];
};

const SizeSelection = ({ options }: SizeSelectionProps) => {
  return (
    <>
      {options.map((option) => {
        let defaultStyle =
          "border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer";
        let notExistStyle =
          "border rounded-md text-center py-3 font-medium  cursor-not-allowed opacity-50";
        return (
          <li
            key={option.title}
            className={`${option.isExist ? defaultStyle : notExistStyle}`}
          >
            {option.title}
          </li>
        );
      })}
    </>
  );
};

export default SizeSelection;
