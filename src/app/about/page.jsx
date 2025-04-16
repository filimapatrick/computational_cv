'use client';

import { FaUser, FaMapMarkerAlt, FaBrain, FaCode, FaGraduationCap, FaFlask } from 'react-icons/fa';
import { motion } from 'framer-motion';

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

export default function About() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      className="mx-auto space-y-12"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <FaUser className="text-3xl text-blue-400" />
        <h1 className="text-3xl font-bold text-white">About Me</h1>
      </div>

      {/* Introduction */}
      <motion.div 
        variants={fadeInUp}
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 border border-gray-700"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Professional Overview</h2>
        <p className="text-lg text-gray-300 mb-6">
          Patrick Filima is a unique blend of a Neuroscientist and Full Stack Developer, holding an M.Sc. in Neuroscience while working as a Lead Developer at African Brain Data Network. His passion lies in bridging the gap between neuroscience research and technology, developing innovative solutions that advance our understanding of the brain and make scientific tools more accessible to researchers.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          With over 3 years of experience in software development and neuroimaging research, Patrick specializes in building web and mobile applications using modern technologies. His focus areas include React.js, Next.js, and React Native, complemented by a deep understanding of neuroscience and brain imaging analysis.
        </p>
        <div className="flex items-center gap-2 text-lg text-gray-300">
          <FaMapMarkerAlt className="text-blue-400" />
          <span>Port Harcourt, Nigeria</span>
        </div>
      </motion.div>

      {/* Areas of Focus */}
      <motion.div variants={staggerContainer}>
        <h2 className="text-2xl font-bold text-white mb-6">Areas of Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            variants={fadeInUp}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 border border-gray-700"
          >
            <FaBrain className="text-4xl text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Neuroscience Research</h3>
            <p className="text-lg text-gray-300">
              Specializing in advanced brain imaging analysis, focusing on neurodegenerative diseases and structural brain changes. My research contributes to understanding brain disorders and developing better diagnostic tools.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 border border-gray-700"
          >
            <FaCode className="text-4xl text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Software Development</h3>
            <p className="text-lg text-gray-300">
              Creating modern web and mobile applications using cutting-edge technologies. I specialize in building research tools and applications that bridge the gap between scientific research and practical applications.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Career Highlights */}
      <motion.div variants={staggerContainer}>
        <h2 className="text-2xl font-bold text-white mb-6">Career Highlights</h2>
        <div className="space-y-6">
          <motion.div 
            variants={fadeInUp}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 border border-gray-700"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaGraduationCap className="text-3xl text-blue-400" />
              <h3 className="text-xl font-bold text-white">Academic Excellence</h3>
            </div>
            <p className="text-lg text-gray-300">
              Completed M.Sc. in Neuroscience, contributing to groundbreaking research in brain imaging analysis and neurodegenerative diseases.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 border border-gray-700"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaFlask className="text-3xl text-blue-400" />
              <h3 className="text-xl font-bold text-white">Research Impact</h3>
            </div>
            <p className="text-lg text-gray-300">
              Published peer-reviewed papers in prestigious journals, focusing on brain structure analysis and innovative neuroimaging techniques.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 border border-gray-700"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaCode className="text-3xl text-blue-400" />
              <h3 className="text-xl font-bold text-white">Technical Innovation</h3>
            </div>
            <p className="text-lg text-gray-300">
              Building modern web applications and exploring the development of research tools, combining expertise in neuroscience with software development to create solutions that enhance research capabilities.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Personal Statement */}
      <motion.div 
        variants={fadeInUp}
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 border border-gray-700"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Vision & Goals</h2>
        <p className="text-lg text-gray-300">
          My goal is to continue pushing the boundaries of neuroscience research through technological innovation. I am passionate about developing tools and applications that make complex neuroimaging analysis more accessible and efficient, while contributing to our understanding of the human brain.
        </p>
      </motion.div>
    </motion.div>
  );
}