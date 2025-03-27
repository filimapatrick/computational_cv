import { FaBriefcase, FaCode, FaUsers } from 'react-icons/fa';

const experience = [
  {
    title: 'Software Developer',
    company: 'Brainlife.io',
    location: 'Remote',
    period: '2024 - Present',
    description: 'Developing critical applications for neuroimaging data processing and quality control, focusing on error monitoring and MRI protocol standardization.',
    projects: [
      {
        name: 'Error Monitoring System',
        description: 'Comprehensive application for monitoring and handling errors from neuroimaging processes.',
        technologies: ['React.js', 'Next.js', 'Node.js', 'Error Tracking'],
        achievements: [
          'Developed real-time error monitoring and alerting system',
          'Implemented error classification and handling mechanisms',
          'Created intuitive dashboard for error visualization and management'
        ]
      },
      {
        name: 'Dicompare App',
        description: 'Quality control application for ensuring MRI procedures follow optimal protocols.',
        technologies: ['React.js', 'DICOM Processing', 'Medical Imaging'],
        achievements: [
          'Built protocol comparison and validation system',
          'Implemented automated MRI protocol checking',
          'Developed interface for protocol standardization'
        ]
      }
    ]
  },
  {
    title: 'React Developer',
    company: 'Lizard Global',
    location: 'Netherland & Malaysia (Remote)',
    period: '2022 - 2024',
    description: 'Led development of multiple high-impact web and mobile applications, focusing on user experience and scalable solutions.',
    projects: [
      {
        name: 'Award Showcase Platform',
        description: 'Web application for showcasing awards by category with advanced filtering and management.',
        technologies: ['Next.js', 'Ant Design', 'Strapi'],
        achievements: [
          'Led complete development from concept to deployment',
          'Implemented dynamic category-based award management',
          'Created intuitive admin interface for content management'
        ]
      },
      {
        name: 'Aposto',
        description: 'Admin platform for event staff scheduling and knowledge transfer.',
        technologies: ['React.js', 'Next.js', 'Firebase'],
        achievements: [
          'Enhanced event-day communication efficiency by 40%',
          'Implemented real-time scheduling system',
          'Developed comprehensive knowledge transfer module'
        ]
      },
      {
        name: 'Flexpackerz',
        description: 'Cross-platform mobile application for flex workers.',
        technologies: ['React Native', 'Firebase', 'Location Services'],
        achievements: [
          'Built location-based co-working space discovery system',
          'Implemented real-time availability tracking',
          'Developed user booking and payment system'
        ]
      }
    ]
  },
  {
    title: 'Lead Developer',
    company: 'African Brain Data Network',
    location: 'Nigeria (Remote)',
    period: '2021 - 2024',
    description: 'Spearheaded development of digital infrastructure for neuroscience research across Africa.',
    projects: [
      {
        name: 'ABDN Platform',
        description: 'Comprehensive platform for neuroscience research collaboration.',
        technologies: ['Next.js', 'Appwrite', 'Ant Design'],
        achievements: [
          'Implemented FAIR principles in data management',
          'Developed participant evaluation system',
          'Created mobile application for network participants'
        ]
      },
      {
        name: 'Research Data Portal',
        description: 'Centralized system for managing research data.',
        technologies: ['React.js', 'Node.js', 'MongoDB'],
        achievements: [
          'Built secure data sharing infrastructure',
          'Implemented advanced search and filtering',
          'Developed automated data validation system'
        ]
      }
    ]
  }
];

export default function Experience() {
  return (
    <div className="mx-auto space-y-12">
      <div className="flex items-center gap-3 mb-10">
        <FaBriefcase className="text-3xl text-gray-700" />
        <h1 className="text-3xl font-bold text-gray-800">Experience</h1>
      </div>

      <div className="space-y-12">
        {experience.map((job, index) => (
          <div key={index} className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <FaUsers className="text-4xl text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
                  </div>
                  <p className="text-xl text-blue-600 mt-2">{job.company}</p>
                  <p className="text-xl text-gray-600">{job.location}</p>
                </div>
                <span className="text-xl text-gray-600">{job.period}</span>
              </div>
              <p className="text-xl text-gray-600 mb-4">{job.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {job.projects.map((project, projectIndex) => (
                <div key={projectIndex} className="bg-white rounded-lg shadow-sm p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <FaCode className="text-4xl text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-800">{project.name}</h3>
                  </div>
                  <p className="text-xl text-gray-600 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-50 text-blue-800 px-6 py-3 rounded-full text-xl font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <p className="text-xl text-gray-600">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 