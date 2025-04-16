'use client';

import { useState } from 'react';
import { FaBook, FaNewspaper, FaChartLine, FaDatabase, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const publications = [
  {
    year: '2025',
    type: 'Journal Article',
    category: 'Neuroscience',
    title: 'FAIR African brain data: challenges and opportunities',
    authors: 'Wogu, E., Ogoh, G. I., Filima, P. L., Eke, D.',
    journal: 'Frontiers in Neuroinformatics',
    links: [
      { type: 'PDF', url: '#' },
      { type: 'DOI', url: '#' },
      { type: 'Cite', url: '#' }
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
      { type: 'PDF', url: '#' },
      { type: 'DOI', url: '#' },
      { type: 'Cite', url: '#' }
    ]
  },
  {
    year: '2024',
    type: 'Journal Article',
    category: 'Medical Research',
    title: 'Knowledge, Attitudes, and Perceptions of Cesarean Section Among Women in Delta State, Nigeria: Implications for Maternal Health Interventions',
    authors: 'Iwegbu, R. E., Irozulike, F. C., Asiwe, N., Filima, P. L.',
    journal: 'Journal of Maternal Health',
    links: [
      { type: 'PDF', url: '#' },
      { type: 'DOI', url: '#' },
      { type: 'Cite', url: '#' }
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
      { type: 'PDF', url: '#' },
      { type: 'DOI', url: '#' },
      { type: 'Cite', url: '#' }
    ]
  },
  {
    year: '2024',
    type: 'Journal Article',
    category: 'Anthropometry',
    title: 'Discriminant and Multiple Linear Regression Analysis for Sex and Stature Estimation Using Upper Arm and Forearm-Hand Length: A Study among Mgbidi Population of Imo State Nigeria',
    authors: 'Asiwe, N., Adheke, O. M., Ezeah, I., Buseni, V.',
    journal: 'Journal of Forensic Anthropology',
    links: [
      { type: 'PDF', url: '#' },
      { type: 'DOI', url: '#' },
      { type: 'Cite', url: '#' }
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
      { type: 'DOI', url: '#' },
      { type: 'Cite', url: '#' }
    ]
  },
  {
    year: '2023',
    type: 'Journal Article',
    category: 'Medical Research',
    title: 'Prevalence of Dysmenorrhea and its Management among Undergraduate Students of the University of Port Harcourt, Nigeria',
    authors: 'Irozulike, F. C., Asiwe, N., Ekokodje, J. W., Filima, P. L.',
    journal: 'Asian Journal of Advanced Research and Reports',
    links: [
      { type: 'PDF', url: '#' },
      { type: 'DOI', url: '#' },
      { type: 'Cite', url: '#' }
    ]
  },
  {
    year: '2023',
    type: 'Journal Article',
    category: 'Anthropometry',
    title: 'Pattern of Earlobe Attachment among Igbo Ethnic Group of Nigeria',
    authors: 'Asiwe, N., Irozulike, F. C., Filima, P. L., Yirate, B. N.',
    journal: 'Asian Journal of Advanced Research and Reports',
    links: [
      { type: 'PDF', url: '#' },
      { type: 'DOI', url: '#' },
      { type: 'Cite', url: '#' }
    ]
  },
  {
    year: '2019',
    type: 'Journal Article',
    category: 'Neuroscience',
    title: 'Neuroprotective effect of aqueous extract of xylopia aethiopica seed on lead-induced injury on the hippocampus and cerebral cortex of male wistar rat',
    authors: 'George, S., Filima, P. L., David, L. K., Orish, C.',
    journal: 'IBRO Reports',
    links: [
      { type: 'PDF', url: '#' },
      { type: 'DOI', url: '#' },
      { type: 'Cite', url: '#' }
    ]
  }
];

const researchMetrics = [
  {
    number: '15+',
    label: 'Citations',
    description: 'Research papers cited by scholars worldwide',
    icon: FaChartLine
  },
  {
    number: '9',
    label: 'Publications',
    description: 'Published in peer-reviewed journals',
    icon: FaNewspaper
  },
  {
    number: '2',
    label: 'Datasets',
    description: 'Public datasets for neuroscience research',
    icon: FaDatabase
  }
];

const yearFilters = ['All', '2025', '2024', '2023', '2019'];
const categoryFilters = ['All', 'Neuroscience', 'Anthropometry', 'Medical Research'];

export default function Publications() {
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPublications = publications.filter(pub => 
    (selectedYear === 'All' || pub.year === selectedYear) &&
    (selectedCategory === 'All' || pub.category === selectedCategory)
  );

  return (
    <div className="mx-auto space-y-16">
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <FaBook className="text-3xl text-blue-400" />
        <h1 className="text-3xl font-bold text-white">Research Publications</h1>
      </div>

      {/* Filters */}
      <div className="space-y-6">
        {/* Year filters */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Filter by Year</h2>
          <div className="flex flex-wrap gap-2">
            {yearFilters.map((year, index) => (
              <button
                key={index}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-lg text-lg font-medium transition-colors ${
                  year === selectedYear
                    ? 'bg-blue-600 text-white border border-blue-500'
                    : 'bg-blue-900/20 text-blue-300 border border-blue-800/30 hover:bg-blue-900/30'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Category filters */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categoryFilters.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-lg font-medium transition-colors ${
                  category === selectedCategory
                    ? 'bg-blue-600 text-white border border-blue-500'
                    : 'bg-blue-900/20 text-blue-300 border border-blue-800/30 hover:bg-blue-900/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Research Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {researchMetrics.map((metric, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 border border-gray-700 hover:border-blue-400 transition-colors duration-300">
            <metric.icon className="text-3xl text-blue-400 mb-4" />
            <div className="text-2xl font-bold text-white mb-2">{metric.number}</div>
            <div className="text-lg font-semibold text-blue-400 mb-2">{metric.label}</div>
            <p className="text-lg text-gray-300">{metric.description}</p>
          </div>
        ))}
      </div>

      {/* Publications List */}
      <div className="space-y-6">
        {filteredPublications.map((pub, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 border border-gray-700 hover:border-blue-400 transition-colors duration-300">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
              <span className="px-4 py-2 bg-blue-900/20 text-blue-300 rounded-lg text-lg font-medium border border-blue-800/30">
                {pub.type}
              </span>
              <span className="text-lg text-gray-300">{pub.year}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{pub.title}</h3>
            <p className="text-lg text-gray-300 mb-4">{pub.authors}</p>
            <p className="text-lg text-blue-400 mb-6">{pub.journal}</p>
            <div className="flex flex-wrap gap-4">
              {pub.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {link.type === 'PDF' ? (
                    <FaDownload className="text-lg" />
                  ) : (
                    <FaExternalLinkAlt className="text-lg" />
                  )}
                  <span className="text-lg">{link.type}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Ongoing Research */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <FaBook className="text-blue-400" />
          Ongoing Research
        </h2>
        
        <div className="space-y-6">
          {/* Project 1 */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 border border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <span className="px-4 py-2 bg-green-900/50 text-green-300 rounded-full text-lg font-medium border border-green-800/50">
                In Progress
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Asymmetry in Thalamic Gray Matter Changes in Nigerian Parkinson's Disease Patients
            </h2>
            <p className="text-xl text-gray-300 mb-3">
              A comprehensive study examining the asymmetrical patterns of thalamic gray matter alterations in Nigerian patients with Parkinson's Disease, utilizing advanced neuroimaging techniques.
            </p>
          </div>

          {/* Project 2 */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 border border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <span className="px-4 py-2 bg-green-900/50 text-green-300 rounded-full text-lg font-medium border border-green-800/50">
                In Progress
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Volumetric Assessment of Individual Thalamic Nuclei in Nigerian patients with Parkinson's Disease
            </h2>
            <p className="text-xl text-gray-300 mb-3">
              An in-depth analysis of volumetric changes in specific thalamic nuclei among Nigerian Parkinson's Disease patients, providing insights into disease progression and regional brain changes.
            </p>
          </div>

          {/* Project 3 */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 border border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <span className="px-4 py-2 bg-green-900/50 text-green-300 rounded-full text-lg font-medium border border-green-800/50">
                In Progress
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Screen Time and Social Connection: A Study of the Changing Dynamics of Relationships in Germany and Nigeria
            </h2>
            <p className="text-xl text-gray-300 mb-3">
              A cross-cultural investigation examining how screen time impacts social relationships and connections in both German and Nigerian contexts, exploring the intersection of technology and human interaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 