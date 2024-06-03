"use client";
import React, { useState, useEffect } from "react";
import { Bubble } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement } from "chart.js";
import { Select } from "antd";

Chart.register(CategoryScale, LinearScale, PointElement);

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
      x: item.weekNumber,
      y: score.points,
      r: 10,
    }));
}

export default function PinballChart({ weeks }) {
  const [selectedUsernames, setSelectedUsernames] = useState([]);
  const usernames = [...new Set(weeks.slice(0, 100).flatMap(getUsernames))];
  const selectOptions = usernames.reduce((acc, username, index) => {
    const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, 0.5)`;
    return acc.concat({
      value: username,
      label: username,
      color,
    });
  }, []);

  const [data, setData] = useState({ datasets: [] });

  useEffect(() => {
    const datasets = selectedUsernames.map((username) => ({
      label: username,
      data: weeks
        .slice(0, 100)
        .map((item) => ({
          x: item.weekNumber,
          y: getScores(item, [username])[0]?.y || 0,
        })),
      backgroundColor: selectOptions.find((option) => option.value === username)
        ?.color,
    }));
    const label = weeks.slice(0, 100).map((item) => item.weekNumber);
    setData({ label, datasets });
  }, [selectedUsernames, weeks]);

  const bubbleOptions = {
    animation: true,
    elements: {
      point: {
        pointStyle: "circle",
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        type: "linear",
        min: 0,
        max: 12,
      },
    },
  };

  return (
    <div className="bg-black m-4 p-2 h-[800px]">
      <Select
        mode="multiple"
        placeholder="Select users"
        options={selectOptions}
        onChange={setSelectedUsernames}
        value={selectedUsernames}
        className="w-1/2"
      />
      <Bubble options={bubbleOptions} data={data} className="bg-white m-4 p-4" />
    </div>
  );
}


