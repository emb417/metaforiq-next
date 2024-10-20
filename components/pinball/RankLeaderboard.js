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
          title="To be ranked you need to play more than 50% of the weeks over the past year.
          The ranking is based on win percentage over the past year.
          The P value is your rolling average final weekly position from the last 13 weeks."
          color="rgba(15, 23, 42, 0.8)"
        >
          <CgInfo className="text-sm text-teal-300" />
        </Tooltip>
      </div>
      {rankedPlayers.map((user, index) => (
        <Link
          href={`/pinball/player/${user.username}`}
          key={user.username}
          className={`flex flex-col items-center mb-1 pr-2 justify-left rounded-full w-full text-white text-md ${
            index % 2 === 0 ? "bg-slate-900" : "bg-slate-800"
          } hover:text-teal-300 hover:bg-slate-950 duration-300`}
        >
          <div className="flex flex-row gap-2 justify-left w-full items-center">
            <div className="flex gap-2 items-center">
              <span className="w-6 h-6 rounded-full">
                <Image
                  src={user.userAvatarUrl}
                  width={32}
                  height={32}
                  alt={user.username}
                  className="rounded-full"
                />
              </span>
              {user.rank}.
            </div>
            <div className="truncate">{user.username}</div>
            <div className="flex flex-row gap-3 items-center ml-auto">
              <div className="flex text-sm text-teal-300">
                P{user.rollingAveragePosition}
              </div>
              <div className="text-lg">{user.winPercentage}%</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
