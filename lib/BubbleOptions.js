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

export default bubbleOptions;
