import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Home() {
  return (
    <div className=" mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="w-48 h-48 relative rounded-full overflow-hidden">
          <Image
            src="/patrick.jpeg"
            alt="Filima Patrick"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">FILIMA PATRICK</h1>
          <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
            <a href="tel:+2348104125890" className="flex items-center gap-2">
              <FaPhone className="text-blue-600" />
              +2348104125890
            </a>
            <a href="mailto:filimapatrick@gmail.com" className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600" />
              filimapatrick@gmail.com
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FaLinkedin className="text-blue-600" />
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FaGithub className="text-blue-600" />
              GitHub
            </a>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            Results-driven React.js and React Native developer with expertise in building high-quality, user-centric web and mobile applications. Experienced in leveraging modern frameworks like Next.js and Firebase to deliver scalable, maintainable solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Frontend Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'Firebase', 'Strapi', 'OneSignal'].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-2">UI/UX Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Sass', 'Ant Design', 'Material UI'].map((skill) => (
                  <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Development Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Agile', 'ClickUp'].map((skill) => (
                  <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Latest Experience</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-medium">React Developer</h3>
              <p className="text-sm text-gray-600">Lizard Global • 2022-2024</p>
              <p className="text-sm text-gray-600 mt-2">
                Developed robust admin platforms, mobile applications, and award-winning web solutions using React.js, Next.js, and modern frameworks.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-medium">Lead Developer</h3>
              <p className="text-sm text-gray-600">African Brain Data Network • 2021-2024</p>
              <p className="text-sm text-gray-600 mt-2">
                Led development of websites and evaluation platforms using Next.js and Appwrite, focusing on FAIR principles and network participant engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 