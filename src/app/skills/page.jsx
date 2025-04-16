import { FaTools, FaCode, FaBrain, FaMobile, FaChartLine, FaUsers } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: FaCode,
    skills: [
      'React.js',
      'Next.js',
      'Tailwind CSS'
    ],
    description: 'Building responsive and user-friendly web applications with modern frameworks and libraries.'
  },
  {
    title: 'Mobile Development',
    icon: FaMobile,
    skills: [
      'React Native',
      'App Performance'
    ],
    description: 'Developing cross-platform mobile applications with focus on performance and user experience.'
  },
  {
    title: 'Neuroimaging',
    icon: FaBrain,
    skills: [
      'MRI Analysis',
      'FSL',
      'FreeSurfer'
    ],
    description: 'Analyzing neuroimaging data and investigating structural brain changes using advanced techniques.'
  },
  {
    title: 'Data Analysis',
    icon: FaChartLine,
    skills: [
      'Python',
      'Statistical Analysis',
      'Data Visualization'
    ],
    description: 'Processing and analyzing complex research data using statistical and computational methods.'
  }
];

const professionalSkills = [
  {
    category: 'Research & Analysis',
    skills: [
      'Scientific Writing',
      'Research Design',
      'Data Collection'
    ]
  },
  {
    category: 'Problem Solving',
    skills: [
      'Critical Thinking',
      'Analytical Skills',
      'Innovation'
    ]
  },
  {
    category: 'Communication',
    skills: [
      'Technical Writing',
      'Presentation Skills',
      'Cross-functional Collaboration'
    ]
  }
];

export default function Skills() {
  return (
    <div className="mx-auto space-y-16">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <FaTools className="text-3xl text-blue-400" />
          <h1 className="text-3xl font-bold text-white">Skills & Expertise</h1>
        </div>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          A comprehensive overview of my technical capabilities and professional competencies
        </p>
      </div>

      {/* Technical Skills Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-white text-center">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-900/20 rounded-lg">
                  <category.icon className="text-3xl text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <p className="text-lg text-gray-300 mb-6">{category.description}</p>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-900/20 text-blue-300 px-4 py-2 rounded-lg text-lg font-medium border border-blue-800/30 hover:bg-blue-900/30 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Skills Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-white text-center">Professional Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {professionalSkills.map((category, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-900/20 rounded-lg">
                  <FaUsers className="text-3xl text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:scale-125 transition-transform duration-200"></div>
                    <p className="text-lg text-gray-300 group-hover:text-blue-300 transition-colors duration-200">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Progression Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-white text-center">Skills Development</h2>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Current Focus</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <p className="text-lg text-gray-300">Deep Learning in Neuroimaging</p>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <p className="text-lg text-gray-300">Advanced React Patterns</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Future Goals</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <p className="text-lg text-gray-300">Cloud Computing in Research</p>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <p className="text-lg text-gray-300">Advanced Data Visualization</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 