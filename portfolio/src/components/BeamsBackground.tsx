import React, { useEffect, useRef } from 'react';
import { useTheme } from './ui/theme-provider';

export const BeamsBackground: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Beam configuration
    const beams: Array<{
      x: number;
      y: number;
      length: number;
      angle: number;
      speed: number;
      opacity: number;
    }> = [];

    // Create initial beams
    for (let i = 0; i < 8; i++) {
      beams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 200 + 100,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with theme-aware background
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw beams
      beams.forEach((beam) => {
        // Update position
        beam.x += Math.cos(beam.angle) * beam.speed;
        beam.y += Math.sin(beam.angle) * beam.speed;

        // Wrap around edges
        if (beam.x < -beam.length) beam.x = canvas.width + beam.length;
        if (beam.x > canvas.width + beam.length) beam.x = -beam.length;
        if (beam.y < -beam.length) beam.y = canvas.height + beam.length;
        if (beam.y > canvas.height + beam.length) beam.y = -beam.length;

        // Draw beam
        ctx.save();
        ctx.translate(beam.x, beam.y);
        ctx.rotate(beam.angle);

        // Create gradient for beam
        const gradient = ctx.createLinearGradient(-beam.length / 2, 0, beam.length / 2, 0);
        
        // Single color for beams - subtle gray that works in both themes
        const beamColor = '#6b7280'; // gray-500
        
        gradient.addColorStop(0, `rgba(0, 0, 0, 0)`);
        gradient.addColorStop(0.5, `${beamColor}${Math.floor(beam.opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `rgba(0, 0, 0, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(-beam.length / 2, -2, beam.length, 4);

        // Add glow effect with same single color
        ctx.shadowColor = beamColor;
        ctx.shadowBlur = 20;
        ctx.fillRect(-beam.length / 2, -1, beam.length, 2);

        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none transition-all duration-300"
      style={{ zIndex: -10, overflow: 'hidden', width: '100vw', height: '100vh', maxWidth: '100vw', maxHeight: '100vh' }}
    />
  );
}; 