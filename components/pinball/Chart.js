"use client";
import { useState, useEffect, useMemo } from "react";
import { Bubble } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Title,
  Legend,
} from "chart.js";
import { Select, Tag } from "antd";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Title,
  Legend
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
    }));
}

export default function PinballChart({ weeks }) {
  const [selectedUsernames, setSelectedUsernames] = useState([]);
  const [data, setData] = useState({ datasets: [] });

  const bubbleOptions = {
    layout: {
      padding: 4,
    },
    clip: false,
    responsive: true,
    animation: {
      duration: 1000,
    },
    interaction: {
      mode: "point",
    },
    scales: {
      x: {
        type: "linear",
        min: 150,
        suggestedMax: 200,
        title: {
          display: true,
          text: "Week",
          font: {
            size: 16,
          },
          color: "#AAAAAA",
        },
        grid: {
          display: false,
          drawTicks: true,
        },
        ticks: {
          color: "#AAAAAA",
          font: {
            size: 16,
          },
          padding: 10,
        },
      },
      y: {
        type: "linear",
        reverse: true,
        min: 1,
        suggestedMax: 10,
        title: {
          display: true,
          text: "Leaderboard Position",
          font: {
            size: 16,
          },
          color: "#AAAAAA",
          padding: 10,
        },
        grid: {
          color: "#AAAAAA",
          drawTicks: false,
        },
        ticks: {
          color: "#AAAAAA",
          font: {
            size: 16,
          },
          padding: 10,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Virtual Pinball League",
        position: "top",
        font: {
          size: 24,
          lineHeight: 0.5,
        },
        color: "#AAAAAA",
        padding: {
          top: 8,
          bottom: 16,
        },
      },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            const formattedScore = new Intl.NumberFormat("en-US").format(
              context.raw.score
            );
            return [
              `${context.dataset.label} P${context.parsed.y} of ${
                context.raw.r * 5
              }`,
              `Week #${context.parsed.x}`,
              `${context.raw.table}`,
              `${formattedScore}`,
            ];
          },
        },
      },
    },
  };

  const weeksData = useMemo(() => {
    return weeks.map((week, weekIndex) => {
      const scoresData = week.scores.map((score, scoreIndex) => ({
        ...score,
        position: scoreIndex + 1,
      }));
      return {
        ...week,
        scores: scoresData,
        position: weekIndex + 1,
      };
    });
  }, [weeks]);

  const usernames = useMemo(() => {
    const usernamesSet = new Set(
      weeksData.flatMap((item) => item.scores.map((score) => score.username))
    );
    return Array.from(usernamesSet);
  }, [weeksData]);

  const selectOptions = useMemo(() => {
    return usernames.reduce((acc, username, index) => {
      const color = [
        "blue",
        "red",
        "silver",
        "yellow",
        "pink",
        "green",
        "gray",
        "cyan",
        "purple",
        "orange",
        "lime",
        "teal",
        "indigo",
        "violet",
        "majenta",
        "brown",
        "maroon",
        "olive",
        "fuchsia",
        "teal",
        "gold",
        "aqua",
      ][index % 20];
      return acc.concat({
        value: username,
        label: username,
        color,
      });
    }, []);
  }, [usernames]);

  useEffect(() => {
    const datasets = selectedUsernames.map((username) => ({
      label: username,
      data: weeksData.map((item) => ({
        x: item.weekNumber,
        y: getScores(item, [username])[0]?.position || null,
        r: item.scores.length / 5,
        score: getScores(item, [username])[0]?.score || null,
        participants: item.scores.length,
        table: item.table,
      })),
      backgroundColor: selectOptions.find((option) => option.value === username)
        ?.color,
    }));
    const label = weeksData.map((item) => item.weekNumber);
    setData({ label, datasets });
  }, [selectedUsernames, weeksData, selectOptions]);

  return (
    <div className="flex flex-col items-center mt-4 ml-4 w-full">
      <div className="flex justify-center w-full">
        <Select
          className="min-w-[300px] p-1 rounded-xl border-2 border-teal-950"
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
          className="bg-red-700 text-white px-2 ml-2 rounded min-w-[max-content] self-center hover:bg-red-500 duration-300"
          onClick={() => setSelectedUsernames([])}
        >
          Clear All
        </button>
      </div>
      <div className="w-4/5 h-dvh">
        <Bubble
          options={bubbleOptions}
          data={data}
          className="bg-slate-900 my-4 rounded-2xl border-2 border-teal-950"
        />
      </div>
    </div>
  );
}
