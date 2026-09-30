'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaRocket, 
  FaBrain, 
  FaCode, 
  FaGlobeAfrica, 
  FaArrowRight, 
  FaServer, 
  FaMobileAlt, 
  FaHeartbeat,
  FaShieldAlt,
  FaFlask
} from 'react-icons/fa';
import { projectsData } from '../../data/projectsData';

const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const softwarePlatforms = [
  {
    slug: 'brainlife-monitoring',
    title: 'Brainlife Error Monitoring & Diagnostics Dashboard',
    subtitle: 'Observability platform improving failure visibility across distributed HPC neuroimaging pipelines',
    category: 'Production Platform',
    type: 'software',
    role: 'Lead Developer',
    techStack: ['React', 'Next.js', 'ELK Stack', 'Node.js', 'Docker', 'HPC Telemetry'],
    summary: 'Centralized observability dashboard aggregating failure logs, stack traces, and automated error classification across thousands of distributed containerized jobs on Brainlife.io.',
    link: '/experience',
    isExternalOrRoute: true
  },
  {
    slug: 'brainlife-mobile',
    title: 'Brainlife Mobile Companion Application',
    subtitle: 'Real-time mobile status tracking and push alerts for long-running compute jobs',
    category: 'Mobile Platform',
    type: 'software',
    role: 'Mobile Lead',
    techStack: ['React Native', 'Push Notifications', 'Brainlife REST API', 'iOS / Android'],
    summary: 'Cross-platform mobile application giving neuroscientists real-time visibility into multi-day pipeline execution status, error logs, and immediate completion alerts.',
    link: '/experience',
    isExternalOrRoute: true
  },
  {
    slug: 'abdn-eval-platform',
    title: 'ABDN Fellowship Evaluation Platform',
    subtitle: 'Digitized admissions and multi-reviewer scoring workflows for pan-African programs',
    category: 'Education & Admissions',
    type: 'software',
    role: 'Technical Product Lead',
    techStack: ['Next.js', 'Firebase', 'Tailwind CSS', 'Access Governance'],
    summary: 'Full-stack evaluation platform supporting structured multi-reviewer assessment, reviewer assignment matrices, and score normalization for 1,000+ candidates across 50 countries.',
    link: '/experience',
    isExternalOrRoute: true
  },
  {
    slug: 'lighthouse-health',
    title: 'Lighthouse Digital Health Platform',
    subtitle: 'Therapist discovery and appointment scheduling workflow system',
    category: 'Digital Health',
    type: 'software',
    role: 'Product & Engineering Lead',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    summary: 'Modern web platform connecting patients with certified mental health professionals through directory search, scheduling workflows, and administrative dashboards.',
    link: '/experience',
    isExternalOrRoute: true
  }
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');

  // Format computational research projects from data
  const researchProjects = projectsData.map(p => ({
    ...p,
    type: 'research',
    link: `/projects/${p.slug}`,
    isExternalOrRoute: false
  }));

  const allProjects = [...softwarePlatforms, ...researchProjects];

  const filteredProjects = allProjects.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'software') return p.type === 'software';
    if (filter === 'research') return p.type === 'research';
    return true;
  });

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="w-full space-y-14 pb-16"
    >
      {/* 1. PAGE HEADER */}
      <motion.div variants={fadeInUp} className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <FaRocket className="text-xl" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Projects & Research Programs
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Production software systems, open science infrastructure, and computational neuroscience studies
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 pt-2 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'all'
                ? 'bg-sky-500 text-slate-950 shadow-md'
                : 'bg-[#0F172A] text-slate-300 hover:bg-[#1E293B] border border-white/10'
            }`}
          >
            All Projects ({allProjects.length})
          </button>
          <button
            onClick={() => setFilter('software')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'software'
                ? 'bg-sky-500 text-slate-950 shadow-md'
                : 'bg-[#0F172A] text-slate-300 hover:bg-[#1E293B] border border-white/10'
            }`}
          >
            Production Software ({softwarePlatforms.length})
          </button>
          <button
            onClick={() => setFilter('research')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'research'
                ? 'bg-sky-500 text-slate-950 shadow-md'
                : 'bg-[#0F172A] text-slate-300 hover:bg-[#1E293B] border border-white/10'
            }`}
          >
            Computational & AI Research ({researchProjects.length})
          </button>
        </div>
      </motion.div>

      {/* 2. PROJECTS GRID */}
      <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
        {filteredProjects.map((item, index) => {
          const isResearch = item.type === 'research';

          return (
            <div
              key={index}
              className="bg-[#0F172A]/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                    isResearch 
                      ? 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20' 
                      : 'text-sky-300 bg-sky-500/10 border-sky-500/20'
                  }`}>
                    {item.category}
                  </span>

                  {item.status && (
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {item.status}
                    </span>
                  )}
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  {item.title}
                </h2>

                {item.subtitle && (
                  <p className="text-xs text-sky-300/90 font-medium">
                    {item.subtitle}
                  </p>
                )}

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="space-y-4 pt-3 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {(item.techStack || []).map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-[#141E33] text-slate-300 px-2 py-0.5 rounded text-[11px] font-medium border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors pt-1"
                >
                  <span>{isResearch ? 'View Complete Research Architecture' : 'View Experience & Details'}</span>
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}