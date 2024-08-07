import { useMemo } from "react";
import colors from "@/lib/pinball/Colors";
import Link from "next/link";

export default function PositionLeaderboard({ weekData }) {
  const usernames = useMemo(() => {
    const usernamesSet = new Set(
      weekData.scores.flatMap((score) => score.username)
    );
    return Array.from(usernamesSet);
  }, [weekData]);

  const userColors = useMemo(() => {
    return usernames.reduce((acc, username, index) => {
      const color = colors[index % 20];
      return acc.concat({
        value: username,
        label: username,
        color,
      });
    }, []);
  }, [usernames]);

  return (
    <div className="flex flex-col items-center text-white">
      <div>Week #{weekData.weekNumber}</div>
      <div className="text-xl mb-2">{weekData.table}</div>
      {weekData.scores.map((score, index) => (
        <Link
          href={`/pinball/player/${score.username}`}
          key={score.username}
          className={`flex items-center gap-2 mb-1 justify-left border-2 border-teal-950 rounded-xl px-1 w-full ${
            index % 2 === 0 ? "bg-slate-900" : "bg-slate-800"
          } hover:text-teal-300 hover:bg-slate-950 duration-300`}
        >
          <div className="flex items-center ml-1">
            <span
              className="w-4 h-4 mr-2 rounded-full"
              style={{
                backgroundColor: userColors.find(
                  (user) => user.value === score.username
                ).color,
              }}
            ></span>
            {score.position}.
          </div>
          <div className="truncate">{score.username}</div>
          <div className="ml-auto mr-1 flex gap-4 flex-row items-center">
            <div className="text-teal-300 text-sm">
              {score.score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
            <div className="text-xl">{score.points}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
