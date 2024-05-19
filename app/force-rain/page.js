import React from 'react';
import MessagesToCanvas from '@/components/MessagesToCanvas';

export const metadata = {
  title: 'Metaforiq Force Rain',
}

const welcomeMessages = [
  "welcome to metaforiq",
  "force rain like the matrix",
];

const ForceRainPage = () => {
  return (
    <div>
      <MessagesToCanvas
        id="forcerain"
        canvasMaxHeight={100}
        fontSize={20}
        messages={welcomeMessages}
        x={50}
        y={30}
        zIndex={2}
      />
    </div>
  );
};

export default ForceRainPage;