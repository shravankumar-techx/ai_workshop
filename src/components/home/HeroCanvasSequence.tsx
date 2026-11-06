'use client';

import React, { useEffect, useRef } from 'react';

export default function HeroCanvasSequence() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const frameCount = 225;
    const images: HTMLImageElement[] = [];
    let currentFrame = 1;
    let animId: number;
    let lastTime = 0;
    const fps = 25;
    const interval = 1000 / fps;

    const getFrameUrl = (idx: number) => {
      const padded = String(idx).padStart(3, '0');
      return `/ezgif-62320f249031d0ad-jpg/ezgif-frame-${padded}.jpg`;
    };

    // Draw image with cover scaling to eliminate stretching
    const drawCover = (img: HTMLImageElement) => {
      if (!img || !img.complete || img.naturalWidth === 0) return;
      const width = canvas.clientWidth || window.innerWidth;
      const height = canvas.clientHeight || window.innerHeight;

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const shiftX = (canvas.width - img.width * ratio) / 2;
      const shiftY = (canvas.height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        shiftX,
        shiftY,
        img.width * ratio,
        img.height * ratio
      );
    };

    // Preload frame 1 immediately to eliminate layout shift (CLS = 0)
    const firstImg = new Image();
    firstImg.src = getFrameUrl(1);
    firstImg.onload = () => {
      images[0] = firstImg;
      drawCover(firstImg);
    };

    // Progressively buffer remaining frames
    for (let i = 2; i <= frameCount; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      images[i - 1] = img;
    }

    // Continuous 25fps animation loop
    const animate = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      const elapsed = timestamp - lastTime;

      if (elapsed >= interval) {
        lastTime = timestamp - (elapsed % interval);
        currentFrame = (currentFrame % frameCount) + 1;
        const nextImg = images[currentFrame - 1];
        if (nextImg && nextImg.complete && nextImg.naturalWidth > 0) {
          drawCover(nextImg);
        }
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    // Responsive window resize listener
    const handleResize = () => {
      const activeImg = images[currentFrame - 1] || firstImg;
      if (activeImg && activeImg.complete) {
        drawCover(activeImg);
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

