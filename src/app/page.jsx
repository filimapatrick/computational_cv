'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import CyberneticPortrait3D from '../components/CyberneticPortrait3D';
import HolographicDiagnostics3D from '../components/HolographicDiagnostics3D';
import {
  FaBrain,
  FaCode,
  FaDownload,
  FaArrowRight,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaServer,
  FaGlobeAfrica,
  FaBookOpen
} from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const focusPillars = [
  {
    title: 'Scientific Computing & Neuroinformatics',
    icon: FaBrain,
    description: 'Developing reproducible platforms that streamline how neuroscientists process, analyze, and manage complex neuroimaging data.',
    tags: ['MRI / fMRI Workflows', 'BIDS Standards', 'FSL & FreeSurfer', 'Cloud Pipelines'],
    link: '/research'
  },
  {
    title: 'Research Software Engineering',
    icon: FaCode,
    description: 'Architecting robust full-stack applications and scientific tools across Python, React, Next.js, Node.js, and containerized cloud services.',
    tags: ['React & Next.js', 'Python Scientific Stack', 'Docker', 'REST & GraphQL'],
    link: '/skills'
  },
  {
    title: 'Workflow Observability & Diagnostics',
    icon: FaServer,
    description: 'Building monitoring engines and diagnostics dashboards that provide visibility into long-running computational jobs across distributed HPC clusters.',
    tags: ['ELK Stack', 'Real-Time Telemetry', 'Error Classification', 'Alerting'],
    link: '/experience'
  },
  {
    title: 'FAIR Data & Research Infrastructure',
    icon: FaGlobeAfrica,
    description: 'Creating digital platforms that advance Findable, Accessible, Interoperable, and Reusable (FAIR) data practices across African neuroscience and beyond.',
    tags: ['FAIR Principles', 'Open Science', 'Community Platforms', 'Capacity Building'],
    link: '/publications'
  }
];

const featuredWork = [
  {
    title: 'Brainlife Error Monitoring Dashboard',
    category: 'Production Platform',
    role: 'Lead Developer & Architect',
    description: 'Centralized observability and diagnostic dashboard capturing failure states and logs across thousands of distributed neuroimaging jobs on Brainlife.io.',
    tags: ['React', 'Next.js', 'ELK Stack', 'Node.js', 'HPC Telemetry'],
    link: '/experience',
    badgeColor: 'text-sky-300 bg-sky-500/10 border-sky-500/20'
  },
  {
    title: 'Brainlife Mobile',
    category: 'Mobile Application',
    role: 'Mobile Lead',
    description: 'Cross-platform mobile application providing researchers with real-time visibility, job status tracking, and push notifications for multi-day compute executions.',
    tags: ['React Native', 'Push Services', 'REST APIs', 'iOS / Android'],
    link: '/experience',
    badgeColor: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20'
  },
  {
    title: 'African Brain MRI AI Research Ecosystem',
    category: 'Scientific AI Program',
    role: 'Lead Researcher',
    description: 'A 7-phase research ecosystem evaluating model robustness, calibration, and explainability on real-world clinical neuroimaging from Nigerian hospital networks.',
    tags: ['PyTorch', 'MONAI', 'DeepAccess-MRI', 'Afri-Brain-Bench', 'XAI'],
    link: '/projects/african-brain-mri-ai-ecosystem',
    badgeColor: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20'
  },
  {
    title: 'ABDN Fellowship Evaluation Platform',
    category: 'Education & Admissions Infrastructure',
    role: 'Product & Technical Lead',
    description: 'Digitized applicant assessment and multi-reviewer scoring workflows supporting over 1,000 applicants across 50 African countries.',
    tags: ['Next.js', 'Firebase', 'Workflow Automation', 'Access Governance'],
    link: '/experience',
    badgeColor: 'text-amber-300 bg-amber-500/10 border-amber-500/20'
  }
];

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="w-full space-y-16 pb-16"
    >
      {/* 1. HERO SECTION WITH 3D GLASS CARD, THREE.JS DIAGNOSTICS & CYBERNETIC FRAME */}
      <section className="pt-2 w-full relative">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 xl:gap-12 w-full relative">

          {/* Left / Center-Left: Frosted Glass Bio Card & Overlapping 3D Holographic Stack */}
          <div className="relative flex-1 w-full flex items-center">
            {/* Layer 1: Frosted Glass Bio Card */}
            <motion.div 
              variants={fadeInUp} 
              className="relative z-20 w-full xl:max-w-[700px] 2xl:max-w-[780px] rounded-[32px] p-6 sm:p-8 lg:p-9 bg-[#0B1322]/85 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2)] space-y-6"
            >
              {/* Top Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#14233D]/90 border border-sky-400/30 text-sky-300 shadow-sm">
                <span>Research Software Engineer & Computational Neuroscientist</span>
              </div>

              {/* 3D Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18] drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
                Building robust software for{' '}
                <span className="text-sky-300 drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]">scientific computing</span>,{' '}
                <span className="text-indigo-200 drop-shadow-[0_0_20px_rgba(129,140,248,0.4)]">neuroinformatics</span> & healthcare.
              </h1>

              {/* Bio Paragraph */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                I bridge the gap between neuroscience research and software engineering. My work focuses on building reliable cloud platforms, pipeline observability systems, and open data tools that help scientists turn complex experimental data into reproducible discoveries.
              </p>

              {/* Tactile 3D Action Buttons */}
              <div className="flex flex-wrap gap-3.5 pt-1">
                <Link
                  href="/experience"
                  className="bg-gradient-to-b from-[#2B3E5C] to-[#17253B] hover:from-[#374E73] hover:to-[#1E304C] text-slate-100 font-bold px-5 py-3 rounded-2xl text-xs sm:text-sm border border-sky-400/30 shadow-[0_6px_20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_6px_25px_rgba(56,189,248,0.25)] transition-all duration-200 flex items-center gap-2"
                >
                  <span>Explore Experience</span>
                  <FaArrowRight className="text-xs text-sky-400" />
                </Link>

                <Link
                  href="/publications"
                  className="bg-[#121E33]/90 hover:bg-[#1A2C4A] text-slate-200 border border-white/15 hover:border-sky-400/40 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-200 flex items-center gap-2"
                >
                  <FaBookOpen className="text-xs text-sky-400" />
                  <span>Publications & Talks</span>
                </Link>

                <a
                  href="https://filimapatrick.github.io/filimapatrick/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#121E33]/90 hover:bg-[#1A2C4A] text-slate-300 border border-white/15 hover:border-slate-300 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-200 flex items-center gap-2"
                >
                  <FaDownload className="text-xs text-slate-400" />
                  <span>Download CV</span>
                </a>
              </div>

              {/* Affiliations Bar */}
              <div className="pt-5 border-t border-white/10 space-y-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                  Affiliations & Key Collaborations
                </span>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <FaBrain className="text-sky-400 text-sm" />
                    <span>Brainlife.io / UT Austin</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>University of Oxford</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaGlobeAfrica className="text-emerald-400 text-sm" />
                    <span>African Brain Data Network</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>UniPort ANR Lab</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Layer 2: Floating 3D Holographic Diagnostic Panels (Three.js Brain) */}
            <div className="hidden xl:block absolute -right-20 2xl:-right-16 top-1/2 -translate-y-1/2 w-[250px] 2xl:w-[270px] h-[470px] z-10 opacity-90 hover:opacity-100 transition-opacity">
              <HolographicDiagnostics3D />
            </div>
          </div>

          {/* Right: Cybernetic 3D Portrait Frame */}
          <motion.div 
            variants={fadeInUp} 
            className="w-full lg:w-[380px] xl:w-[420px] 2xl:w-[460px] flex-shrink-0 flex justify-center lg:justify-end z-20"
          >
            <CyberneticPortrait3D />
          </motion.div>

        </div>
      </section>

      {/* 2. CORE AREAS OF EXPERTISE (4 EVEN COLUMNS ON DESKTOP) */}
      <motion.section variants={fadeInUp} className="space-y-6 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b border-white/10">
          <div>
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-1">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              What I Focus On
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Applying software engineering rigor to solve non-trivial scientific computing and clinical data bottlenecks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {focusPillars.map((pillar, index) => {
            const PillarIcon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-[#0F172A]/70 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-sky-500/40 transition-all duration-200 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      <PillarIcon className="text-lg" />
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1.5">
                  {pillar.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-[#141E33] text-slate-300 px-2.5 py-1 rounded-md text-[11px] font-medium border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* 3. FEATURED PLATFORMS & INITIATIVES */}
      <motion.section variants={fadeInUp} className="space-y-6 w-full">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div>
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block mb-1">
              Selected Platforms & Research
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured Work
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors"
          >
            <span>View All Projects</span>
            <FaArrowRight className="text-[10px]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {featuredWork.map((project, index) => (
            <div
              key={index}
              className="bg-[#0F172A]/70 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${project.badgeColor}`}>
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {project.role}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-[#141E33] text-sky-300/90 px-2 py-0.5 rounded text-[11px] font-medium border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>Explore Architecture & Details</span>
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 4. RESEARCH & SCHOLARLY OUTPUT SNAPSHOT */}
      <motion.section variants={fadeInUp} className="w-full">
        <div className="bg-[#0F172A]/80 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                Scholarly Record
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Publications, Datasets & Keynotes
              </h2>
            </div>
            <Link
              href="/publications"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
            >
              <span>View Full Publications List</span>
              <FaArrowRight className="text-[10px]" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center w-full">
            <div className="bg-[#141E33]/60 p-5 rounded-xl border border-white/5">
              <div className="text-3xl font-bold text-white">16</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Peer-Reviewed Items</div>
            </div>
            <div className="bg-[#141E33]/60 p-5 rounded-xl border border-white/5">
              <div className="text-2xl sm:text-3xl font-bold text-sky-400">Nature SciData</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Clinical MRI Dataset</div>
            </div>
            <div className="bg-[#141E33]/60 p-5 rounded-xl border border-white/5">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-300">Frontiers</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Neuroinformatics</div>
            </div>
            <div className="bg-[#141E33]/60 p-5 rounded-xl border border-white/5">
              <div className="text-3xl font-bold text-emerald-400">4+</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Invited Talks & Keynotes</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. CONTACT / COLLABORATION INVITATION */}
      <motion.section variants={fadeInUp} className="w-full">
        <div className="rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#141E33] to-[#0F172A] p-6 sm:p-10 border border-white/10 shadow-xl space-y-6 w-full">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block">
              Get in Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Let's collaborate on scientific software or research
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              I am open to collaborations on neuroinformatics platforms, research software engineering, reproducible pipeline design, and healthcare technology initiatives.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="mailto:filimapatrick@gmail.com"
              className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs transition-colors flex items-center gap-2"
            >
              <FaEnvelope className="text-xs" />
              <span>Email Me</span>
            </a>

            <a
              href="https://www.linkedin.com/in/patrick-filima-91450817b/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1E293B] hover:bg-[#334155] text-slate-200 px-4 py-2.5 rounded-xl text-xs font-semibold border border-white/10 transition-colors flex items-center gap-2"
            >
              <FaLinkedin className="text-sky-400 text-xs" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/filimapatrick"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1E293B] hover:bg-[#334155] text-slate-200 px-4 py-2.5 rounded-xl text-xs font-semibold border border-white/10 transition-colors flex items-center gap-2"
            >
              <FaGithub className="text-slate-400 text-xs" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </motion.section>

      {/* 6. CLEAN FOOTER */}
      <footer className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 w-full">
        <div>
          <span className="font-semibold text-slate-300">Patrick Filima</span> — Research Software Engineer & Computational Neuroscientist
        </div>
        <div>
          © 2026 Patrick Filima. All rights reserved.
        </div>
      </footer>
    </motion.div>
  );
}