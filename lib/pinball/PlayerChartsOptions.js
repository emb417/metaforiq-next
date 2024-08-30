const playerChartsOptions = {
  layout: {
    padding: 2,
  },
  clip: false,
  responsive: true,
  animation: {
    duration: 1000,
  },
  interaction: {
    mode: "point",
  },
  elements: {
    line: {
      tension: 0.2,
      color: "#AAAAAA",
    },
  },
  stacked: false,
  scales: {
    x: {
      type: "linear",
      display: true,
      title: {
        display: true,
        text: "Week",
        font: {
          size: 12,
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
          size: 12,
        },
        padding: 2,
      },
    },
    y: {
      type: "linear",
      display: true,
      position: "left",
      reverse: true,
      min: 1,
      suggestedMax: 20,
      title: {
        display: true,
        text: "Position",
        font: {
          size: 12,
        },
        color: "#AAAAAA",
        padding: 2,
      },
      grid: {
        color: "#AAAAAA",
        drawTicks: false,
      },
      ticks: {
        color: "#AAAAAA",
        font: {
          size: 12,
        },
        padding: 2,
      },
    },
    y2: {
      type: "linear",
      display: true,
      position: "right",
      reverse: false,
      title: {
        display: true,
        text: "Win %",
        font: {
          size: 12,
        },
        color: "#AAAAAA",
        padding: 2,
      },
      grid: {
        color: "#AAAAAA",
        drawTicks: false,
        drawOnChartArea: false,
      },
      ticks: {
        color: "#AAAAAA",
        font: {
          size: 12,
        },
        padding: 2,
      },
    },
  },
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
      position: "top",
    },
    tooltip: {
      backgroundColor: "rgba(15, 23, 42, 0.9)",
      titleFont: {
        size: 12,
      },
      bodyFont: {
        size: 12,
      },
      padding: 10,
      caretSize: 20,
      cornerRadius: 12,
      usePointStyle: true,
      callbacks: {
        labelPointStyle: function (context) {
          if (context.raw.pointStyle === "triangle") {
            return {
              pointStyle: "triangle",
              rotation: 270,
            };
          } else if (context.raw.pointStyle === "circle") {
            return {
              pointStyle: "circle",
              rotation: 0,
            };
          } else if (context.raw.pointStyle === "cross") {
            return {
              pointStyle: "cross",
              rotation: 45,
            };
          }
        },
        title: (context) => {
          return [`${context[0].raw.table}`,`Week #${context[0].raw.week}`];
        },
        label: (context) => {
          if (context.raw.r !== undefined) {
            const formattedScore = new Intl.NumberFormat("en-US").format(
              context.raw.score
            );
            return [
              ` ${context.dataset.label} - Leaderboard Position`,
              ` ${context.raw.periodStart} to ${context.raw.periodEnd}`,
              ` ${formattedScore}`,
              ` P${context.parsed.y} of ${context.raw.participants}`,
              ` `,
            ];
          } else if (context.raw.position !== undefined) {
            return [
              ` ${context.dataset.label} - Rolling Average Position`,
              ` P${context.parsed.y} From Week #${context.parsed.x - 13} to Week #${context.parsed.x}`,
              ` `,
            ];
          } else if (context.raw.winPercentage !== undefined) {
            return [
              ` ${context.dataset.label} - Win Percentage`,
              ` ${context.parsed.y.toFixed(2)}%`,
              ` `,
            ];
          }
        },
      },
    },
  },
};

export default playerChartsOptions;
