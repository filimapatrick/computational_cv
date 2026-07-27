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
  FaChalkboardTeacher, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaGlobe,
  FaLayerGroup,
  FaChartLine,
  FaAward,
  FaFlask,
  FaArrowRight
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

const publications = [
  {
    year: '2026',
    monthYear: 'June 2026',
    type: 'Journal Article',
    category: 'Neuroscience & Data Governance',
    title: 'Who Owns African Brain Data? Reclaiming Control, Value, and Responsibility in Africa’s Brain Data Future',
    authors: 'Damian Eke, Olivia P Matshabane, Alfred K Njamnshi, Amadi O Ihunwo, Patrick Leo Filima, et al.',
    journal: 'Frontiers in Neuroinformatics / ABDN Initiative',
    links: [{ type: 'Journal Article', url: '#' }, { type: 'DOI', url: '#' }]
  },
  {
    year: '2025',
    monthYear: 'October 2025',
    type: 'Conference Poster',
    category: 'Neuroimaging & Cloud Computing',
    title: 'CURE Neuroscience Collaboration across the Atlantic: Bridging the Atlantic with Undergraduate Research and Cloud Computing (Analysis of Brain Volumetric Differences in ADHD)',
    authors: 'Abdularahman Aljifareri, Khadija Alrabiey, Nathaniel Brownlee, Franco Delogu, Patrick Leo Filima, et al.',
    journal: 'Neuroscience Society of Nigeria Annual Conference',
    links: [{ type: 'Poster', url: '#' }, { type: 'Abstract', url: '#' }]
  },
  {
    year: '2025',
    monthYear: 'August 2025',
    type: 'Journal Article',
    category: 'Anthropometry',
    title: 'Application of Linear Anthropometric Parameters in Estimating Stature: A Study of Adult Igbo Population in Nigeria',
    authors: 'Faustina Chiamaka Irozulike, Doris K. Ogbuokiri, Tobi Boma Selekekeme, Amobichukwu Ezeorachi, Patrick Leo Filima, et al.',
    journal: 'Journal of Anthropometric Research',
    links: [{ type: 'Journal Article', url: '#' }]
  },
  {
    year: '2025',
    monthYear: 'March 2025',
    type: 'Dataset & Paper',
    category: 'Neuroscience',
    title: 'A labeled Clinical-MRI dataset of Nigerian brains',
    authors: 'Eberechi Wogu, Patrick Leo Filima, Brad Caron, Franco Pestilli, et al.',
    journal: 'Scientific Data (Nature Portfolio), dx.doi:2211.04425(v1)',
    links: [{ type: 'Nature Scientific Data', url: '#' }, { type: 'DOI', url: '#' }]
  },
  {
    year: '2025',
    monthYear: 'March 2025',
    type: 'Journal Article',
    category: 'Neuroinformatics',
    title: 'FAIR African brain data: challenges and opportunities',
    authors: 'Eberechi Wogu, George Inyila Ogoh, Patrick Leo Filima, Damian Eke, et al.',
    journal: 'Frontiers in Neuroinformatics',
    links: [{ type: 'Frontiers Article', url: '#' }, { type: 'DOI', url: '#' }]
  },
  {
    year: '2025',
    monthYear: 'February 2025',
    type: 'Journal Article',
    category: 'Medical Research',
    title: 'Anthropometric Health Assessment of the Igbo Ethnic Group in Nigeria: A Study of BMI and Waist-to-Hip Ratio',
    authors: 'Faustina Chiamaka Irozulike, Jervas Ekezie, Kelechi Peace Godson, Patrick Leo Filima, et al.',
    journal: 'Asian Journal of Medical Principles and Clinical Practice',
    links: [{ type: 'Journal Article', url: '#' }]
  },
  {
    year: '2024',
    monthYear: 'December 2024',
    type: 'Journal Article',
    category: 'Forensic Research',
    title: 'Assessment of Earlobe Patterns and Ear Shapes in Hausa Ethnic Group of Nigeria: Implications for Forensic and Clinical Applications',
    authors: 'Faustina Chiamaka Irozulike, Gospel Uchechukwu Collins, Nwofor Priscilla Nkechinyere, Tobi Boma Selekekeme, Patrick Leo Filima, et al.',
    journal: 'Journal of Forensic & Clinical Research',
    links: [{ type: 'Journal Article', url: '#' }]
  },
  {
    year: '2024',
    monthYear: 'November 2024',
    type: 'Journal Article',
    category: 'Anthropometry',
    title: 'Anthropometric Analysis of Cephalic Index in Orlu Population of Imo State, Nigeria',
    authors: 'Faustina Chiamaka Irozulike, Patrick Leo Filima, Joy Wilberforce Ekokodje, Nicholas Asiwe, et al.',
    journal: 'Journal of Anthropometry',
    links: [{ type: 'Journal Article', url: '#' }]
  },
  {
    year: '2024',
    monthYear: 'November 2024',
    type: 'Journal Article',
    category: 'Medical Research',
    title: 'Knowledge, Attitudes, and Perceptions of Cesarean Section Among Women in Delta State, Nigeria: Implications for Maternal Health Interventions',
    authors: 'Rosemary Ewere Iwegbu, Faustina Chiamaka Irozulike, Nicholas Asiwe, Patrick Leo Filima, et al.',
    journal: 'Journal of Maternal Health',
    links: [{ type: 'Journal Article', url: '#' }]
  },
  {
    year: '2024',
    monthYear: 'June 2024',
    type: 'Journal Article',
    category: 'Neuroscience',
    title: 'Thalamic Nuclei Morphometry and Handedness: Assessing Grey Matter Volume Differences in Left- and Right-Dominant Individuals',
    authors: 'Eberechi Wogu, Patrick Leo Filima',
    journal: 'Nigerian Journal of Neuroscience, 15(1):22-27',
    links: [{ type: 'Journal Article', url: '#' }, { type: 'DOI', url: '#' }]
  },
  {
    year: '2024',
    monthYear: 'June 2024',
    type: 'Journal Article',
    category: 'Forensic Anthropometry',
    title: 'Discriminant and Multiple Linear Regression Analysis for Sex and Stature Estimation Using Upper Arm and Forearm-Hand Length: A Study among Mgbidi Population of Imo State Nigeria',
    authors: 'Nicholas Asiwe, Oghenefego Michael Adheke, Ikechukwu Ezeah, Victor Buseni, Patrick Leo Filima, et al.',
    journal: 'Asian Journal of Medical Principles and Clinical Practice',
    links: [{ type: 'Journal Article', url: '#' }]
  },
  {
    year: '2024',
    monthYear: 'June 2024',
    type: 'Journal Article',
    category: 'Anthropometry',
    title: 'Anthropometric Estimation of Biological Parameters in Nigerian Sub-Populations',
    authors: 'Nicholas Asiwe, Oghenefego Michael Adheke, Ikechukwu Ezeah, Victor Buseni, Patrick Leo Filima, et al.',
    journal: 'Asian Journal of Medical Principles and Clinical Practice',
    links: [{ type: 'Journal Article', url: '#' }]
  },
  {
    year: '2024',
    monthYear: 'January 2024',
    type: 'Journal Article',
    category: 'Medical Research',
    title: 'Comparative Morphometric Analysis of Physical Attributes in Nigerian Sub-Populations',
    authors: 'Faustina Chiamaka Irozulike, Patrick Leo Filima, Joy Wilberforce Ekokodje, Nicholas Asiwe, et al.',
    journal: 'Asian Journal of Medical Principles and Clinical Practice',
    links: [{ type: 'Journal Article', url: '#' }]
  },
  {
    year: '2023',
    monthYear: 'November 2023',
    type: 'Journal Article',
    category: 'Medical Research',
    title: 'Prevalence of Dysmenorrhea and its Management among Undergraduate Students of the University of Port Harcourt, Nigeria',
    authors: 'Faustina Chiamaka Irozulike, Nicholas Asiwe, Joy Wilberforce Ekokodje, Patrick Leo Filima, et al.',
    journal: 'Asian Journal of Advanced Research and Reports',
    links: [{ type: 'Journal Article', url: '#' }]
  },
  {
    year: '2023',
    monthYear: 'November 2023',
    type: 'Journal Article',
    category: 'Anthropometry',
    title: 'Pattern of Earlobe Attachment among Igbo Ethnic Group of Nigeria',
    authors: 'Nicholas Asiwe, Faustina Chiamaka Irozulike, Patrick Leo Filima, Bariereyiga Nadum Yirate, et al.',
    journal: 'Asian Journal of Advanced Research and Reports',
    links: [{ type: 'Journal Article', url: '#' }]
  },
  {
    year: '2019',
    monthYear: 'December 2019',
    type: 'Journal Article',
    category: 'Neuroscience',
    title: 'Neuroprotective effect of aqueous extract of xylopia aethiopica seed on lead-induced injury on the hippocampus and cerebral cortex of male wistar rat',
    authors: 'S. George, Patrick Leo Filima, Lekpa Kingdom David, Chinna Orish',
    journal: 'IBRO Reports',
    links: [{ type: 'Journal Article', url: '#' }, { type: 'DOI', url: '#' }]
  }
];

const talksAndPresentations = [
  {
    year: '2025',
    title: 'Python for Neuroimaging Data Analysis: Loading, Inspecting & Visualizing MRI Data',
    event: 'African Brain Data Network (ABDN) Workshop — Lagos 2025',
    location: 'Lagos, Nigeria',
    role: 'Lead Instructor & Speaker',
    type: 'Hands-on Workshop',
    badgeColor: 'from-blue-500/20 to-cyan-500/20 text-cyan-300 border-cyan-500/30',
    image: '/talks/lagos_2025.png',
    description: 'Practical training for African Brain Data Network participants on loading NIfTI neuroimaging data using Nibabel, inspecting multi-dimensional MRI arrays with NumPy, and building interactive visualization strategies.',
    topics: ['Python', 'Nibabel & NumPy', 'MRI Inspection', 'Neuroimaging Data']
  },
  {
    year: '2024',
    title: 'Introduction to Scientific Python for Neuroimaging Workflows',
    event: 'African Brain Data Network (ABDN) Workshop — Kenya 2024',
    location: 'Kenya (Dec 2024)',
    role: 'Technical Instructor',
    type: 'International Workshop',
    badgeColor: 'from-purple-500/20 to-indigo-500/20 text-purple-300 border-purple-500/30',
    image: '/talks/kenya_2024.jpg',
    description: 'Technical instruction delivered to ABDN participants in Kenya on foundational Python programming, scientific computing libraries, and automating computational neuroimaging pipelines.',
    topics: ['Scientific Python', 'Neuroinformatics', 'Workflow Automation', 'ABDN Kenya']
  },
  {
    year: '2024',
    title: 'Software Tools in Neuroimaging',
    event: 'ABDN Brain Awareness Week 2024 — Ignatius Ajuru University of Education',
    location: 'Ignatius Ajuru University of Education, Nigeria (March 22, 2024)',
    role: 'Speaker & Panelist',
    type: 'Symposium & Lecture',
    badgeColor: 'from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30',
    image: '/talks/ignatius_ajuru_2024.jpg',
    description: 'Delivered an invited presentation under the theme "Redefining Possibilities: Empowering African Youths in Neuroimaging Research" to Computer Science students and faculty on modern neuroimaging software tools.',
    topics: ['Software Tools', 'Neuroimaging Research', 'Computer Science', 'Youth Empowerment']
  },
  {
    year: '2024',
    title: 'African Brain Data Infrastructure & FAIR Principles: Built for Rigor, Ready for Reuse',
    event: 'African Brain Data Network (ABDN) Regional Symposium',
    location: 'Virtual / Regional Summit',
    role: 'Invited Keynote Speaker',
    type: 'Keynote Talk',
    badgeColor: 'from-amber-500/20 to-yellow-500/20 text-amber-300 border-amber-500/30',
    image: '/talks/african_brain_data_fair.jpg',
    description: 'Presented key strategies for building African brain data repositories adhering to FAIR principles (Findable, Accessible, Interoperable, Reusable), BIDS standards, and robust data governance.',
    topics: ['FAIR Data Principles', 'BIDS Architecture', 'Data Governance', 'Open Science']
  }
];

const researchMetrics = [
  {
    number: '16',
    label: 'Research Items',
    description: '14 Journal Articles, 1 Dataset (Nature Scientific Data), 1 Poster',
    icon: FaNewspaper
  },
  {
    number: '42',
    label: 'Citations',
    description: 'Research cited across neuroscience & neuroinformatics',
    icon: FaChartLine
  },
  {
    number: '5',
    label: 'h-index',
    description: 'Research Impact Score: 40.8 on ResearchGate',
    icon: FaAward
  },
  {
    number: '4+',
    label: 'Invited Talks & Keynotes',
    description: 'Conference keynotes, technical workshops & ABDN lectures',
    icon: FaMicrophone
  }
];

const mainTabs = [
  { id: 'all', label: 'All Content', icon: FaLayerGroup },
  { id: 'publications', label: 'Peer-Reviewed Publications', icon: FaNewspaper, count: publications.length },
  { id: 'talks', label: 'Invited Talks & Keynotes', icon: FaMicrophone, count: talksAndPresentations.length },
  { id: 'ongoing', label: 'Ongoing Research', icon: FaGlobe, count: 6 }
];

const yearFilters = ['All', '2026', '2025', '2024', '2023', '2019'];

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
      className="mx-auto space-y-12 max-w-6xl pb-16"
    >
      {/* Header Section */}
      <motion.div variants={fadeInUp} className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-purple-600 to-blue-500 text-white shadow-lg shadow-purple-500/20">
            <FaBook className="text-2xl" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Publications & Research
            </h1>
            <p className="text-purple-400 font-medium text-sm sm:text-base">
              16 Peer-Reviewed Items • 42 Citations • 5 h-index • Invited Keynotes & Workshops
            </p>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-purple-950/60 via-blue-950/40 to-gray-900 p-6 sm:p-8 rounded-3xl border border-purple-800/40 backdrop-blur-md shadow-2xl">
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
            A comprehensive record of my scientific publications, open datasets (including <strong className="text-purple-300 font-semibold">Nature Scientific Data</strong> and <strong className="text-blue-300 font-semibold">Frontiers in Neuroinformatics</strong>), conference posters, and invited keynotes.
          </p>
        </div>
      </motion.div>

      {/* Research Impact Metrics */}
      <motion.section variants={fadeInUp} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {researchMetrics.map((metric, index) => {
          const MetricIcon = metric.icon;
          return (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-5 border border-gray-800 hover:border-purple-500/40 transition-all duration-300 shadow-xl space-y-2"
            >
              <div className="p-2.5 bg-purple-950/60 text-purple-400 rounded-xl border border-purple-800/40 w-fit">
                <MetricIcon className="text-xl" />
              </div>
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300">
                {metric.number}
              </div>
              <div className="text-sm font-bold text-white">{metric.label}</div>
              <p className="text-[11px] text-gray-400 leading-tight">{metric.description}</p>
            </div>
          );
        })}
      </motion.section>

      {/* MAIN TAB SWITCHER & YEAR FILTER */}
      <motion.div variants={fadeInUp} className="space-y-4">
        <div className="flex items-center gap-2 p-1.5 bg-gray-900/90 rounded-2xl border border-gray-800 overflow-x-auto">
          {mainTabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20 border border-purple-400/40'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
                }`}
              >
                <TabIcon className={isActive ? 'text-cyan-300' : 'text-gray-400'} />
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-800 text-gray-400'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Year Filter */}
        <div className="flex items-center gap-2.5 flex-wrap pt-1">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Filter Year:</span>
          <div className="flex flex-wrap gap-1.5">
            {yearFilters.map((year, index) => (
              <button
                key={index}
                onClick={() => setSelectedYear(year)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  year === selectedYear
                    ? 'bg-blue-600 text-white border border-blue-400'
                    : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 border border-gray-700'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* TAB CONTENT: PEER-REVIEWED PUBLICATIONS (ALL 16 ITEMS) */}
      {(activeTab === 'all' || activeTab === 'publications') && (
        <motion.section variants={fadeInUp} className="space-y-8">
          <div className="flex items-center gap-3 pb-2 border-b border-gray-800">
            <FaNewspaper className="text-2xl text-blue-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Peer-Reviewed Publications & Research Items ({filteredPublications.length})
            </h2>
          </div>

          <div className="space-y-6">
            {filteredPublications.map((pub, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl shadow-xl p-6 sm:p-7 border border-gray-700/70 hover:border-blue-500/40 transition-all duration-300 space-y-4"
              >
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <span className="px-3 py-1 bg-blue-950/60 text-blue-300 rounded-md text-xs font-medium border border-blue-800/40">
                    {pub.type} • {pub.category}
                  </span>
                  <span className="text-xs text-blue-300 font-semibold bg-gray-800/80 px-2.5 py-1 rounded-md border border-gray-700">
                    {pub.monthYear}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">{pub.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2 font-medium">{pub.authors}</p>
                  <p className="text-xs sm:text-sm text-blue-400 font-semibold mt-1">{pub.journal}</p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-800">
                  {pub.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-cyan-300 bg-gray-900/60 px-3 py-1.5 rounded-lg border border-gray-800 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xs text-purple-400" />
                      <span>{link.type}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* TAB CONTENT: TALKS WITH IMAGE CARDS */}
      {(activeTab === 'all' || activeTab === 'talks') && (
        <motion.section variants={fadeInUp} className="space-y-8">
          <div className="flex items-center gap-3 pb-2 border-b border-gray-800">
            <FaMicrophone className="text-2xl text-purple-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Invited Talks, Keynotes & Workshops</h2>
          </div>

          <div className="space-y-8">
            {filteredTalks.map((talk, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-700/70 hover:border-purple-500/40 transition-all duration-300 space-y-6"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Photo Container */}
                  <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[320px] rounded-2xl overflow-hidden border border-white/10 shadow-xl group bg-[#070B18] flex items-center justify-center p-1.5">
                    <Image
                      src={talk.image}
                      alt={talk.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-3 left-3 bg-[#0D1425]/90 text-cyan-300 px-3 py-1 rounded-lg text-xs font-semibold border border-white/10 backdrop-blur-md z-10 shadow-lg">
                      {talk.year}
                    </span>
                  </div>

                  {/* Talk Information */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r ${talk.badgeColor}`}>
                          {talk.type}
                        </span>
                        <span className="text-xs font-medium text-gray-300 bg-gray-800/80 px-2.5 py-1 rounded-md border border-gray-700">
                          {talk.role}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{talk.title}</h3>
                      <p className="text-sm font-semibold text-purple-300">{talk.event}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-300">
                      <span className="flex items-center gap-1.5 bg-gray-900/80 px-3 py-1.5 rounded-lg border border-gray-800">
                        <FaMapMarkerAlt className="text-purple-400" />
                        {talk.location}
                      </span>
                      <span className="flex items-center gap-1.5 bg-gray-900/80 px-3 py-1.5 rounded-lg border border-gray-800 font-semibold text-blue-300">
                        <FaCalendarAlt className="text-blue-400" />
                        {talk.year}
                      </span>
                    </div>

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed bg-gray-900/60 p-4 rounded-xl border border-gray-800/80">
                      {talk.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {talk.topics.map((topic, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-purple-950/60 text-purple-300 px-2.5 py-1 rounded-lg text-xs font-medium border border-purple-800/40"
                        >
                          {topic}
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

      {/* TAB CONTENT: ONGOING RESEARCH */}
      {(activeTab === 'all' || activeTab === 'ongoing') && (
        <motion.section variants={fadeInUp} className="space-y-6">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700/80 shadow-2xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-800">
              <div className="p-3 rounded-2xl bg-emerald-950/60 text-emerald-400 border border-emerald-800/50">
                <FaGlobe className="text-2xl" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Ongoing Research Initiatives</h2>
                <p className="text-gray-400 text-xs sm:text-sm">Active neuroimaging, clinical assessment, and cross-cultural studies</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* FEATURED RESEARCH ECOSYSTEM */}
              <div className="bg-gradient-to-br from-blue-950/80 via-gray-900 to-purple-950/80 p-6 sm:p-8 rounded-2xl border border-cyan-800/50 shadow-xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-950 text-cyan-300 border border-cyan-700/50">
                    Flagship Research Ecosystem • 7-Phase Program Roadmap
                  </span>
                  <span className="text-xs font-mono text-purple-300 bg-gray-900 px-3 py-1 rounded-md border border-gray-800">
                    afri_brain_core • MONAI • BIDS • Bayesian Models
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    African Brain MRI AI Research Ecosystem
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-300 font-medium">
                    A Multi-Project Research Program for Robust, Explainable & Clinically Validated AI in African Neuroimaging
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-gray-950/70 p-4 rounded-xl border border-gray-800">
                  Documents the architecture, relationships, and 7-phase development roadmap of an interconnected research ecosystem—building standardized African MRI infrastructure, Bayesian morphometry, cross-hospital validation, and DeepAccess-MRI.
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-400">
                    <span className="bg-gray-900 px-2.5 py-1 rounded-md border border-gray-800 text-cyan-300">7 Connected Projects</span>
                    <span className="bg-gray-900 px-2.5 py-1 rounded-md border border-gray-800 text-purple-300">Shared afri_brain_core</span>
                    <span className="bg-gray-900 px-2.5 py-1 rounded-md border border-gray-800 text-emerald-300">Phase 1 to Phase 4 Roadmap</span>
                  </div>

                  <Link
                    href="/projects/african-brain-mri-ai-ecosystem"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/20 transition-all"
                  >
                    <span>Explore Full 7-Phase Research Architecture</span>
                    <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </div>
              {/* DATA-CENTRIC AI STUDY */}
              <div className="bg-gradient-to-br from-emerald-950/80 via-gray-900 to-cyan-950/80 p-6 sm:p-8 rounded-2xl border border-emerald-800/50 shadow-xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-300 border border-emerald-700/50">
                    Data-Centric AI Study • Project 2
                  </span>
                  <span className="text-xs font-mono text-cyan-300 bg-gray-900 px-3 py-1 rounded-md border border-gray-800">
                    Python 3.11+ • PyTorch 2.0+ • MONAI 1.2+ • ANTsPy
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Data-Centric AI: Evaluating MRI Preprocessing on Low-Field African Brain MRI
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-300 font-medium">
                    A Multi-Center Factorial Study of Preprocessing Impact on Model Robustness, Calibration, and Explainability
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-gray-950/70 p-4 rounded-xl border border-gray-800">
                  Systematically investigating whether data-centric preprocessing optimizations (Pipelines A through G) yield greater classification gains, calibration (ECE), and out-of-hospital generalization than increasing model complexity across 225 patients from 3 Nigerian hospitals (LifeBridge, UPTH, RSUTH).
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-400">
                    <span className="bg-gray-900 px-2.5 py-1 rounded-md border border-gray-800 text-cyan-300">225 Patients / 3 Hospitals</span>
                    <span className="bg-gray-900 px-2.5 py-1 rounded-md border border-gray-800 text-purple-300">Factorial Pipelines A → G</span>
                    <span className="bg-gray-900 px-2.5 py-1 rounded-md border border-gray-800 text-emerald-300">Leave-One-Hospital-Out Validation</span>
                  </div>

                  <Link
                    href="/projects/data-centric-ai-low-field-mri"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-lg shadow-emerald-500/20 transition-all"
                  >
                    <span>Read Factorial Study Specs & Pipelines</span>
                    <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </div>

              {/* EXPLAINABILITY & CLINICAL PLAUSIBILITY STUDY */}
              <div className="bg-gradient-to-br from-amber-950/80 via-gray-900 to-purple-950/80 p-6 sm:p-8 rounded-2xl border border-amber-800/50 shadow-xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-950 text-amber-300 border border-amber-700/50">
                    XAI & Clinical Plausibility • Project 6
                  </span>
                  <span className="text-xs font-mono text-purple-300 bg-gray-900 px-3 py-1 rounded-md border border-gray-800">
                    Grad-CAM++ • Integrated Gradients • SHAP • MONAI
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Explainability & Clinical Plausibility of Deep Learning on Low-Field African Brain MRI
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-300 font-medium">
                    Evaluating Anatomical Attention vs. Shortcut Learning across Low-Field Scanners with Neuroradiology Expert Auditing
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-gray-950/70 p-4 rounded-xl border border-gray-800">
                  Auditing whether deep learning models base decisions on medically plausible neuroanatomy or spurious imaging artifacts using a panel of expert neuroradiologists, 5-point Likert scoring rubrics, and quantitative anatomical overlap (IoU).
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-400">
                    <span className="bg-gray-900 px-2.5 py-1 rounded-md border border-gray-800 text-cyan-300">5 Attribution Frameworks</span>
                    <span className="bg-gray-900 px-2.5 py-1 rounded-md border border-gray-800 text-purple-300">Expert Neuroradiology Rubric</span>
                    <span className="bg-gray-900 px-2.5 py-1 rounded-md border border-gray-800 text-emerald-300">Anatomical IoU & ECE</span>
                  </div>

                  <Link
                    href="/projects/explainability-and-clinical-plausibility"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white text-xs font-bold shadow-lg shadow-amber-500/20 transition-all"
                  >
                    <span>Read XAI Framework & Scoring Rubric</span>
                    <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </div>

              {/* AFRICAN CLINICAL BRAIN MRI BENCHMARK */}
              <div className="bg-gradient-to-br from-indigo-950/80 via-gray-900 to-cyan-950/80 p-6 sm:p-8 rounded-2xl border border-indigo-800/50 shadow-xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-950 text-indigo-300 border border-indigo-700/50">
                    Benchmark Ecosystem • Project 1
                  </span>
                  <span className="text-xs font-mono text-cyan-300 bg-gray-900 px-3 py-1 rounded-md border border-gray-800">
                    Afri-Brain-Bench • TorchIO • MONAI • PyTorch
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    African Clinical Brain MRI Benchmark (Afri-Brain-Bench)
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-300 font-medium">
                    A Standardized Benchmark Ecosystem for Evaluating AI Generalization, Calibration, and Explainability on African Clinical Scans
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-gray-950/70 p-4 rounded-xl border border-gray-800">
                  Introducing Afri-Brain-Bench—a standardized multi-center benchmark dataset of 225 clinical MRI examinations across 3 Nigerian hospitals providing 7 standardized evaluation tasks, cross-hospital splits, ECE calibration scoring, and Grad-CAM spatial ROI auditing.
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-400">
                    <span className="bg-gray-900 px-2.5 py-1 rounded-md border border-gray-800 text-cyan-300">7 Benchmark Tasks</span>
                    <span className="bg-gray-900 px-2.5 py-1 rounded-md border border-gray-800 text-purple-300">ML & DL Baseline Suite</span>
                    <span className="bg-gray-900 px-2.5 py-1 rounded-md border border-gray-800 text-emerald-300">LOHO & Cross-Hospital Validation</span>
                  </div>

                  <Link
                    href="/projects/african-brain-mri-benchmark"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-bold shadow-lg shadow-indigo-500/20 transition-all"
                  >
                    <span>Read Benchmark Tasks & Baseline Suite</span>
                    <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </div>

              {/* IMAGE QUALITY VS AI PERFORMANCE */}
              <div className="bg-gradient-to-br from-teal-950/80 via-gray-900 to-emerald-950/80 p-6 sm:p-8 rounded-2xl border border-teal-800/50 shadow-xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-950 text-teal-300 border border-teal-700/50">
                    Image Quality Study • Project 5
                  </span>
                  <span className="text-xs font-mono text-cyan-300 bg-gray-900 px-3 py-1 rounded-md border border-gray-800">
                    IQMs • SimpleITK • OpenCV • PyTorch
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Quantifying Clinical MRI Quality Effects on Deep Learning Performance
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-300 font-medium">
                    Treating Real-World Image Quality Degradation as a Continuous Independent Variable to Define AI Safety Boundaries
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-gray-950/70 p-4 rounded-xl border border-gray-800">
                  Core Clinical Question: "When MRI quality degrades, how reliable do AI diagnostic systems remain?" Systematically measuring sharpness, SNR, CNR, entropy, and motion blur as continuous independent variables to establish safe operational deployment thresholds.
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-400">
                    <span className="bg-gray-900 px-2.5 py-1 rounded-md border border-gray-800 text-cyan-300">9 Image Quality Metrics (IQMs)</span>
                    <span className="bg-gray-900 px-2.5 py-1 rounded-md border border-gray-800 text-purple-300">4 Quality Strata Tiers</span>
                    <span className="bg-gray-900 px-2.5 py-1 rounded-md border border-gray-800 text-emerald-300">ECE & Grad-CAM Drift Analysis</span>
                  </div>

                  <Link
                    href="/projects/image-quality-vs-ai-performance"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white text-xs font-bold shadow-lg shadow-teal-500/20 transition-all"
                  >
                    <span>Read Image Quality Metrics & Failure Thresholds</span>
                    <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </div>

              {/* FEATURED METHODOLOGICAL STUDY */}
              <div className="bg-gradient-to-br from-purple-950/80 via-gray-900 to-blue-950/80 p-6 sm:p-8 rounded-2xl border border-purple-800/50 shadow-xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-900/60 text-purple-300 border border-purple-700/50">
                    Flagship Methodological Study • Active Phase 3B
                  </span>
                  <span className="text-xs font-mono text-cyan-300 bg-gray-900 px-3 py-1 rounded-md border border-gray-800">
                    Python 3.11+ • MONAI • PyTorch • PyRadiomics
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Beyond Research-Grade MRI: AI Robustness on a Nigerian Clinical Brain MRI Dataset
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-300 font-medium">
                    A Methodological Study of AI Robustness, Calibration, and Explainability under Real-World MRI Quality Constraints
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-gray-950/70 p-4 rounded-xl border border-gray-800">
                  Systematically characterizing AI model robustness, calibration error (ECE), and salience map stability across 4 progressive physical degradations (Gaussian blur, Rician noise, slice downsampling, and motion ringing) on an 88-subject Nigerian clinical MRI dataset (787 scans).
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-400">
                    <span className="bg-gray-900 px-2.5 py-1 rounded-md border border-gray-800 text-cyan-300">88 Subjects / 787 Scans</span>
                    <span className="bg-gray-900 px-2.5 py-1 rounded-md border border-gray-800 text-purple-300">ResNet-18 & DenseNet-121</span>
                    <span className="bg-gray-900 px-2.5 py-1 rounded-md border border-gray-800 text-emerald-300">PyRadiomics Baseline</span>
                  </div>

                  <Link
                    href="/projects/clinical-mri-ai-robustness"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-purple-500/20 transition-all"
                  >
                    <span>Read Full Technical Case Study & Benchmarks</span>
                    <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </div>

              <div className="bg-gray-900/70 p-5 rounded-2xl border border-gray-800 space-y-2">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">Neuroimaging Study</span>
                <h3 className="text-base font-bold text-white">Asymmetry in Thalamic Gray Matter Changes in Nigerian Parkinson's Disease Patients</h3>
                <p className="text-xs sm:text-sm text-gray-300">Examining asymmetrical patterns of thalamic gray matter alterations in Nigerian Parkinson’s patients using structural MRI and volumetric modeling.</p>
              </div>

              <div className="bg-gray-900/70 p-5 rounded-2xl border border-gray-800 space-y-2">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">Volumetric Assessment</span>
                <h3 className="text-base font-bold text-white">Volumetric Assessment of Individual Thalamic Nuclei in Nigerian Parkinson's Disease Patients</h3>
                <p className="text-xs sm:text-sm text-gray-300">In-depth volumetric analysis of specific thalamic nuclei to establish structural biomarkers for neurodegenerative disease progression.</p>
              </div>

              <div className="bg-gray-900/70 p-5 rounded-2xl border border-gray-800 space-y-2">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">Social Neuroscience</span>
                <h3 className="text-base font-bold text-white">Screen Time & Social Connection: Cross-Cultural Study (Germany & Nigeria)</h3>
                <p className="text-xs sm:text-sm text-gray-300">Investigating how digital interaction patterns and screen time affect social relationships across distinct cultural environments.</p>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </motion.div>
  );
}