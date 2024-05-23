"use client";

import React, { useEffect, useRef, useState } from "react";

const ForceRainOnCanvas = () => {
  const canvasRef = useRef(null);
  const [threeDee, setThreeDee] = useState(0);
  const [gravity, setGravity] = useState(0);
  const [colorsIndex, setColorsIndex] = useState(1);

      // constants
      const charset = Array.from(new Array(42), (x, i) =>
        String.fromCharCode(i + 65393)
      );
      const colors = [
        ["255,0,0", "248,36,164"], // 0 - red, pink
        ["0,255,255", "255,0,255", "255,95,31"], // 1 - aqua, purple, orange
        ["255,0,0"], // 2 - red
        ["255,95,31", "255,255,255", "255,255,0"], // 3 - orange, white, yellow
        ["255,0,0", "0,0,255"], // 4 - red, blue
        ["255,0,255"], // 5 - purple
        ["0,255,0", "255,255,0"], // 6 - green, yellow
        ["0,0,255"], // 7 - blue
        ["0,255,0", "255,255,255"], // 8 - green, white
        ["255,0,255", "255,255,0"], // 9 - purple, yellow
        ["0,255,0"], // 10 - green
        ["255,0,0", "255,255,255", "0,0,255"], // 11 - red, white, blue
        ["255,255,0"], // 12 - yellow
        ["0,255,0", "255,0,255"], // 13 - green, purple
        ["0,255,255"], // 14 - aqua
        ["0,255,0", "255,0,0"], // 15 - green, red
      ];
      const colorHolidays = [
        { date: "2/14/2022", color: 0 },
        { date: "3/17/2022", color: 6 },
        { date: "7/4/2022", color: 11 },
        { date: "10/31/2021", color: 13 },
        { date: "11/25/2021", color: 3 },
        { date: "12/24/2021", color: 15 },
        { date: "12/25/2021", color: 15 },
        { date: "12/31/2021", color: -1 },
        { date: "1/1/2022", color: -1 },
      ];
      const fontFace = "sans-serif";
      const fontFadeSpeed = 0.15;
      const fontRenderSpeed = 100;
      const fontSizeOffsets = [0.2, 0.5, 1.0, 1.5, 2.0];
      const fontSpacing = 4;
      const initialFontSize = 12;

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
          colors[
            colorsIndex === -1 ? selectColorSet() : colorsIndex
          ];
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
    canvas.setAttribute("height", window.innerHeight);
    canvas.setAttribute("width", window.innerWidth);
    const columns = makeColumns(canvas.height);

    const drawColumns = () => {
      const context = canvas.getContext("2d");
      // overlays transparent background color for fade effect
      context.fillStyle = `rgba( 0, 0, 0, ${fontFadeSpeed} )`;
      context.fillRect(0, 0, canvas.width, canvas.height);
      // what is the matrix, columns of chaotic beauty
      columns.map((column) => {
        // set font color, size and face
        context.fillStyle = `rgba( ${column.fontColor} ) `;
        context.font = `${column.fontSize}pt ${fontFace}`;
        // grab a random character from the charset and draw in column x at position y
        context.fillText(
          charset[randomArrayIndex(charset.length)],
          column.xPosition,
          column.yPosition
        );
        // randomly decide to get new random starting position
        // OR draw next character below previous character
        if (
          (column.gravity &&
            column.yPosition > canvas.height * randomRoll(74)) ||
          (!column.gravity &&
            column.yPosition < canvas.height / randomRoll(74))
        ) {
          column.fontColor = selectFontColor();
          column.gravity = selectGravity();
          column.fontSize = selectFontSize();
          column.yPosition = randomRoll(canvas.height);
        } else {
          column.yPosition = Math.abs(
            column.yPosition +
              (column.gravity
                ? column.fontSize + fontSpacing
                : -column.fontSize - fontSpacing)
          );
        }
      });
    };

    const rainDrops = setInterval(drawColumns, fontRenderSpeed);

    const handleKeyDown = (event) => {
        switch (event.key) {
          case "t":
            setThreeDee((prevThreeDee) => (prevThreeDee === 1 ? 0 : 1));
            break;
          case "g":
            setGravity((prevGravity) => (prevGravity === 2 ? 0 : prevGravity + 1));
            break;
          case "c":
            setColorsIndex((prevColorsIndex) => prevColorsIndex < colors.length - 1 ? prevColorsIndex + 1 : -1);
            break;
          case "r":
            setThreeDee((prevThreeDee) => (prevThreeDee === 1 ? 0 : 1));
            setGravity((prevGravity) => (prevGravity === 2 ? 0 : prevGravity + 1));
            setColorsIndex((prevColorsIndex) => prevColorsIndex < colors.length - 1 ? prevColorsIndex + 1 : -1);
            break;
          case "s":
            clearInterval(rainDrops);
            const context = canvas.getContext("2d");
            context.reset();
            break;
          default:
            break;
        }
      };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(rainDrops);
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return <canvas ref={canvasRef} id="force-rain" />;
};

export default ForceRainOnCanvas;