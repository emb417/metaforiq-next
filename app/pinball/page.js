import React from 'react';
import MessagesToCanvas from '@/components/MessagesToCanvas';

export const metadata = {
  title: 'Pinball',
}

const welcomeMessages = [
  "pinball analytics coming soon...",
  "check out virtual pinball chat on discord",
  "check out the weekly scoreboard on virtualpinballchat.com",
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