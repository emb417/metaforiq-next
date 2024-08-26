import { Suspense } from "react";
import { CgCalendar } from "react-icons/cg";
import { GiPinballFlipper, GiPositionMarker } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";
import PageTitle from "@/components/nav/PageTitle";
import SubNav from "@/components/nav/SubNav";
import WeeklyDashboard from "@/components/pinball/WeeklyDashboard";

export const metadata = {
  title: "Weekly Leaderboard",
};

const navItems = [
  {
    id: 1,
    icon: <GiPinballFlipper />,
    href: "/pinball",
    text: "Leaderboards",
  },
  {
    id: 2,
    icon: <MdLeaderboard />,
    href: "/pinball/season",
    text: "Season",
  },
  {
    id: 3,
    icon: <CgCalendar />,
    href: "/pinball/history",
    text: "History",
  },
];

export default function WeeklyPage() {
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
          <div className="w-full text-2xl text-white text-center flex justify-center items-center animate-pulse">
            Loading {metadata.title}...
          </div>
        }
      >
        <WeeklyDashboard />
      </Suspense>
    </div>
  );
}
