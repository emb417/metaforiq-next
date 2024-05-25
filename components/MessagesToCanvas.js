'use client';

import React, { useState, useEffect } from 'react';
import CanvasTypewriter from '@/components/CanvasTypewriter';

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
  const randomIndex = Math.floor(Math.random() * messages.length);
  const [currentMessage, setCurrentMessage] = useState(messages[randomIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const message = messages[randomIndex];
      setCurrentMessage(message);
    }, messageInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentMessage]);

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