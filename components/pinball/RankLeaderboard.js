import Link from "next/link";
import Image from "next/image";
import { CgInfo } from "react-icons/cg";
import { Tooltip } from "antd";

export default function RankLeaderboard({ rankedPlayers }) {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="flex mb-2 text-xl text-white">
        Annual Rankings{" "}
        <Tooltip
          title="To be ranked you need to play more than 50% of the weeks over the past year."
          color="rgba(15, 23, 42, 0.8)"
        >
          <CgInfo className="text-sm text-teal-300" />
        </Tooltip>
      </div>
      {rankedPlayers.map((user, index) => (
        <Link
          href={`/pinball/player/${user.username}`}
          key={user.username}
          className={`flex items-center gap-2 mb-1 text-white justify-left rounded-full pr-2 w-full ${
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
            {user.rank}.
          </div>
          <div className="truncate">{user.username}</div>
          <div className="ml-auto mr-1 flex flex-row items-center gap-4">
            <div className="flex text-sm text-teal-300">
              P{user.rollingAveragePosition}
              <Tooltip title="Rolling Average Position">
                <CgInfo className="text-white text-xs" />
              </Tooltip>
            </div>
            <div className="text-lg">{user.winPercentage}%</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
