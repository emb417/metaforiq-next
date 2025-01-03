import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "antd";
import LeaderboardTitleCard from "@/components/pinball/LeaderboardTitleCard";

export default function WeeklyLeaderboard({ weekData, vpsData }) {

  return (
    <div className="flex flex-col items-center text-slate-200">
      <LeaderboardTitleCard
        imageUrl={vpsData.b2sFiles[0].imgUrl}
        table={weekData.table}
        weekNumber={weekData.weekNumber}
        periodStart={weekData.periodStart}
        periodEnd={weekData.periodEnd}
        priority
      >
        <div className="text-sm">Week #{weekData.weekNumber}</div>
        {weekData.periodStart &&
          weekData.periodEnd &&
          weekData.periodStart !== "0NaN-aN-aN" && (
            <div className="text-sm">
              {new Date(weekData.periodStart).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
              {" to "}
              {new Date(weekData.periodEnd).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
          )}
        <Link
          href={`https://virtual-pinball-spreadsheet.web.app/game/${weekData.vpsId}/`}
          target="_blank"
        >
          <div className="text-xl">{weekData.table}</div>
          <div className="text-xs">VPS ID {weekData.vpsId}</div>
        </Link>
      </LeaderboardTitleCard>
      {weekData.scores.map((score, index) => (
        <Link
          href={`https://virtualpinballchat.com:8443/player/${score.username}`}
          target="_blank"
          key={score.username}
          className={`flex flex-col items-center mb-1 justify-left rounded-xl px-2 w-full ${
            index % 2 === 0 ? "bg-slate-900" : "bg-slate-800"
          } hover:bg-slate-700 duration-300`}
        >
          <div className="flex flex-row gap-1 justify-left w-full items-center">
              <div className="flex items-center justify-center text-teal-300">{score.position}.</div>
              <div className="flex rounded-full items-center">
                <Image
                  src={score.userAvatarUrl}
                  width={20}
                  height={20}
                  alt={score.username}
                  className="rounded-full"
                />
              </div>
              <span className="text-md text-slate-300 truncate">{score.username}</span>
            <div className="flex flex-row gap-3 items-center ml-auto">
              <div className="text-teal-300 text-sm">
                {score.score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </div>
              <div className="text-xl text-slate-100 mr-1">{score.points}</div>
            </div>
          </div>
          <Tooltip
            title={`${
              Number.isNaN((score.score / weekData.scores[0].score) * 100)
                ? 0
                : Math.round((score.score / weekData.scores[0].score) * 100)
            }% to 1st Place`}
            placement="topRight"
          >
            <hr
              style={{
                width:
                  weekData.scores[0].score === 0
                    ? "100%"
                    : `${(score.score / weekData.scores[0].score) * 100}%`,
              }}
              className={`mr-auto pb-1 ${
                !score.score ? "border-t-0" : "border-t-4 border-slate-400"
              }`}
            />
          </Tooltip>
        </Link>
      ))}
    </div>
  );
}
