'use client';
import { useRef, useState } from 'react';

export function VideoWaterDrop() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="relative w-full h-[500px] sm:h-[560px] lg:h-[620px] rounded-3xl overflow-hidden flex items-center justify-center select-none bg-gradient-to-b from-[#14142B]/90 via-[#1A1A2E] to-[#0B0D1B] border border-white/10 shadow-[0_0_80px_rgba(79,195,247,0.18)]">
      {/* Ambient Glowing Halo Behind Video */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-gradient-to-br from-[#4FC3F7]/25 via-[#8B2FC9]/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[540px] h-[240px] bg-[#4FC3F7]/15 rounded-full blur-2xl" />
      </div>

      {/* Decorative Rotating Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[420px] h-[420px] rounded-full border border-[#4FC3F7]/20 animate-spin opacity-40"
          style={{ animationDuration: '24s' }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full border border-[#8B2FC9]/15 animate-spin opacity-30"
          style={{ animationDuration: '36s', animationDirection: 'reverse' }}
        />
      </div>

      {/* Main Video Element - Pure Looping Water Drop (No Player UI) */}
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden pointer-events-none"
        style={{
          maskImage: 'radial-gradient(circle at 50% 50%, black 58%, rgba(0,0,0,0.7) 76%, transparent 96%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 58%, rgba(0,0,0,0.7) 76%, transparent 96%)',
        }}
      >
        <video
          ref={videoRef}
          src="/videos/water-drop.mp4"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            videoLoaded && !videoError ? 'opacity-95' : 'opacity-0'
          }`}
        />

        {/* Photorealistic Water Drop Fallback while loading */}
        {(!videoLoaded || videoError) && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#14142B] to-[#0B0D1B]">
            <img
              src="/images/realistic-water-drop.jpg"
              alt="Pure Water Drop"
              className="w-full max-w-[540px] h-auto object-contain brightness-110 filter drop-shadow-[0_0_35px_rgba(79,195,247,0.6)]"
            />
          </div>
        )}
      </div>

      {/* Soft Blue Caustic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/70 via-transparent to-[#1A1A2E]/40 pointer-events-none" />
    </div>
  );
}
