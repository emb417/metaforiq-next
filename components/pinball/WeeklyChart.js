"use client";
import { useState, useEffect, useMemo } from "react";
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
import { Select, Tag } from "antd";
import colors from "@/lib/pinball/Colors";
import positionOptions from "@/lib/pinball/PositionChartOptions";

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

const tagRender = ({ label, value, closable, onClose }) => {
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
    >
      {label}
    </Tag>
  );
};

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

export default function WeeklyChart({ weeksData, topPlayers }) {
  const [selectedUsernames, setSelectedUsernames] = useState(topPlayers);
  const [data, setData] = useState({ datasets: [] });

  const usernames = useMemo(() => {
    const usernamesSet = new Set(
      weeksData.flatMap((item) => item.scores.map((score) => score.username))
    );
    return Array.from(usernamesSet);
  }, [weeksData]);

  const selectOptions = useMemo(() => {
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
    const rollingAverageDatasets = selectedUsernames.map((username) => ({
      type: "line",
      label: username,
      data: weeksData.map((item) => {
        return {
          x: item.weekNumber,
          y: getScores(item, [username])[0]?.rollingAveragePosition || null,
        };
      }),
      backgroundColor: selectOptions.find((option) => option.value === username)
        ?.color,
      borderColor: selectOptions.find((option) => option.value === username)
        ?.color,
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
      backgroundColor: selectOptions.find((option) => option.value === username)
        ?.color,
    }));

    const datasets = [...rollingAverageDatasets, ...bubbleDatasets];
    const label = weeksData.map((item) => item.weekNumber);
    setData({ label, datasets });
  }, [selectedUsernames, weeksData, selectOptions]);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-center w-full mb-4 gap-2">
        <Select
          className="min-w-[250px] min-h-12 p-1 rounded-xl"
          mode="multiple"
          tagRender={({ label, value }) =>
            tagRender({
              label,
              value: selectOptions.find((option) => option.value === value)
                ?.color,
              closable: true,
              onClose: () =>
                setSelectedUsernames(
                  selectedUsernames.filter((username) => username !== value)
                ),
            })
          }
          placeholder="Select users"
          options={selectOptions}
          optionFilterProp="label"
          onChange={setSelectedUsernames}
          value={selectedUsernames}
        />
        <button
          className="bg-red-700 text-white px-2 h-8 rounded min-w-[max-content] self-center hover:bg-red-500 duration-300"
          onClick={() => setSelectedUsernames([])}
        >
          Clear All
        </button>
      </div>
      <div className="flex w-full justify-center">
        <Chart
          options={positionOptions}
          data={data}
          className="bg-slate-900 rounded-2xl"
        />
      </div>
    </div>
  );
}
