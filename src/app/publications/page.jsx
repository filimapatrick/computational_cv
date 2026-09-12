'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaBook,
  FaNewspaper,
  FaExternalLinkAlt,
  FaMicrophone,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLayerGroup,
  FaGlobe,
  FaArrowRight,
  FaAward
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

const publications = [
  {
    year: '2026',
    monthYear: 'June 2026',
    type: 'Journal Article',
    category: 'Neuroscience & Data Governance',
    title: 'Who Owns African Brain Data? Reclaiming Control, Value, and Responsibility in Africa’s Brain Data Future',
    authors: 'Damian Eke, Olivia P Matshabane, Alfred K Njamnshi, Amadi O Ihunwo, Patrick Leo Filima, et al.',
    journal: 'Frontiers in Neuroinformatics / ABDN Initiative',
    highlightBadge: 'Frontiers in Neuroinformatics'
  },
  {
    year: '2025',
    monthYear: 'October 2025',
    type: 'Conference Poster',
    category: 'Neuroimaging & Cloud Computing',
    title: 'CURE Neuroscience Collaboration across the Atlantic: Bridging the Atlantic with Undergraduate Research and Cloud Computing (Analysis of Brain Volumetric Differences in ADHD)',
    authors: 'Abdularahman Aljifareri, Khadija Alrabiey, Nathaniel Brownlee, Franco Delogu, Patrick Leo Filima, et al.',
    journal: 'Neuroscience Society of Nigeria Annual Conference'
  },
  {
    year: '2025',
    monthYear: 'August 2025',
    type: 'Journal Article',
    category: 'Anthropometry',
    title: 'Application of Linear Anthropometric Parameters in Estimating Stature: A Study of Adult Igbo Population in Nigeria',
    authors: 'Faustina Chiamaka Irozulike, Doris K. Ogbuokiri, Tobi Boma Selekekeme, Amobichukwu Ezeorachi, Patrick Leo Filima, et al.',
    journal: 'Journal of Anthropometric Research'
  },
  {
    year: '2025',
    monthYear: 'March 2025',
    type: 'Dataset & Paper',
    category: 'Neuroscience & Open Data',
    title: 'A labeled Clinical-MRI dataset of Nigerian brains',
    authors: 'Eberechi Wogu, Patrick Leo Filima, Brad Caron, Franco Pestilli, et al.',
    journal: 'Scientific Data (Nature Portfolio), dx.doi:2211.04425(v1)',
    highlightBadge: 'Nature Scientific Data'
  },
  {
    year: '2025',
    monthYear: 'March 2025',
    type: 'Journal Article',
    category: 'Neuroinformatics',
    title: 'FAIR African brain data: challenges and opportunities',
    authors: 'Eberechi Wogu, George Inyila Ogoh, Patrick Leo Filima, Damian Eke, et al.',
    journal: 'Frontiers in Neuroinformatics',
    highlightBadge: 'Frontiers in Neuroinformatics'
  },
  {
    year: '2025',
    monthYear: 'February 2025',
    type: 'Journal Article',
    category: 'Medical Research',
    title: 'Anthropometric Health Assessment of the Igbo Ethnic Group in Nigeria: A Study of BMI and Waist-to-Hip Ratio',
    authors: 'Faustina Chiamaka Irozulike, Jervas Ekezie, Kelechi Peace Godson, Patrick Leo Filima, et al.',
    journal: 'Asian Journal of Medical Principles and Clinical Practice'
  },
  {
    year: '2024',
    monthYear: 'December 2024',
    type: 'Journal Article',
    category: 'Forensic Research',
    title: 'Assessment of Earlobe Patterns and Ear Shapes in Hausa Ethnic Group of Nigeria: Implications for Forensic and Clinical Applications',
    authors: 'Faustina Chiamaka Irozulike, Gospel Uchechukwu Collins, Nwofor Priscilla Nkechinyere, Tobi Boma Selekekeme, Patrick Leo Filima, et al.',
    journal: 'Journal of Forensic & Clinical Research'
  },
  {
    year: '2024',
    monthYear: 'November 2024',
    type: 'Journal Article',
    category: 'Anthropometry',
    title: 'Anthropometric Analysis of Cephalic Index in Orlu Population of Imo State, Nigeria',
    authors: 'Faustina Chiamaka Irozulike, Patrick Leo Filima, Joy Wilberforce Ekokodje, Nicholas Asiwe, et al.',
    journal: 'Journal of Anthropometry'
  },
  {
    year: '2024',
    monthYear: 'November 2024',
    type: 'Journal Article',
    category: 'Medical Research',
    title: 'Knowledge, Attitudes, and Perceptions of Cesarean Section Among Women in Delta State, Nigeria: Implications for Maternal Health Interventions',
    authors: 'Rosemary Ewere Iwegbu, Faustina Chiamaka Irozulike, Nicholas Asiwe, Patrick Leo Filima, et al.',
    journal: 'Journal of Maternal Health'
  },
  {
    year: '2024',
    monthYear: 'June 2024',
    type: 'Journal Article',
    category: 'Neuroscience',
    title: 'Thalamic Nuclei Morphometry and Handedness: Assessing Grey Matter Volume Differences in Left- and Right-Dominant Individuals',
    authors: 'Eberechi Wogu, Patrick Leo Filima',
    journal: 'Nigerian Journal of Neuroscience, 15(1):22-27'
  },
  {
    year: '2024',
    monthYear: 'June 2024',
    type: 'Journal Article',
    category: 'Forensic Anthropometry',
    title: 'Discriminant and Multiple Linear Regression Analysis for Sex and Stature Estimation Using Upper Arm and Forearm-Hand Length: A Study among Mgbidi Population of Imo State Nigeria',
    authors: 'Nicholas Asiwe, Oghenefego Michael Adheke, Ikechukwu Ezeah, Victor Buseni, Patrick Leo Filima, et al.',
    journal: 'Asian Journal of Medical Principles and Clinical Practice'
  },
  {
    year: '2024',
    monthYear: 'June 2024',
    type: 'Journal Article',
    category: 'Anthropometry',
    title: 'Anthropometric Estimation of Biological Parameters in Nigerian Sub-Populations',
    authors: 'Nicholas Asiwe, Oghenefego Michael Adheke, Ikechukwu Ezeah, Victor Buseni, Patrick Leo Filima, et al.',
    journal: 'Asian Journal of Medical Principles and Clinical Practice'
  },
  {
    year: '2024',
    monthYear: 'January 2024',
    type: 'Journal Article',
    category: 'Medical Research',
    title: 'Comparative Morphometric Analysis of Physical Attributes in Nigerian Sub-Populations',
    authors: 'Faustina Chiamaka Irozulike, Patrick Leo Filima, Joy Wilberforce Ekokodje, Nicholas Asiwe, et al.',
    journal: 'Asian Journal of Medical Principles and Clinical Practice'
  },
  {
    year: '2023',
    monthYear: 'November 2023',
    type: 'Journal Article',
    category: 'Medical Research',
    title: 'Prevalence of Dysmenorrhea and its Management among Undergraduate Students of the University of Port Harcourt, Nigeria',
    authors: 'Faustina Chiamaka Irozulike, Nicholas Asiwe, Joy Wilberforce Ekokodje, Patrick Leo Filima, et al.',
    journal: 'Asian Journal of Advanced Research and Reports'
  },
  {
    year: '2023',
    monthYear: 'November 2023',
    type: 'Journal Article',
    category: 'Anthropometry',
    title: 'Pattern of Earlobe Attachment among Igbo Ethnic Group of Nigeria',
    authors: 'Nicholas Asiwe, Faustina Chiamaka Irozulike, Patrick Leo Filima, Bariereyiga Nadum Yirate, et al.',
    journal: 'Asian Journal of Advanced Research and Reports'
  },
  {
    year: '2019',
    monthYear: 'December 2019',
    type: 'Journal Article',
    category: 'Neuroscience',
    title: 'Neuroprotective effect of aqueous extract of xylopia aethiopica seed on lead-induced injury on the hippocampus and cerebral cortex of male wistar rat',
    authors: 'S. George, Patrick Leo Filima, Lekpa Kingdom David, Chinna Orish',
    journal: 'IBRO Reports'
  }
];

const talksAndPresentations = [
  {
    year: '2026',
    title: 'EEG Monitoring, Live Neurofeedback & Brain-Computer Interfaces (BCI) in Low-Resource Settings',
    event: 'Brain Awareness Week (BAW 2026) — African Neurodata Research Lab (ANR Lab)',
    location: 'University of Port Harcourt, Nigeria (March 27, 2026)',
    role: 'Keynote Speaker & Live Demonstration Lead',
    type: 'Keynote & Live Demo',
    badgeColor: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20',
    image: '/talks/ANR_BAW.png',
    description: 'Delivered an invited keynote presentation and live EEG signal demonstration exploring real-time neurofeedback and Brain-Computer Interface (BCI) device translation in Sub-Saharan African healthcare settings.',
    topics: ['Brain-Computer Interfaces (BCI)', 'EEG Monitoring', 'Live Neurofeedback', 'ANR Lab UniPort', 'BAW 2026']
  },
  {
    year: '2025',
    title: 'Python for Neuroimaging Data Analysis: Loading, Inspecting & Visualizing MRI Data',
    event: 'African Brain Data Network (ABDN) Workshop — Lagos 2025',
    location: 'Lagos, Nigeria',
    role: 'Lead Technical Instructor',
    type: 'Technical Workshop',
    badgeColor: 'text-sky-300 bg-sky-500/10 border-sky-500/20',
    image: '/talks/lagos_2025.png',
    description: 'Hands-on technical training for African Brain Data Network participants on loading NIfTI neuroimaging data with Nibabel, manipulating multi-dimensional MRI arrays in NumPy, and implementing 3D visualization strategies.',
    topics: ['Scientific Python', 'Nibabel & NumPy', 'MRI Inspection', 'Neuroimaging Data']
  },
  {
    year: '2024',
    title: 'Introduction to Scientific Python for Neuroimaging Workflows',
    event: 'African Brain Data Network (ABDN) Workshop — Kenya 2024',
    location: 'Kenya (Dec 2024)',
    role: 'Technical Instructor',
    type: 'International Workshop',
    badgeColor: 'text-purple-300 bg-purple-500/10 border-purple-500/20',
    image: '/talks/kenya_2024.jpg',
    description: 'Practical training on core Python scientific libraries (NumPy, SciPy, Matplotlib), automated pipeline scripting, and containerized computational environments.',
    topics: ['Scientific Python', 'Neuroinformatics', 'Workflow Automation', 'ABDN Kenya']
  },
  {
    year: '2024',
    title: 'Software Tools in Neuroimaging: Empowering African Youths in Research',
    event: 'ABDN Brain Awareness Week 2024 — Ignatius Ajuru University',
    location: 'Port Harcourt, Nigeria (March 22, 2024)',
    role: 'Invited Speaker & Panelist',
    type: 'Symposium Lecture',
    badgeColor: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
    image: '/talks/ignatius_ajuru_2024.jpg',
    description: 'Invited lecture to Computer Science faculty and students on modern neuroimaging toolchains, open-source scientific software, and computational research pathways.',
    topics: ['Software Tools', 'Neuroimaging Research', 'Computer Science', 'Open Science']
  },
  {
    year: '2024',
    title: 'African Brain Data Infrastructure & FAIR Principles: Built for Rigor, Ready for Reuse',
    event: 'African Brain Data Network (ABDN) Regional Symposium',
    location: 'Virtual / Regional Summit',
    role: 'Keynote Speaker',
    type: 'Keynote Talk',
    badgeColor: 'text-amber-300 bg-amber-500/10 border-amber-500/20',
    image: '/talks/african_brain_data_fair.jpg',
    description: 'Presented strategic architectures for establishing open African brain data repositories adhering to FAIR principles (Findable, Accessible, Interoperable, Reusable) and BIDS standards.',
    topics: ['FAIR Data Principles', 'BIDS Architecture', 'Data Governance', 'Open Science']
  }
];

const mainTabs = [
  { id: 'all', label: 'All Scholarly Output', icon: FaLayerGroup },
  { id: 'publications', label: 'Peer-Reviewed Articles', icon: FaNewspaper, count: publications.length },
  { id: 'talks', label: 'Keynotes & Workshops', icon: FaMicrophone, count: talksAndPresentations.length }
];

export default function Publications() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedYear, setSelectedYear] = useState('All');

  const filteredPublications = publications.filter(pub =>
    selectedYear === 'All' || pub.year === selectedYear
  );

  const filteredTalks = talksAndPresentations.filter(talk =>
    selectedYear === 'All' || talk.year === selectedYear
  );

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
            <FaBook className="text-xl" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Publications, Datasets & Talks
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Peer-reviewed papers in Nature Scientific Data, Frontiers in Neuroinformatics, and international workshops
            </p>
          </div>
        </div>

        <div className="bg-[#0F172A]/80 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
            Scholarly publications spanning computational neuroscience, FAIR neuroinformatics datasets, brain morphometry, and clinical research.
          </p>
          <div className="flex flex-wrap gap-2 pt-1 text-xs">
            <span className="bg-sky-500/10 text-sky-300 px-3 py-1 rounded-md border border-sky-500/20 font-semibold">
              16 Peer-Reviewed Items
            </span>
            <span className="bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-md border border-indigo-500/20 font-semibold">
              Nature Scientific Data
            </span>
            <span className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-md border border-purple-500/20 font-semibold">
              Frontiers in Neuroinformatics
            </span>
            <span className="bg-emerald-500/10 text-emerald-300 px-3 py-1 rounded-md border border-emerald-500/20 font-semibold">
              5 Invited Keynotes & Workshops
            </span>
          </div>
        </div>
      </motion.div>

      {/* 2. TABS & YEAR FILTER */}
      <motion.div variants={fadeInUp} className="space-y-3">
        <div className="flex items-center gap-2 p-1 bg-[#0F172A] rounded-xl border border-white/10 overflow-x-auto">
          {mainTabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                  isActive
                    ? 'bg-sky-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <TabIcon className={isActive ? 'text-slate-950' : 'text-slate-400'} />
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                    isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-white/10 text-slate-400'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Year Filter */}
        <div className="flex items-center gap-2 text-xs text-slate-400 pt-1 flex-wrap">
          <span className="font-semibold uppercase tracking-wider text-[11px]">Filter Year:</span>
          {['All', '2026', '2025', '2024', '2023', '2019'].map((yr) => (
            <button
              key={yr}
              onClick={() => setSelectedYear(yr)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                selectedYear === yr
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                  : 'bg-[#0F172A] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {yr}
            </button>
          ))}
        </div>
      </motion.div>

      {/* 3. PEER-REVIEWED ARTICLES */}
      {(activeTab === 'all' || activeTab === 'publications') && (
        <motion.section variants={fadeInUp} className="space-y-6">
          <div className="border-b border-white/10 pb-2 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FaNewspaper className="text-sky-400 text-base" />
              Peer-Reviewed Publications ({filteredPublications.length})
            </h2>
          </div>

          <div className="space-y-4">
            {filteredPublications.map((pub, index) => (
              <div
                key={index}
                className="bg-[#0F172A]/80 rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-white/20 transition-all space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/5 text-slate-300 border border-white/10">
                      {pub.type} • {pub.category}
                    </span>
                    {pub.highlightBadge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-sky-500/15 text-sky-300 border border-sky-500/30">
                        {pub.highlightBadge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    {pub.monthYear}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    {pub.authors}
                  </p>
                  <p className="text-xs text-sky-400 font-semibold pt-0.5">
                    {pub.journal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* 4. KEYNOTES, TALKS & WORKSHOPS */}
      {(activeTab === 'all' || activeTab === 'talks') && (
        <motion.section variants={fadeInUp} className="space-y-6">
          <div className="border-b border-white/10 pb-2">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FaMicrophone className="text-indigo-400 text-base" />
              Invited Talks, Keynotes & Workshops ({filteredTalks.length})
            </h2>
          </div>

          <div className="space-y-6">
            {filteredTalks.map((talk, index) => (
              <div
                key={index}
                className="bg-[#0F172A]/80 rounded-2xl p-6 border border-white/10 space-y-5"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Photo Container */}
                  <div className="lg:col-span-5 relative w-full h-[240px] sm:h-[280px] rounded-xl overflow-hidden border border-white/10 bg-[#0B1120] flex items-center justify-center p-2">
                    <Image
                      src={talk.image}
                      alt={talk.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-contain"
                    />
                    <span className="absolute bottom-2 left-2 bg-[#0F172A]/90 text-sky-300 px-2.5 py-0.5 rounded text-[11px] font-mono border border-white/10">
                      {talk.year}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-7 space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${talk.badgeColor}`}>
                          {talk.type}
                        </span>
                        <span className="text-xs text-slate-300 font-medium">
                          {talk.role}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {talk.title}
                      </h3>
                      <p className="text-xs font-semibold text-indigo-300">
                        {talk.event}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-sky-400" />
                        {talk.location}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed bg-[#141E33]/50 p-3.5 rounded-xl border border-white/5">
                      {talk.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {talk.topics.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-[#141E33] text-slate-300 px-2 py-0.5 rounded text-[11px] border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </motion.section>
      )}
    </motion.div>
  );
}