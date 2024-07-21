const positionOptions = {
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
  scales: {
    x: {
      type: "linear",
      min: 160,
      suggestedMax: 220,
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
      reverse: true,
      min: 1,
      suggestedMax: 20,
      title: {
        display: true,
        text: "Leaderboard Position",
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
  },
  plugins: {
    title: {
      display: true,
      text: "Position Trend",
      font: {
        size: 12,
      },
      color: "#AAAAAA",
      padding: 2,
    },
    legend: {
      display: false,
    },
    tooltip: {
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
          if (context.raw.r === undefined) {
            return {
              pointStyle: "triangle",
              rotation: 270,
            };
          } else if (context.raw.r !== undefined) {
            return {
              pointStyle: "circle",
              rotation: 0,
            };
          }
        },
        title: (context) => {
          if (context[0].raw.r === undefined) {
            return ["Rolling Average Position"];
          } else if (context[0].raw.r !== undefined) {
            return ["Leaderboard Position"];
          }
        },
        label: (context) => {
          if (context.raw.r !== undefined) {
            const formattedScore = new Intl.NumberFormat("en-US").format(
              context.raw.score
            );
            return [
              ` ${context.dataset.label} P${context.parsed.y} of ${
                context.raw.r * 5
              }`,
              `Week #${context.parsed.x}: ${context.raw.periodStart} to ${context.raw.periodEnd}`,
              `${context.raw.table}`,
              `${formattedScore}`,
            ];
          } else if (context.raw.r === undefined) {
            return [
              `${context.dataset.label}`,
              `Week #${context.parsed.x} to Week #${context.parsed.x - 13}`,
              `Average Position: P${context.parsed.y}`,
            ];
          }
        },
      },
    },
  },
};

export default positionOptions;
