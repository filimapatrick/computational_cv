'use client';

import { FaFlask, FaBrain, FaUsers, FaLaptop, FaChartLine } from 'react-icons/fa';

const ongoingResearch = [
  {
    title: "Asymmetry in Thalamic Gray Matter Changes in Nigerian Parkinson's Disease Patients",
    category: "Neuroimaging",
    description: "This research investigates the asymmetrical patterns of thalamic gray matter alterations in Nigerian patients with Parkinson's Disease. Using advanced neuroimaging techniques, we analyze structural changes and their correlation with disease progression.",
    objectives: [
      "Map thalamic gray matter changes across different stages of Parkinson's Disease",
      "Analyze hemispheric differences in thalamic structure",
      "Correlate structural changes with clinical symptoms",
      "Develop biomarkers for early disease detection"
    ],
    methods: "Advanced MRI techniques, volumetric analysis, statistical modeling",
    impact: "This study aims to improve our understanding of Parkinson's Disease progression in African populations and contribute to early diagnosis methods."
  },
  {
    title: "Volumetric Assessment of Individual Thalamic Nuclei in Nigerian patients with Parkinson's Disease",
    category: "Neuroimaging",
    description: "A detailed volumetric analysis of specific thalamic nuclei in Nigerian Parkinson's Disease patients, focusing on identifying key structural changes that may serve as disease markers.",
    objectives: [
      "Quantify volume changes in specific thalamic nuclei",
      "Establish correlation between nuclei volume and disease severity",
      "Compare findings with international datasets",
      "Develop region-specific analysis protocols"
    ],
    methods: "High-resolution MRI, automated segmentation, machine learning analysis",
    impact: "Results will enhance our understanding of regional brain changes in Parkinson's Disease and potentially lead to improved diagnostic tools."
  },
  {
    title: "Screen Time and Social Connection: A Study of the Changing Dynamics of Relationships in Germany and Nigeria",
    category: "Social Neuroscience",
    description: "A cross-cultural investigation into the impact of screen time on social relationships and connections, comparing patterns between German and Nigerian populations.",
    objectives: [
      "Analyze screen time patterns across both cultures",
      "Assess impact on social relationships and mental health",
      "Identify cultural differences in technology usage",
      "Develop recommendations for healthy digital habits"
    ],
    methods: "Mixed-methods approach, surveys, interviews, digital tracking",
    impact: "This research will provide insights into how different cultures adapt to digital transformation and its effects on social connections."
  }
];

const researchAreas = [
  {
    title: "Neuroimaging",
    icon: FaBrain,
    description: "Specialized in advanced MRI techniques and analysis for understanding brain structure and function, particularly in neurodegenerative diseases.",
    expertise: [
      "Structural and functional MRI analysis",
      "Volumetric assessment",
      "Brain connectivity mapping",
      "Automated image processing"
    ]
  },
  {
    title: "Social Neuroscience",
    icon: FaUsers,
    description: "Investigating the intersection of social behavior, technology, and brain function across different cultural contexts.",
    expertise: [
      "Cross-cultural studies",
      "Social behavior analysis",
      "Digital interaction patterns",
      "Cultural neuroscience"
    ]
  },
  {
    title: "Data Science in Neuroscience",
    icon: FaChartLine,
    description: "Exploring the application of data analysis and deep learning techniques to neuroimaging and behavioral data, with a focus on developing these skills for future research applications.",
    expertise: [
      "Explore deep learning applications in neuroimaging",
      "Developing statistical analysis skills",
      "Exploring big data analysis techniques",
      "Studying predictive modeling approaches"
    ]
  }
];

export default function Research() {
  return (
    <div className="mx-auto space-y-16">
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <FaFlask className="text-3xl text-blue-400" />
        <h1 className="text-3xl font-bold text-white">Research</h1>
      </div>

      {/* Research Areas */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-8">Research Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 border border-gray-700 hover:border-blue-400 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <area.icon className="text-4xl text-blue-400" />
                <h3 className="text-xl font-bold text-white">{area.title}</h3>
              </div>
              <p className="text-lg text-gray-300 mb-6">{area.description}</p>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Key Focus Areas:</h4>
                <ul className="space-y-3">
                  {area.expertise.map((item, i) => (
                    <li key={i} className="text-lg text-gray-300 flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ongoing Research Projects */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-8">Ongoing Research Projects</h2>
        <div className="space-y-8">
          {ongoingResearch.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 border border-gray-700 hover:border-blue-400 transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <span className="px-4 py-2 bg-green-900/50 text-green-300 rounded-full text-lg font-medium border border-green-800/50 w-fit">
                  {project.category}
                </span>
                <span className="text-sm text-gray-400">In Progress</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-lg text-gray-300 mb-6">{project.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Objectives</h4>
                  <ul className="space-y-2">
                    {project.objectives.map((objective, i) => (
                      <li key={i} className="text-lg text-gray-300 flex items-start gap-2">
                        <span className="mt-2 w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></span>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Methodology</h4>
                  <p className="text-lg text-gray-300">{project.methods}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Impact</h4>
                  <p className="text-lg text-gray-300">{project.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 
