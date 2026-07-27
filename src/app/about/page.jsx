'use client';

import { motion } from 'framer-motion';
import { 
  FaUser, 
  FaBrain, 
  FaCode, 
  FaCompass, 
  FaGraduationCap, 
  FaFlask, 
  FaRocket, 
  FaGlobe, 
  FaLightbulb, 
  FaCheckCircle,
  FaBuilding
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

const areasOfFocus = [
  {
    title: "Scientific Software & Neuroinformatics",
    subtitle: "Domain Infrastructure & Scientific Tools",
    icon: FaBrain,
    badgeColor: "from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30",
    description: "I build software platforms that make complex neuroscience workflows more accessible, reproducible, and scalable.",
    items: [
      "Neuroinformatics infrastructure",
      "MRI and fMRI data workflows",
      "Scientific computing",
      "FAIR data systems",
      "Open science platforms",
      "Reproducible research pipelines"
    ]
  },
  {
    title: "Software Engineering",
    subtitle: "Full-Stack Web, Mobile & Cloud Systems",
    icon: FaCode,
    badgeColor: "from-blue-500/20 to-indigo-500/20 text-blue-300 border-blue-500/30",
    description: "I develop full-stack web and mobile applications for scientific, healthcare, and research environments.",
    items: [
      "React and Next.js applications",
      "React Native mobile platforms",
      "Python-based scientific workflows",
      "Backend APIs and cloud systems",
      "Data platforms and research infrastructure",
      "Observability and workflow monitoring systems"
    ]
  },
  {
    title: "Technical Product Leadership",
    subtitle: "Product Strategy, UX & Cross-Functional Alignment",
    icon: FaCompass,
    badgeColor: "from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30",
    description: "I enjoy working between researchers, engineers, and users to turn complex problems into practical technology solutions.",
    items: [
      "Product discovery",
      "User workflow analysis",
      "Technical strategy",
      "Roadmap development",
      "Feature prioritization",
      "Cross-functional collaboration",
      "Platform delivery"
    ]
  }
];

const careerHighlights = [
  {
    title: "Research Software Engineering",
    icon: FaCode,
    description: "Developing scientific software products that improve neuroimaging workflows, including workflow monitoring systems, error diagnostics platforms, and tools that increase visibility into distributed computational pipelines."
  },
  {
    title: "Scientific Research & Open Science",
    icon: FaFlask,
    description: "Contributing to neuroscience research through neuroimaging analysis, FAIR data initiatives, and open scientific infrastructure designed to improve accessibility and reproducibility."
  },
  {
    title: "Technology & Product Innovation",
    icon: FaRocket,
    description: "Leading the development of digital platforms across neuroscience, research, and healthcare domains, translating scientific and user needs into scalable software solutions."
  }
];

export default function About() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="mx-auto space-y-12 max-w-6xl pb-16"
    >
      {/* Page Header */}
      <motion.div variants={fadeInUp} className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20">
            <FaUser className="text-2xl" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              About Me
            </h1>
            <p className="text-blue-400 font-medium text-sm sm:text-base">
              Research Software Engineer • Technical Product Lead • Computational Neuroscientist
            </p>
          </div>
        </div>

        {/* Hero Card */}
        <div className="bg-gradient-to-r from-blue-950/60 via-purple-950/40 to-gray-900 p-6 sm:p-8 rounded-3xl border border-blue-800/40 backdrop-blur-md shadow-2xl">
          <p className="text-gray-100 text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
            I am a Research Software Engineer, Technical Product Lead, and Computational Neuroscientist building technology at the intersection of neuroscience, artificial intelligence, and scientific computing.
          </p>
        </div>
      </motion.div>

      {/* Professional Overview Card */}
      <motion.div 
        variants={fadeInUp}
        className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-700/70 hover:border-blue-500/40 transition-all duration-300 space-y-6"
      >
        <div className="flex items-center gap-3 pb-4 border-b border-gray-700/60">
          <div className="p-2.5 bg-blue-950/60 text-blue-400 rounded-xl border border-blue-800/50">
            <FaBuilding className="text-xl" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Professional Overview</h2>
        </div>

        <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
          <p>
            My work focuses on transforming complex research and healthcare workflows into scalable software platforms that improve how scientists collect, analyze, and collaborate around data. Combining an M.Sc. in Neuroscience with hands-on software engineering experience, I bridge the gap between scientific discovery and technology development.
          </p>
          <p>
            I currently work as a <strong className="text-blue-300 font-semibold">Research Software Engineer at Brainlife.io (University of Texas at Austin)</strong>, where I build tools that improve neuroimaging workflow reliability, observability, and researcher productivity. My work involves designing scientific software products, developing full-stack applications, and collaborating with researchers and engineering teams to solve challenges in computational neuroscience.
          </p>
          <p>
            I also serve as a <strong className="text-purple-300 font-semibold">Technical Product Lead with the African Brain Data Network</strong>, where I lead the development of digital platforms that support FAIR data practices, neuroscience collaboration, and research capacity building across Africa. My work combines product strategy, user research, software development, and scientific leadership to create tools used by researchers and educational communities.
          </p>
        </div>
      </motion.div>

      {/* Areas of Focus Section */}
      <motion.section variants={fadeInUp} className="space-y-8">
        <div className="flex items-center gap-3 pb-2 border-b border-gray-800">
          <FaGlobe className="text-2xl text-blue-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Areas of Focus</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areasOfFocus.map((focus, index) => {
            const FocusIcon = focus.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-700/70 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="p-3 bg-blue-950/60 text-blue-400 rounded-xl border border-blue-800/50 shrink-0">
                      <FocusIcon className="text-2xl" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border bg-gradient-to-r ${focus.badgeColor}`}>
                      {focus.subtitle}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white leading-snug">{focus.title}</h3>
                    <p className="text-xs text-gray-300 mt-2 leading-relaxed">{focus.description}</p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-gray-800">
                    {focus.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                        <FaCheckCircle className="text-blue-400 text-xs shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Career Highlights Section */}
      <motion.section variants={fadeInUp} className="space-y-8">
        <div className="flex items-center gap-3 pb-2 border-b border-gray-800">
          <FaRocket className="text-2xl text-purple-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Career Highlights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {careerHighlights.map((highlight, index) => {
            const HighlightIcon = highlight.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl shadow-lg p-6 sm:p-7 border border-gray-800 hover:border-purple-500/40 transition-all duration-300 space-y-4"
              >
                <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
                  <div className="p-2.5 bg-purple-950/60 text-purple-400 rounded-lg border border-purple-800/40">
                    <HighlightIcon className="text-xl" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{highlight.title}</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Education & Interdisciplinary Background Card */}
      <motion.div 
        variants={fadeInUp}
        className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-700/70 hover:border-emerald-500/40 transition-all duration-300 space-y-6"
      >
        <div className="flex items-center gap-3 pb-4 border-b border-gray-700/60">
          <div className="p-2.5 bg-emerald-950/60 text-emerald-400 rounded-xl border border-emerald-800/50">
            <FaGraduationCap className="text-xl" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Education & Interdisciplinary Foundation</h2>
        </div>

        <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
          <p>My background combines:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gray-900/60 p-4 rounded-xl border border-gray-800 space-y-1">
              <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider block">Graduate Degree</span>
              <p className="text-sm font-bold text-white">M.Sc. Neuroscience</p>
              <p className="text-xs text-gray-400">University of Port Harcourt</p>
            </div>
            <div className="bg-gray-900/60 p-4 rounded-xl border border-gray-800 space-y-1">
              <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block">Oxford Scholar</span>
              <p className="text-sm font-bold text-white">Wings Global Scholar</p>
              <p className="text-xs text-gray-400">University of Oxford</p>
            </div>
            <div className="bg-gray-900/60 p-4 rounded-xl border border-gray-800 space-y-1">
              <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider block">Software Engineering</span>
              <p className="text-sm font-bold text-white">5+ Years Experience</p>
              <p className="text-xs text-gray-400">Research & Digital Health</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm sm:text-base pt-2">
            This interdisciplinary foundation allows me to approach technology problems from both scientific and engineering perspectives.
          </p>
        </div>
      </motion.div>

      {/* Vision Statement */}
      <motion.div 
        variants={fadeInUp}
        className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700/80 shadow-2xl space-y-4"
      >
        <div className="flex items-center gap-3 pb-2 border-b border-gray-800">
          <FaLightbulb className="text-2xl text-amber-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Vision</h2>
        </div>
        <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
          I am passionate about building intelligent systems that expand access to scientific knowledge, improve healthcare technology, and accelerate discovery. My long-term goal is to lead the development of impactful technology products where artificial intelligence, software engineering, and neuroscience come together to solve complex human problems.
        </p>
      </motion.div>
    </motion.div>
  );
}