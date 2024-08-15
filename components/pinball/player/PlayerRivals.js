import Image from "next/image";
import { CgInfo, CgChevronUpO, CgChevronDownO } from "react-icons/cg";
import { Tooltip } from "antd";
import Link from "next/link";

export default function PlayerRivals({ playerRivals }) {
  return (
    <div className="flex flex-col gap-2 w-full sm:w-2/3 md:w-full">
      {playerRivals.map(
        (rival, index) =>
          rival.username && (
            <Link
              key={index}
              href={`/pinball/player/${rival.username}`}
              className="flex flex-row gap-3 text-white text-sm border-2 border-teal-950 rounded-full bg-slate-900"
            >
              <div className="flex items-center gap-2 pr-2 col-span-2">
                <Image
                  src={rival.userAvatarUrl}
                  width={32}
                  height={32}
                  alt={rival.username}
                  className="rounded-full"
                />
                <span className="text-lg">{rival.rank}.</span>
                <span className="truncate">{rival.username}</span>
              </div>
              <div className="flex justify-end items-center ml-auto">
                <Tooltip title="Rolling Average Position" className="flex">
                  <span className="text-lg text-teal-300">
                    P{rival.rollingAveragePosition}
                  </span>
                  <CgInfo className="text-white text-xs" />
                </Tooltip>
              </div>
              <div className="flex gap-2 items-center justify-end">
                <Tooltip title="Win Percentage">
                  <span className="text-lg text-white">
                    {rival.winPercentage}%
                  </span>
                </Tooltip>
                <span className="w-8 h-8">
                  {index < 2 && (
                    <CgChevronUpO className="text-green-500 w-8 h-8" />
                  )}
                  {index === 2 && (
                    <CgChevronDownO className="text-red-500 w-8 h-8" />
                  )}
                </span>
              </div>
            </Link>
          )
      )}
    </div>
  );
}
