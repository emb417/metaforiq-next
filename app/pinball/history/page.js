import { Suspense } from "react";
import { GiAncientColumns, GiProgression } from "react-icons/gi";
import PageTitle from "@/components/nav/PageTitle";
import SubNav from "@/components/nav/SubNav";
import HistoryDashboard from "@/components/pinball/HistoryDashboard";

export const metadata = {
  title: "Weekly History",
  description: "VPC Weekly History",
  alternates: {
    canonical: "/pinball/history",
  },
};

const navItems = [
  {
    id: 1,
    icon: <GiProgression className="text-2xl" />,
    href: "/pinball/stats",
    text: "Stats",
  },
];

export default function HistoryPage() {
  return (
    <div className="flex flex-col flex-grow w-full px-4 max-h-screen">
      <div className="flex flex-wrap w-full mb-4 items-center">
        <PageTitle>
          <GiAncientColumns className="text-3xl" /> {metadata.title}
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
