import React, { useEffect, useRef } from 'react';

export const InteractiveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let step = 0;

    const render = () => {
      step += 0.015;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const linesCount = 14;
      const points = 45;

      for (let i = 0; i < linesCount; i++) {
        ctx.beginPath();
        const lineOffset = (i - linesCount / 2) * 9;
        const alpha = Math.max(0.04, 0.22 - Math.abs(i - linesCount / 2) * 0.02);
        ctx.strokeStyle = `rgba(0, 0, 0, ${alpha})`;
        ctx.lineWidth = 1.2;

        for (let j = 0; j <= points; j++) {
          const x = (j / points) * width;
          const distToMouse = Math.abs(x - mouseX);
          const mouseFactor = Math.max(0, 1 - distToMouse / 220);

          const y =
            height / 2 +
            lineOffset +
            Math.sin(j * 0.18 + step + i * 0.15) * 22 +
            Math.cos(j * 0.08 - step) * 12 +
            (mouseY - height / 2) * 0.15 * mouseFactor;

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full max-w-[53rem] flex flex-col items-start my-8">
      <section
        className="relative w-full hidden md:flex overflow-hidden rounded-2xl bg-zinc-50/50 border border-black/[0.04]"
        style={{ height: '35vh', minHeight: '220px' }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full cursor-crosshair"
        />
        <div className="absolute bottom-3 right-4 pointer-events-none text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
          Interactive Dynamics · 60 FPS
        </div>
      </section>
    </div>
  );
};
