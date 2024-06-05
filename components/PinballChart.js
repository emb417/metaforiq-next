"use client";
import React, { useState, useEffect } from "react";
import { Bubble } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement } from "chart.js";
import { Select, Tag } from "antd";

Chart.register(CategoryScale, LinearScale, PointElement);

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
      x: item.weekNumber,
      y: score.points,
      r: 10,
    }));
}

export default function PinballChart({ weeks }) {
  const [selectedUsernames, setSelectedUsernames] = useState([]);
  const usernames = [...new Set(weeks.slice(0, 53).flatMap(getUsernames))];
  const selectOptions = usernames.reduce((acc, username, index) => {
    const colors = [
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
    ];
    const color = colors[index % colors.length];
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
      data: weeks.slice(0, 52).map((item) => ({
        x: item.weekNumber,
        y: getScores(item, [username])[0]?.y || 0,
      })),
      backgroundColor: selectOptions.find((option) => option.value === username)
        ?.color,
    }));
    const label = weeks.slice(0, 52).map((item) => item.weekNumber);
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
        tagRender={({ label, value }) => tagRender({ label, value: selectOptions.find((option) => option.value === value) ?.color, closable: true, onClose: () => setSelectedUsernames(selectedUsernames.filter((username) => username !== value)) })}
        placeholder="Select users"
        options={selectOptions}
        optionFilterProp="label"
        onChange={setSelectedUsernames}
        value={selectedUsernames}
        className="w-1/2"
      />
      <Bubble
        options={bubbleOptions}
        data={data}
        className="bg-slate-200 m-4 p-4"
      />
    </div>
  );
}