"use client";
import { useMemo, useState, useEffect } from "react";
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
import colors from "@/lib/pinball/Colors";
import { Select, Tag } from "antd";
import playerChartsOptions from "@/lib/pinball/PlayerChartsOptions";

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

const selectSharedProps = {
  mode: "multiple",
  size: "small",
  className: "w-full sm:w-1/2 rounded-xl",
  allowClear: true,
  placeholder: "Select...",
  maxTagCount: "responsive",
  optionFilterProp: "label",
};

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

export default function PlayerCharts({ weeksData, username }) {
  const [selectedDatasets, setSelectedDatasets] = useState([
    "rollingAverageDatasets",
    "positionDatasets",
  ]);
  const [selectedUsernames, setSelectedUsernames] = useState([username]);
  const [data, setData] = useState({ datasets: [] });

  const selectedDatasetsOptions = useMemo(() => {
    return [
      {
        value: "rollingAverageDatasets",
        label: "Rolling Average",
      },
      {
        value: "positionDatasets",
        label: "Position",
      },
    ];
  }, []);

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
    const positionDatasets = selectedUsernames.map((username) => ({
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
      hoverRadius: 8,
      pointStyle: "circle",
      rotation: 0,
    }));

    const datasets = selectedDatasets.includes("rollingAverageDatasets")
      ? rollingAverageDatasets
      : [];
    if (selectedDatasets.includes("positionDatasets")) {
      datasets.push(...positionDatasets);
    }
    const label = weeksData.map((item) => item.weekNumber);
    setData({ label, datasets });
  }, [selectedUsernames, weeksData, selectOptions, selectedDatasets]);

  return (
    <div className="flex flex-col w-full text-white items-start gap-1 border-2 border-teal-950 rounded-xl px-2 pt-1 pb-2">
      <div className="flex flex-col sm:flex-row w-full gap-2 items-center py-1">
        <div className="flex min-w-[max-content] text-sm">Annual Charts</div>
        <Select
          {...selectSharedProps}
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
          options={selectOptions}
          onChange={setSelectedUsernames}
          value={selectedUsernames}
        />
        <Select
          {...selectSharedProps}
          tagRender={({ label, value }) =>
            tagRender({
              label,
              closable: true,
              onClose: () =>
                setSelectedDatasets(
                  selectedDatasets.filter((dataset) => dataset !== value)
                ),
            })
          }
          options={selectedDatasetsOptions}
          onChange={setSelectedDatasets}
          value={selectedDatasets}
        />
      </div>
      <hr className="w-full pb-1 border-1 border-teal-950" />
      <Chart options={playerChartsOptions} data={data} />
    </div>
  );
}
