'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaTools, 
  FaCode, 
  FaBrain, 
  FaServer, 
  FaRobot, 
  FaCompass, 
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
      staggerChildren: 0.08
    }
  }
};

const skillCategories = [
  {
    title: "Software Engineering & Architecture",
    icon: FaCode,
    description: "Building resilient web, mobile, and cloud software for scientific and enterprise use cases.",
    groups: [
      {
        name: "Frontend & Mobile",
        skills: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "State Management (Zustand/Redux)"]
      },
      {
        name: "Backend & APIs",
        skills: ["Node.js", "Python", "RESTful APIs", "GraphQL", "Authentication & Access Governance"]
      },
      {
        name: "Infrastructure & Data",
        skills: ["Docker", "AWS", "Firebase", "PostgreSQL", "MongoDB", "CI/CD & Git Workflows"]
      }
    ]
  },
  {
    title: "Neuroinformatics & Scientific Computing",
    icon: FaBrain,
    description: "Domain-specific tools, standards, and data processing pipelines for neuroimaging research.",
    groups: [
      {
        name: "Neuroimaging Toolchains",
        skills: ["FSL (FIRST, BET, FLIRT/FNIRT)", "FreeSurfer", "ANTs / ANTsPy", "SimpleITK", "MNE-Python", "PyDICOM & Nibabel"]
      },
      {
        name: "Data Standards & Repositories",
        skills: ["BIDS (Brain Imaging Data Structure)", "FAIR Data Principles", "OpenNeuro", "Dataset Governance"]
      },
      {
        name: "Analysis & Morphometry",
        skills: ["Structural MRI Morphometry", "Subcortical Nuclei Volumetrics", "Task fMRI GLM Analysis", "Quality Control (MRIQC)"]
      }
    ]
  },
  {
    title: "Pipeline Observability & Diagnostics",
    icon: FaServer,
    description: "Telemetry, logging, and error tracking systems for high-throughput distributed scientific computing.",
    groups: [
      {
        name: "Telemetry Stack",
        skills: ["Elasticsearch", "Logstash", "Kibana (ELK)", "Structured Log Parsing", "Stack Trace Extraction"]
      },
      {
        name: "HPC & Distributed Workflows",
        skills: ["Batch Job Telemetry", "Container Runtime Diagnostics", "HPC Cluster Integration", "Real-Time Push Alerts"]
      }
    ]
  },
  {
    title: "Medical AI & Machine Learning",
    icon: FaRobot,
    description: "Developing and auditing machine learning architectures on medical imaging datasets.",
    groups: [
      {
        name: "Frameworks & Toolkits",
        skills: ["PyTorch", "MONAI", "TorchIO", "Scikit-Learn", "SciPy / NumPy"]
      },
      {
        name: "Evaluation & Safety",
        skills: ["Expected Calibration Error (ECE)", "Grad-CAM / Grad-CAM++", "SHAP", "Leave-One-Hospital-Out Validation"]
      }
    ]
  },
  {
    title: "Technical Product & Research Leadership",
    icon: FaCompass,
    description: "Leading multi-stakeholder technical projects between researchers, engineers, and clinical partners.",
    groups: [
      {
        name: "Strategy & Execution",
        skills: ["Workflow Discovery & User Research", "Technical Roadmapping", "Cross-Functional Coordination", "Open Science Community Leadership"]
      }
    ]
  }
];

export default function SkillsPage() {
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
            <FaTools className="text-xl" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Technical Stack & Competencies
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Software engineering, neuroinformatics toolchains, observability, and medical AI
            </p>
          </div>
        </div>

        <div className="bg-[#0F172A]/80 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
            My skill set reflects an active cross-disciplinary practice combining hands-on software development with specialized computational neuroscience toolchains.
          </p>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Rather than generalist keywords, these tools represent technologies I use daily to build production scientific software, process clinical MRI data, and deploy cloud observability systems.
          </p>
        </div>
      </motion.div>

      {/* 2. SKILL DOMAINS */}
      <div className="space-y-8">
        {skillCategories.map((category, index) => {
          const CatIcon = category.icon;
          return (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-[#0F172A]/80 rounded-2xl p-6 sm:p-7 border border-white/10 space-y-5"
            >
              <div className="flex items-start gap-3 pb-3 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-white/5 text-sky-400 border border-white/5 shrink-0 mt-0.5">
                  <CatIcon className="text-xl" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    {category.title}
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.groups.map((group, gIdx) => (
                  <div key={gIdx} className="bg-[#141E33]/60 p-4 rounded-xl border border-white/5 space-y-2.5">
                    <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
                      {group.name}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="bg-[#0F172A] text-slate-200 px-2.5 py-1 rounded-md text-xs font-medium border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}