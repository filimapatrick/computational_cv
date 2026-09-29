'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaUser, 
  FaBrain, 
  FaCode, 
  FaGraduationCap, 
  FaFlask, 
  FaGlobeAfrica, 
  FaBuilding,
  FaMicrophone,
  FaArrowRight
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

const focusAreas = [
  {
    title: 'Scientific Computing & Neuroinformatics',
    icon: FaBrain,
    description: 'Building software infrastructure that makes complex neuroimaging analysis reproducible, accessible, and scalable across distributed HPC and cloud systems.',
    highlights: [
      'Neuroimaging workflow automation (MRI, fMRI, BIDS standards)',
      'Integration with scientific toolchains (FSL, FreeSurfer, MNE)',
      'FAIR data governance and open repository infrastructure'
    ]
  },
  {
    title: 'Full-Stack Software Engineering',
    icon: FaCode,
    description: 'Designing reliable applications for scientific, healthcare, and education environments with modern web and mobile technologies.',
    highlights: [
      'React, Next.js, and TypeScript frontend platforms',
      'Python scientific backend services and REST APIs',
      'Observability and pipeline diagnostics using the ELK stack'
    ]
  },
  {
    title: 'Open Science & Capacity Building',
    icon: FaGlobeAfrica,
    description: 'Leading collaborative initiatives and software projects that expand neuroscience research capacity and open data practices across Africa.',
    highlights: [
      'Digital evaluation platforms for pan-African academic programs',
      'Technical workshops on scientific Python and neuroimaging data',
      'Community platforms supporting 2,000+ researchers and clinicians'
    ]
  }
];

const careerMilestones = [
  {
    role: 'Research Software Engineer',
    organization: 'Brainlife.io — University of Texas at Austin',
    period: '2025 – Present',
    icon: FaBrain,
    summary: 'Developing workflow observability tools, error diagnostic dashboards, and mobile monitoring platforms for large-scale distributed neuroimaging pipelines.'
  },
  {
    role: 'Neuroinformatics & Technical Product Lead',
    organization: 'African Brain Data Network (ABDN)',
    period: '2023 – Present',
    icon: FaGlobeAfrica,
    summary: 'Directing the architecture of digital platforms that promote FAIR data standards, fellowship evaluation workflows, and scientific collaboration across African institutions.'
  },
  {
    role: 'Wings Global Scholar',
    organization: 'University of Oxford',
    period: '2025 – 2026',
    icon: FaGraduationCap,
    summary: 'Selected for advanced graduate training in computational neuroimaging, reproducible workflows, and high-throughput MRI data analysis.'
  },
  {
    role: 'Software Engineer',
    organization: 'Lizard Global',
    period: '2022 – 2024',
    icon: FaBuilding,
    summary: 'Engineered commercial web and mobile products across workforce management, location services, and enterprise CMS platforms.'
  }
];

export default function About() {
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
            <FaUser className="text-xl" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              About Me
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Background, research philosophy, and technical direction
            </p>
          </div>
        </div>

        {/* Narrative Framing Box */}
        <div className="bg-[#0F172A]/80 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
            I am a Research Software Engineer and Computational Neuroscientist working at the intersection of neuroscience, software engineering, and scientific computing.
          </p>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            My work focuses on transforming complex scientific workflows into reliable software platforms that improve how researchers collect, analyze, monitor, and share data. Combining an M.Sc. in Neuroscience with extensive software development experience, I bring both domain knowledge and engineering rigor to research challenges.
          </p>
        </div>
      </motion.div>

      {/* 2. THE INTERSECTION (NARRATIVE OVERVIEW) */}
      <motion.section variants={fadeInUp} className="space-y-6">
        <div className="border-b border-white/10 pb-3">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-1">
            Background & Perspective
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Bridging Neuroscience and Software Engineering
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <div className="bg-[#0F172A]/60 p-6 rounded-2xl border border-white/5 space-y-3">
            <h3 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
              <FaBrain className="text-sky-400" />
              Scientific Domain Context
            </h3>
            <p>
              In computational neuroscience and neuroimaging, data pipelines are notoriously complex—often involving multi-gigabyte 3D volumes, specialized preprocessing toolchains (FSL, FreeSurfer, ANTs), and multi-day compute jobs across distributed HPC nodes.
            </p>
            <p>
              Having conducted volumetric brain research and published peer-reviewed findings in neurodegenerative disorders and morphometry, I understand the friction points researchers face when dealing with pipeline crashes, unstandardized data formats, and manual log inspection.
            </p>
          </div>

          <div className="bg-[#0F172A]/60 p-6 rounded-2xl border border-white/5 space-y-3">
            <h3 className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
              <FaCode className="text-indigo-300" />
              Engineering Discipline
            </h3>
            <p>
              I apply modern software engineering principles—version control, continuous integration, containerization, observability, and intuitive UI design—to scientific computing problems.
            </p>
            <p>
              Whether it is building an ELK-backed error monitoring dashboard for Brainlife.io, developing a companion mobile app for remote pipeline oversight, or creating digital applicant assessment systems for the African Brain Data Network, my goal is to build software that is stable, usable, and impactful.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 3. CORE FOCUS AREAS */}
      <motion.section variants={fadeInUp} className="space-y-6">
        <div className="border-b border-white/10 pb-3">
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block mb-1">
            Focus Areas
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Areas of Specialization
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="bg-[#0F172A]/70 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="p-2.5 rounded-xl bg-white/5 text-sky-400 w-fit border border-white/5">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-2">
                  {area.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* 4. CAREER MILESTONES */}
      <motion.section variants={fadeInUp} className="space-y-6">
        <div className="border-b border-white/10 pb-3 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
              Timeline
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Roles & Milestones
            </h2>
          </div>
          <Link
            href="/experience"
            className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors"
          >
            <span>Detailed Experience</span>
            <FaArrowRight className="text-[10px]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {careerMilestones.map((milestone, idx) => {
            const MIcon = milestone.icon;
            return (
              <div
                key={idx}
                className="bg-[#0F172A]/70 p-5 rounded-2xl border border-white/10 space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-white">{milestone.role}</h3>
                    <p className="text-xs text-sky-300/90 font-medium">{milestone.organization}</p>
                  </div>
                  <span className="text-[11px] text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5 shrink-0 font-mono">
                    {milestone.period}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {milestone.summary}
                </p>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* 5. ACADEMIC FOUNDATION */}
      <motion.section variants={fadeInUp} className="space-y-6">
        <div className="bg-[#0F172A]/80 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b border-white/10">
            <FaGraduationCap className="text-xl text-sky-400" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Academic Background
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#141E33]/60 p-4 rounded-xl border border-white/5 space-y-1">
              <span className="text-[11px] text-teal-300 font-semibold uppercase tracking-wider block">Master's Degree</span>
              <p className="text-xs sm:text-sm font-bold text-white">M.Sc. Information Technology</p>
              <p className="text-xs text-slate-400">Miva Open University (2026–2027)</p>
            </div>

            <div className="bg-[#141E33]/60 p-4 rounded-xl border border-white/5 space-y-1">
              <span className="text-[11px] text-indigo-300 font-semibold uppercase tracking-wider block">Oxford Scholar</span>
              <p className="text-xs sm:text-sm font-bold text-white">Wings Global Scholar</p>
              <p className="text-xs text-slate-400">University of Oxford (2025–2026)</p>
            </div>

            <div className="bg-[#141E33]/60 p-4 rounded-xl border border-white/5 space-y-1">
              <span className="text-[11px] text-sky-400 font-semibold uppercase tracking-wider block">Graduate Degree</span>
              <p className="text-xs sm:text-sm font-bold text-white">M.Sc. Neuroscience</p>
              <p className="text-xs text-slate-400">University of Port Harcourt (2021–2023)</p>
            </div>

            <div className="bg-[#141E33]/60 p-4 rounded-xl border border-white/5 space-y-1">
              <span className="text-[11px] text-purple-400 font-semibold uppercase tracking-wider block">Undergraduate Degree</span>
              <p className="text-xs sm:text-sm font-bold text-white">B.Sc. Anatomy</p>
              <p className="text-xs text-slate-400">University of Port Harcourt (2014–2019)</p>
            </div>
          </div>
        </div>
      </motion.section>

    </motion.div>
  );
}