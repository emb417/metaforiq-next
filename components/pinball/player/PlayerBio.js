import Image from "next/image";
import { CgInfo } from "react-icons/cg";
import { Tooltip } from "antd";
import PlayerSeasonSummary from "@/components/pinball/player/PlayerSeasonSummary";

export default function PlayerBio({ user, userSeasonSummary }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row w-full text-white text-xl gap-4 sm:gap-8 border-2 border-teal-950 rounded-full bg-slate-900">
        <div className="flex items-center gap-2 min-w-[max-content]">
          <Image
            src={user.userAvatarUrl}
            width={58}
            height={58}
            alt={user.username}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <div className="flex text-sm">{user.username}</div>
            <div className="flex text-teal-300 gap-1 justify-center">
              <Tooltip title="Rolling Average Position" className="flex">
                {user.rollingAveragePosition &&
                  `P${user.rollingAveragePosition}`}
                <CgInfo className="text-sm text-white" />
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full items-center pr-2 xs:pr-4 md:pr-6 py-1">
          <div className="text-teal-300">
            {user.annualGamesPlayedPercentage <= 0.5 ? (
              <div className="inline-flex items-center gap-1 text-lg">
                No Rank{" "}
                <Tooltip
                  title={`To be ranked you need to play more than 50% of the weeks over the past year; play ${Math.floor(
                    27 - user.annualGamesPlayedPercentage * 52
                  )} more weeks.`}
                >
                  <CgInfo className="text-white" />
                </Tooltip>
              </div>
            ) : (
              <div>Rank {user.annualRank}</div>
            )}
          </div>
          <div className="text-white text-sm">
            <Tooltip title="Annual Win Percentage">
              {user.annualWinPercentage}%
            </Tooltip>
          </div>
        </div>
      </div>
      <PlayerSeasonSummary
          user={user}
          userSeasonSummary={userSeasonSummary}
        />
    </div>
  );
}
