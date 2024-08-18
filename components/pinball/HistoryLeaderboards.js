"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import PlayerImage from "@/components/pinball/player/PlayerImage";

export default function HistoryLeaderboards({ weeksData }) {
  const searchParams = useSearchParams();
  const week = searchParams.get("week");
  const [highlightedId, setHighlightedId] = useState(null);

  useEffect(() => {
    if (week) {
      const element = document.getElementById(week);
      if (element) {
        setHighlightedId(week);
        element.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    }
  }, [week]);

  return (
    <div
      id="scrollableDiv"
      className="flex flex-row w-full gap-2 text-white pb-4 mb-4 border-b border-teal-950 overflow-auto"
    >
      {weeksData.map((weekData) => (
        <div
          key={weekData.weekNumber}
          id={weekData.weekNumber}
          className="flex flex-col gap-1 items-center w-[500px]"
        >
          <div
            className={`flex flex-col p-2 w-full h-[120px] justify-center rounded-3xl ${
              highlightedId == weekData.weekNumber ? "text-teal-300" : ""
            }`}
          >
            <div className="text-center">Week #{weekData.weekNumber}</div>
            {weekData.periodStart !== "0NaN-aN-aN" && (
              <div className="text-sm text-center">
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
            <div className="text-xl text-center leading-6">
              {weekData.table}
            </div>
          </div>
          <div className="flex flex-col gap-1 overflow-auto rounded-xl">
            {weekData.scores.map((score, scoreIndex) => (
              <Link
                href={`/pinball/player/${score.username}`}
                key={score.username}
                className={`flex items-center gap-2 justify-left rounded-full pr-1 w-full ${
                  scoreIndex % 2 === 0 ? "bg-slate-900" : "bg-slate-800"
                } hover:text-teal-300 hover:bg-slate-950 duration-300`}
              >
                <div className="flex items-center">
                  <PlayerImage src={score.userAvatarUrl} alt={score.username} />
                </div>
                <div className="truncate">
                  {score.position}. {score.username}
                </div>
                <div className="ml-auto mr-1 flex gap-4 flex-row items-center">
                  <div className="text-teal-300 text-sm">
                    {score.score
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                  <div className="text-xl">{score.points}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
