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

const publications = [
  {
    year: '2025',
    type: 'Journal Article',
    category: 'Neuroscience',
    title: 'FAIR African brain data: challenges and opportunities',
    authors: 'Wogu, E., Ogoh, G. I., Filima, P. L., Eke, D.',
    journal: 'Frontiers in Neuroinformatics',
    links: [
      { type: 'Journal Article', url: '#' },
      { type: 'DOI', url: '#' }
    ]
  },
  {
    year: '2024',
    type: 'Journal Article',
    category: 'Neuroscience',
    title: 'Thalamic Nuclei Morphometry and Handedness: Assessing Grey Matter Volume Differences in Left- and Right-Dominant Individuals',
    authors: 'Wogu, E., Filima, P. L.',
    journal: 'Nigerian Journal of Neuroscience, 15(1):22-27',
    links: [
      { type: 'Journal Article', url: '#' },
      { type: 'DOI', url: '#' }
    ]
  },
  {
    year: '2024',
    type: 'Journal Article',
    category: 'Anthropometry',
    title: 'Anthropometric Analysis of Cephalic Index in Orlu Population of Imo State, Nigeria',
    authors: 'Irozulike, F. C., Filima, P. L., Ekokodje, J. W., Asiwe, N.',
    journal: 'Journal of Anthropometry',
    links: [
      { type: 'Journal Article', url: '#' }
    ]
  },
  {
    year: '2024',
    type: 'Journal Article',
    category: 'Medical Research',
    title: 'Knowledge, Attitudes, and Perceptions of Cesarean Section Among Women in Delta State, Nigeria',
    authors: 'Iwegbu, R. E., Irozulike, F. C., Asiwe, N., Filima, P. L.',
    journal: 'Journal of Maternal Health',
    links: [
      { type: 'Journal Article', url: '#' }
    ]
  },
  {
    year: '2023',
    type: 'Dataset',
    category: 'Neuroscience',
    title: 'A labeled Clinical-MRI dataset of Nigerian brains',
    authors: 'Wogu, E., Filima, P. L., Caron, B., Pestilli, F.',
    journal: 'Nature Scientific Data, dx.doi:2211.04425(v1)',
    links: [
      { type: 'Dataset', url: '#' },
      { type: 'DOI', url: '#' }
    ]
  },
  {
    year: '2023',
    type: 'Journal Article',
    category: 'Medical Research',
    title: 'Prevalence of Dysmenorrhea and its Management among Undergraduate Students of the University of Port Harcourt',
    authors: 'Irozulike, F. C., Asiwe, N., Ekokodje, J. W., Filima, P. L.',
    journal: 'Asian Journal of Advanced Research and Reports',
    links: [
      { type: 'Journal Article', url: '#' }
    ]
  },
  {
    year: '2019',
    type: 'Journal Article',
    category: 'Neuroscience',
    title: 'Neuroprotective effect of aqueous extract of xylopia aethiopica seed on lead-induced injury on the hippocampus and cerebral cortex',
    authors: 'George, S., Filima, P. L., David, L. K., Orish, C.',
    journal: 'IBRO Reports',
    links: [
      { type: 'Journal Article', url: '#' }
    ]
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
    number: '12+',
    label: 'Publications & Articles',
    description: 'Peer-reviewed articles, journal papers, & dataset publications',
    icon: FaNewspaper
  },
  {
    number: '4+',
    label: 'Invited Talks & Keynotes',
    description: 'Conference keynotes, technical seminars, & workshop facilitation',
    icon: FaMicrophone
  },
  {
    number: '200+',
    label: 'Researchers Trained',
    description: 'Neuroscientists and clinicians mentored in computational workflows',
    icon: FaChalkboardTeacher
  }
];

const mainTabs = [
  { id: 'all', label: 'All Content', icon: FaLayerGroup },
  { id: 'talks', label: 'Invited Talks & Keynotes', icon: FaMicrophone, count: talksAndPresentations.length },
  { id: 'publications', label: 'Peer-Reviewed Publications', icon: FaNewspaper, count: publications.length },
  { id: 'ongoing', label: 'Ongoing Research', icon: FaGlobe, count: 3 }
];

export default function Publications() {
  const [activeTab, setActiveTab] = useState('all');

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
              Publications & Talks
            </h1>
            <p className="text-purple-400 font-medium text-sm sm:text-base">
              Peer-Reviewed Research • Invited Keynotes • Technical Workshops • Open Datasets
            </p>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-purple-950/60 via-blue-950/40 to-gray-900 p-6 sm:p-8 rounded-3xl border border-purple-800/40 backdrop-blur-md shadow-2xl">
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
            A comprehensive showcase of my scientific contributions, peer-reviewed publications, and public talks. Toggle between sub-tabs below to explore <strong className="text-purple-300 font-semibold">Invited Keynotes & Workshops</strong> or <strong className="text-blue-300 font-semibold">Peer-Reviewed Papers & Datasets</strong>.
          </p>
        </div>
      </motion.div>

      {/* Research Impact Metrics */}
      <motion.section variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {researchMetrics.map((metric, index) => {
          const MetricIcon = metric.icon;
          return (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/40 transition-all duration-300 shadow-xl space-y-3"
            >
              <div className="p-3 bg-purple-950/60 text-purple-400 rounded-xl border border-purple-800/40 w-fit">
                <MetricIcon className="text-2xl" />
              </div>
              <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300">
                {metric.number}
              </div>
              <div className="text-base font-bold text-white">{metric.label}</div>
              <p className="text-xs text-gray-300 leading-relaxed">{metric.description}</p>
            </div>
          );
        })}
      </motion.section>

      {/* MAIN TAB SWITCHER */}
      <motion.div variants={fadeInUp} className="space-y-6">
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
      </motion.div>

      {/* TAB CONTENT: TALKS WITH IMAGE CARDS */}
      {(activeTab === 'all' || activeTab === 'talks') && (
        <motion.section variants={fadeInUp} className="space-y-8">
          <div className="flex items-center gap-3 pb-2 border-b border-gray-800">
            <FaMicrophone className="text-2xl text-purple-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Invited Talks, Keynotes & Workshops</h2>
          </div>

          <div className="space-y-8">
            {talksAndPresentations.map((talk, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-700/70 hover:border-purple-500/40 transition-all duration-300 space-y-6"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Photo Container */}
                  <div className="lg:col-span-5 relative h-56 sm:h-64 lg:h-full min-h-[220px] rounded-2xl overflow-hidden border border-white/10 shadow-xl group bg-gray-950">
                    <Image
                      src={talk.image}
                      alt={talk.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 bg-[#0D1425]/90 text-cyan-300 px-3 py-1 rounded-lg text-xs font-semibold border border-white/10 backdrop-blur-md">
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

      {/* TAB CONTENT: PEER-REVIEWED PUBLICATIONS */}
      {(activeTab === 'all' || activeTab === 'publications') && (
        <motion.section variants={fadeInUp} className="space-y-8">
          <div className="flex items-center gap-3 pb-2 border-b border-gray-800">
            <FaNewspaper className="text-2xl text-blue-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Peer-Reviewed Publications & Datasets</h2>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl shadow-xl p-6 sm:p-7 border border-gray-700/70 hover:border-blue-500/40 transition-all duration-300 space-y-4"
              >
                <div className="flex justify-between items-start gap-4">
                  <span className="px-3 py-1 bg-blue-950/60 text-blue-300 rounded-md text-xs font-medium border border-blue-800/40">
                    {pub.type} • {pub.category}
                  </span>
                  <span className="text-xs text-blue-300 font-semibold bg-gray-800/80 px-2.5 py-1 rounded-md border border-gray-700">
                    {pub.year}
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