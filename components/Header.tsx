"use client";

import React, { useState } from "react";
import useScroll from "@/hooks/use-scroll";
import Image from "next/image";
import logo from "../public/logo.svg";
import Link from "next/link";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import Wrapper from "./Wrapper";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

function Header() {
  const scrollDirection = useScroll();
  const [showCategroies, setShowCategroies] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  console.log(scrollDirection);
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${
        scrollDirection && "translate-y-[-6rem]"
      }`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <div className="w-[40px] md:w-[60px]">
          <Link href="/">
            <Image src={logo} width={100} height={100} alt="logo" />
          </Link>
        </div>
        <Menu
          showCategroies={showCategroies}
          onShow={() => setShowCategroies(true)}
          onClose={() => setShowCategroies(false)}
        />
        {mobileMenu && (
          <MobileMenu
            showCategroies={showCategroies}
            setShowCategroies={() => setShowCategroies(!showCategroies)}
          />
        )}
        <div className="flex items-center gap-2 text-black">
          <div className="icon-container">
            <IoMdHeartEmpty className="text-[15px] md:text-[20px]" />
            <div className="icon-text">5</div>
          </div>
          <div className="icon-container">
            <Link href="/cart">
              <BsCart className="text-[15px] md:text-[20px]" />
            </Link>
            <div className="icon-text">5</div>
          </div>
          <div
            className="icon-container -mr-2 md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? (
              <VscChromeClose className="text-[20px]" />
            ) : (
              <BiMenuAltRight className="text-[20px]" />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
