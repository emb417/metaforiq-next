import React from 'react';
import MessagesToCanvas from '@/components/MessagesToCanvas';
import ForceRainOnCanvas from '@/components/ForceRainOnCanvas';

export const metadata = {
  title: 'Force Rain',
}

const helpMessages = [
  "press c to change colors",
  "press g to change gravity",
  "press t to change 2d/3d effect",
  "press r to change all rain effects",
  "press s to stop rain",
];

const ForceRainPage = () => {
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
      <ForceRainOnCanvas />
    </div>
  );
};

export default ForceRainPage;