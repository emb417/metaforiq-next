import Link from "next/link";
import Image from "next/image";
import { CgInfo } from "react-icons/cg";
import { Tooltip } from "antd";

export default function RankLeaderboard({ recentPlayerStats }) {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="flex flex-col mb-2 items-center">
        <Link href="https://virtualpinballchat.com:8443" target="_blank">
          <Image
            src="/vpc.png"
            width={168}
            height={168}
            alt="VPC"
            className="mb-2"
          />
        </Link>
        <div className="flex text-xl text-slate-200">
          Power Rankings
          <Tooltip
            title="To be ranked you need to play at least 7 weeks out of the past 13 weeks,
            i.e., more than 50% of the weeks. The ranking is based on win percentage and
            the P value is your average final weekly position from the last 13 weeks."
            color="rgba(30, 41, 59, 0.8)"
            placement="top"
          >
            <CgInfo className="text-sm text-teal-300" />
          </Tooltip>
        </div>
      </div>
      {recentPlayerStats
        .filter((user) => user.rank !== undefined && user.rank !== null)
        .sort((a, b) => a.rank - b.rank)
        .map((user, index) => (
          <Link
            href={`https://virtualpinballchat.com:8443/player/${user.username}`}
            target="_blank"
            key={user.username}
            className={`flex flex-col items-center mb-1 px-2 justify-left rounded-full w-full text-md ${
              index % 2 === 0 ? "bg-slate-900" : "bg-slate-800"
            } hover:bg-slate-700 duration-300`}
          >
            <div className="flex flex-row gap-2 justify-left w-full items-center">
              <div className="text-lg text-teal-300">{user.rank}.</div>
              <div className="flex rounded-full items-center">
                <Image
                  src={user.userAvatarUrl}
                  width={32}
                  height={32}
                  alt={user.username}
                  className="rounded-full"
                />
              </div>
              <div className="text-lg text-slate-200 truncate">
                {user.username}
              </div>
              <div className="flex flex-row gap-3 items-center ml-auto">
                <div className="flex text-md text-teal-300">
                  P{user.averagePosition}
                </div>
                <div className="text-lg text-slate-100">
                  {user.winPercentage}%
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
