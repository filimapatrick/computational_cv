'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  FaArrowLeft, 
  FaFlask, 
  FaDatabase, 
  FaMicrochip, 
  FaChartLine, 
  FaTerminal, 
  FaCheckCircle, 
  FaExclamationTriangle, 
  FaCode, 
  FaBook,
  FaGithub,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { projectsData } from '@/data/projectsData';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function ProjectDetail({ params }) {
  const resolvedParams = use(params);
  const project = projectsData.find(p => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      className="mx-auto max-w-5xl space-y-12 pb-20"
    >
      {/* Back Button */}
      <div>
        <Link 
          href="/experience#projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900/80 text-gray-300 hover:text-white hover:bg-gray-800 border border-gray-800 text-xs font-semibold transition-all"
        >
          <FaArrowLeft className="text-cyan-400" />
          <span>Back to Projects & Experience</span>
        </Link>
      </div>

      {/* Header Banner */}
      <div className="bg-gradient-to-br from-gray-900 via-purple-950/40 to-blue-950/50 p-8 sm:p-10 rounded-3xl border border-purple-800/40 shadow-2xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-950/80 text-purple-300 border border-purple-800/50">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800/50">
              {project.status}
            </span>
          </div>

          {project.license && (
            <span className="text-xs font-mono text-gray-400 bg-gray-900/90 px-3 py-1 rounded-md border border-gray-800">
              License: {project.license}
            </span>
          )}
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl font-medium text-purple-300 leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-purple-900/40">
          {project.techStack.map((tech, idx) => (
            <span 
              key={idx}
              className="bg-gray-900/90 text-cyan-300 px-3 py-1 rounded-lg text-xs font-medium border border-gray-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CORE THESIS / SUMMARY BOX */}
      {project.summary && (
        <div className="bg-gray-900/90 p-6 sm:p-8 rounded-2xl border border-gray-800 space-y-3">
          <div className="flex items-center gap-2 text-purple-400 font-bold text-sm uppercase tracking-wider">
            <FaFlask />
            <span>Core Thesis & Problem Statement</span>
          </div>
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
            {project.summary} Most neuroimaging AI systems are developed on highly curated, high-field research scanners. Their behavior under low-resource, heterogeneous clinical MRI constraints remains poorly characterized. This project systematically measures model robustness, calibration, and explainability under physical MRI quality degradation.
          </p>
        </div>
      )}

      {/* DATASET SPECIFICATIONS */}
      {project.datasetSpecs && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 pb-2 border-b border-gray-800">
            <FaDatabase className="text-2xl text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">Dataset Specifications & Modality Coverage</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/80 p-5 rounded-2xl border border-gray-800 space-y-2">
              <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Cohort</span>
              <p className="text-sm font-bold text-white">{project.datasetSpecs.subjects}</p>
            </div>
            <div className="bg-gray-900/80 p-5 rounded-2xl border border-gray-800 space-y-2">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Scans</span>
              <p className="text-sm font-bold text-white">{project.datasetSpecs.scans}</p>
            </div>
            <div className="bg-gray-900/80 p-5 rounded-2xl border border-gray-800 space-y-2">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Scanner Environment</span>
              <p className="text-sm font-bold text-white">{project.datasetSpecs.heterogeneity}</p>
            </div>
          </div>

          {/* Modality Availability Table */}
          {project.modalityAvailability && (
            <div className="bg-gray-900/90 rounded-2xl border border-gray-800 overflow-hidden shadow-xl">
              <div className="p-4 bg-gray-950 border-b border-gray-800 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">Sequence / Combination</span>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Available Subjects (%)</span>
              </div>
              <div className="divide-y divide-gray-800/60 text-xs sm:text-sm">
                {project.modalityAvailability.map((row, rIdx) => (
                  <div key={rIdx} className="p-4 flex justify-between items-center hover:bg-gray-800/40">
                    <span className="font-mono font-semibold text-purple-300">{row.sequence}</span>
                    <span className="font-semibold text-white">{row.subjects} subjects ({row.percentage})</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* CLINICAL EVALUATION TASKS */}
      {project.tasks && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 pb-2 border-b border-gray-800">
            <FaMicrochip className="text-2xl text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Multi-Task Clinical Benchmarks</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.tasks.map((task, tIdx) => (
              <div key={tIdx} className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-6 rounded-2xl border border-gray-700/70 space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-400 text-sm" />
                  {task.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{task.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PHYSICAL MRI DEGRADATIONS */}
      {project.degradations && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 pb-2 border-b border-gray-800">
            <FaExclamationTriangle className="text-2xl text-amber-400" />
            <h2 className="text-2xl font-bold text-white">Controlled Physical Degradation Axes (L0 → L3)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.degradations.map((deg, dIdx) => (
              <div key={dIdx} className="bg-gray-900/90 p-6 rounded-2xl border border-gray-800 space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">{deg.type}</span>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{deg.physics}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* RADIOMICS BENCHMARK FINDINGS */}
      {project.radiomicsResults && (
        <section className="space-y-6">
          <div className="flex items-center gap-3 pb-2 border-b border-gray-800">
            <FaChartLine className="text-2xl text-emerald-400" />
            <h2 className="text-2xl font-bold text-white">Phase 3A Radiomics Robustness Benchmark Results</h2>
          </div>

          <div className="bg-gray-900/90 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-12 p-4 bg-gray-950 text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-800">
              <div className="col-span-4">Corruption Tier</div>
              <div className="col-span-3 text-center">Macro F1</div>
              <div className="col-span-2 text-center">RRI</div>
              <div className="col-span-3 text-right">Impact</div>
            </div>
            <div className="divide-y divide-gray-800 text-xs sm:text-sm">
              {project.radiomicsResults.map((res, idx) => (
                <div key={idx} className="grid grid-cols-12 p-4 items-center hover:bg-gray-800/40">
                  <div className="col-span-4 font-semibold text-white">{res.tier}</div>
                  <div className="col-span-3 text-center font-mono font-bold text-cyan-300">{res.f1}</div>
                  <div className="col-span-2 text-center font-mono font-bold text-purple-300">{res.rri}</div>
                  <div className="col-span-3 text-right text-gray-300 font-medium">{res.impact}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* REPOSITORY ARCHITECTURE & COMMANDS */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 pb-2 border-b border-gray-800">
          <FaTerminal className="text-2xl text-purple-400" />
          <h2 className="text-2xl font-bold text-white">Execution Commands & Pipeline Workflow</h2>
        </div>

        <div className="bg-gray-950 p-6 rounded-2xl border border-gray-800 font-mono text-xs text-gray-300 space-y-4 shadow-2xl overflow-x-auto">
          <div>
            <span className="text-gray-500"># 1. Train MONAI 3D DenseNet-121 Benchmark:</span>
            <div className="text-cyan-300 pt-1">
              python src/models/cnn.py --model densenet121 --task task4 --epochs 50 --batch_size 4 --out_dir ./checkpoints/densenet
            </div>
          </div>

          <div>
            <span className="text-gray-500"># 2. Evaluate Degradation Robustness & RRI Metrics:</span>
            <div className="text-cyan-300 pt-1">
              python src/evaluation/metrics.py --evaluate_robustness --model_dir ./checkpoints/ --out_dir ./results/
            </div>
          </div>

          <div>
            <span className="text-gray-500"># 3. Generate Grad-CAM Explainability Heatmaps under Perturbation:</span>
            <div className="text-cyan-300 pt-1">
              python src/evaluation/explain.py --model_path ./checkpoints/densenet/best.pth --method gradcam --out_dir ./results/explanations/
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
