import Image from "next/image";
import Link from "next/link";
import pImage from "../public/assets/assets/p1.png";

function ProductCard() {
  const id = 12;
  return (
    <Link
      href={`/product/${id}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <Image src={pImage} alt="product" />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">Air Jordan XXXVII Low PF</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">$1632</p>
          <p className="text-base font-medium line-through">$2012</p>
          <p className="ml-auto test-base font-medium text-green-500">
            20% off
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
