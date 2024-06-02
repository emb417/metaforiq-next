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
  const usernames = [...new Set(weeks.flatMap(getUsernames))];
  const selectOptions = usernames.map((username, index) => ({
    value: username,
    label: username,
    color: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, 0.5)`,
  }));

  const [data, setData] = useState({ datasets: [] });

  useEffect(() => {
    const datasets = weeks.map((item) => ({
      label: item.weekNumber,
      data: getScores(item, selectedUsernames),
      backgroundColor: selectOptions.find(
        (option) => option.value === selectedUsernames[0]
      )?.color,
    }));
    setData({ datasets });
  }, [selectedUsernames, weeks]);

  const bubbleOptions = {
    animation: true,
    elements: {
      point: {
        pointStyle: "circle",
        borderWidth: 1,
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
