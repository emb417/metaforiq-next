"use client";
import { useState, useEffect, useMemo } from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Legend,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Tooltip,
} from "chart.js";
import colors from "@/lib/Colors";
import seasonOptions from "@/lib/SeasonChartOptions";

ChartJS.register(
  Title,
  Legend,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Tooltip
);

function getScores(item, selectedUsernames) {
  if (!item || !item.scores) {
    return [];
  }
  return item.scores
    .filter((score) => selectedUsernames.includes(score.username))
    .map((score) => ({
      points: score.points,
      cumulativePoints: score.cumulativePoints,
    }));
}

export default function PinballChart({ weeksData }) {
  const [data, setData] = useState({ datasets: [] });

  const usernames = useMemo(() => {
    const usernamesSet = new Set(
      weeksData.flatMap((item) => item.scores.map((score) => score.username))
    );
    return Array.from(usernamesSet);
  }, [weeksData]);

  const usernameOptions = useMemo(() => {
    return usernames.reduce((acc, username, index) => {
      const color = colors[index % 20];
      return acc.concat({
        value: username,
        label: username,
        color,
      });
    }, []);
  }, [usernames]);

  useEffect(() => {
    const filteredWeeksData = weeksData.filter((item) => item.season === 5);
    const datasets = weeksData[0].scores.map((score) => {
      return {
        type: "line",
        label: score.username,
        data: filteredWeeksData.map((item) => ({
          x: item.currentSeasonWeekNumber,
          y: getScores(item, [score.username])[0]?.cumulativePoints || null,
        })),
        backgroundColor: usernameOptions.find(
          (option) => option.value === score.username
        )?.color,
        borderColor: usernameOptions.find((option) => option.value === score.username)
          ?.color,
        borderWidth: 1,
        radius: 4,
        hoverRadius: 8,
      };
    });

    const label = filteredWeeksData.map((item) => item.currentSeasonWeekNumber);
    setData({ label, datasets });
  }, [weeksData, usernameOptions]);

  return (
    <div className="flex flex-col items-center mt-4 ml-4 w-full">
      <div className="text-center text-red-700 mb-4 sm:hidden">
        Rotate screen for better view.
      </div>
      <div className="w-4/5 h-dvh">
        <Chart
          options={seasonOptions}
          data={data}
          className="bg-slate-900 my-4 rounded-2xl border-2 border-teal-950"
        />
      </div>
    </div>
  );
}
