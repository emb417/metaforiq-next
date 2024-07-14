import { useMemo } from "react";
import colors from "@/lib/Colors";

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
    <div className="flex flex-col items-center mt-1">
      <div className="text-xl text-white">{weekData.table}</div>
      <div className="text-white mb-2">Week #{weekData.weekNumber}</div>
      {weekData.scores.map((score) => (
        <div
          key={score.username}
          className="flex items-center gap-2 mb-1 text-white text-sm justify-left border-2 border-teal-950 rounded-lg px-1 w-full bg-slate-900"
        >
          <div className="flex items-center ml-1">
            <span
              className="w-3 h-3 mr-2 rounded-full"
              style={{
                backgroundColor: userColors.find(
                  (user) => user.value === score.username
                ).color,
              }}
            ></span>
            {score.position}.
          </div>
          <div className="truncate">{score.username}</div>
          <div className="ml-auto mr-1">
            {score.score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            &nbsp;({score.points})
          </div>
        </div>
      ))}
    </div>
  );
}
