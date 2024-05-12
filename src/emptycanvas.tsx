import React, { useEffect } from 'react';

export function emptycanvas() {
  useEffect(() => {
    const canvas = document.getElementById('welcomeCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      // Set background color to black
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.fillStyle = 'white';
      ctx.font = '30px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Draw text
      const text = 'Connect Wallet to Play';
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    }
  }, []);

  return (
    <canvas id="welcomeCanvas" width={1000} height={1000}></canvas>
  );
}
