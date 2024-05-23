'use client';

import React, { useState, useEffect } from 'react';
import CanvasTypewriter from '@/components/CanvasTypewriter';

/**
 * MessagesToCanvas component
 *
 * @param {string} id - The id of the canvas
 * @param {string} bgColor - The background color of the canvas
 * @param {string} fontSize - The font size of the canvas
 * @param {number} [canvasMaxHeight] - The height of the canvas
 * @param {number} [canvasMaxWidth] - The width of the canvas
 * @param {number} [messageInterval] - The interval between messages
 * @param {number} [canvasResetInterval] - The time before the canvas is reset
 * @param {Array<string>} messages - The messages to display
 * @param {number} x - The x position of the canvas
 * @param {number} y - The y position of the canvas
 * @param {number} zIndex - The z-index of the canvas
 */
const MessagesToCanvas = ({
  id,
  bgColor,
  fontSize,
  canvasMaxHeight,
  canvasMaxWidth,
  messageInterval = 10000,
  canvasResetInterval = 5000,
  messages = [],
  x,
  y,
  zIndex,
}) => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const [currentMessage, setCurrentMessage] = useState(messages[randomIndex]);

  useEffect(() => {
    const resetCanvas = () => {
      const canvas = document.getElementById(id);
      if (canvas) {
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
  
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      const message = messages[randomIndex];
      setCurrentMessage(message);
  
      setTimeout(() => {
        resetCanvas();
      }, canvasResetInterval);
    }, messageInterval);

    // Cleanup function to stop the interval
    return () => {
      clearInterval(intervalId);
    };
  }, [id, messages, canvasResetInterval, messageInterval]);

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