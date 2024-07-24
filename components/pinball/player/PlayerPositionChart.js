"use client";
import { useState, useEffect } from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Legend,
  BubbleController,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Tooltip,
} from "chart.js";
import positionOptions from "@/lib/pinball/PlayerPositionChartOptions";

ChartJS.register(
  Title,
  Legend,
  BubbleController,
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
      position: score.position,
      score: score.score,
      rollingAveragePosition: score.rollingAveragePosition,
    }));
}

export default function PositionChart({ weeksData, username }) {
  const [selectedUsernames, setSelectedUsernames] = useState([username]);
  const [data, setData] = useState({ datasets: [] });

  useEffect(() => {
    const rollingAverageDatasets = selectedUsernames.map((username) => ({
      type: "line",
      label: username,
      data: weeksData.map((item) => {
        return {
          x: item.weekNumber,
          y: getScores(item, [username])[0]?.rollingAveragePosition || null,
        };
      }),
      backgroundColor: "#5EEAD4",
      borderColor: "#5EEAD4",
      borderWidth: 1,
      radius: 4,
      hoverRadius: 8,
      pointStyle: "triangle",
      rotation: 270,
    }));
    const bubbleDatasets = selectedUsernames.map((username) => ({
      type: "bubble",
      label: username,
      data: weeksData.map((item) => ({
        x: item.weekNumber,
        y: getScores(item, [username])[0]?.position || null,
        r: Math.max(item.numberOfPlayers / 5, 4),
        score: getScores(item, [username])[0]?.score || null,
        participants: item.numberOfPlayers,
        table: item.table,
        periodStart: item.periodStart,
        periodEnd: item.periodEnd,
      })),
      backgroundColor: "#555555",
      borderColor: "#555555",
    }));

    const datasets = [...rollingAverageDatasets, ...bubbleDatasets];
    const label = weeksData.map((item) => item.weekNumber);
    setData({ label, datasets });
  }, [selectedUsernames, weeksData]);

  return (
    <div className="w-full">
        <Chart
          options={positionOptions}
          data={data}
          className="bg-slate-900 rounded-2xl border-2 border-teal-950"
        />
    </div>
  );
}
