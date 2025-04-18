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
        name: 'Brainlife Hub',
        description: 'Organizational dashboard for managing and analyzing projects and processes on Brainlife platform.',
        technologies: ['React.js', 'Next.js', 'AI Integration', 'Analytics'],
        achievements: [
          'Developed comprehensive organization-level project management dashboard',
          // 'Integrated AI capabilities for process analysis and interpretation',
          'Implemented real-time activity monitoring and visualization for organizational neuroimaging projects'
        ]
      },
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
    title: 'Full Stack Developer',
    company: 'Lighthouse Counselling Hub',
    location: 'Remote',
    period: '2024 - 2025',
    description: 'Led the development of a comprehensive counselling platform and admin dashboard, enabling seamless therapy session bookings and platform management.',
    projects: [
      {
        name: 'Counselling Platform',
        description: 'Full-featured counselling website with therapy session booking capabilities.',
        technologies: ['Next.js', 'React', 'SEO Optimization', 'Booking System'],
        achievements: [
          'Developed complete end-to-end therapy session booking platform',
          'Implemented comprehensive SEO optimization for improved visibility',
          'Created user-friendly interface for therapy session scheduling'
        ]
      },
      {
        name: 'Admin Dashboard',
        description: 'Comprehensive admin dashboard for monitoring and managing platform activities.',
        technologies: ['React', 'Analytics Integration', 'Real-time Monitoring'],
        achievements: [
          'Built real-time activity monitoring system',
          'Implemented analytics dashboard for tracking platform metrics',
          'Developed administrative tools for content and user management'
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
        name: 'Awardwining App',
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
        technologies: ['Next.js', 'Firebase', 'FAIR Principles'],
        achievements: [
          'Maintained legacy site and developed new site with Next.js and firebase based on FAIR principles',
          'Built an admin dashboard for managing content, users, and resources',
          'Developed evaluator scoring platform for 2024 ABDN program participants',
          'Created admin interface for managing 2024 ABDN program submissions and evaluation process',
          'Developed an evaluator platform for EEG programs to facilitate assessment and scoring',
          'Created a dedicated admin platform for managing EEG program evaluations, results, and participant data',
          'Developed mobile platform for African neuroscience collaboration'
        ]
      }
    ]
  }
];

export default function Experience() {
  return (
    <div className="mx-auto space-y-16">
      <div className="flex items-center gap-3 mb-10">
        <FaBriefcase className="text-3xl text-blue-400" />
        <h1 className="text-3xl font-bold text-white">Experience</h1>
      </div>

      <div className="space-y-12">
        {experience.map((job, index) => (
          <div key={index} className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 border border-gray-700 hover:border-blue-400 transition-colors duration-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <FaUsers className="text-3xl text-blue-400" />
                    <h2 className="text-xl font-bold text-white">{job.title}</h2>
                  </div>
                  <p className="text-lg text-blue-400 mt-2">{job.company}</p>
                  <p className="text-lg text-gray-300">{job.location}</p>
                </div>
                <span className="text-lg text-gray-300">{job.period}</span>
              </div>
              <p className="text-lg text-gray-300 mb-4">{job.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {job.projects.map((project, projectIndex) => (
                <div key={projectIndex} className="bg-gradient-to-br from-gray-800/50 to-gray-900 rounded-lg shadow-lg p-8 border border-gray-800 hover:border-blue-400 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <FaCode className="text-3xl text-blue-400" />
                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                  </div>
                  <p className="text-lg text-gray-300 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-900/20 text-blue-300 px-4 py-2 rounded-lg text-lg font-medium border border-blue-800/30 hover:bg-blue-900/30 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center gap-3 group">
                        <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:scale-125 transition-transform duration-200"></div>
                        <p className="text-lg text-gray-300 group-hover:text-blue-300 transition-colors duration-200">{achievement}</p>
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