import { Suspense } from "react";
import { GiPinballFlipper } from "react-icons/gi";
import PageTitle from "@/components/nav/PageTitle";
import SubNav from "@/components/nav/SubNav";
import PlayerProfile from "@/components/pinball/player/PlayerProfile";

export async function generateMetadata({ params }) {
  const username = params.username;

  return {
    title: "Player Profile",
    alternates: {
      canonical: `/pinball/player/${username}`,
    },
  }
}

const navItems = [
  {
    id: 1,
    icon: <GiPinballFlipper />,
    text: "Leaderboards",
    href: "/pinball",
  },
];

export default function PlayerProfilePage({ params }) {
  const username = params.username;
  return (
    <div className="flex flex-wrap w-full px-4 mb-14">
      <div className="flex flex-wrap w-full mb-4 items-center">
        <PageTitle>Player Profile</PageTitle>
        <SubNav navItems={navItems} />
      </div>
      <div className="flex w-full justify-center items-start">
        <Suspense
          fallback={
            <div className="w-full text-2xl text-white text-center flex justify-center items-center animate-pulse">
              Loading Player Profile for {username}...
            </div>
          }
        >
          <PlayerProfile username={username} />
        </Suspense>
      </div>
    </div>
  );
}
