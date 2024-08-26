
import { Suspense } from "react";
import { CgCalendar } from "react-icons/cg";
import { GiPinballFlipper, GiPositionMarker } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";
import PageTitle from "@/components/nav/PageTitle";
import SubNav from "@/components/nav/SubNav";
import HistoryDashboard from "@/components/pinball/HistoryDashboard";

export const metadata = {
  title: "Weekly History",
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
    icon: <GiPositionMarker />,
    href: "/pinball/weekly",
    text: "Weekly",
  },
];

export default function HistoryPage() {

  return (
    <div className="flex flex-col flex-grow w-full px-4 max-h-screen">
      <div className="flex flex-wrap w-full mb-4 items-center">
        <PageTitle>
          <CgCalendar className="text-3xl" /> {metadata.title}
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
        <HistoryDashboard />
      </Suspense>
    </div>
  );
}
