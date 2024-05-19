import React from 'react';
import MessagesToCanvas from '@/components/MessagesToCanvas';

export const metadata = {
  title: 'Metaforiq Pinball',
}

const welcomeMessages = [
  "welcome to metaforiq",
  "pinball analytics",
];

const PinballPage = () => {
  return (
    <div>
      <MessagesToCanvas
        id="pinball"
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

export default PinballPage;