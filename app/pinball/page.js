import { Suspense } from "react";
import { GiAncientColumns, GiPinballFlipper, GiChart, GiProgression } from "react-icons/gi";
import PageTitle from "@/components/nav/PageTitle";
import SubNav from "@/components/nav/SubNav";
import Leaderboards from "@/components/pinball/Leaderboards";

export const metadata = {
  title: "Pinball Leaderboards",
  description: "VPC Pinball Leaderboards",
  alternates: {
    canonical: "/pinball",
  }
};

const navItems = [
  {
    id: 1,
    icon: <GiChart className="text-xl" />,
    href: "/pinball/season",
    text: "Season",
  },
  {
    id: 2,
    icon: <GiAncientColumns className="text-xl" />,
    href: "/pinball/history",
    text: "History",
  },
  {
    id: 3,
    icon: <GiProgression className="text-2xl" />,
    href: "/pinball/stats",
    text: "Stats",
  },
];

export default function PinballPage() {
  return (
    <div className="flex flex-wrap w-full px-4">
      <div className="flex flex-wrap w-full mb-4 items-center">
        <PageTitle>
          <GiPinballFlipper /> {metadata.title}
        </PageTitle>
        <SubNav navItems={navItems} />
      </div>
      <div className="flex w-full justify-center items-start">
        <Suspense
          fallback={
            <div className="w-full text-2xl text-white text-center flex justify-center items-center animate-pulse">
              Loading {metadata.title}...
            </div>
          }
        >
          <Leaderboards />
        </Suspense>
      </div>
    </div>
  );
}
