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
    description: "Applying advanced data analysis and machine learning techniques to neuroimaging and behavioral data.",
    expertise: [
      "Machine learning in neuroimaging",
      "Statistical modeling",
      "Big data analysis",
      "Predictive modeling"
    ]
  }
];

export default function Research() {
  return (
    <div className="mx-auto space-y-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <FaFlask className="text-3xl text-gray-700" />
        <h1 className="text-3xl font-bold text-gray-800">Research</h1>
      </div>

      {/* Research Areas */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Research Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-8">
              <area.icon className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{area.title}</h3>
              <p className="text-xl text-gray-600 mb-6">{area.description}</p>
              <ul className="space-y-3">
                {area.expertise.map((item, i) => (
                  <li key={i} className="text-lg text-gray-600 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Ongoing Research Projects */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Ongoing Research Projects</h2>
        <div className="space-y-8">
          {ongoingResearch.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-start justify-between mb-4">
                <span className="px-4 py-2 bg-green-50 text-green-800 rounded-full text-lg font-medium">
                  {project.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
              <p className="text-xl text-gray-600 mb-6">{project.description}</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Research Objectives</h4>
                  <ul className="space-y-2">
                    {project.objectives.map((objective, i) => (
                      <li key={i} className="text-lg text-gray-600 flex items-start gap-2">
                        <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></span>
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Methodology</h4>
                  <p className="text-lg text-gray-600">{project.methods}</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Expected Impact</h4>
                  <p className="text-lg text-gray-600">{project.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 
