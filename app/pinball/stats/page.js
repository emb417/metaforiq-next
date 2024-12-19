import { Suspense } from "react";
import { GiAncientColumns, GiProgression } from "react-icons/gi";
import PageTitle from "@/components/nav/PageTitle";
import SubNav from "@/components/nav/SubNav";
import StatsDashboard from "@/components/pinball/AnnualStatsDashboard";

export const metadata = {
  title: "Annual Stats",
  description: "VPC Annual Stats",
  alternates: {
    canonical: "/pinball/stats",
  },
};

const navItems = [
  {
    id: 1,
    icon: <GiAncientColumns className="text-xl" />,
    href: "/pinball/history",
    text: "History",
  },
];

export default function StatsPage() {
  return (
    <div className="flex flex-wrap w-full px-4">
      <div className="flex flex-wrap w-full mb-4 items-center">
        <PageTitle>
          <GiProgression /> {metadata.title}
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
        <StatsDashboard />
      </Suspense>
    </div>
  );
}
