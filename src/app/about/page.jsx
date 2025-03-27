import { FaUser, FaBrain, FaCode, FaGraduationCap } from 'react-icons/fa';

export default function About() {
  return (
    <div className="mx-auto space-y-12">
      <div className="flex items-center gap-3 mb-10">
        <FaUser className="text-3xl text-gray-700" />
        <h1 className="text-3xl font-bold text-gray-800">About Me</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FaBrain className="text-4xl text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">Professional Overview</h2>
            </div>
            <p className="text-xl text-gray-600">
              I am a unique blend of a Neuroscientist and Software Developer, holding an M.Sc. in Neuroscience 
              while working as a Lead Developer. My passion lies in bridging the gap between neuroscience research 
              and technology, developing innovative solutions that advance our understanding of the brain and make 
              scientific tools more accessible to researchers.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <FaCode className="text-4xl text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">Technical Expertise</h2>
            </div>
            <p className="text-xl text-gray-600">
              With over 3 years of experience in software development, I specialize in building web and mobile applications 
              using modern technologies. My focus areas include React.js, Next.js, and React Native, complemented by 
              expertise in backend technologies and cloud services. I have a particular interest in developing scientific 
              applications and research tools.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <FaGraduationCap className="text-4xl text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">Research Interests</h2>
            </div>
            <p className="text-xl text-gray-600">
              My research focuses on understanding structural brain changes in neurodegenerative diseases, particularly 
              in the Nigerian population. I utilize advanced neuroimaging techniques and computational methods to analyze 
              brain data, while also developing software tools to facilitate neuroscience research across Africa.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Achievements</h2>
        <div className="space-y-4">
          {[
            'Led development of multiple high-impact web and mobile applications at Lizard Global',
            'Spearheading digital infrastructure development for African Brain Data Network',
            'Contributing to understanding of neurodegenerative diseases in African populations',
            'Developing innovative tools for neuroscience research and data analysis'
          ].map((achievement, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <p className="text-xl text-gray-600">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 