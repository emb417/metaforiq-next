import Link from "next/link";
import Image from "next/image";

export default function SeasonLeaderboard({ weeksData }) {
  const sortedUsernames = weeksData[0].scores
    .sort((a, b) => {
      const cumulativePointsDiff = b.cumulativePoints - a.cumulativePoints;
      if (cumulativePointsDiff !== 0) {
        return cumulativePointsDiff;
      }
      return b.seasonWinPercentage - a.seasonWinPercentage;
    })
    .map((user) => user.username);

  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="flex mb-2 text-xl text-white">
        Season {weeksData[0].season} - Week{" "}
        {weeksData[0].currentSeasonWeekNumber}
      </div>
      {sortedUsernames.map((username, index) => (
        <Link
          href={`/pinball/player/${username}`}
          key={username}
          className={`flex items-center gap-2 mb-1 text-white justify-left border-2 border-teal-950 rounded-full pr-2 w-full ${
            index % 2 === 0 ? "bg-slate-900" : "bg-slate-800"
          } hover:text-teal-300 hover:bg-slate-950 duration-300`}
        >
          <div className="flex items-center gap-2">
            {weeksData[0].scores.find((score) => score.username === username)
              .userAvatarUrl ? (
              <Image
                src={
                  weeksData[0].scores.find(
                    (score) => score.username === username
                  ).userAvatarUrl
                }
                width={32}
                height={32}
                alt={username}
                className="rounded-full"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-teal-950" />
            )}
            {index + 1}.
          </div>
          <div className="truncate">{username}</div>
          <div className="ml-auto mr-1 flex flex-row items-center gap-4">
            <div className="text-xs text-teal-300">
              {
                weeksData[0].scores.find((score) => score.username === username)
                  .seasonWinPercentage
              }
              %
            </div>
            <div className="mr-1 text-xl">
              {
                weeksData[0].scores.find((score) => score.username === username)
                  .cumulativePoints
              }
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
