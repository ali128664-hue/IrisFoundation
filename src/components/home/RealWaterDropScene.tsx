'use client';
import { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Droplets, RefreshCw } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
  gravity: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  speed: number;
  lineWidth: number;
  color: string;
}

export function RealWaterDropScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [impactFlash, setImpactFlash] = useState(false);
  const [dropsCount, setDropsCount] = useState(0);

  const spriteRef = useRef<HTMLImageElement | null>(null);
  const animFrameId = useRef<number | null>(null);
  const lastDropTime = useRef<number>(Date.now());
  const manualTrigger = useRef<boolean>(false);

  const particlesRef = useRef<Particle[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);

  // Spawn splash particles upon water drop collision
  const triggerImpact = useCallback((x: number, y: number) => {
    setImpactFlash(true);
    setTimeout(() => setImpactFlash(false), 240);
    setDropsCount((c) => c + 1);

    // 1. Concentric Ripple Waves
    const rippleColors = ['#E0F7FA', '#4FC3F7', '#81D4FA', '#8B2FC9'];
    for (let i = 0; i < 4; i++) {
      ripplesRef.current.push({
        x,
        y,
        radius: 8 + i * 16,
        maxRadius: 180 + i * 40,
        alpha: 0.95 - i * 0.18,
        speed: 2.2 - i * 0.3,
        lineWidth: 3 - i * 0.5,
        color: rippleColors[i % rippleColors.length],
      });
    }

    // 2. Parabolic Water Splash Beads
    const particleColors = ['#FFFFFF', '#E0F7FA', '#B3E5FC', '#4FC3F7', '#C8EEFF'];
    const count = 18;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
      const speed = 2.5 + Math.random() * 4.5;
      particlesRef.current.push({
        x,
        y: y - 5,
        vx: Math.cos(angle) * speed * 0.9,
        vy: -Math.abs(Math.sin(angle) * speed * 1.8) - 2.5,
        radius: 1.8 + Math.random() * 2.6,
        alpha: 1,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        gravity: 0.22,
      });
    }
  }, []);

  // Preload water droplet sprite
  useEffect(() => {
    const img = new window.Image();
    img.src = '/images/water-drop-sprite.jpg';
    img.onload = () => {
      spriteRef.current = img;
    };
  }, []);

  // Canvas render & physics loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1));
    let height = (canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1));

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      height = canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
    };
    window.addEventListener('resize', handleResize);

    const cycleDuration = 2800; // 2.8 seconds per natural dripping cycle
    let hasImpactedThisCycle = false;

    const render = () => {
      const now = Date.now();
      let elapsed = now - lastDropTime.current;

      if (manualTrigger.current) {
        lastDropTime.current = now;
        elapsed = 0;
        hasImpactedThisCycle = false;
        manualTrigger.current = false;
      }

      if (elapsed > cycleDuration) {
        lastDropTime.current = now;
        elapsed = 0;
        hasImpactedThisCycle = false;
      }

      ctx.clearRect(0, 0, width, height);

      const dpr = window.devicePixelRatio || 1;
      const startX = width / 2;
      const startY = height * 0.08;
      const impactY = height * 0.54;

      const progress = elapsed / cycleDuration;

      // 1. RENDER EXPANDING LIQUID RIPPLES
      for (let i = ripplesRef.current.length - 1; i >= 0; i--) {
        const r = ripplesRef.current[i];
        r.radius += r.speed * dpr;
        r.alpha *= 0.978;

        if (r.alpha < 0.01 || r.radius >= r.maxRadius * dpr) {
          ripplesRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.ellipse(r.x, r.y, r.radius, r.radius * 0.42, 0, 0, Math.PI * 2);
        ctx.strokeStyle = r.color;
        ctx.lineWidth = r.lineWidth * dpr;
        ctx.globalAlpha = Math.max(0, r.alpha);
        ctx.shadowColor = '#4FC3F7';
        ctx.shadowBlur = 10 * dpr;
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(r.x, r.y, Math.max(1, r.radius * 0.88), Math.max(1, r.radius * 0.88 * 0.42), 0, 0, Math.PI * 2);
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = (r.lineWidth * 0.5) * dpr;
        ctx.globalAlpha = Math.max(0, r.alpha * 0.6);
        ctx.stroke();

        ctx.restore();
      }

      // 2. RENDER PARABOLIC SPLASH BEADS
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx * dpr;
        p.y += p.vy * dpr;
        p.vy += p.gravity * dpr;
        p.alpha *= 0.965;

        if (p.alpha < 0.02 || p.y > height) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * dpr, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = '#4FC3F7';
        ctx.shadowBlur = 8 * dpr;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x - p.radius * 0.3 * dpr, p.y - p.radius * 0.3 * dpr, p.radius * 0.35 * dpr, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.globalAlpha = p.alpha * 0.9;
        ctx.fill();
        ctx.restore();
      }

      // 3. FALLING WATER DROPLET (REAL DYNAMICS)
      if (progress < 0.28) {
        const formT = progress / 0.28;
        const radius = (12 + formT * 18) * dpr;
        const currentY = startY + (formT * 16) * dpr;

        ctx.save();
        ctx.translate(startX, currentY);

        if (spriteRef.current && spriteRef.current.complete) {
          ctx.globalCompositeOperation = 'screen';
          ctx.drawImage(
            spriteRef.current,
            -radius * 1.25,
            -radius * 1.25,
            radius * 2.5,
            radius * 2.5
          );
        } else {
          const grad = ctx.createRadialGradient(-radius * 0.3, -radius * 0.3, radius * 0.1, 0, 0, radius);
          grad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
          grad.addColorStop(0.3, 'rgba(79, 195, 247, 0.75)');
          grad.addColorStop(0.8, 'rgba(139, 47, 201, 0.5)');
          grad.addColorStop(1, 'rgba(2, 136, 209, 0.85)');

          ctx.beginPath();
          ctx.ellipse(0, 0, radius * 0.9, radius * (1 + formT * 0.3), 0, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.shadowColor = '#4FC3F7';
          ctx.shadowBlur = 15 * dpr;
          ctx.fill();
        }
        ctx.restore();
      } else if (progress < 0.50) {
        const fallT = (progress - 0.28) / 0.22;
        const easedFall = Math.pow(fallT, 2.2);
        const currentY = (startY + 16 * dpr) + (impactY - (startY + 16 * dpr)) * easedFall;

        const wobble = Math.sin(fallT * Math.PI * 6) * 0.18;
        const stretchY = 1.35 + fallT * 0.35 + wobble;
        const stretchX = 1 / Math.sqrt(stretchY);
        const radius = 24 * dpr;

        ctx.save();
        ctx.translate(startX, currentY);
        ctx.scale(stretchX, stretchY);

        ctx.beginPath();
        const wakeGrad = ctx.createLinearGradient(0, -radius * 1.8, 0, 0);
        wakeGrad.addColorStop(0, 'rgba(79, 195, 247, 0)');
        wakeGrad.addColorStop(1, 'rgba(79, 195, 247, 0.35)');
        ctx.fillStyle = wakeGrad;
        ctx.ellipse(0, -radius * 0.8, radius * 0.45, radius * 1.4, 0, 0, Math.PI * 2);
        ctx.fill();

        if (spriteRef.current && spriteRef.current.complete) {
          ctx.globalCompositeOperation = 'screen';
          ctx.drawImage(
            spriteRef.current,
            -radius,
            -radius,
            radius * 2,
            radius * 2
          );
        } else {
          const grad = ctx.createRadialGradient(-radius * 0.3, -radius * 0.3, radius * 0.1, 0, 0, radius);
          grad.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
          grad.addColorStop(0.35, 'rgba(79, 195, 247, 0.85)');
          grad.addColorStop(0.85, 'rgba(139, 47, 201, 0.6)');
          grad.addColorStop(1, 'rgba(255, 255, 255, 0.9)');

          ctx.beginPath();
          ctx.arc(0, 0, radius, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.shadowColor = '#4FC3F7';
          ctx.shadowBlur = 20 * dpr;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.ellipse(-radius * 0.3, -radius * 0.3, radius * 0.28, radius * 0.18, -Math.PI / 4, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.globalAlpha = 0.9;
        ctx.fill();

        ctx.restore();
      } else if (progress >= 0.50 && !hasImpactedThisCycle) {
        hasImpactedThisCycle = true;
        triggerImpact(startX, impactY);
      } else if (progress >= 0.53 && progress < 0.70) {
        const reboundT = (progress - 0.53) / 0.17;
        const reboundHeight = Math.sin(reboundT * Math.PI) * 42 * dpr;
        const currentY = impactY - reboundHeight;
        const radius = 6.5 * (1 - reboundT * 0.4) * dpr;

        if (reboundHeight > 2 * dpr) {
          ctx.save();
          ctx.translate(startX, currentY);
          ctx.beginPath();
          ctx.arc(0, 0, radius, 0, Math.PI * 2);
          const reboundGrad = ctx.createRadialGradient(-radius * 0.3, -radius * 0.3, radius * 0.1, 0, 0, radius);
          reboundGrad.addColorStop(0, '#FFFFFF');
          reboundGrad.addColorStop(0.4, '#4FC3F7');
          reboundGrad.addColorStop(1, '#0288D1');
          ctx.fillStyle = reboundGrad;
          ctx.shadowColor = '#4FC3F7';
          ctx.shadowBlur = 12 * dpr;
          ctx.fill();
          ctx.restore();
        }
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [triggerImpact]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) * (window.devicePixelRatio || 1);
    const y = (e.clientY - rect.top) * (window.devicePixelRatio || 1);
    triggerImpact(x, y);
  };

  const handleManualDrop = () => {
    manualTrigger.current = true;
  };

  return (
    <div
      ref={containerRef}
      onClick={handleCanvasClick}
      className="relative w-full h-[520px] sm:h-[580px] lg:h-[640px] rounded-3xl overflow-hidden flex items-center justify-center select-none cursor-pointer group bg-gradient-to-b from-[#14142B]/80 via-[#1A1A2E]/90 to-[#0B0D1B]"
    >
      {/* Background Soft Ambient Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-gradient-to-br from-[#4FC3F7]/15 via-[#8B2FC9]/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[520px] h-[220px] bg-[#4FC3F7]/10 rounded-full blur-2xl" />
      </div>

      {/* Realistic Water Splash Crown & Rippling Surface Base */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-700 group-hover:scale-[1.02]"
        style={{
          maskImage: 'radial-gradient(circle at 50% 54%, black 48%, rgba(0,0,0,0.7) 68%, transparent 82%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 54%, black 48%, rgba(0,0,0,0.7) 68%, transparent 82%)',
        }}
      >
        {/* Real Macro Water Splash Image Asset */}
        <img
          src="/images/realistic-water-drop.jpg"
          alt="Real Water Surface & Splash Crown"
          className={`w-full max-w-[560px] h-auto object-contain transition-all duration-300 ${
            impactFlash ? 'brightness-125 saturate-125 filter drop-shadow-[0_0_35px_rgba(79,195,247,0.8)]' : 'brightness-105'
          }`}
        />
      </div>

      {/* Dynamic Fluid Simulation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* Impact Light Glow Flash */}
      <div
        className={`absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#4FC3F7]/25 blur-2xl pointer-events-none transition-opacity duration-200 ${
          impactFlash ? 'opacity-100 scale-125' : 'opacity-0 scale-75'
        }`}
      />

      {/* Top Drip Emitter Glow */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none flex flex-col items-center">
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-transparent via-[#4FC3F7]/60 to-transparent blur-[1px]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#4FC3F7] shadow-[0_0_12px_#4FC3F7] mt-0.5 animate-pulse" />
      </div>

      {/* Floating Interactive Live Badge */}
      <div className="absolute top-6 right-6 z-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-white/15 text-xs text-white/80 flex items-center gap-2 shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-[#4FC3F7] animate-ping" />
          <span className="font-semibold text-white">Live Liquid Physics</span>
        </motion.div>
      </div>

      {/* Bottom Floating Stats & Trigger Button */}
      <div className="absolute bottom-6 inset-x-6 z-20 flex flex-col sm:flex-row items-center justify-between gap-3 pointer-events-auto">
        <div className="bg-[#1A1A2E]/80 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-white/10 text-xs text-white/90 shadow-xl flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#4FC3F7]/20 flex items-center justify-center text-[#4FC3F7]">
            <Droplets className="w-4 h-4 animate-bounce" />
          </div>
          <div>
            <p className="font-bold text-white text-xs">WHO Certified · TDS 160 ppm</p>
            <p className="text-[11px] text-[#4FC3F7]">
              {dropsCount > 0 ? `${dropsCount} Drops Completed` : 'Continuous Pure Water Flow'}
            </p>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleManualDrop();
          }}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#8B2FC9] to-[#0288D1] hover:from-[#A845EC] hover:to-[#03A9F4] text-white font-semibold text-xs rounded-2xl shadow-lg shadow-[#0288D1]/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Drop Water Now 💧
        </button>
      </div>
    </div>
  );
}
