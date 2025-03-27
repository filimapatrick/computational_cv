import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaUser, FaBriefcase, FaGraduationCap, FaFlask, FaTools, FaBook, FaEnvelope } from 'react-icons/fa';

const navItems = [
  { name: 'Home', path: '/', icon: FaHome },
  { name: 'About', path: '/about', icon: FaUser },
  { name: 'Experience', path: '/experience', icon: FaBriefcase },
  { name: 'Education', path: '/education', icon: FaGraduationCap },
  { name: 'Research', path: '/research', icon: FaFlask },
  { name: 'Skills', path: '/skills', icon: FaTools },
  { name: 'Publications', path: '/publications', icon: FaBook },
  { name: 'Contact', path: '/contact', icon: FaEnvelope }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-white h-screen w-64 fixed left-0 top-0 border-r border-gray-200 p-8">
      <div className="flex flex-col h-full">
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-gray-800">Patrick Lima</h1>
          <p className="text-xl text-blue-600">Software Developer</p>
          <p className="text-xl text-gray-600">Neuroscientist</p>
        </div>

        <nav className="flex-grow">
          <ul className="space-y-6">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`flex items-center gap-3 text-xl font-medium p-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="text-2xl" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto">
          <div className="flex flex-col space-y-3">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-600 hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-600 hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-gray-600 hover:text-blue-600 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
} 