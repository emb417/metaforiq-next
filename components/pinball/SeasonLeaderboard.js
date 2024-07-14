import { useMemo } from "react";
import colors from "@/lib/Colors";

export default function SeasonLeaderboard({ weeksData }) {
  const usernames = useMemo(() => {
    const usernamesSet = new Set(
      weeksData.flatMap((item) => item.scores.map((score) => score.username))
    );
    return Array.from(usernamesSet);
  }, [weeksData]);

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

  const sortedUsernames = weeksData[0].scores
    .filter((score) => score.cumulativePoints !== null)
    .reduce((acc, score) => {
      if (!acc.some((item) => item.username === score.username)) {
        acc.push({
          username: score.username,
          cumulativePoints: score.cumulativePoints,
        });
      } else {
        const user = acc.find((item) => item.username === score.username);
        user.cumulativePoints += score.cumulativePoints;
      }
      return acc;
    }, [])
    .sort((a, b) => b.cumulativePoints - a.cumulativePoints)
    .map((user) => user.username);

  return (
    <div className="flex flex-col items-start">
      <div className="flex mb-2 text-2xl text-white">
          As of Week #{weeksData[0].currentSeasonWeekNumber}
      </div>
      {sortedUsernames.map((username, index) => (
        <div
          key={username}
          className="flex items-center gap-2 mb-1 text-white text-sm justify-left border-2 border-teal-950 rounded-lg px-1 w-full bg-slate-900"
        >
          <div className="flex items-center ml-1">
            <span
              className="w-3 h-3 mr-2 rounded-full"
              style={{
                backgroundColor: userColors.find(
                  (user) => user.value === username
                ).color,
              }}
            ></span>
            {index + 1}.
          </div>
          <div className="truncate">{username}</div>
          <div className="ml-auto mr-1">
            {
              weeksData[0].scores.find((score) => score.username === username)
                .cumulativePoints
            }
          </div>
        </div>
      ))}
    </div>
  );
}
