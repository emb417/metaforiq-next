"use client";

import { useState, useEffect } from "react";
import Typewriter from "@/components/canvas/Typewriter";

const getRandomMessage = (messages) => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

export default function MessagesToCanvas({
  id,
  bgColor,
  fontSize,
  canvasMaxHeight,
  canvasMaxWidth,
  messageInterval = 6000,
  messages = [],
  x,
  y,
  zIndex,
}) {
  const [currentMessage, setCurrentMessage] = useState(
    getRandomMessage(messages)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const message = getRandomMessage(messages);
      setCurrentMessage(message);
    }, messageInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentMessage, messageInterval, messages]);

  return (
    <Typewriter
      id={id}
      bgColor={bgColor}
      canvasMaxHeight={canvasMaxHeight}
      canvasMaxWidth={canvasMaxWidth}
      fontSize={fontSize}
      x={x}
      y={y}
      zIndex={zIndex}
      message={currentMessage}
    />
  );
};
