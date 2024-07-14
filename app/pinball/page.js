import { MdLeaderboard } from "react-icons/md";
import { GiPinballFlipper, GiPositionMarker } from "react-icons/gi";
import PageTitle from "@/components/nav/PageTitle";
import SubNav from "@/components/nav/SubNav";
import Leaderboards from "@/components/pinball/Leaderboards";

export const metadata = {
  title: "Pinball Dashboards",
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
    href: "/pinball/position",
    text: "Position Trends",
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
        <Leaderboards />
      </div>
    </div>
  );
}
