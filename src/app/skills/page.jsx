'use client';

import { motion } from 'framer-motion';
import { 
  FaTools, 
  FaCompass, 
  FaCode, 
  FaBrain, 
  FaServer, 
  FaRocket, 
  FaRobot, 
  FaHeartbeat, 
  FaUsers, 
  FaBookOpen, 
  FaCheckCircle,
  FaCloud,
  FaDatabase
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

const skillsData = {
  productLeadership: {
    title: "Product & Technical Leadership",
    subtitle: "Product Strategy & Discovery",
    description: "Transforming scientific and healthcare challenges into scalable technology solutions.",
    icon: FaCompass,
    badgeColor: "from-purple-500/20 to-indigo-500/20 text-purple-300 border-purple-500/30",
    skills: [
      "Product Discovery",
      "User Research",
      "Workflow Analysis",
      "Product Strategy",
      "Roadmap Planning",
      "Requirements Definition",
      "Feature Prioritization",
      "MVP Development",
      "Stakeholder Management",
      "Cross-functional Leadership"
    ]
  },
  softwareEngineering: {
    title: "Software Engineering",
    subtitle: "Full-Stack Development",
    description: "Building scalable web and mobile applications across research, healthcare, and commercial environments.",
    icon: FaCode,
    badgeColor: "from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30",
    categories: [
      {
        name: "Frontend",
        skills: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "Responsive UI Development"]
      },
      {
        name: "Backend & APIs",
        skills: ["Node.js", "Python", "REST APIs", "Backend Services", "Database Design", "Authentication Systems"]
      },
      {
        name: "Infrastructure & Engineering",
        skills: ["Docker", "Cloud Infrastructure", "AWS", "Firebase", "PostgreSQL", "MongoDB", "Distributed Systems", "Software Architecture"]
      }
    ]
  },
  researchSoftwareEngineering: {
    title: "Research Software Engineering",
    subtitle: "Scientific Computing & Research Infrastructure",
    description: "Developing software platforms that improve scientific workflows, reproducibility, and data accessibility.",
    icon: FaServer,
    badgeColor: "from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30",
    skills: [
      "Research Software Development",
      "Scientific Workflow Automation",
      "Computational Pipelines",
      "Data Processing Systems",
      "Reproducible Research",
      "Open Science Infrastructure",
      "FAIR Data Principles",
      "Research Platform Development"
    ]
  },
  neuroinformatics: {
    title: "Neuroinformatics & Medical Imaging",
    subtitle: "Computational Neuroscience",
    description: "Applying software engineering and computational methods to understand and analyze brain data.",
    icon: FaBrain,
    badgeColor: "from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30",
    skills: [
      "Neuroinformatics",
      "MRI Analysis",
      "Functional MRI (fMRI)",
      "Brain Morphometry",
      "Neuroimaging Pipelines",
      "FSL",
      "FreeSurfer",
      "Brain Imaging Data Structures (BIDS)",
      "Medical Imaging Workflows"
    ]
  },
  aiMachineLearning: {
    title: "AI & Machine Learning",
    subtitle: "AI-Enabled Scientific Applications",
    description: "Exploring and applying artificial intelligence approaches in healthcare and neuroscience.",
    icon: FaRobot,
    badgeColor: "from-amber-500/20 to-yellow-500/20 text-amber-300 border-amber-500/30",
    skills: [
      "Deep Learning",
      "Computer Vision",
      "Medical AI",
      "Neural Networks",
      "AI for Healthcare",
      "Machine Learning Applications",
      "Neuroimaging AI Analysis"
    ]
  },
  digitalHealth: {
    title: "Digital Health",
    subtitle: "Healthcare Technology Development",
    description: "Building digital platforms that improve healthcare access and clinical workflows.",
    icon: FaHeartbeat,
    badgeColor: "from-rose-500/20 to-pink-500/20 text-rose-300 border-rose-500/30",
    skills: [
      "Digital Health Platforms",
      "Healthcare Workflows",
      "Patient Experience Design",
      "Healthcare Data Systems",
      "Clinical Product Development",
      "Healthcare Analytics"
    ]
  }
};

const professionalCompetencies = [
  {
    category: "Research & Communication",
    icon: FaBookOpen,
    skills: [
      "Scientific Writing",
      "Research Design",
      "Literature Review",
      "Technical Documentation",
      "Data Interpretation",
      "Scientific Communication",
      "Research Presentation"
    ]
  },
  {
    category: "Leadership & Collaboration",
    icon: FaUsers,
    skills: [
      "Cross-functional Collaboration",
      "Engineering Leadership",
      "Mentorship",
      "Technical Communication",
      "Problem Solving",
      "Strategic Thinking",
      "Stakeholder Alignment"
    ]
  }
];

const currentFocus = [
  "AI applications in neuroimaging",
  "Deep learning for medical imaging",
  "Cloud-native scientific computing",
  "Advanced data visualization",
  "Scalable research infrastructure",
  "Technical product leadership"
];

export default function Skills() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="mx-auto space-y-12 max-w-6xl pb-16"
    >
      {/* Header Section */}
      <motion.div variants={fadeInUp} className="space-y-6 text-left">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20">
            <FaTools className="text-2xl" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Expertise
            </h1>
            <p className="text-blue-400 font-medium text-sm sm:text-base">
              Technical Product Leadership • Research Software Engineering • Computational Neuroscience
            </p>
          </div>
        </div>

        {/* Core Positioning Banner */}
        <div className="bg-gradient-to-r from-blue-950/60 via-purple-950/40 to-gray-900 p-6 sm:p-8 rounded-3xl border border-blue-800/40 backdrop-blur-md shadow-2xl space-y-4">
          <p className="text-gray-100 text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
            I combine software engineering, scientific research, and product leadership to build technology platforms for neuroscience, healthcare, and data-intensive research environments.
          </p>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            My expertise spans full-stack development, scientific computing, AI-enabled systems, neuroinformatics infrastructure, and translating complex research workflows into scalable software products.
          </p>
        </div>
      </motion.div>

      {/* Core Technical & Product Competencies Grid */}
      <motion.section id="expertise" variants={fadeInUp} className="space-y-8">
        <div className="flex items-center gap-3 pb-2 border-b border-gray-800">
          <FaRocket className="text-2xl text-blue-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Core Competencies & Stack</h2>
        </div>

        <div className="space-y-8">
          {/* 1. Product Leadership */}
          <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-700/70 hover:border-purple-500/40 transition-all duration-300 space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-950/60 text-purple-400 rounded-xl border border-purple-800/50 shrink-0">
                <FaCompass className="text-2xl" />
              </div>
              <div>
                <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider block">{skillsData.productLeadership.subtitle}</span>
                <h3 className="text-2xl font-bold text-white">{skillsData.productLeadership.title}</h3>
                <p className="text-sm text-gray-300 mt-1">{skillsData.productLeadership.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {skillsData.productLeadership.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-purple-950/60 text-purple-300 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium border border-purple-800/40 hover:bg-purple-900/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* 2. Software Engineering (Full Stack) */}
          <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-700/70 hover:border-blue-500/40 transition-all duration-300 space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-950/60 text-blue-400 rounded-xl border border-blue-800/50 shrink-0">
                <FaCode className="text-2xl" />
              </div>
              <div>
                <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider block">{skillsData.softwareEngineering.subtitle}</span>
                <h3 className="text-2xl font-bold text-white">{skillsData.softwareEngineering.title}</h3>
                <p className="text-sm text-gray-300 mt-1">{skillsData.softwareEngineering.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {skillsData.softwareEngineering.categories.map((cat, idx) => (
                <div key={idx} className="bg-gray-900/60 p-5 rounded-xl border border-gray-800 space-y-3">
                  <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider block">{cat.name}</span>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-blue-950/60 text-blue-300 px-3 py-1.5 rounded-lg text-xs font-medium border border-blue-800/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Research Software Engineering & Neuroinformatics 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Research Software Engineering */}
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-700/70 hover:border-emerald-500/40 transition-all duration-300 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-950/60 text-emerald-400 rounded-xl border border-emerald-800/50 shrink-0">
                  <FaServer className="text-2xl" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider block">{skillsData.researchSoftwareEngineering.subtitle}</span>
                  <h3 className="text-xl font-bold text-white">{skillsData.researchSoftwareEngineering.title}</h3>
                  <p className="text-xs text-gray-300 mt-1">{skillsData.researchSoftwareEngineering.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {skillsData.researchSoftwareEngineering.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-emerald-950/60 text-emerald-300 px-3 py-1.5 rounded-lg text-xs font-medium border border-emerald-800/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Neuroinformatics & Medical Imaging */}
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-700/70 hover:border-cyan-500/40 transition-all duration-300 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-950/60 text-cyan-400 rounded-xl border border-cyan-800/50 shrink-0">
                  <FaBrain className="text-2xl" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider block">{skillsData.neuroinformatics.subtitle}</span>
                  <h3 className="text-xl font-bold text-white">{skillsData.neuroinformatics.title}</h3>
                  <p className="text-xs text-gray-300 mt-1">{skillsData.neuroinformatics.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {skillsData.neuroinformatics.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-cyan-950/60 text-cyan-300 px-3 py-1.5 rounded-lg text-xs font-medium border border-cyan-800/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 4. AI/ML & Digital Health 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI & Machine Learning */}
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-700/70 hover:border-amber-500/40 transition-all duration-300 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-950/60 text-amber-400 rounded-xl border border-amber-800/50 shrink-0">
                  <FaRobot className="text-2xl" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider block">{skillsData.aiMachineLearning.subtitle}</span>
                  <h3 className="text-xl font-bold text-white">{skillsData.aiMachineLearning.title}</h3>
                  <p className="text-xs text-gray-300 mt-1">{skillsData.aiMachineLearning.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {skillsData.aiMachineLearning.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-amber-950/60 text-amber-300 px-3 py-1.5 rounded-lg text-xs font-medium border border-amber-800/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Digital Health */}
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-700/70 hover:border-rose-500/40 transition-all duration-300 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-rose-950/60 text-rose-400 rounded-xl border border-rose-800/50 shrink-0">
                  <FaHeartbeat className="text-2xl" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-rose-300 uppercase tracking-wider block">{skillsData.digitalHealth.subtitle}</span>
                  <h3 className="text-xl font-bold text-white">{skillsData.digitalHealth.title}</h3>
                  <p className="text-xs text-gray-300 mt-1">{skillsData.digitalHealth.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {skillsData.digitalHealth.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-rose-950/60 text-rose-300 px-3 py-1.5 rounded-lg text-xs font-medium border border-rose-800/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Professional Competencies Section */}
      <motion.section variants={fadeInUp} className="space-y-8 pt-4">
        <div className="flex items-center gap-3 pb-2 border-b border-gray-800">
          <FaUsers className="text-2xl text-purple-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Professional Competencies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {professionalCompetencies.map((comp, index) => {
            const CompIcon = comp.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-800 hover:border-purple-500/40 transition-all duration-300 space-y-6"
              >
                <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
                  <div className="p-2.5 bg-purple-950/60 text-purple-400 rounded-lg border border-purple-800/40">
                    <CompIcon className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{comp.category}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {comp.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2.5 bg-gray-900/60 p-3 rounded-xl border border-gray-800">
                      <FaCheckCircle className="text-purple-400 text-xs shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-200 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Current Focus Section (Replacing Future Goals) */}
      <motion.section variants={fadeInUp} className="pt-4">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700/80 shadow-2xl space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-gray-800">
            <div className="p-3 rounded-2xl bg-blue-950/60 text-blue-400 border border-blue-800/50">
              <FaCloud className="text-2xl" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Current Focus</h2>
              <p className="text-gray-400 text-xs sm:text-sm">Active areas of technical expansion and professional deepening</p>
            </div>
          </div>

          <p className="text-gray-300 text-sm sm:text-base">
            Currently developing deeper expertise in:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {currentFocus.map((focus, idx) => (
              <div key={idx} className="bg-gray-900/70 p-4 rounded-xl border border-blue-900/40 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-200 font-medium leading-snug">{focus}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}