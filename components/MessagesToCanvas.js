"use client";

import { useState, useEffect } from "react";
import CanvasTypewriter from "@/components/CanvasTypewriter";

const getRandomMessage = (messages) => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

const MessagesToCanvas = ({
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
}) => {
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
    <CanvasTypewriter
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

export default MessagesToCanvas;
