'use client';

import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaBrain, 
  FaUniversity, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaAward, 
  FaCertificate, 
  FaCheckCircle, 
  FaCode, 
  FaLayerGroup 
} from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const academicJourney = [
  {
    degree: "Wings Global Scholar — Advanced Neuroimaging Graduate Programme",
    institution: "University of Oxford",
    location: "Oxford, United Kingdom",
    period: "2025 – 2026",
    badge: "Wings Global Scholar",
    badgeColor: "from-amber-500/20 to-yellow-500/20 text-amber-300 border-amber-500/40",
    overview: "Selected as a Wings Global Scholar for advanced training in computational neuroimaging, MRI analysis, and reproducible neuroscience workflows.",
    researchFocus: [
      "Computational neuroimaging",
      "Advanced MRI analysis",
      "Neuroinformatics",
      "Reproducible research workflows",
      "FAIR data principles and open science infrastructure"
    ],
    technicalAreas: [
      "MRI preprocessing pipelines",
      "Neuroimaging data analysis",
      "Scientific computing workflows",
      "FSL and FreeSurfer-based analysis",
      "Open neuroscience platforms and data sharing"
    ]
  },
  {
    degree: "M.Sc. Neuroscience",
    institution: "University of Port Harcourt",
    location: "Port Harcourt, Nigeria",
    period: "2021 – 2023",
    badge: "Graduate Degree",
    badgeColor: "from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30",
    overview: "Graduate research focused on applying computational approaches to understand brain structure and neurological disorders.",
    researchFocusTitle: "Neuroimaging and Brain Structure Analysis",
    keyAreas: [
      "Advanced MRI analysis",
      "Neurodegenerative disease research",
      "Brain morphometry",
      "Statistical modelling in neuroscience",
      "Neuroanatomical mapping",
      "Computational neuroscience"
    ]
  },
  {
    degree: "B.Sc. Anatomy",
    institution: "University of Port Harcourt",
    location: "Port Harcourt, Nigeria",
    period: "2014 – 2019",
    badge: "Undergraduate Degree",
    badgeColor: "from-purple-500/20 to-indigo-500/20 text-purple-300 border-purple-500/30",
    overview: "Established a foundation in human biology, neuroscience, and anatomical research, providing the scientific background for later work in computational neuroscience and neuroinformatics.",
    researchFocusTitle: "Neuroanatomy and Brain Development",
    keyAreas: [
      "Human anatomy",
      "Neurobiology",
      "Histology",
      "Research methodology",
      "Brain structure and function"
    ]
  }
];

const additionalTraining = [
  {
    title: "Applied AI Lab: Deep Learning for Computer Vision",
    institution: "WorldQuant University",
    period: "2025",
    description: "Training focused on deep learning methods for computer vision, including neural networks, image processing, and practical AI implementation.",
    category: "AI & Computer Vision"
  },
  {
    title: "Introduction to Deep Learning for Computer Vision",
    institution: "Coursera",
    period: "2025",
    description: "Covered foundational deep learning concepts including convolutional neural networks, image classification, and computer vision applications.",
    category: "Deep Learning"
  },
  {
    title: "Deep Learning in Neuroscience",
    institution: "Coursera",
    period: "2025",
    description: "Focused on applying deep learning approaches to neuroscience and neuroimaging data analysis.",
    category: "NeuroAI"
  },
  {
    title: "Advanced Neuroimaging Workshop",
    institution: "brainlife.io",
    period: "2023",
    description: "Hands-on training in MRI data processing, neuroimaging workflows, and reproducible analysis using the brainlife.io platform.",
    category: "Neuroimaging Workflows"
  },
  {
    title: "Neuroimaging Data Management",
    institution: "African Brain Data Network",
    period: "2022",
    description: "Training in FAIR data principles, neuroimaging data organization, data sharing standards, and collaborative neuroscience research infrastructure.",
    category: "FAIR Principles & Data"
  }
];

export default function Education() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="mx-auto space-y-12 max-w-6xl pb-16"
    >
      {/* Header Section */}
      <motion.div variants={fadeInUp} className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20">
            <FaGraduationCap className="text-2xl" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Education & Training
            </h1>
            <p className="text-blue-400 font-medium text-sm sm:text-base">
              Academic Qualifications • Specialized Research Training • Professional Certifications
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-950/60 via-purple-950/40 to-gray-900 p-6 sm:p-8 rounded-3xl border border-blue-800/40 backdrop-blur-md shadow-2xl">
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
            My academic foundation combines <strong className="text-blue-300 font-semibold">computational neuroimaging</strong>, <strong className="text-purple-300 font-semibold">neuroscience</strong>, and <strong className="text-cyan-300 font-semibold">anatomy</strong> with specialized technical training in deep learning, reproducible scientific computing, and FAIR research infrastructure.
          </p>
        </div>
      </motion.div>

      {/* Academic Journey Section */}
      <motion.section variants={fadeInUp} className="space-y-8">
        <div className="flex items-center gap-3 pb-2 border-b border-gray-800">
          <FaUniversity className="text-2xl text-blue-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Academic Journey</h2>
        </div>

        <div className="space-y-8">
          {academicJourney.map((edu, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-700/70 hover:border-blue-500/40 transition-all duration-300 space-y-6"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-700/60">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r ${edu.badgeColor} flex items-center gap-1.5`}>
                      <FaAward className="text-xs" />
                      {edu.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{edu.degree}</h3>
                  <p className="text-lg text-blue-400 font-semibold flex items-center gap-2">
                    <FaUniversity className="text-base shrink-0" />
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                  <span className="flex items-center gap-1.5 bg-gray-800/80 px-3 py-1.5 rounded-lg border border-gray-700">
                    <FaMapMarkerAlt className="text-blue-400" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5 bg-gray-800/80 px-3 py-1.5 rounded-lg border border-gray-700 font-medium text-blue-300">
                    <FaCalendarAlt className="text-blue-400" />
                    {edu.period}
                  </span>
                </div>
              </div>

              {/* Overview */}
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed bg-gray-900/50 p-5 rounded-xl border border-gray-800">
                {edu.overview}
              </p>

              {/* Details (Oxford Style vs Master/Bachelor Style) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Research Focus */}
                <div className="bg-gray-900/50 p-5 rounded-xl border border-gray-800 space-y-3">
                  <span className="text-xs text-purple-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                    <FaBrain className="text-sm" />
                    Research Focus
                  </span>

                  {Array.isArray(edu.researchFocus) ? (
                    <ul className="space-y-2">
                      {edu.researchFocus.map((rf, rfIdx) => (
                        <li key={rfIdx} className="flex items-start gap-2 text-sm text-gray-300">
                          <FaCheckCircle className="text-purple-400 text-xs mt-1 shrink-0" />
                          <span>{rf}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-base font-semibold text-gray-200">{edu.researchFocusTitle}</p>
                  )}
                </div>

                {/* Technical Areas or Key Areas */}
                <div className="bg-gray-900/50 p-5 rounded-xl border border-gray-800 space-y-3">
                  <span className="text-xs text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                    <FaCode className="text-sm" />
                    {edu.technicalAreas ? "Technical Areas" : "Key Areas"}
                  </span>

                  {edu.technicalAreas ? (
                    <ul className="space-y-2">
                      {edu.technicalAreas.map((ta, taIdx) => (
                        <li key={taIdx} className="flex items-start gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                          <span>{ta}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {edu.keyAreas.map((area, areaIdx) => (
                        <span
                          key={areaIdx}
                          className="bg-blue-950/60 text-blue-300 px-3 py-1.5 rounded-lg text-xs font-medium border border-blue-800/40"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Additional Professional Training */}
      <motion.section variants={fadeInUp} className="space-y-8 pt-4">
        <div className="flex items-center gap-3 pb-2 border-b border-gray-800">
          <FaCertificate className="text-2xl text-purple-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Additional Professional Training</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {additionalTraining.map((training, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl shadow-lg p-6 sm:p-7 border border-gray-800 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-4">
                  <span className="bg-purple-950/60 text-purple-300 px-2.5 py-1 rounded-md text-xs font-medium border border-purple-800/40">
                    {training.category}
                  </span>
                  <span className="text-xs text-blue-300 font-medium bg-gray-800/80 px-2.5 py-1 rounded-md border border-gray-700 shrink-0">
                    {training.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white leading-snug">{training.title}</h3>
                  <p className="text-sm font-semibold text-blue-400 mt-1">{training.institution}</p>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">{training.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}