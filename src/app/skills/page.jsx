import { FaTools, FaCode, FaBrain, FaMobile, FaChartLine, FaUsers } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: FaCode,
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Material UI',
      'Ant Design'
    ],
    description: 'Building responsive and user-friendly web applications with modern frameworks and libraries.'
  },
  {
    title: 'Mobile Development',
    icon: FaMobile,
    skills: [
      'React Native',
      'Mobile UI/UX',
      'App Performance',
      'Native APIs'
    ],
    description: 'Developing cross-platform mobile applications with focus on performance and user experience.'
  },
  {
    title: 'Neuroimaging',
    icon: FaBrain,
    skills: [
      'MRI Analysis',
      'FSL',
      'FreeSurfer',
      'brainlife.io',
      'SPM',
      'Brain Connectivity'
    ],
    description: 'Analyzing neuroimaging data and investigating structural brain changes using advanced techniques.'
  },
  {
    title: 'Data Analysis',
    icon: FaChartLine,
    skills: [
      'Python',
      'R Statistics',
      'Statistical Analysis',
      'Data Visualization',
      'Machine Learning',
      'Research Methods'
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
      'Data Collection',
      'Literature Review'
    ]
  },
  {
    category: 'Problem Solving',
    skills: [
      'Critical Thinking',
      'Analytical Skills',
      'Research & Analysis',
      'Innovation'
    ]
  },
  {
    category: 'Communication',
    skills: [
      'Technical Writing',
      'Presentation Skills',
      'Cross-functional Collaboration',
      'Stakeholder Management'
    ]
  }
];

export default function Skills() {
  return (
    <div className="mx-auto space-y-12">
      {/* Technical Skills Header */}
      <div className="flex items-center gap-3 mb-10">
        <FaTools className="text-3xl text-gray-700" />
        <h1 className="text-3xl font-bold text-gray-800">Technical Skills</h1>
      </div>

      {/* Technical Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center gap-4 mb-6">
              <category.icon className="text-4xl text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
            </div>
            <p className="text-xl text-gray-600 mb-6">{category.description}</p>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-blue-50 text-blue-800 px-6 py-3 rounded-full text-xl font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Professional Skills Section */}
      <div>
        <div className="flex items-center gap-3 mb-10">
          <FaUsers className="text-3xl text-gray-700" />
          <h2 className="text-3xl font-bold text-gray-800">Professional Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {professionalSkills.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <p className="text-xl text-gray-600">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 