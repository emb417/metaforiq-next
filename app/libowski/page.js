import Link from "next/link";
import {
  GiPayMoney,
  GiSmallFire,
  GiBlackball,
  GiBowlingPin,
} from "react-icons/gi";
import { CgPlayList } from "react-icons/cg";

export const metadata = {
  title: "Libowski",
};

const LibowskiPage = () => {
  // Array containing navigation items
  const navItems = [
    {
      id: 1,
      icon: <GiPayMoney />,
      href: "/libowski/on-order",
      text: "Recent On Order Titles",
    },
    {
      id: 2,
      icon: <GiSmallFire />,
      href: "/libowski/best-sellers",
      text: "Recent Best Seller Titles",
    },
    {
      id: 3,
      icon: <CgPlayList />,
      href: "/libowski/wish-list",
      text: "Wish List",
    },
  ];

  return (
    <div className="w-full">
      <h1 className="flex text-2xl text-white m-4 min-w-[max-content]">
        <GiBlackball className="text-3xl mr-2" />
        Libowski
        <GiBowlingPin className="text-3xl mx-1" />
        The Library Dude
      </h1>
      <div className="flex items-center text-2xl text-white m-4">
        <ul className="flex flex-wrap w-full gap-4">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="w-full md:w-[max-content] hover:text-teal-300 duration-100"
            >
              <li className="flex items-center justify-center gap-1 bg-slate-950 p-4 rounded-lg border-2 border-teal-950 hover:bg-slate-900 duration-300">
                {item.icon}
                {item.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LibowskiPage;
