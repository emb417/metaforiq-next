import React from 'react';
import MessagesToCanvas from '@/components/MessagesToCanvas';

export const metadata = {
  title: 'Libowski',
}

const theDudeMessages = [
  "the dude abides",
  "That rug really tied the room together.",
  "I'm the Dude. So that's what you call me.",
  "Or, uh, His Dudeness, or uh, Duder, or El Duderino",
  "Obviously you're not a golfer.",
  "Yeah, well, you know, that's just like, uh, your opinion, man.",
  "I do mind, the Dude minds. This will not stand, ya know, this aggression will not stand, man.",
];

const LibowskiPage = () => {
  return (
    <div>
      <MessagesToCanvas
        id="libowski"
        fontSize={40}
        messages={theDudeMessages}
      />
    </div>
  );
};

export default LibowskiPage;