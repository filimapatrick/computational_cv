'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaCode, 
  FaFlask, 
  FaRocket, 
  FaDownload, 
  FaArrowRight, 
  FaUsers, 
  FaFileAlt,
  FaMouse,
  FaCompass,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaShieldAlt,
  FaHeartbeat,
  FaMobileAlt,
  FaServer
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

const floatingBadges = [
  {
    icon: FaBrain,
    title: 'Computational Neuroscientist',
    color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/40',
    iconBg: 'bg-cyan-500/20 text-cyan-300'
  },
  {
    icon: FaCode,
    title: 'Full Stack Engineer',
    color: 'from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/40',
    iconBg: 'bg-blue-500/20 text-blue-300'
  },
  {
    icon: FaFlask,
    title: 'Research Innovator',
    color: 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/40',
    iconBg: 'bg-purple-500/20 text-purple-300'
  },
  {
    icon: FaRocket,
    title: 'Technical Product Lead',
    color: 'from-indigo-500/20 to-cyan-500/20 text-indigo-400 border-indigo-500/40',
    iconBg: 'bg-indigo-500/20 text-indigo-300'
  }
];

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
    link: '/publications#ongoing'
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
  {
    value: '200+',
    label: 'Researchers Mentored',
    detail: 'Across Africa & beyond',
    icon: FaUsers,
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10 border-blue-500/20'
  },
  {
    value: '15+',
    label: 'Research Projects',
    detail: 'Delivered & Contributed',
    icon: FaFlask,
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10 border-purple-500/20'
  },
  {
    value: '10+',
    label: 'Software Products',
    detail: 'Built for Science & Health',
    icon: FaCode,
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20'
  },
  {
    value: '12+',
    label: 'Peer-reviewed Papers',
    detail: 'Published in Top Journals',
    icon: FaFileAlt,
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10 border-indigo-500/20'
  }
];

export default function Home() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="mx-auto space-y-24 max-w-7xl pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[640px] pt-6 pb-12 flex flex-col justify-between">
        
        {/* Background Radial Glow Effects */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Left Column: Copy & Actions */}
          <motion.div variants={fadeInUp} className="lg:col-span-6 space-y-7">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-[#0B1124]/90 border border-cyan-500/30 text-cyan-300 shadow-lg shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>RESEARCH • ENGINEERING • AI</span>
            </div>

            {/* Giant Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
              Building<br />
              Software<br />
              for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                Science,
              </span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-300">
                Healthcare
              </span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                & AI
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              I build scientific software platforms that transform complex research workflows into scalable, beautiful technology used by researchers worldwide.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/publications#ongoing"
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-7 py-3.5 rounded-2xl text-sm font-bold shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2.5"
              >
                <span>View My Work</span>
                <FaArrowRight className="text-xs" />
              </Link>
              
              <a
                href="https://filimapatrick.github.io/filimapatrick/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0B1124]/80 hover:bg-[#121B38] text-gray-200 border border-white/15 hover:border-cyan-400/40 px-6 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 backdrop-blur-md shadow-lg"
              >
                <FaDownload className="text-xs text-cyan-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Trusted By Logos Bar */}
            <div className="pt-8 border-t border-white/10 space-y-3">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-400 block">
                Currently collaborating with
              </span>
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 opacity-85 hover:opacity-100 transition-opacity">
                {/* brainlife.io */}
                <div className="flex items-center gap-2 text-gray-200 font-bold text-sm tracking-wide">
                  <FaBrain className="text-cyan-400 text-lg" />
                  <span>brainlife.io</span>
                </div>

                {/* University of Texas at Austin */}
                <div className="flex items-center gap-2 text-gray-300 font-semibold text-xs tracking-wider">
                  <div className="w-5 h-5 rounded border border-purple-400/50 flex items-center justify-center font-bold text-[9px] text-purple-300">
                    UT
                  </div>
                  <div className="leading-none text-[10px] uppercase font-bold text-gray-300">
                    The University of<br /><span className="text-purple-300">Texas at Austin</span>
                  </div>
                </div>

                {/* University of Oxford */}
                <div className="flex items-center gap-2 text-gray-300 font-semibold text-xs tracking-wider">
                  <div className="w-5 h-5 rounded border border-blue-400/50 flex items-center justify-center font-bold text-[9px] text-blue-300">
                    OX
                  </div>
                  <div className="leading-none text-[10px] uppercase font-bold text-gray-300">
                    University of<br /><span className="text-blue-300">Oxford</span>
                  </div>
                </div>

                {/* African Brain Data Network */}
                <div className="flex items-center gap-2 text-gray-300 font-semibold text-xs">
                  <FaFlask className="text-cyan-300 text-sm" />
                  <div className="leading-none text-[10px]">
                    <span className="font-bold text-white">African</span><br />
                    <span className="text-cyan-300">Brain Data Network</span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Hero Portrait + Glowing Neon Orbits + Floating Cards */}
          <motion.div variants={fadeInUp} className="lg:col-span-6 relative flex justify-center items-center py-8">
            
            {/* Constellation / Network Grid Backdrop */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 rounded-3xl pointer-events-none" />

            {/* Glowing Neon Outer Ring */}
            <div className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-purple-600/20 to-blue-500/20 blur-3xl animate-pulse" />

            {/* Orbital Ring Lines */}
            <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-cyan-400/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] animate-spin-slow pointer-events-none" />
            <div className="absolute w-[360px] h-[360px] sm:w-[450px] sm:h-[450px] rounded-full border border-purple-500/20 pointer-events-none" />

            {/* Main Circular Portrait Container */}
            <div className="relative w-[290px] h-[290px] sm:w-[370px] sm:h-[370px] rounded-full p-2 bg-gradient-to-tr from-cyan-400 via-blue-600 to-purple-600 shadow-[0_0_60px_rgba(37,99,235,0.4)]">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-[#060A17]">
                <Image
                  src="/patrick.jpeg"
                  alt="Filima Patrick"
                  fill
                  sizes="(max-width: 640px) 290px, 370px"
                  className="object-cover scale-105"
                  priority
                />
              </div>
            </div>

            {/* Floating Glass Cards Stacked on the Right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-3.5 z-20 translate-x-3 sm:translate-x-6">
              {floatingBadges.map((badge, idx) => {
                const BadgeIcon = badge.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.15, duration: 0.5 }}
                    className={`bg-[#0B1124]/90 backdrop-blur-md border ${badge.color} px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform duration-300`}
                  >
                    <div className={`p-2 rounded-xl ${badge.iconBg}`}>
                      <BadgeIcon className="text-sm" />
                    </div>
                    <span className="text-xs font-bold text-white whitespace-nowrap tracking-wide">
                      {badge.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

        </div>
      </section>

      {/* 2. IMPACT METRICS BAR (4 Columns) */}
      <motion.section variants={fadeInUp}>
        <div className="bg-[#0B1124]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {impactStats.map((stat, sIdx) => {
              const StatIcon = stat.icon;
              return (
                <div 
                  key={sIdx} 
                  className={`flex items-start gap-4 ${sIdx !== 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''}`}
                >
                  <div className={`p-3 rounded-2xl border ${stat.iconBg} shrink-0`}>
                    <StatIcon className={`text-xl ${stat.iconColor}`} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-2xl sm:text-3xl font-black text-white tracking-tight block">
                      {stat.value}
                    </span>
                    <h3 className="text-xs font-bold text-gray-200 uppercase tracking-wider">
                      {stat.label}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium leading-relaxed">
                      {stat.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* 3. SCROLL TO EXPLORE INDICATOR */}
      <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center pt-2 text-gray-400">
        <div className="flex items-center gap-2.5 text-[11px] font-semibold tracking-widest uppercase text-gray-400">
          <FaMouse className="text-cyan-400 text-sm animate-bounce" />
          <span>Scroll to Explore</span>
        </div>
      </motion.div>

      {/* 4. WHAT I DO (Pillar Feature Cards) */}
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

      {/* 5. TECHNICAL EXPERTISE PANELS */}
      <motion.section variants={fadeInUp} className="space-y-8">
        <div className="bg-[#0B1124]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
          <div>
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider block mb-1">SKILLS AT A GLANCE</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Technical Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalExpertisePanels.map((panel, idx) => {
              const PanelIcon = panel.icon;
              return (
                <div key={idx} className="bg-[#070B18]/60 p-6 rounded-2xl border border-white/5 space-y-4">
                  <div className="flex items-center gap-2.5 text-white font-bold text-base">
                    <PanelIcon className="text-cyan-400 text-lg" />
                    <h3>{panel.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {panel.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-[#141D33] text-cyan-200 px-3 py-1.5 rounded-xl text-xs font-medium border border-white/10 hover:border-cyan-400/50 hover:bg-blue-950/40 transition-colors"
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

      {/* 6. FEATURED PROJECTS (SaaS Grid) */}
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

      {/* 7. CONTACT CTA BANNER */}
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
              <a
                href="mailto:filimapatrick@gmail.com"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-purple-500/20 flex items-center gap-2 transition-all"
              >
                <span>Start a Conversation</span>
                <FaArrowRight className="text-[10px]" />
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 8. FOOTER */}
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