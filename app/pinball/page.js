import { Suspense } from "react";
import { MdLeaderboard } from "react-icons/md";
import { GiPinballFlipper, GiPositionMarker } from "react-icons/gi";
import PageTitle from "@/components/nav/PageTitle";
import SubNav from "@/components/nav/SubNav";
import Leaderboards from "@/components/pinball/Leaderboards";

export const metadata = {
  title: "Pinball Leaderboards",
};

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
    href: "/pinball/weekly",
    text: "Weekly Leaderboard",
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
            <div className="w-full text-2xl text-white flex justify-center items-center">
              Loading Pinball Leaderboards...
            </div>
          }
        >
          <Leaderboards />
        </Suspense>
      </div>
    </div>
  );
}
