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
    period: "2020 - 2021",
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
    title: "Advanced Neuroimaging Workshop",
    institution: "brainlife.io",
    period: "2023",
    description: "Intensive training in advanced neuroimaging techniques, focusing on MRI data processing and analysis using the brainlife.io platform."
  },
  {
    title: "Machine Learning in Neuroscience",
    institution: "Coursera",
    period: "2022",
    description: "Comprehensive course on applying machine learning techniques to neuroscience data analysis and interpretation."
  }
];

export default function Education() {
  return (
    <div className="mx-auto space-y-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <FaGraduationCap className="text-3xl text-gray-700" />
        <h1 className="text-3xl font-bold text-gray-800">Education</h1>
      </div>

      {/* Academic Journey */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Academic Journey</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{edu.degree}</h3>
                  <p className="text-xl text-blue-600 mt-2">{edu.institution}</p>
                  <p className="text-lg text-gray-600">{edu.location}</p>
                </div>
                <span className="text-xl text-gray-600">{edu.period}</span>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Research Focus</h4>
                  <p className="text-xl text-gray-600">{edu.researchFocus}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Areas</h4>
                  <div className="flex flex-wrap gap-3">
                    {edu.keyAreas.map((area, areaIndex) => (
                      <span
                        key={areaIndex}
                        className="bg-blue-50 text-blue-800 px-6 py-3 rounded-full text-xl font-medium"
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
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Additional Training</h2>
        <div className="space-y-6">
          {additionalTraining.map((training, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{training.title}</h3>
                  <p className="text-xl text-blue-600 mt-2">{training.institution}</p>
                </div>
                <span className="text-xl text-gray-600">{training.period}</span>
              </div>
              <p className="text-xl text-gray-600">{training.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 