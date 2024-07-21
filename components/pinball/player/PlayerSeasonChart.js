"use client";
import { useState, useEffect } from "react";
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
import seasonOptions from "@/lib/pinball/PlayerSeasonChartOptions";

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
        backgroundColor: "#5EEAD4",
        borderColor: "#5EEAD4",
        borderWidth: 1,
        radius: 3,
        hoverRadius: 5,
      };
    });

    const label = filteredWeeksData.map((item) => item.currentSeasonWeekNumber);
    setData({ label, datasets });
  }, [weeksData]);

  return (
    <div className="w-full">
        <Chart
          options={seasonOptions}
          data={data}
          className="bg-slate-900 rounded-2xl border-2 border-teal-950"
        />
    </div>
  );
}
