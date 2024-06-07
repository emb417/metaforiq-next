"use client";
import React, { useState, useEffect } from "react";
import { Bubble, Bar, Line } from "react-chartjs-2";
import { Chart, BarElement,CategoryScale, LinearScale, LineElement, PointElement } from "chart.js";
import { Select, Tag } from "antd";
import { reverse } from "lodash";
import { Overlay } from "antd/es/popconfirm/PurePanel";

Chart.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement);

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
      y: score.position,
    }));
}

export default function PinballChart({ weeks }) {
  const [selectedUsernames, setSelectedUsernames] = useState([]);
  const usernames = [...new Set(weeks.slice(0, 52).flatMap(getUsernames))];

  const weeksData = weeks.slice(0, 52).map((week, weekIndex) => {
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
      data: weeksData.map((item) => ({
        x: item.weekNumber,
        y: getScores(item, [username])[0]?.y || 0,
      })),
      backgroundColor: selectOptions.find((option) => option.value === username)
        ?.color,
    }));
    const label = weeks.slice(0, 52).map((item) => item.weekNumber);
    setData({ label, datasets });
  }, [selectedUsernames, weeksData]);

  const bubbleOptions = {
    animation: false,
    radius: 8,
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
          text: "Position",
        },
        min: 1,
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
        className="bg-slate-200 m-4 p-2 z-10"
      />
    </div>
  );
}