import Link from "next/link";

export default function PlayerSummary({ user, userSeasonSummary }) {
  return (
    <div className="flex flex-row gap-3 border-2 rounded-full px-2 border-teal-950 bg-slate-950 items-center w-full">
      <div className="text-sm text-white">
        <Link href="/pinball/season">Season 5</Link>
      </div>
      <div className="text-xl text-teal-300 ml-auto">
        P{userSeasonSummary.position}{" "}
        <span className="text-sm">of {userSeasonSummary.numberOfPlayers}</span>
      </div>
      <div className="text-xl text-white">
        {userSeasonSummary.cumulativePoints}{" "}
        <span className="text-sm">pts.</span>
      </div>
      <div className="text-xl text-teal-300">
        {user.seasonWinPercentage}% <span className="text-sm">Wins</span>
      </div>
    </div>
  );
}
