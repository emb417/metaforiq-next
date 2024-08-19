
import { Suspense } from "react";
import { CgCalendar } from "react-icons/cg";
import { GiPinballFlipper } from "react-icons/gi";
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
