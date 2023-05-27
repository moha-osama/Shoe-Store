import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

interface MenuItem {
  id: number;
  name: string;
  url?: string;
  subMenu?: boolean;
}

interface SubMenuItem {
  id: number;
  name: string;
  doc_count: number;
}

type MenuProps = {
  showCategroies: boolean;
  onShow: () => void;
  onClose: () => void;
};

const data: MenuItem[] = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData: SubMenuItem[] = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

function Menu({ showCategroies, onShow, onClose }: MenuProps) {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item: MenuItem) => {
        return (
          <React.Fragment key={item.id}>
            {!!item.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative"
                onMouseEnter={onShow}
                onMouseLeave={onClose}
              >
                {item.name}
                <BsChevronDown size={14} />
                {showCategroies && (
                  <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 text-black shadow-lg">
                    {subMenuData.map((item) => (
                      <Link key={item.id} href={""}>
                        <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                          {item.name}
                          <span className="opacity:50 text-sm text-gray-400">{`(${item.doc_count})`}</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link href={item.url ? item.url : "/"}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
}

export default Menu;
