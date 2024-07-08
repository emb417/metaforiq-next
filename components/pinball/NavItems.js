import Link from "next/link";
import { MdLeaderboard } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";

export default function NavItems() {
  // Array containing navigation items
  const navItems = [
    {
      id: 1,
      icon: <MdLeaderboard />,
      href: "/pinball/season",
      text: "Season Leaderboard",
    },
    {
      id: 2,
      icon: <GiPositionMarker />,
      href: "/pinball/position",
      text: "Position Trends",
    },
  ];

  return (
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
  );
}
