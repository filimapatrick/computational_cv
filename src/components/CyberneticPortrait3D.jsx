'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function CyberneticPortrait3D() {
  const cardRef = useRef(null);

  // Mouse position motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for 3D rotation
  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });

  // Transforms for 3D perspective tilt
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  // Specular sheen position
  const sheenX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const sheenY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="perspective-[1200px] w-full flex items-center justify-center select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={cardRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] xl:max-w-[480px] aspect-[4/4.5] rounded-[32px] p-5 sm:p-6 bg-gradient-to-b from-[#18253D] via-[#101A2D] to-[#0D1525] border-2 border-[#334B70]/70 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(56,189,248,0.15)] flex flex-col items-center justify-between"
      >
        {/* 1. TOP NEON TUBE FIXTURE */}
        <div 
          style={{ transform: 'translateZ(30px)' }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-48 sm:w-56 h-3 flex items-center justify-center z-30"
        >
          {/* Metal End Caps */}
          <div className="w-3 h-3 rounded-l bg-gradient-to-r from-slate-400 to-slate-600 border border-slate-400/50 shadow-sm" />
          
          {/* Glowing Cylindrical Tube */}
          <div className="flex-1 h-2 bg-gradient-to-r from-cyan-300 via-white to-cyan-300 rounded-sm shadow-[0_0_15px_#38bdf8,0_0_30px_#38bdf8,inset_0_1px_2px_rgba(255,255,255,0.9)]" />
          
          {/* Metal End Caps */}
          <div className="w-3 h-3 rounded-r bg-gradient-to-l from-slate-400 to-slate-600 border border-slate-400/50 shadow-sm" />
        </div>

        {/* 2. SIDE MECHANICAL CLAMPS */}
        {/* Left Clamp */}
        <div 
          style={{ transform: 'translateZ(20px)' }}
          className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-3.5 h-16 rounded-l-md bg-gradient-to-b from-slate-300 via-slate-500 to-slate-700 border-t border-b border-l border-white/30 shadow-md flex flex-col justify-between py-1.5 items-center"
        >
          <div className="w-1.5 h-1 rounded-full bg-slate-800" />
          <div className="w-1.5 h-1 rounded-full bg-slate-800" />
        </div>

        {/* Right Clamp */}
        <div 
          style={{ transform: 'translateZ(20px)' }}
          className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-3.5 h-16 rounded-r-md bg-gradient-to-b from-slate-300 via-slate-500 to-slate-700 border-t border-b border-r border-white/30 shadow-md flex flex-col justify-between py-1.5 items-center"
        >
          <div className="w-1.5 h-1 rounded-full bg-slate-800" />
          <div className="w-1.5 h-1 rounded-full bg-slate-800" />
        </div>

        {/* 3. CORNER INDUSTRIAL BOLTS */}
        <div className="absolute top-3 left-3.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-slate-300 to-slate-700 border border-slate-400/40 shadow-inner" />
        <div className="absolute top-3 right-3.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-slate-300 to-slate-700 border border-slate-400/40 shadow-inner" />
        <div className="absolute bottom-3 left-3.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-slate-300 to-slate-700 border border-slate-400/40 shadow-inner" />
        <div className="absolute bottom-3 right-3.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-slate-300 to-slate-700 border border-slate-400/40 shadow-inner" />

        {/* 4. RECESSED INNER SCREEN BEZEL & PORTRAIT */}
        <div 
          style={{ transform: 'translateZ(15px)' }}
          className="relative w-full flex-1 rounded-[22px] p-2 bg-[#080E1A] border border-[#2A3E5E] shadow-[inset_0_4px_18px_rgba(0,0,0,0.95)] overflow-hidden flex items-center justify-center"
        >
          {/* Portrait Image */}
          <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-[#070B14]">
            <Image
              src="/patrick.jpeg"
              alt="Patrick Filima"
              fill
              priority
              loading="eager"
              sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 480px"
              className="object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-700 ease-out"
            />
            
            {/* Subtle Vignette & Specular Glare */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none opacity-40"
              style={{
                backgroundPositionX: sheenX,
                backgroundPositionY: sheenY
              }}
            />
          </div>
        </div>

        {/* 5. BOTTOM TACTILE COLLABORATION BADGE */}
        <div 
          style={{ transform: 'translateZ(35px)' }}
          className="mt-3 relative z-30 inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#121E33] via-[#16253F] to-[#121E33] border border-cyan-500/40 shadow-[0_4px_15px_rgba(0,0,0,0.6),0_0_15px_rgba(56,189,248,0.2)]"
        >
          {/* Glowing Status Indicator */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
          </span>
          
          <span className="text-xs font-semibold tracking-wide text-slate-200 capitalize">
            open for collaboration
          </span>
        </div>

        {/* 6. BOTTOM NEON TUBE FIXTURE */}
        <div 
          style={{ transform: 'translateZ(30px)' }}
          className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-56 sm:w-64 h-3 flex items-center justify-center z-30"
        >
          {/* Metal End Caps */}
          <div className="w-3.5 h-3.5 rounded-l bg-gradient-to-r from-slate-400 to-slate-600 border border-slate-400/50 shadow-sm" />
          
          {/* Glowing Cyan Tube */}
          <div className="flex-1 h-2.5 bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 rounded-sm shadow-[0_0_20px_#38bdf8,0_0_35px_#38bdf8,inset_0_1px_2px_rgba(255,255,255,0.9)]" />
          
          {/* Metal End Caps */}
          <div className="w-3.5 h-3.5 rounded-r bg-gradient-to-l from-slate-400 to-slate-600 border border-slate-400/50 shadow-sm" />
        </div>
      </motion.div>
    </div>
  );
}
