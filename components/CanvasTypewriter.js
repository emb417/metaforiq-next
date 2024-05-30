"use client";

import React, { useEffect, useRef } from "react";

const Canvas = ({
  id,
  bgColor = "black",
  fontSize = 40,
  message = " ",
  x = 0,
  y = 0,
  zIndex = 1,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Access the canvas element using the ref
    const canvas = canvasRef.current;

    if (!canvas) {
      console.error("No canvas element found");
      return;
    }

    canvas.setAttribute("style", `z-index: ${zIndex}; background: ${bgColor};`);
    canvas.setAttribute("height", window.innerHeight);
    canvas.setAttribute("width", window.innerWidth);

    const context = canvas.getContext("2d");

    if (!context) {
      console.error("Canvas context not available");
      return;
    }

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.textRendering = "geometricPrecision";
    context.fillStyle = "white";
    context.font = `small-caps ${fontSize}px sans-serif`;
    const lineHeight = fontSize * 1.2;

    const startX = x === 0 ? window.innerWidth * 0.2 : x;
    const startY = y === 0 ? window.innerHeight * 0.3 : y;
    const endX = window.innerWidth * 0.7;

    // sets initial x/y for typing
    let cursorX = startX;
    let cursorY = startY;

    const typing = () => {
      if (message === null) {
        return;
      }
      // find words to measure for word wrapping
      const char = message.substring(i);
      let space = char.indexOf(" ");
      space = space === -1 ? message.length : space;
      const wordWidth = context.measureText(char.substring(0, space)).width;
      const charWidth = context.measureText(message.charAt(i)).width;
      // wrap words once length reaches border
      if (cursorX + wordWidth >= endX) {
        cursorX = startX;
        cursorY += lineHeight;
      }
      // write letter
      context.fillText(message.charAt(i), cursorX, cursorY);
      // move cursor
      cursorX += charWidth;
    };

    let i = 0;
    let lastTime = 0;
    const animate = (timestamp) => {
      const deltaTime = timestamp - lastTime;
      if (deltaTime >= 42) {
        typing();
        i++;
        if (i < message.length) {
          lastTime = timestamp;
          requestAnimationFrame(animate);
        }
      } else {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animate);
    };
  }, [message, bgColor, fontSize, x, y, zIndex]);

  return <canvas id={id} ref={canvasRef} className="absolute" />;
};

export default Canvas;
