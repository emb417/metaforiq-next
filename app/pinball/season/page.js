import { Suspense } from "react";
import { GiAncientColumns, GiChart } from "react-icons/gi";
import PageTitle from "@/components/nav/PageTitle";
import SubNav from "@/components/nav/SubNav";
import SeasonDashboard from "@/components/pinball/SeasonDashboard";

export const metadata = {
  title: "Season Leaderboard",
  description: "VPC Season Leaderboard",
  alternates: {
    canonical: "/pinball/season",
  }
};

const navItems = [
  {
    id: 1,
    icon: <GiAncientColumns className="text-xl" />,
    href: "/pinball/history",
    text: "History",
  },
];

export default function SeasonPage() {
  return (
    <div className="flex flex-wrap w-full px-4">
      <div className="flex flex-wrap w-full mb-4 items-center">
        <PageTitle>
          <GiChart /> {metadata.title}
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
        <SeasonDashboard />
      </Suspense>
    </div>
  );
}
