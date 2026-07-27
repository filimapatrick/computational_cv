'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaBrain, 
  FaCode, 
  FaDownload, 
  FaFlask, 
  FaCompass, 
  FaArrowRight, 
  FaRocket,
  FaLayerGroup,
  FaUsers,
  FaBook,
  FaStar,
  FaShieldAlt,
  FaHeartbeat,
  FaMobileAlt,
  FaChartLine
} from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const floatAnimationDelayed = {
  animate: {
    y: [0, 10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1
    }
  }
};

const whatIDoPillars = [
  {
    title: 'Research Platforms & Tools',
    icon: FaFlask,
    badge: 'SCIENCE',
    description: 'Building platforms that improve how researchers process, analyze, and collaborate around complex scientific data.',
    color: 'from-blue-500/20 to-cyan-500/20 text-cyan-300 border-cyan-500/30',
    link: '/experience'
  },
  {
    title: 'Technical Product Leadership',
    icon: FaCompass,
    badge: 'LEADERSHIP',
    description: 'Turning scientific and healthcare challenges into scalable digital products with real-world impact.',
    color: 'from-purple-500/20 to-indigo-500/20 text-purple-300 border-purple-500/30',
    link: '/skills'
  },
  {
    title: 'Full-Stack Engineering',
    icon: FaCode,
    badge: 'ENGINEERING',
    description: 'Designing and developing reliable software systems across web, mobile, and cloud environments.',
    color: 'from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30',
    link: '/skills'
  },
  {
    title: 'Computational Neuroscience',
    icon: FaBrain,
    badge: 'NEUROSCIENCE',
    description: 'Applying computational methods to understand the brain and improve neuroscience research.',
    color: 'from-rose-500/20 to-pink-500/20 text-rose-300 border-rose-500/30',
    link: '/research'
  }
];

const technicalExpertisePanels = [
  {
    category: 'Engineering',
    icon: FaCode,
    skills: ['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'Docker', 'AWS', 'PostgreSQL']
  },
  {
    category: 'Scientific Computing',
    icon: FaBrain,
    skills: ['MRI Analysis', 'fMRI Workflows', 'FSL', 'FreeSurfer', 'BIDS', 'MNE-Python', 'Neuroinformatics']
  },
  {
    category: 'Product & Platform',
    icon: FaCompass,
    skills: ['Product Strategy', 'User Research', 'Roadmapping', 'Platform Architecture', 'Technical Leadership']
  }
];

const featuredProjects = [
  {
    title: 'Brainlife Error Monitoring Dashboard',
    description: 'Observability platform improving visibility into failures across neuroimaging pipelines.',
    tags: ['Monitoring', 'Logging', 'Diagnostics'],
    icon: FaBrain,
    gradient: 'from-blue-600/30 to-purple-600/30',
    link: '/experience'
  },
  {
    title: 'Brainlife Mobile',
    description: 'Mobile platform enabling researchers to monitor long-running neuroimaging workflows remotely.',
    tags: ['Mobile', 'iOS', 'Observability'],
    icon: FaMobileAlt,
    gradient: 'from-purple-600/30 to-indigo-600/30',
    link: '/experience'
  },
  {
    title: 'Dicompare',
    description: 'Medical imaging quality-control application for MRI protocol comparison and standardization.',
    tags: ['MRI', 'QC', 'Python'],
    icon: FaShieldAlt,
    gradient: 'from-teal-600/30 to-cyan-600/30',
    link: '/experience'
  },
  {
    title: 'Digital Health Platform',
    description: 'Healthcare technology platform improving access to counselling services through digital workflows.',
    tags: ['Healthcare', 'Analytics', 'UX'],
    icon: FaHeartbeat,
    gradient: 'from-rose-600/30 to-pink-600/30',
    link: '/experience'
  }
];

const impactStats = [
  { value: '200+', label: 'Researchers Mentored', detail: 'Across Africa and beyond', icon: FaUsers },
  { value: '15+', label: 'Research Projects', detail: 'Delivered & Contributed', icon: FaFlask },
  { value: '10+', label: 'Software Products', detail: 'Built for Science & Health', icon: FaCode },
  { value: '12+', label: 'Publications', detail: 'Peer-reviewed Articles', icon: FaBook }
];

export default function Home() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="mx-auto space-y-24 max-w-7xl pb-16"
    >
      {/* HERO SECTION */}
      <section className="relative min-h-[580px] pt-4 pb-12 flex flex-col justify-center overflow-visible">
        {/* Glowing Blurred Orbs in Background */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Hero Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-6">
            
            {/* Small Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0D1425] border border-blue-500/30 text-blue-300 shadow-lg shadow-blue-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>RESEARCH • ENGINEERING • IMPACT</span>
            </div>

            {/* Cinematic Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              Building Software for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Science
              </span>
              ,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                Healthcare
              </span>{' '}
              &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300">
                AI
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              I build scientific software platforms that transform complex research workflows into scalable, beautiful technology used by researchers worldwide.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/experience"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-7 py-3.5 rounded-2xl text-sm font-bold shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
              >
                <span>View My Work</span>
                <FaArrowRight className="text-xs" />
              </Link>
              
              <a
                href="https://filimapatrick.github.io/filimapatrick/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0D1425] hover:bg-[#141D33] text-gray-200 border border-white/10 hover:border-blue-500/40 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center gap-2"
              >
                <FaDownload className="text-xs text-blue-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Trusted By Monochrome Logos */}
            <div className="pt-8 border-t border-white/10 space-y-3">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-400 block">
                Trusted by & Collaborating with
              </span>
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 opacity-75 hover:opacity-100 transition-opacity">
                <span className="text-sm font-bold text-gray-300 flex items-center gap-2">
                  <FaBrain className="text-cyan-400" /> brainlife.io
                </span>
                <span className="text-sm font-bold text-gray-300 flex items-center gap-2">
                  <FaBook className="text-purple-400" /> THE UNIVERSITY OF TEXAS
                </span>
                <span className="text-sm font-bold text-gray-300 flex items-center gap-2">
                  <FaFlask className="text-blue-400" /> African Brain Data Network
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Column: Large Portrait + Glowing Orbit Rings + Floating Cards */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 relative flex justify-center items-center py-6 px-2">
            
            {/* Glowing Gradient Circle Behind Avatar */}
            <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-tr from-blue-600/30 via-purple-600/30 to-cyan-500/30 blur-2xl animate-pulse-glow" />
            
            {/* Outer Decorative Ring */}
            <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-blue-500/20 animate-spin-slow pointer-events-none" />

            {/* Main Circular Portrait */}
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full p-2 bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400 shadow-2xl shadow-blue-500/30">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-[#070B18]">
                <Image
                  src="/patrick.jpeg"
                  alt="Filima Patrick"
                  fill
                  sizes="(max-width: 640px) 280px, 350px"
                  className="object-cover scale-105"
                  priority
                />
              </div>
            </div>

            {/* Floating Glass Skill Badges */}
            <motion.div 
              variants={floatAnimation}
              animate="animate"
              className="absolute top-2 right-1 sm:right-2 bg-[#0D1425]/90 backdrop-blur-md border border-purple-500/40 px-3.5 py-2 rounded-2xl shadow-xl shadow-purple-500/20 flex items-center gap-2.5 z-20"
            >
              <div className="p-2 rounded-xl bg-purple-950/60 text-purple-300">
                <FaBrain className="text-sm" />
              </div>
              <span className="text-xs font-bold text-white whitespace-nowrap">Computational Neuroscientist</span>
            </motion.div>

            <motion.div 
              variants={floatAnimationDelayed}
              animate="animate"
              className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-1 bg-[#0D1425]/90 backdrop-blur-md border border-blue-500/40 px-3.5 py-2 rounded-2xl shadow-xl shadow-blue-500/20 flex items-center gap-2.5 z-20"
            >
              <div className="p-2 rounded-xl bg-blue-950/60 text-blue-300">
                <FaCode className="text-sm" />
              </div>
              <span className="text-xs font-bold text-white whitespace-nowrap">Full-Stack Engineer</span>
            </motion.div>

            <motion.div 
              variants={floatAnimation}
              animate="animate"
              className="absolute bottom-4 left-1 sm:left-2 bg-[#0D1425]/90 backdrop-blur-md border border-cyan-500/40 px-3.5 py-2 rounded-2xl shadow-xl shadow-cyan-500/20 flex items-center gap-2.5 z-20"
            >
              <div className="p-2 rounded-xl bg-cyan-950/60 text-cyan-300">
                <FaFlask className="text-sm" />
              </div>
              <span className="text-xs font-bold text-white whitespace-nowrap">Research Innovator</span>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* SECTION 2: "WHAT I DO" (Pillar Feature Cards) */}
      <motion.section variants={fadeInUp} className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
              <FaRocket className="text-xs" />
              <span>WHAT I DO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Turning Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impactful Solutions</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatIDoPillars.map((pillar, index) => {
            const PillarIcon = pillar.icon;
            return (
              <Link key={index} href={pillar.link} className="group block">
                <div className="bg-[#141D33]/80 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/15 h-full flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-[#0D1425] text-cyan-400 border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-blue-950/40 transition-colors">
                        <PillarIcon className="text-2xl" />
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border bg-gradient-to-r ${pillar.color}`}>
                        {pillar.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold text-blue-400 group-hover:text-cyan-300 transition-colors pt-2">
                    <span>Explore Focus</span>
                    <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </motion.section>

      {/* SECTION 3: TECHNICAL EXPERTISE (3 Panels) */}
      <motion.section variants={fadeInUp} className="space-y-8">
        <div className="bg-gradient-to-br from-[#0D1425] to-[#141D33] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl space-y-8">
          <div className="flex items-center gap-3 pb-6 border-b border-white/10">
            <div className="p-3 rounded-2xl bg-purple-950/60 text-purple-300 border border-purple-800/50">
              <FaStar className="text-2xl text-purple-400" />
            </div>
            <div>
              <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider block">TECHNICAL EXPERTISE</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Core Skills & Platforms</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalExpertisePanels.map((panel, idx) => {
              const PanelIcon = panel.icon;
              return (
                <div key={idx} className="bg-[#070B18]/70 p-6 rounded-2xl border border-white/10 space-y-4 hover:border-blue-500/30 transition-all">
                  <div className="flex items-center gap-2.5 text-blue-300 font-bold text-base">
                    <PanelIcon className="text-blue-400" />
                    <h3>{panel.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {panel.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-[#141D33] text-blue-200 px-3 py-1.5 rounded-xl text-xs font-medium border border-white/10 hover:border-cyan-400/50 hover:bg-blue-950/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* SECTION 4: FEATURED PROJECTS (SaaS Grid) */}
      <motion.section variants={fadeInUp} className="space-y-8">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">PORTFOLIO HIGHLIGHTS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Featured Projects</h2>
          </div>
          <Link href="/experience" className="text-xs font-bold text-blue-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
            <span>View all projects</span>
            <FaArrowRight className="text-[10px]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => {
            const ProjectIcon = project.icon;
            return (
              <Link key={index} href={project.link} className="group block">
                <div className="bg-[#141D33]/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 group-hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 shadow-2xl flex flex-col justify-between space-y-6 h-full">
                  
                  {/* Mockup Top Header graphic */}
                  <div className={`h-40 rounded-2xl bg-gradient-to-br ${project.gradient} p-6 border border-white/10 flex flex-col justify-between relative overflow-hidden`}>
                    <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/5 rounded-full blur-xl" />
                    <div className="p-3 bg-[#070B18]/80 text-cyan-300 rounded-xl border border-white/10 w-fit backdrop-blur-sm">
                      <ProjectIcon className="text-xl" />
                    </div>
                    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Production Platform</span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-[#0D1425] text-cyan-300 px-2.5 py-1 rounded-md text-[11px] font-medium border border-blue-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </motion.section>

      {/* SECTION 5: IMPACT NUMBERS */}
      <motion.section variants={fadeInUp} className="space-y-8">
        <div className="bg-gradient-to-r from-blue-950/40 via-[#0D1425] to-purple-950/40 p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {impactStats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div key={idx} className="space-y-2 p-4 rounded-2xl bg-[#070B18]/50 border border-white/5">
                  <StatIcon className="text-2xl text-cyan-400 mx-auto mb-2" />
                  <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 block">
                    {stat.value}
                  </span>
                  <p className="text-sm font-bold text-white">{stat.label}</p>
                  <p className="text-xs text-gray-400">{stat.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* SECTION 6: CONTACT CTA BANNER */}
      <motion.section variants={fadeInUp}>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-950 via-[#0D1425] to-blue-950 p-8 sm:p-12 border border-purple-800/40 shadow-2xl text-left">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-3xl">
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider block">
              LET’S CONNECT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let’s Build the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Science</span> Together
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Interested in collaborating on scientific software, AI, healthcare technology, or research infrastructure?
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="mailto:filimapatrick@gmail.com"
                className="bg-[#070B18] text-white hover:bg-blue-600/30 border border-white/10 px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <FaEnvelope className="text-blue-400" /> Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/patrick-filima-91450817b/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#070B18] text-white hover:bg-blue-600/30 border border-white/10 px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <FaLinkedin className="text-blue-400" /> LinkedIn
              </a>
              <a
                href="https://github.com/filimapatrick"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#070B18] text-white hover:bg-blue-600/30 border border-white/10 px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <FaGithub className="text-blue-400" /> GitHub
              </a>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-purple-500/20 flex items-center gap-2 transition-all"
              >
                <span>Start a Conversation</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
        <div>
          <span className="font-bold text-white">FILIMA PATRICK</span> — Research Software Engineer & Technical Product Lead
        </div>
        <div>
          © 2026 Filima Patrick. All rights reserved.
        </div>
      </footer>
    </motion.div>
  );
}