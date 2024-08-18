import Link from "next/link";
import Image from "next/image";

export default function SeasonLeaderboardItems({ username, data, index }) {
  return (
        <Link
          href={`/pinball/player/${username}`}
          className={`flex items-center gap-2 mb-1 text-white justify-left rounded-full pr-2 w-full ${
            index % 2 === 0 ? "bg-slate-900" : "bg-slate-800"
          } hover:text-teal-300 hover:bg-slate-950 duration-300`}
        >
          <div className="flex items-center gap-2">
            {data.scores.find((score) => score.username === username)
              .userAvatarUrl ? (
              <Image
                src={
                  data.scores.find((score) => score.username === username)
                    .userAvatarUrl
                }
                width={32}
                height={32}
                alt={username}
                className="rounded-full"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-teal-950" />
            )}
            <span className="text-base min-w-[24px] text-center">
            {
              data.scores.find((score) => score.username === username)
                .seasonPosition
            }
            .
            </span>
          </div>
          <div className="text-base truncate">{username}</div>
          <div className="ml-auto mr-1 flex flex-row items-center gap-4">
            <div className="text-xs text-teal-300">
              {
                data.scores.find((score) => score.username === username)
                  .seasonWinPercentage
              }
              %
            </div>
            <div className="mr-1 text-xl text-center min-w-[24px]">
              {
                data.scores.find((score) => score.username === username)
                  .cumulativePoints
              }
            </div>
          </div>
        </Link>
  );
}
