'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaFlask, 
  FaBrain, 
  FaUsers, 
  FaChartLine, 
  FaArrowRight, 
  FaCheckCircle, 
  FaMicroscope, 
  FaDatabase 
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

const ongoingStudies = [
  {
    title: "Asymmetry in Thalamic Gray Matter Changes in Nigerian Parkinson's Disease Patients",
    category: "Neuroimaging & Morphometry",
    badgeColor: "text-sky-300 bg-sky-500/10 border-sky-500/20",
    description: "Investigating asymmetrical patterns of thalamic gray matter alterations in Nigerian Parkinson's Disease patients using automated volumetric MRI segmentation and statistical shape modeling.",
    objectives: [
      "Map hemispheric differences and volumetric atrophy across disease progression stages",
      "Correlate regional structural alterations with motor and cognitive clinical scores",
      "Characterize subcortical biomarkers specific to under-represented African cohorts"
    ],
    methodology: "Structural 1.5T/3T MRI, FSL FIRST segmentation, FreeSurfer subcortical pipeline, GLM statistical modeling.",
    impact: "Provides essential population-specific baseline data for neurodegenerative diagnostic algorithms in West African populations."
  },
  {
    title: "Volumetric Assessment of Individual Thalamic Nuclei in Nigerian Parkinson's Cohorts",
    category: "Subcortical Morphometry",
    badgeColor: "text-indigo-300 bg-indigo-500/10 border-indigo-500/20",
    description: "High-resolution segmentation of discrete thalamic sub-nuclei (pulvinar, ventral intermediate, mediodorsal) to evaluate focal volume degradation and disease severity correlations.",
    objectives: [
      "Quantify volume changes in specific thalamic sub-nuclei",
      "Establish correlations between nucleus volume loss and disease progression",
      "Benchmark regional measurements against international normative reference datasets"
    ],
    methodology: "Automated sub-nuclear parcellation, Bayesian segmentation algorithms, regression modeling.",
    impact: "Identifies candidate structural markers for early-stage neurodegenerative differentiation."
  },
  {
    title: "Cross-Cultural Behavioral Analysis of Screen Time and Social Connectivity",
    category: "Behavioral & Social Neuroscience",
    badgeColor: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
    description: "A cross-cultural study evaluating the impact of digital screen time on interpersonal relationships, sleep quality, and psychological well-being between German and Nigerian cohorts.",
    objectives: [
      "Analyze cross-cultural patterns of technology and mobile screen usage",
      "Assess associations between digital engagement and self-reported social connectivity metrics",
      "Identify cultural mediators influencing digital habit formation"
    ],
    methodology: "Mixed-methods psychometric assessment, digital tracking metrics, multivariate statistical analysis.",
    impact: "Contributes cross-cultural data to international digital health and behavioral neuroscience frameworks."
  }
];

const researchDomains = [
  {
    title: "Computational Neuroimaging",
    icon: FaBrain,
    description: "Structural and functional MRI analysis, brain morphometry, volumetric profiling, and automated segmentation pipelines for neurodegenerative conditions.",
    methods: ["Structural & functional MRI", "Subcortical nuclei segmentation", "Cortical thickness modeling", "Artifact correction & QC"]
  },
  {
    title: "Medical AI & Robustness",
    icon: FaChartLine,
    description: "Developing and validating explainable deep learning models on real-world clinical scans, with an emphasis on low-field robustness and calibration.",
    methods: ["MONAI & PyTorch architectures", "Attribution stability (Grad-CAM, SHAP)", "Calibration error (ECE)", "Domain generalization"]
  },
  {
    title: "FAIR Research Infrastructure",
    icon: FaDatabase,
    description: "Designing open data ecosystems, BIDS-compliant curation pipelines, and reproducible scientific software for neuroscience research in low-resource settings.",
    methods: ["BIDS dataset curation", "FAIR metadata schemas", "Dockerized analysis pipelines", "Open-access data governance"]
  }
];

export default function Research() {
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
            <FaFlask className="text-xl" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Research Programs & Studies
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Computational neuroimaging, brain morphometry, and clinical AI validation
            </p>
          </div>
        </div>

        <div className="bg-[#0F172A]/80 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
            My research combines computational neuroscience with robust software engineering to study brain morphology, disease biomarkers, and medical imaging AI.
          </p>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            By investigating neurodegenerative changes in under-represented African populations and developing reproducible imaging workflows, my research aims to make neuroimaging diagnostics more equitable and methodologically sound.
          </p>
        </div>
      </motion.div>

      {/* 2. RESEARCH DOMAINS */}
      <motion.section variants={fadeInUp} className="space-y-6">
        <div className="border-b border-white/10 pb-3">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-1">
            Domains
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Core Research Themes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchDomains.map((domain, index) => {
            const DIcon = domain.icon;
            return (
              <div
                key={index}
                className="bg-[#0F172A]/70 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="p-2.5 rounded-xl bg-white/5 text-sky-400 w-fit border border-white/5">
                    <DIcon className="text-xl" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {domain.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Key Methods:</span>
                  {domain.methods.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* 3. ACTIVE STUDIES */}
      <motion.section variants={fadeInUp} className="space-y-6">
        <div className="border-b border-white/10 pb-3 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block mb-1">
              Active Investigations
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ongoing Clinical & Methodological Studies
            </h2>
          </div>
          <Link
            href="/publications"
            className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors"
          >
            <span>Published Work</span>
            <FaArrowRight className="text-[10px]" />
          </Link>
        </div>

        <div className="space-y-6">
          {ongoingStudies.map((study, index) => (
            <div
              key={index}
              className="bg-[#0F172A]/80 rounded-2xl p-6 sm:p-7 border border-white/10 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${study.badgeColor} w-fit`}>
                  {study.category}
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 w-fit">
                  Active Study
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {study.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {study.description}
                </p>
              </div>

              {/* Objectives & Impact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-white/5">
                <div className="bg-[#141E33]/60 p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider block">
                    Objectives:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {study.objectives.map((obj, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2">
                        <FaCheckCircle className="text-sky-400 text-[10px] mt-1 shrink-0" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#141E33]/60 p-4 rounded-xl border border-white/5 space-y-3">
                  <div>
                    <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider block">
                      Methodology:
                    </span>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{study.methodology}</p>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                      Expected Scientific Impact:
                    </span>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{study.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
