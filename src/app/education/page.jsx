'use client';

import { FaGraduationCap, FaBrain, FaCode, FaChartBar } from 'react-icons/fa';

const education = [
  {
    degree: "M.Sc. in Neuroscience",
    institution: "University of Port Harcourt",
    period: "2021 - 2023",
    location: "Port Harcourt, Nigeria",
    researchFocus: "Neuroimaging and Brain Structure Analysis",
    keyAreas: [
      "Advanced MRI Analysis",
      "Neurodegenerative Diseases",
      "Statistical Methods in Neuroscience",
      "Brain Mapping Techniques"
    ]
  },
  {
    degree: "Post Graduate Diploma in Computer Science",
    institution: "Ignatius Ajuru University",
    period: "2024 - 2025",
    location: "Port Harcourt, Nigeria",
    researchFocus: "Computer Science and Programming",
    keyAreas: [
      "Software Development",
      "Data Structures & Algorithms",
      "Database Management",
      "Web Technologies"
    ]
  },
  {
    degree: "B.Sc. in Anatomy",
    institution: "University of Port Harcourt",
    period: "2014 - 2019",
    location: "Port Harcourt, Nigeria",
    researchFocus: "Neuroanatomy and Brain Development",
    keyAreas: [
      "Human Anatomy",
      "Neuroscience",
      "Research Methods",
      "Histology"
    ]
  }
];

const additionalTraining = [
  {
    title: "Applied AI Lab: Deep Learning for Computer Vision",
    institution: "WorldQuant University",
    period: "2025",
    description: "Comprehensive training in deep learning techniques for computer vision applications, focusing on neural networks, image processing, and practical implementation of AI solutions."
  },
  {
    title: "Introduction to Deep Learning for Computer Vision",
    institution: "Coursera",
    period: "2025",
    description: "Fundamental course covering deep learning concepts and applications in computer vision, including convolutional neural networks, image classification, and object detection techniques."
  },
  {
    title: "Advanced Neuroimaging Workshop",
    institution: "brainlife.io",
    period: "2023",
    description: "Intensive training in advanced neuroimaging techniques, focusing on MRI data processing and analysis using the brainlife.io platform."
  },
  {
    title: "Deep Learning in Neuroscience",
    institution: "Coursera",
    period: "2025",
    description: "Comprehensive course on applying deep learning techniques to neuroscience data analysis, focusing on neuroimaging data processing and interpretation."
  },
  {
    title: "Neuroimaging Data Management",
    institution: "African Brain Data Network",
    period: "2022",
    description: "Training in neuroimaging data management, focusing on FAIR principles, data sharing protocols, and collaborative research practices in neuroscience."
  }
];

export default function Education() {
  return (
    <div className="mx-auto space-y-16">
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <FaGraduationCap className="text-3xl text-blue-400" />
        <h1 className="text-3xl font-bold text-white">Education</h1>
      </div>

      {/* Academic Journey */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-8">Academic Journey</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 border border-gray-700 hover:border-blue-400 transition-colors duration-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-lg text-blue-400 mt-2">{edu.institution}</p>
                  <p className="text-lg text-gray-300">{edu.location}</p>
                </div>
                <span className="text-lg text-gray-300">{edu.period}</span>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Research Focus</h4>
                  <p className="text-lg text-gray-300">{edu.researchFocus}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Areas</h4>
                  <div className="flex flex-wrap gap-3">
                    {edu.keyAreas.map((area, areaIndex) => (
                      <span
                        key={areaIndex}
                        className="bg-blue-900/20 text-blue-300 px-4 py-2 rounded-lg text-lg font-medium border border-blue-800/30 hover:bg-blue-900/30 transition-colors duration-200"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Training */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-8">Additional Training</h2>
        <div className="space-y-6">
          {additionalTraining.map((training, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 border border-gray-700 hover:border-blue-400 transition-colors duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{training.title}</h3>
                  <p className="text-lg text-blue-400 mt-2">{training.institution}</p>
                </div>
                <span className="text-lg text-gray-300">{training.period}</span>
              </div>
              <p className="text-lg text-gray-300">{training.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 