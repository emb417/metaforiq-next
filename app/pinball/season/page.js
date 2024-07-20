import { Suspense } from "react";
import { GiPinballFlipper, GiPositionMarker } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";
import PageTitle from "@/components/nav/PageTitle";
import SubNav from "@/components/nav/SubNav";
import SeasonDashboard from "@/components/pinball/SeasonDashboard";

export const metadata = {
  title: "Season Leaderboard",
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
    icon: <GiPositionMarker />,
    href: "/pinball/position",
    text: "Position Trends",
  },
];

export default function SeasonPage() {
  return (
    <div className="flex flex-wrap w-full px-4">
      <div className="flex flex-wrap w-full mb-4 items-center">
        <PageTitle>
          <MdLeaderboard /> {metadata.title}
        </PageTitle>
        <SubNav navItems={navItems} />
      </div>
      <Suspense
        fallback={
          <div className="w-full text-2xl text-white flex justify-center items-center">
            Loading Season Leaderboard...
          </div>
        }
      >
        <SeasonDashboard />
      </Suspense>
    </div>
  );
}
