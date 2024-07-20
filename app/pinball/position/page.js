import { Suspense } from "react";
import { GiPinballFlipper, GiPositionMarker } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";
import PageTitle from "@/components/nav/PageTitle";
import SubNav from "@/components/nav/SubNav";
import PositionDashboard from "@/components/pinball/PositionDashboard";

export const metadata = {
  title: "Position Trends",
};

const navItems = [
  {
    id: 1,
    icon: <GiPinballFlipper />,
    href: "/pinball",
    text: "Pinball Leaderboards",
  },
  {
    id: 2,
    icon: <MdLeaderboard />,
    href: "/pinball/season",
    text: "Season Leaderboard",
  },
];

export default function PositionPage() {
  return (
    <div className="flex flex-wrap w-full px-4">
      <div className="flex flex-wrap w-full mb-4 items-center">
        <PageTitle>
          <GiPositionMarker /> {metadata.title}
        </PageTitle>
        <SubNav navItems={navItems} />
      </div>
      <Suspense
        fallback={
          <div className="w-full text-2xl text-white flex justify-center items-center">
            Loading Position Trends...
          </div>
        }
      >
        <PositionDashboard />
      </Suspense>
    </div>
  );
}
