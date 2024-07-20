import { Suspense } from "react";
import { MdLeaderboard } from "react-icons/md";
import PageTitle from "@/components/nav/PageTitle";
import SubNav from "@/components/nav/SubNav";
import PlayerProfile from "@/components/pinball/player/PlayerProfile";

const metadata = {
  title: "Player Profile",
};

const navItems = [
  {
    id: 1,
    icon: <MdLeaderboard />,
    text: "Pinball Leaderboards",
    href: "/pinball",
  },
  {
    id: 2,
    icon: "",
    text: "VPC Competition Corner",
    href: "https://virtualpinballchat.com/#/weekly-rankings/competition-corner",
  },
  {
    id: 3,
    icon: "",
    text: "VPC High Score Corner",
    href: "https://virtualpinballchat.com/#/high-score-corner",
  },
];

export default function PlayerProfilePage({ params }) {
  const username = params.username;
  return (
    <div className="flex flex-wrap w-full px-4 mb-14">
      <div className="flex flex-wrap w-full mb-4 items-center">
        <PageTitle>{metadata.title}</PageTitle>
        <SubNav navItems={navItems} />
      </div>
      <div className="flex w-full justify-center items-start">
        <Suspense
          fallback={
            <div className="w-full text-2xl text-white flex justify-center items-center">
              Loading User Details Page for {username}...
            </div>
          }
        >
          <PlayerProfile username={username} />
        </Suspense>
      </div>
    </div>
  );
}
