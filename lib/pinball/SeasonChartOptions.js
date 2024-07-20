const seasonOptions = {
  layout: {
    padding: 4,
  },
  clip: false,
  responsive: true,
  animation: {
      duration: 1000,
      easing: "easeInCubic",
  },
  transitions: {
    active: {
      animations: {
        y: {
          from: 0
        }
      }
    },
    show: {
      animations: {
        y: {
          from: 0
        }
      }
    },
    hide: {
      animations: {
        y: {
          to: 0
        }
      }
    }
  },
  interaction: {
    mode: "point",
  },
  elements: {
    line: {
      tension: 0.25,
    },
  },
  scales: {
    x: {
      type: "linear",
      min: 1,
      suggestedMax: 10,
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
      title: {
        display: true,
        text: "Leaderboard Points",
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
      text: "Top 20 Players",
      font: {
        size: 16,
      },
      color: "#AAAAAA",
      padding: 8,
    },
    legend: {
      display: true,
      maxHeight: 53,
    },
    tooltip: {
      titleFont: {
        size: 16,
      },
      bodyFont: {
        size: 14,
      },
      padding: 10,
      caretSize: 20,
      cornerRadius: 12,
      usePointStyle: true,
      pointStyle: "circle",
      callbacks: {
        title: (context) => {
          return `Week ${context[0].label} Total Points`;
        },
        label: (context) => {
          return ` ${context.dataset.label} - ${context.parsed.y}`;
        },
      },
    },
  },
};

export default seasonOptions;
