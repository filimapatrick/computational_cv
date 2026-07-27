'use client';

import { useState } from 'react';
import Image from 'next/image';
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
  FaAward
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
  { id: 'ongoing', label: 'Ongoing Research', icon: FaGlobe, count: 3 }
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

            <div className="space-y-4">
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