'use client';

import React, { useEffect, useRef } from 'react';

const Canvas = ({ id, bgColor = 'black', canvasMaxHeight, canvasMaxWidth, fontSize = 40, message = ' ', x = 0, y = 0, zIndex = 1 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Access the canvas element using the ref
    const canvas = canvasRef.current;
    canvas.setAttribute( 'style', `z-index: ${zIndex}; background: ${bgColor};` );
    canvas.setAttribute( 'height', canvasMaxHeight || window.innerHeight );
    canvas.setAttribute( 'width', canvasMaxWidth || window.innerWidth );
    const context = canvas.getContext('2d');
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';
    context.textRendering = "geometricPrecision";
    context.fillStyle = 'white';
    context.font = `small-caps ${ fontSize }px sans-serif`;
    const lineHeight = fontSize * 1.2;

    const startX = x === 0 ? window.innerWidth * 0.2 : x;
    const startY = y === 0 ? window.innerHeight * 0.3 : y;
    const endX = window.innerWidth * 0.7;
  
    // sets initial x/y for typing
    let cursorX = startX;
    let cursorY = startY;
    
    // start at the beginning
    let i = 0;
    let typing = () => {
      if (message === null) {
        return;
      }
      // find words to measure for word wrapping
      const char = message.substring( i );
      let space = char.indexOf( ' ' );
      space = ( space === -1 ) ? message.length : space;
      const wordWidth = context.measureText( char.substring( 0, space ) ).width;
      const charWidth = context.measureText( message.charAt( i ) ).width;
      // wrap words once length reaches border
      if( cursorX + wordWidth >= endX ) {
          cursorX = startX;
          cursorY += lineHeight;
      }
      // write letter
      context.fillText( message.charAt( i ), cursorX, cursorY );
      // move cursor
      cursorX += charWidth;
      i++;
      if (i < message.length) {
        setTimeout(typing, 42);
      }
    }
    typing();

    return () => {
      clearInterval(typing);
    };
  }, [message]);

  return <canvas id={id} ref={canvasRef} className='position-absolute cursor-not-allowed touch-action-none' />;
};

export default Canvas;
