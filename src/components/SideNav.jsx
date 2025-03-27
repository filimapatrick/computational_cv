'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaUser, FaFlask, FaTools, FaBriefcase, FaGraduationCap, FaBook, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

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
  { icon: FaLinkedin, href: 'https://linkedin.com' },
  { icon: FaPhone, href: 'tel:+2348104125890' },
  { icon: FaMapMarkerAlt, href: '#' },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex w-72 bg-white min-h-screen flex-col items-center py-8 px-4">
      <div className="text-center mb-8">
        <div className="w-40 h-40 relative rounded-full overflow-hidden mx-auto mb-6 border-4 border-blue-100">
          <Image
            src="/patrick.jpeg"
            alt="Filima Patrick"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">FILIMA PATRICK</h1>
        <p className="text-blue-600 text-lg">Neuroscientist & Developer</p>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-blue-500 hover:text-blue-600 transition-colors"
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
              className={`flex items-center gap-4 px-6 py-3 rounded-lg transition-colors w-full ${
                isActive
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-blue-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
} 