import Link from "next/link";
import Image from "next/image";
import { CgInfo } from "react-icons/cg";
import { Tooltip } from "antd";

export default function RankLeaderboard({ weeksData }) {
  const sortedUsers = Array.from(
    weeksData
      .flatMap((week) => week.scores)
      .reduce((acc, user) => {
        if (user.gamesPlayedPercentage > 0.50 && !acc.has(user.username)) {
          acc.set(user.username, {
            username: user.username,
            userAvatarUrl: user.userAvatarUrl,
            winPercentage: user.winPercentage,
          });
        }
        return acc;
      }, new Map()).values()
  ).sort((a, b) => b.winPercentage - a.winPercentage);

  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="flex mb-2 text-xl text-white">
        Annual Rankings <Tooltip title="To be ranked you need to play more than 50% of the weeks over the past year."><CgInfo className="text-sm text-teal-300" /></Tooltip>
      </div>
      {sortedUsers.map((user, index) => (
        <Link
          href={`/pinball/player/${user.username}`}
          key={user.username}
          className={`flex items-center gap-2 mb-1 text-white justify-left border-2 border-teal-950 rounded-full pr-2 w-full ${
            index % 2 === 0 ? "bg-slate-900" : "bg-slate-800"
          } hover:text-teal-300 hover:bg-slate-950 duration-300`}
        >
          <div className="flex items-center gap-2">
            <Image
              src={user.userAvatarUrl}
              width={32}
              height={32}
              alt={user.username}
              className="rounded-full"
            />
            {index + 1}.
          </div>
          <div className="truncate">{user.username}</div>
          <div className="ml-auto mr-1 flex flex-row items-center gap-4">
            <div className="text-lg">{user.winPercentage}%</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
