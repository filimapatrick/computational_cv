'use client';

import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaUniversity, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaAward, 
  FaCertificate, 
  FaCheckCircle
} from 'react-icons/fa';

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

const academicDegrees = [
  {
    degree: "Wings Global Scholar — Advanced Neuroimaging Graduate Programme",
    institution: "University of Oxford",
    location: "Oxford, United Kingdom",
    period: "2025 – 2026",
    badge: "Wings Global Scholar",
    badgeColor: "text-amber-300 bg-amber-500/10 border-amber-500/20",
    overview: "Selected as a Wings Global Scholar for advanced graduate training in computational neuroimaging, high-throughput MRI data analysis, and reproducible scientific workflows.",
    keyAreas: [
      "Computational neuroimaging & high-field MRI analysis",
      "FSL, FreeSurfer, and containerized neuroinformatics pipelines",
      "Reproducible research workflows & FAIR data governance",
      "Advanced structural and functional MRI preprocessing"
    ]
  },
  {
    degree: "M.Sc. Neuroscience",
    institution: "University of Port Harcourt",
    location: "Port Harcourt, Nigeria",
    period: "2021 – 2023",
    badge: "Master of Science",
    badgeColor: "text-sky-300 bg-sky-500/10 border-sky-500/20",
    overview: "Graduate research focused on applying computational and volumetric MRI approaches to examine thalamic alterations and brain morphology in neurodegenerative disorders.",
    keyAreas: [
      "Subcortical brain morphometry & volumetric analysis",
      "Neurodegenerative disease pathology & clinical correlations",
      "Statistical modeling and hypothesis testing in neuroimaging",
      "Neuroanatomical mapping"
    ]
  },
  {
    degree: "B.Sc. Anatomy",
    institution: "University of Port Harcourt",
    location: "Port Harcourt, Nigeria",
    period: "2014 – 2019",
    badge: "Bachelor of Science",
    badgeColor: "text-purple-300 bg-purple-500/10 border-purple-500/20",
    overview: "Formed a rigorous biological foundation in human neuroanatomy, histology, and biological research methodology that directly informs current work in neuroinformatics and medical AI.",
    keyAreas: [
      "Human neuroanatomy & central nervous system structure",
      "Histology & tissue morphometry",
      "Research methodology & experimental design"
    ]
  }
];

const specializedCertifications = [
  {
    title: "Applied AI Lab: Deep Learning for Computer Vision",
    institution: "WorldQuant University",
    period: "2025",
    category: "Computer Vision & Medical AI",
    description: "Practical deep learning implementations for computer vision, convolutional neural network architectures, and image processing."
  },
  {
    title: "Deep Learning in Neuroscience",
    institution: "Coursera / DeepLearning.AI",
    period: "2025",
    category: "NeuroAI",
    description: "Applying neural network architectures and machine learning methods to neural time series and neuroimaging data."
  },
  {
    title: "Advanced Neuroimaging Workshop",
    institution: "Brainlife.io",
    period: "2023",
    category: "Scientific Computing",
    description: "Hands-on training in reproducible MRI processing pipelines, BIDS standards, and cloud execution on Brainlife.io."
  },
  {
    title: "Neuroimaging Data Management & FAIR Principles",
    institution: "African Brain Data Network",
    period: "2022",
    category: "FAIR Data Standards",
    description: "Specialized training in data governance, international neuroimaging data sharing protocols, and open science infrastructure."
  }
];

export default function EducationPage() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="w-full space-y-14 pb-16"
    >
      {/* 1. HEADER */}
      <motion.div variants={fadeInUp} className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <FaGraduationCap className="text-xl" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Education & Academic Foundation
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Academic qualifications, Oxford scholarship, and specialized technical training
            </p>
          </div>
        </div>

        <div className="bg-[#0F172A]/80 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
            My academic training combines graduate neuroimaging at Oxford and Port Harcourt with foundational anatomy and specialized AI training.
          </p>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            This dual background in biological neuroanatomy and computational engineering allows me to communicate effectively with both clinical neuroscientists and systems engineers.
          </p>
        </div>
      </motion.div>

      {/* 2. ACADEMIC DEGREES */}
      <motion.section variants={fadeInUp} className="space-y-6">
        <div className="border-b border-white/10 pb-3">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-1">
            Degrees & Programmes
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Higher Education
          </h2>
        </div>

        <div className="space-y-6">
          {academicDegrees.map((deg, index) => (
            <div
              key={index}
              className="bg-[#0F172A]/80 rounded-2xl p-6 sm:p-7 border border-white/10 space-y-4"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div className="space-y-1">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${deg.badgeColor} w-fit block`}>
                    {deg.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {deg.degree}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-sky-300 flex items-center gap-1.5">
                    <FaUniversity className="text-xs shrink-0" />
                    {deg.institution}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
                  <span className="flex items-center gap-1 bg-[#141E33] px-2.5 py-1 rounded-md border border-white/5">
                    <FaMapMarkerAlt className="text-sky-400" />
                    {deg.location}
                  </span>
                  <span className="flex items-center gap-1 bg-[#141E33] px-2.5 py-1 rounded-md border border-white/5 font-mono text-sky-300">
                    <FaCalendarAlt className="text-sky-400" />
                    {deg.period}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#141E33]/50 p-4 rounded-xl border border-white/5">
                {deg.overview}
              </p>

              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Curriculum & Research Focus:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {deg.keyAreas.map((area, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <FaCheckCircle className="text-sky-400 text-[10px] mt-1 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 3. SPECIALIZED CERTIFICATIONS & TECHNICAL WORKSHOPS */}
      <motion.section variants={fadeInUp} className="space-y-6">
        <div className="border-b border-white/10 pb-3">
          <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block mb-1">
            Professional Development
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Specialized Training & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {specializedCertifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#0F172A]/70 rounded-2xl p-5 sm:p-6 border border-white/10 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                    {cert.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {cert.period}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-sky-400">
                  {cert.institution}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}