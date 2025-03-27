import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Aposto Admin Platform',
    description: 'A comprehensive admin platform for event staff scheduling and knowledge transfer, enhancing event-day communication and operational efficiency.',
    image: '/placeholder-project.jpg',
    tags: ['React.js', 'Next.js', 'Firebase', 'Material UI'],
    company: 'Lizard Global',
    link: '#'
  },
  {
    title: 'Flexpackerz Mobile App',
    description: 'Cross-platform mobile application enabling flex workers to discover and connect with nearby co-working spaces, featuring location-based services.',
    image: '/placeholder-project.jpg',
    tags: ['React Native', 'Firebase', 'Location Services'],
    company: 'Lizard Global',
    link: '#'
  },
  {
    title: 'Lizard Global Website',
    description: 'Modern, responsive company website built with Next.js and Firebase, featuring optimized performance and enhanced SEO capabilities.',
    image: '/placeholder-project.jpg',
    tags: ['Next.js', 'Tailwind CSS', 'Firebase'],
    company: 'Lizard Global',
    link: '#'
  },
  {
    title: 'ABDN Evaluation Platform',
    description: 'Participant evaluation platform for ABDN programs, facilitating assessment and feedback for neuroscience initiatives across Africa.',
    image: '/placeholder-project.jpg',
    tags: ['Next.js', 'Appwrite', 'Ant Design'],
    company: 'African Brain Data Network',
    link: '#'
  },
];

export default function Projects() {
  return (
    <div className=" mx-auto">
      <h1 className="text-4xl font-bold mb-8">Featured Projects</h1>
      
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-blue-600 text-sm mb-3">{project.company}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.link}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span>Live Demo</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>Source Code</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 