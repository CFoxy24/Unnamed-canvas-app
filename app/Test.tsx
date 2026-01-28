'use client';

import React, { useState } from 'react';

export default function Test() {
    let startx = 0;
    let starty = 0;

    const [style, setStyle] = useState('top: 0px')

    const onMouseDown = (event : React.MouseEvent) => {
        startx = event.clientX;
        starty = event.clientY; 
        console.log(`down at ${startx}, ${starty}`);
        
    } 

    const onMouseUp = (event : React.MouseEvent) => {
        setStyle(`top: ${starty}px; left: ${startx}px`);
        console.log(`up at ${startx}, ${starty}`);
    }

  return <button onMouseUp={onMouseUp}  onMouseDown={onMouseDown}>This is a test page.</button>;
}