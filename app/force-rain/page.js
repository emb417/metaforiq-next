import MessagesToCanvas from "@/components/canvas/Messages";
import ForceRainOnCanvas from "@/components/force-rain/ForceRainOnCanvas";

export const metadata = {
  title: "Force Rain",
  description: "A digital rain with controls to change color, gravity, and 3d effects.",
  alternates: {
    canonical: "/force-rain",
  }
};

const helpMessages = [
  "press c / swipe right to change colors",
  "press g / swipe down to change gravity",
  "press t / swipe up to change 2d/3d effect",
  "press r / swipe left to change all rain effects",
  "press s / two finger tap to stop rain",
];

const charset = Array.from(new Array(42), (x, i) =>
  String.fromCharCode(i + 65393)
);
const colors = [
  ["red", "pink"],
  ["#5eead4", "#6d28d9", "#f59e0b"], // teal, purple, orange
  ["red"],
  ["orange", "white", "yellow"],
  ["red", "blue"],
  ["#6d28d9"], // purple
  ["#00FF00", "yellow"], // green, yellow
  ["blue"],
  ["#00FF00", "white"], // green, white
  ["#6d28d9", "yellow"], // purple, yellow
  ["#00FF00"], // green
  ["red", "white", "blue"],
  ["yellow"],
  ["#00FF00", "#6d28d9"], // green, purple
  ["#5eead4"], // teal
  ["#00FF00", "red"], // green, red
];
const colorHolidays = [
  { date: "2/14/2022", color: 0 },
  { date: "3/17/2022", color: 6 },
  { date: "7/4/2022", color: 11 },
  { date: "10/31/2021", color: 13 },
  { date: "11/25/2021", color: 3 },
  { date: "12/24/2021", color: 15 },
  { date: "12/25/2021", color: 15 },
  { date: "12/31/2021", color: -1 },
  { date: "1/1/2022", color: -1 },
];
const fontFace = "sans-serif";
const fontFadeSpeed = 0.12;
const fontRenderSpeed = 120;
const fontSizeOffsets = [0.2, 0.5, 1.0, 1.5, 2.0];
const fontSpacing = 4;
const initialFontSize = 12;

export default function ForceRainPage() {
  return (
    <div>
      <MessagesToCanvas
        id="forcerain"
        bgColor="transparent"
        canvasMaxHeight={100}
        fontSize={20}
        messages={helpMessages}
        x={50}
        y={30}
        zIndex={2}
      />
      <ForceRainOnCanvas
        charset={charset}
        colors={colors}
        colorHolidays={colorHolidays}
        fontFace={fontFace}
        fontFadeSpeed={fontFadeSpeed}
        fontRenderSpeed={fontRenderSpeed}
        fontSizeOffsets={fontSizeOffsets}
        fontSpacing={fontSpacing}
        initialFontSize={initialFontSize}
      />
    </div>
  );
};
