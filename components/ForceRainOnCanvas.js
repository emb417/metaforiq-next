"use client";

import React, { useEffect, useRef, useState } from "react";

const ForceRainOnCanvas = ({
  charset,
  colors,
  colorHolidays,
  fontFadeSpeed,
  fontRenderSpeed,
  fontFace,
  fontSizeOffsets,
  fontSpacing,
  initialFontSize,
}) => {
  const canvasRef = useRef(null);
  const startXRef = useRef(null);
  const startYRef = useRef(null);
  const [threeDee, setThreeDee] = useState(0);
  const [gravity, setGravity] = useState(0);
  const [colorsIndex, setColorsIndex] = useState(1);

  /****
   ** create array of columns based on canvas width and font size
   ** and initialize each column with an x position and random y start position
   ** also initialize each column with an initial font color, gravity, and font size
   ****/
  const makeColumns = (canvasHeight) => {
    const noc = Math.ceil(window.innerWidth / initialFontSize);
    const columns = Array.from(new Array(noc), (x, i) => ({
      fontColor: selectFontColor(),
      gravity: selectGravity(),
      fontSize: selectFontSize(),
      xPosition: i * initialFontSize,
      yPosition: randomRoll(canvasHeight),
    }));
    return columns;
  };

  // utility functions
  const randomArrayIndex = function (length) {
    return Math.floor(Math.random() * length);
  };
  const randomRoll = function (size) {
    return Math.abs(Math.random() * size);
  };
  const selectColorSet = function () {
    const currentDate = new Date().setHours(0, 0, 0, 0);
    let color;
    // look for holiday match and set initial color
    for (let i = 0; i < colorHolidays.length; i++) {
      const ci = colorHolidays[i];
      const holidayDate = new Date(ci.date).setHours(0, 0, 0, 0);
      if (holidayDate == currentDate) {
        color = ci.color;
      }
    }
    return color ?? randomArrayIndex(colors.length);
  };

  const selectFontColor = function () {
    const fontColors =
      colors[colorsIndex === -1 ? selectColorSet() : colorsIndex];
    return fontColors[randomArrayIndex(fontColors.length)];
  };
  const selectFontSize = function () {
    return (
      (threeDee &&
        initialFontSize *
          fontSizeOffsets[randomArrayIndex(fontSizeOffsets.length)]) ||
      initialFontSize
    );
  };
  const selectGravity = function () {
    return gravity === 2 ? Math.round(Math.random()) : gravity;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    canvas.setAttribute("height", window.innerHeight);
    canvas.setAttribute("width", window.innerWidth);
    const columns = makeColumns(canvas.height);

    const drawColumns = () => {
      const context = canvas.getContext("2d");
      if (!context) {
        return;
      }
      // overlays transparent background color for fade effect
      context.fillStyle = `rgba( 0, 0, 0, ${fontFadeSpeed} )`;
      context.fillRect(0, 0, canvas.width, canvas.height);
      // what is the matrix, columns of chaotic beauty
      columns.forEach((column) => {
        // set font color, size and face
        context.fillStyle = `${column.fontColor}`;
        context.font = `${column.fontSize}pt ${fontFace}`;
        // grab a random character from the charset and draw in column x at position y
        const randomIndex = randomArrayIndex(charset.length);
        const character = charset[randomIndex];
        context.fillText(character, column.xPosition, column.yPosition);
        // randomly decide to get new random starting position
        // OR draw next character below previous character
        if (
          (column.gravity &&
            column.yPosition > canvas.height * randomRoll(74)) ||
          (!column.gravity && column.yPosition < canvas.height / randomRoll(74))
        ) {
          column.fontColor = selectFontColor();
          column.gravity = selectGravity();
          column.fontSize = selectFontSize();
          column.yPosition = randomRoll(canvas.height);
        } else {
          const direction = column.gravity ? 1 : -1;
          column.yPosition = Math.abs(
            column.yPosition + direction * (column.fontSize + fontSpacing)
          );
        }
      });
    };

    const rainDrops = setInterval(drawColumns, fontRenderSpeed);

    const handleKeyDown = (event) => {
      const actions = {
        t: () => setThreeDee((prevThreeDee) => (prevThreeDee === 1 ? 0 : 1)),
        g: () =>
          setGravity((prevGravity) =>
            prevGravity === 2 ? 0 : prevGravity + 1
          ),
        c: () =>
          setColorsIndex((prevColorsIndex) =>
            prevColorsIndex < colors.length - 1 ? prevColorsIndex + 1 : -1
          ),
        r: () => {
          setThreeDee((prevThreeDee) => (prevThreeDee === 1 ? 0 : 1));
          setGravity((prevGravity) =>
            prevGravity === 2 ? 0 : prevGravity + 1
          );
          setColorsIndex((prevColorsIndex) =>
            prevColorsIndex < colors.length - 1 ? prevColorsIndex + 1 : -1
          );
        },
        s: () => {
          clearInterval(rainDrops);
          const context = canvas.getContext("2d");
          context.reset();
        },
      };

      actions[event.key]?.();
    };

    document.addEventListener("keydown", handleKeyDown);

    document.addEventListener(
      "touchstart",
      (event) => {
        if (event.touches.length > 1) {
          clearInterval(rainDrops);
          const context = canvas.getContext("2d");
          context.reset();
          return;
        }
        startXRef.current = event.touches[0].clientX;
        startYRef.current = event.touches[0].clientY;
      },
      false
    );

    document.addEventListener(
      "touchmove",
      (event) => {
        if (!startXRef.current || !startYRef.current) {
          return;
        }
        const currentX = event.touches[0].clientX;
        const currentY = event.touches[0].clientY;

        const deltaX = currentX - startXRef.current;
        const deltaY = currentY - startYRef.current;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          if (deltaX > 0) {
            setColorsIndex((prevColorsIndex) =>
              prevColorsIndex < colors.length - 1 ? prevColorsIndex + 1 : -1
            );
          } else {
            setColorsIndex((prevColorsIndex) =>
              prevColorsIndex < colors.length - 1 ? prevColorsIndex + 1 : -1
            );
            setThreeDee((prevThreeDee) => (prevThreeDee === 1 ? 0 : 1));
            setGravity((prevGravity) =>
              prevGravity === 2 ? 0 : prevGravity + 1
            );
          }
        } else {
          if (deltaY > 0) {
            setGravity((prevGravity) =>
              prevGravity === 2 ? 0 : prevGravity + 1
            );
          } else {
            setThreeDee((prevThreeDee) => (prevThreeDee === 1 ? 0 : 1));
          }
        }
        startXRef.current = null;
        startYRef.current = null;
      },
      false
    );

    return () => {
      clearInterval(rainDrops);
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return <canvas ref={canvasRef} id="force-rain" />;
};

export default ForceRainOnCanvas;
