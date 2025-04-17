'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaUser, FaFlask, FaTools, FaBriefcase, FaGraduationCap, FaBook, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhone, FaGithub } from 'react-icons/fa';

export const navItems = [
  { name: 'About Me', path: '/about', icon: FaUser },
  { name: 'Research', path: '/research', icon: FaFlask },
  { name: 'Skills', path: '/skills', icon: FaTools },
  { name: 'Experience', path: '/experience', icon: FaBriefcase },
  { name: 'Education', path: '/education', icon: FaGraduationCap },
  { name: 'Publications', path: '/publications', icon: FaBook },
];

export const contactLinks = [
  { icon: FaEnvelope, href: 'mailto:filimapatrick@gmail.com' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/patrick-filima-91450817b/' },
  { icon: FaPhone, href: 'tel:+2348104125890' },
  { icon: FaGithub, href: 'https://github.com/filimapatrick' },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex w-72 min-h-screen flex-col items-center py-8 px-4 relative">
      {/* Glassmorphic Background */}
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-lg border-r border-white/10" />
      
      {/* Content Container */}
      <div className="relative z-10 w-full">
        <Link href="/" className="text-center mb-8 block group">
          <div className="w-40 h-40 relative rounded-full overflow-hidden mx-auto mb-6 border-4 border-white/20 group-hover:border-white/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm" />
            <Image
              src="/patrick.jpeg"
              alt="Filima Patrick"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">FILIMA PATRICK</h1>
          <p className="text-blue-400 text-lg">Neuroscientist & Developer</p>
        </Link>

        <div className="flex justify-center gap-4 mb-4">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-blue-400 hover:text-blue-300 transition-colors p-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        
        <div className="w-full space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-4 px-6 py-3 rounded-lg transition-all duration-300 w-full ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-white/20'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white border border-transparent hover:border-white/10'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-400' : 'text-gray-400'}`} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
} 