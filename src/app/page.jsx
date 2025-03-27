'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaBrain, FaCode, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="mx-auto space-y-16"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12">
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <motion.div 
          variants={staggerContainer}
          className="relative flex flex-col lg:flex-row items-center gap-12"
        >
          <motion.div variants={fadeInUp} className="lg:w-2/3">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Bridging Neuroscience & Technology
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Neuroscientist & Full Stack Developer specializing in brain imaging analysis and modern web development. Creating innovative solutions at the intersection of neuroscience and technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/research"
                className="inline-block bg-blue-500 bg-opacity-20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-30 transition-colors"
              >
                View Research
              </Link>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            className="lg:w-1/3 aspect-square relative"
          >
            <div className="w-64 h-64 lg:w-80 lg:h-80 relative rounded-full overflow-hidden border-4 border-white/20">
              <Image
                src="/patrick.jpeg"
                alt="Filima Patrick"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Expertise Areas */}
      <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: FaBrain,
            title: 'Neuroscience',
            description: 'Advanced brain imaging analysis and research in neurodegenerative diseases',
            color: 'blue'
          },
          {
            icon: FaCode,
            title: 'Web Development',
            description: 'Modern web applications using React, Next.js, and cutting-edge frameworks',
            color: 'purple'
          },
          {
            icon: FaMobileAlt,
            title: 'Mobile Development',
            description: 'Cross-platform mobile applications with React Native',
            color: 'pink'
          },
          {
            icon: FaDatabase,
            title: 'Data Analysis',
            description: 'Scientific computing and data analysis for research applications',
            color: 'green'
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100/30 p-8 rounded-2xl border border-${item.color}-100`}
          >
            <item.icon className={`text-4xl text-${item.color}-500 mb-4`} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Section */}
      <motion.div variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Technical Expertise</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Development Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'Node.js', 'Python', 'Firebase', 'Strapi'].map((skill) => (
                  <span key={skill} className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">UI Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['Tailwind CSS', 'Ant Design', 'Material UI', 'Framer Motion'].map((skill) => (
                  <span key={skill} className="bg-purple-50 text-purple-600 px-4 py-2 rounded-xl text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Research Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['FSL', 'FreeSurfer', 'brainlife.io', 'Statistical Analysis'].map((skill) => (
                  <span key={skill} className="bg-green-50 text-green-600 px-4 py-2 rounded-xl text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Projects</h2>
          <div className="space-y-6">
            <div className="group hover:bg-blue-50 p-4 rounded-xl transition-colors">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Error Monitoring System</h3>
              <p className="text-gray-600 mt-2">
                Developing a comprehensive error monitoring system for neuroimaging pipelines at Brainlife.io
              </p>
            </div>
            <div className="group hover:bg-blue-50 p-4 rounded-xl transition-colors">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Dicompare App</h3>
              <p className="text-gray-600 mt-2">
                Building a tool for MRI protocol standardization and comparison across different scanning sites
              </p>
            </div>
            <div className="group hover:bg-blue-50 p-4 rounded-xl transition-colors">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">Awardwining App</h3>
              <p className="text-gray-600 mt-2">
                Designed and implemented an award-winning web application using Next.js and Strapi
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Contact Section */}
      <motion.div 
        variants={fadeInUp}
        className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl text-center"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Let's Connect</h2>
        <p className="text-gray-600 mb-6">Interested in collaboration or have a project in mind?</p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:filimapatrick@gmail.com"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaEnvelope className="text-xl" />
            <span>Email</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin className="text-xl" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
} 