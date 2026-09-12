'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { FaBrain, FaWaveSquare, FaTerminal } from 'react-icons/fa';

// Dynamically import Three.js brain hologram (SSR safe)
const BrainHologram3D = dynamic(() => import('./BrainHologram3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-sky-400 text-xs font-mono">
      Initializing 3D Connectome...
    </div>
  )
});

export default function HolographicDiagnostics3D() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between gap-3 select-none pointer-events-auto">
      {/* 1. TOP DIAGNOSTIC PANEL: THREE.JS 3D BRAIN CONNECTOME */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative flex-1 min-h-[160px] rounded-2xl bg-[#0B1322]/80 backdrop-blur-md border border-sky-500/30 shadow-[0_8px_30px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)] p-3 overflow-hidden flex flex-col justify-between group"
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between text-[11px] font-mono text-sky-300 border-b border-white/10 pb-1.5 z-10">
          <div className="flex items-center gap-1.5">
            <FaBrain className="text-sky-400 text-xs" />
            <span className="font-semibold tracking-wider uppercase">3D Connectome Hologram</span>
          </div>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-300">
            Realtime 3D
          </span>
        </div>

        {/* Three.js Interactive 3D Canvas */}
        <div className="absolute inset-0 top-6 bottom-0 z-0">
          <BrainHologram3D />
        </div>

        {/* Holographic overlay grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

        {/* Panel Footer HUD */}
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10 pt-1 border-t border-white/5 bg-[#0B1322]/60">
          <span>Vertices: 1,200</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Synaptic Pulse
          </span>
        </div>
      </motion.div>

      {/* 2. MIDDLE DIAGNOSTIC PANEL: BRAIN TRACTOGRAPHY & MRI SCAN */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative h-[130px] rounded-2xl bg-[#0B1322]/80 backdrop-blur-md border border-indigo-500/30 shadow-[0_8px_30px_rgba(0,0,0,0.6)] p-3 overflow-hidden flex flex-col justify-between"
      >
        {/* Header */}
        <div className="flex items-center justify-between text-[11px] font-mono text-indigo-300 border-b border-white/10 pb-1.5 z-10">
          <div className="flex items-center gap-1.5">
            <FaWaveSquare className="text-indigo-400 text-xs" />
            <span className="font-semibold tracking-wider uppercase">Tractography / DTI Map</span>
          </div>
          <span className="text-[10px] text-slate-400">FA Index: 0.84</span>
        </div>

        {/* Visualized Neural Tracts Canvas Animation */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden">
          <svg className="w-full h-full opacity-75" viewBox="0 0 300 80">
            <defs>
              <linearGradient id="fiberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#818cf8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#c084fc" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {/* Curved Axon Pathways */}
            <path d="M 10 40 Q 75 10, 150 40 T 290 40" fill="none" stroke="url(#fiberGrad)" strokeWidth="2" strokeDasharray="6,3" className="animate-[dash_20s_linear_infinite]" />
            <path d="M 10 50 Q 80 75, 150 35 T 290 45" fill="none" stroke="url(#fiberGrad)" strokeWidth="1.5" opacity="0.6" />
            <path d="M 10 30 Q 90 5, 160 50 T 290 30" fill="none" stroke="url(#fiberGrad)" strokeWidth="1.5" opacity="0.6" />
            <circle cx="150" cy="40" r="4" fill="#38bdf8" className="animate-ping" />
            <circle cx="150" cy="40" r="2.5" fill="#ffffff" />
            <circle cx="80" cy="25" r="2" fill="#818cf8" />
            <circle cx="220" cy="42" r="2" fill="#c084fc" />
          </svg>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/5 pt-1">
          <span>ROI: Corpus Callosum</span>
          <span className="text-sky-400 font-semibold">100% Calibrated</span>
        </div>
      </motion.div>

      {/* 3. BOTTOM DIAGNOSTIC PANEL: TELEMETRY & HPC STREAM */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative h-[115px] rounded-2xl bg-[#0B1322]/80 backdrop-blur-md border border-emerald-500/25 shadow-[0_8px_30px_rgba(0,0,0,0.6)] p-3 overflow-hidden flex flex-col justify-between font-mono"
      >
        <div className="flex items-center justify-between text-[11px] text-emerald-300 border-b border-white/10 pb-1.5">
          <div className="flex items-center gap-1.5">
            <FaTerminal className="text-emerald-400 text-xs" />
            <span className="font-semibold tracking-wider uppercase">Pipeline Telemetry</span>
          </div>
          <span className="text-[10px] text-emerald-400">ONLINE</span>
        </div>

        <div className="text-[10px] space-y-1 text-slate-300 py-1">
          <div className="flex justify-between text-slate-400">
            <span>&gt; BIDS Dataset Validation:</span>
            <span className="text-sky-300 font-semibold">PASS (100%)</span>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>&gt; Brainlife.io Cluster Stream:</span>
            <span className="text-emerald-300 font-semibold">0 Faults</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[9px] text-slate-500 border-t border-white/5 pt-1">
          <span>HPC Telemetry Engine</span>
          <span>Latency: 3.2ms</span>
        </div>
      </motion.div>
    </div>
  );
}
