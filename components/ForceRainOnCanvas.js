"use client";

import React, { useEffect, useRef } from "react";

const ForceRainOnCanvas = ({ colorsIndex = 1, gravity = 2, threeDee = 1 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
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
    const initialFontSize = 8;

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
          colorsIndex === -1 ? randomArrayIndex(colors.length) : colorsIndex
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

    const resetCanvas = () => {
      if (canvas) {
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    const startRain = function (colorsIndex, gravity, threeDee) {
      colorsIndex = colorsIndex ?? selectColorSet();
      gravity = gravity ?? 0;
      threeDee = threeDee ?? true;

      // set background, height and width
      canvas.setAttribute("height", window.innerHeight);
      canvas.setAttribute("width", window.innerWidth);
      // set context, fill with black
      const context = canvas.getContext("2d", { desynchronized: true });
      context.fillStyle = `black`;
      context.fillRect(0, 0, canvas.width, canvas.height);
      rainDrops(makeColumns());
    };

    /****
     ** create array of columns based on canvas width and font size
     ** and initialize each column with an x position and random y start position
     ** also initialize each column with an initial font color, gravity, and font size
     ****/
    const makeColumns = () => {
      const noc = Math.ceil(window.innerWidth / initialFontSize);
      const columns = Array.from(new Array(noc), (x, i) => ({
        fontColor: selectFontColor(),
        gravity: selectGravity(),
        fontSize: selectFontSize(),
        xPosition: i * initialFontSize,
        yPosition: randomRoll(canvas.height),
      }));
      return columns;
    };

    // draw a character at an interval based on font speed
    const rainDrops = (columns) =>
      setInterval(() => {
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
      }, fontRenderSpeed);

    startRain();

    // window.addEventListener('keydown', e => {
    //     let { colors, colorsIndex, gravity, threeDee } = ForceRainOnCanvas;
    //     let dirty = false;
    //     let eventType = "change";
    //     switch( e.key ){
    //       case 'c':
    //         colorsIndex = ( colorsIndex < colors.length - 1 ) ? colorsIndex + 1 : -1;
    //         eventType = "change_color";
    //         dirty = true;
    //         break;
    //       case 'g':
    //         gravity = ( gravity === 2 ) ? 0 : gravity + 1;
    //         eventType = "change_gravity";
    //         dirty = true;
    //         break;
    //       case 't':
    //         threeDee = !threeDee;
    //         eventType = "change_threedee";
    //         dirty = true;
    //         break;
    //       default:
    //         break;
    //     }
    //     if ( dirty ) { resetCanvas(); }
    //       return !dirty || startRain( colorsIndex, gravity, threeDee );
    //   }, false );

    return () => {
      clearInterval(rainDrops);
      resetCanvas();
    };
  }, []);

  return <canvas ref={canvasRef} id="force-rain" />;
};

export default ForceRainOnCanvas;
