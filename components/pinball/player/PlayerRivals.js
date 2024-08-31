import Image from "next/image";
import {
  CgInfo,
  CgChevronDoubleUpO,
  CgChevronUpO,
  CgChevronDownO,
} from "react-icons/cg";
import { Tooltip } from "antd";
import Link from "next/link";

export default function PlayerRivals({ playerRivals }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {playerRivals.map(
        (rival, index) =>
          rival.username && (
            <Link
              key={index}
              href={`/pinball/player/${rival.username}`}
              className="flex flex-row gap-1 text-white text-sm rounded-full bg-slate-900 hover:text-teal-300 hover:bg-slate-950 duration-300"
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
                <Tooltip
                  title="Rolling Average Position"
                  className="flex"
                  color="rgba(15, 23, 42, 0.9)"
                >
                  <span className="text-lg text-teal-300">
                    P{rival.rollingAveragePosition}
                  </span>
                  <CgInfo className="text-white text-xs" />
                </Tooltip>
              </div>
              <div className="flex gap-2 items-center justify-end">
                <Tooltip title="Win Percentage" color="rgba(15, 23, 42, 0.9)">
                  <span className="text-lg">{rival.winPercentage}%</span>
                </Tooltip>
                <span className="w-8 h-8">
                  {index === 0 && (
                    <Tooltip title="Ranked 2 Places Higher" color="rgba(15, 23, 42, 0.9)">
                      <CgChevronDoubleUpO className="text-green-500 w-8 h-8" />
                    </Tooltip>
                  )}
                  {index === 1 && (
                    <Tooltip title="Ranked 1 Place Higher" color="rgba(15, 23, 42, 0.9)">
                      <CgChevronUpO className="text-green-500 w-8 h-8" />
                    </Tooltip>
                  )}
                  {index === 2 && (
                    <Tooltip title="Ranked 1 Place Lower" color="rgba(15, 23, 42, 0.9)">
                      <CgChevronDownO className="text-red-500 w-8 h-8" />
                    </Tooltip>
                  )}
                </span>
              </div>
            </Link>
          )
      )}
    </div>
  );
}
