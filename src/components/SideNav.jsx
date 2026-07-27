'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  FaHome,
  FaUser,
  FaRocket,
  FaBriefcase,
  FaGraduationCap,
  FaFlask,
  FaBook,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTools,
  FaMoon,
  FaThLarge
} from 'react-icons/fa';

export const navItems = [
  { name: 'Home', path: '/', icon: FaHome },
  { name: 'About', path: '/about', icon: FaUser },
  { name: 'Experience', path: '/experience', icon: FaBriefcase },
  { name: 'Research', path: '/research', icon: FaFlask },
  { name: 'Publications', path: '/publications', icon: FaBook },
  { name: 'Contact', path: '/contact', icon: FaEnvelope },
];

export const contactLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/patrick-filima-91450817b/', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/filimapatrick', label: 'GitHub' },
  { icon: FaEnvelope, href: 'mailto:filimapatrick@gmail.com', label: 'Email' }
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="flex w-full h-screen flex-col justify-between py-5 px-3 lg:px-4 relative">
      {/* Floating Dark Glass Sidebar Container */}
      <div className="absolute inset-2 rounded-[28px] bg-[#070B18]/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between p-5 overflow-y-auto">

        {/* Top Profile Header */}
        <div>
          <Link href="/" className="text-center block group mb-6">
            <div className="w-24 h-24 relative rounded-full mx-auto mb-3 p-1 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 shadow-xl shadow-blue-500/30">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-[#070B18]">
                <Image
                  src="/patrick.jpeg"
                  alt="Filima Patrick"
                  fill
                  sizes="96px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              {/* Online indicator dot */}
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 border-2 border-[#070B18] rounded-full shadow-md animate-pulse" />
            </div>

            <h1 className="text-lg font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
              Filima Patrick
            </h1>
            <div className="text-[11px] font-medium mt-1 leading-tight space-y-0.5">
              <p className="text-cyan-400">Research Software Engineer</p>
              <p className="text-purple-400">Technical Product Lead</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                    }`}
                >
                  <item.icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom Social & Dark Mode Toggle */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <div className="space-y-2.5">
            <a
              href="https://www.linkedin.com/in/patrick-filima-91450817b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xs font-medium text-gray-400 hover:text-cyan-300 transition-colors px-2 py-1"
            >
              <FaLinkedin className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/filimapatrick"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xs font-medium text-gray-400 hover:text-cyan-300 transition-colors px-2 py-1"
            >
              <FaGithub className="w-4 h-4 text-purple-400" />
              <span>GitHub</span>
            </a>

            <a
              href="mailto:filimapatrick@gmail.com"
              className="flex items-center gap-3 text-xs font-medium text-gray-400 hover:text-cyan-300 transition-colors px-2 py-1"
            >
              <FaEnvelope className="w-4 h-4 text-cyan-400" />
              <span>Email Me</span>
            </a>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-medium text-gray-300">
            <div className="flex items-center gap-2">
              <FaMoon className="text-cyan-400 text-sm" />
              <span>Dark Mode</span>
            </div>
            {/* Toggle Switch */}
            <div className="w-10 h-5 bg-blue-600 rounded-full p-0.5 flex items-center justify-end shadow-inner">
              <div className="w-4 h-4 bg-white rounded-full shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}