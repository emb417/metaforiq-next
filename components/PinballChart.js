"use client";
import React, { useState, useEffect, useMemo } from "react";
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

/**********************
 * Helpers
 */

function getUsernames(item) {
  return item.scores.map((score) => score.username);
}

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
        title: {
          display: true,
          text: "Week",
        },
      },
      y: {
        type: "linear",
        reverse: true,
        title: {
          display: true,
          text: "Leaderboard Position",
        },
        min: 1,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Virtual Pinball League",
        position: "top",
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
              `${context.dataset.label} P${context.parsed.y} of ${context.raw.r * 5}`,
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
    return weeks.slice(0, 52).map((week, weekIndex) => {
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
    const usernamesSet = new Set(weeksData.slice(0, 52).flatMap((item) =>
      item.scores.map((score) => score.username)));
    return Array.from(usernamesSet);
  }, [weeksData]);

  const selectOptions = useMemo(() => {
    return usernames.reduce((acc, username, index) => {
      const color = [
        "red",
        "blue",
        "green",
        "gray",
        "cyan",
        "purple",
        "orange",
        "black",
        "aqua",
        "magenta",
        "yellow",
        "lime",
        "teal",
        "indigo",
        "violet",
        "pink",
        "brown",
        "maroon",
        "olive",
        "navy",
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
          className="min-w-[300px]"
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
          className="bg-red-500 text-white px-2 py-1 ml-2 rounded min-w-[max-content]"
          onClick={() => setSelectedUsernames([])}
        >
          Clear All
        </button>
      </div>
      <div className="w-4/5">
        <Bubble
          options={bubbleOptions}
          data={data}
          className="bg-slate-200 my-4 p-2"
        />
      </div>
    </div>
  );
}
